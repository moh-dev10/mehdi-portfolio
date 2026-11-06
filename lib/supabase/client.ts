import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types";

let browserClient: SupabaseClient<Database> | null = null;

/**
 * Checks whether Supabase client environment variables are available.
 * Does not check connectivity, only credential availability.
 */
export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return Boolean(
    url &&
      anonKey &&
      url !== "https://your-project-ref.supabase.co" &&
      anonKey !== "your-anon-or-publishable-key" &&
      url.startsWith("http")
  );
}

/**
 * Returns a singleton browser Supabase client or null if unconfigured.
 * Prevents throwing errors when environment variables are omitted during build/development.
 */
export function getSupabaseBrowserClient(): SupabaseClient<Database> | null {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!browserClient) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    browserClient = createBrowserClient<Database>(url, anonKey);
  }

  return browserClient;
}
