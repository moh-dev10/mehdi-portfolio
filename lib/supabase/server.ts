import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * Checks whether Supabase server-side environment variables are present and valid.
 */
export function isSupabaseServerConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

  return Boolean(
    url &&
      anonKey &&
      url !== "https://your-project-ref.supabase.co" &&
      anonKey !== "your-anon-or-publishable-key" &&
      url.startsWith("http")
  );
}

/**
 * Creates an authenticated or anon server-side Supabase client using Next.js cookies.
 * Returns null if Supabase environment variables are missing, ensuring clean fallback behavior.
 */
export async function getSupabaseServerClient(): Promise<SupabaseClient<Database> | null> {
  if (!isSupabaseServerConfigured()) {
    return null;
  }

  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL)!;
  const anonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY)!;

  try {
    const cookieStore = await cookies();

    return createServerClient<Database>(url, anonKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing user sessions.
          }
        },
      },
    });
  } catch (err) {
    console.warn("[Supabase Server] Error initializing server client:", err);
    return null;
  }
}
