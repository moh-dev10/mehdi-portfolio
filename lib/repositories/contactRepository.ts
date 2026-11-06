import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

export interface ContactSubmissionPayload {
  name: string;
  email: string;
  message: string;
  bot_field?: string; // Honeypot field for bot detection
}

export interface ContactValidationErrors {
  name?: string;
  email?: string;
  message?: string;
  bot_field?: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  configured: boolean;
  errors?: ContactValidationErrors;
  error?: string;
  message?: string;
}

// In-memory sliding rate limiter: max 5 requests per 10-minute window per identifier
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

/**
 * Strips HTML tags and controls characters to prevent stored injection.
 */
function sanitizeText(input: string): string {
  return input
    .replace(/<[^>]*>?/gm, "")
    .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F]/g, "")
    .trim();
}

/**
 * Validates and sanitizes message inputs on the server.
 */
export function validateContactPayload(data: ContactSubmissionPayload): {
  isValid: boolean;
  errors: ContactValidationErrors;
  cleanData?: { name: string; email: string; message: string };
} {
  const errors: ContactValidationErrors = {};

  // Honeypot anti-spam check: if bot filled this hidden field, fail validation immediately
  if (data.bot_field && data.bot_field.trim().length > 0) {
    errors.bot_field = "Spam detection triggered.";
    return { isValid: false, errors };
  }

  const name = sanitizeText(data.name || "");
  const email = (data.email || "").trim().toLowerCase();
  const message = sanitizeText(data.message || "");

  if (!name || name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 100) {
    errors.name = "Name cannot exceed 100 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  } else if (email.length > 120) {
    errors.email = "Email cannot exceed 120 characters.";
  }

  if (!message || message.length < 5) {
    errors.message = "Message must be at least 5 characters.";
  } else if (message.length > 3000) {
    errors.message = "Message cannot exceed 3000 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    cleanData: { name, email, message },
  };
}

/**
 * Processes a contact message submission with server-side validation,
 * rate limiting, spam protection, and honest database persistence.
 */
export async function submitContactMessage(
  payload: ContactSubmissionPayload
): Promise<ContactSubmissionResult> {
  // 1. Validation & Honeypot Check
  const validation = validateContactPayload(payload);
  if (!validation.isValid || !validation.cleanData) {
    return {
      success: false,
      configured: isSupabaseServerConfigured(),
      errors: validation.errors,
      error: validation.errors.bot_field
        ? "Submission rejected."
        : "Please correct the highlighted form errors.",
    };
  }

  // 2. Sliding Window Rate Limiting (by email identifier)
  const rateLimitAllowed = checkRateLimit(validation.cleanData.email);
  if (!rateLimitAllowed) {
    return {
      success: false,
      configured: isSupabaseServerConfigured(),
      error: "Rate limit exceeded. Please wait a few minutes before sending another inquiry or use direct email.",
    };
  }

  // 3. Configuration Check
  const configured = isSupabaseServerConfigured();

  if (!configured) {
    return {
      success: false,
      configured: false,
      error:
        "Supabase is not configured (missing NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY). Messages cannot be saved to the database. Please use direct email instead.",
    };
  }

  // 4. Database Submission
  try {
    const supabase = await getSupabaseServerClient();
    if (!supabase) {
      return {
        success: false,
        configured: false,
        error: "Supabase client initialization returned null. Please use direct email.",
      };
    }

    const insertPayload: Database["public"]["Tables"]["contact_messages"]["Insert"] = {
      name: validation.cleanData.name,
      email: validation.cleanData.email,
      message: validation.cleanData.message,
    };

    const { error: insertError } = await (supabase.from("contact_messages") as any).insert([
      insertPayload,
    ]);

    if (insertError) {
      console.error("[ContactRepository] Insert failed:", insertError.message);
      return {
        success: false,
        configured: true,
        error: `Database error: ${insertError.message}. Please use direct email instead.`,
      };
    }

    return {
      success: true,
      configured: true,
      message: "Your message has been securely recorded in the database.",
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    console.error("[ContactRepository] Server error:", errorMsg);
    return {
      success: false,
      configured: true,
      error: "An unexpected server error occurred. Please use direct email.",
    };
  }
}
