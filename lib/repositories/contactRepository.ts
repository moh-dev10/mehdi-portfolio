import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

export interface ContactSubmissionPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  configured: boolean;
  errors?: ContactValidationErrors;
  error?: string;
  message?: string;
}

/**
 * Validates message inputs on the server.
 */
export function validateContactPayload(data: ContactSubmissionPayload): {
  isValid: boolean;
  errors: ContactValidationErrors;
  cleanData?: ContactSubmissionPayload;
} {
  const errors: ContactValidationErrors = {};
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (!name || name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 100) {
    errors.name = "Name cannot exceed 100 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
 * Processes a contact message submission.
 * Strictly adheres to honesty: never simulates a database insertion when Supabase is not configured.
 */
export async function submitContactMessage(
  payload: ContactSubmissionPayload
): Promise<ContactSubmissionResult> {
  const validation = validateContactPayload(payload);
  if (!validation.isValid || !validation.cleanData) {
    return {
      success: false,
      configured: isSupabaseServerConfigured(),
      errors: validation.errors,
      error: "Please correct the highlighted form errors.",
    };
  }

  const configured = isSupabaseServerConfigured();

  if (!configured) {
    return {
      success: false,
      configured: false,
      error:
        "Supabase is not configured (missing NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY). Messages cannot be saved to the database. Please use direct email instead.",
    };
  }

  try {
    const supabase = await getSupabaseServerClient();
    if (!supabase) {
      return {
        success: false,
        configured: false,
        error: "Supabase client initialization failed. Please use direct email.",
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
