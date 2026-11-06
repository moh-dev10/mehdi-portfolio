import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { ProfileRecord } from "@/lib/supabase/types";

export const localProfile: ProfileRecord = {
  id: "mehdi-usthb",
  full_name: "Mehdi",
  headline: "Data Science student studying analytical pipelines and statistical modelling.",
  bio: "I am a second-year undergraduate in the Data Science program at USTHB. My work focuses on working through the messy realities of real data — exploratory analysis, data cleaning in Python, SQL querying, and evaluating machine learning algorithms with proper validation discipline.",
  university: "USTHB — Université des Sciences et de la Technologie Houari Boumediene",
  faculty: "Faculty of Mathematics & Computer Science",
  academic_year: "Licence Data Science (L2)",
  bac_year: 2025,
  location: "Algiers, Algeria",
  status: "Seeking summer student internships",
  email: "mehdi.datasci@outlook.com",
  github_url: "https://github.com/",
  linkedin_url: "https://www.linkedin.com/",
};

export async function getProfile(): Promise<ProfileRecord> {
  try {
    const supabase = await getSupabaseServerClient();

    if (!supabase) {
      return localProfile;
    }

    const { data, error } = await supabase
      .from("profile")
      .select("*")
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      if (error) {
        console.warn("[ProfileRepository] Falling back to local profile:", error.message);
      }
      return localProfile;
    }

    return data as ProfileRecord;
  } catch (err) {
    console.warn("[ProfileRepository] Unexpected error, returning local profile:", err);
    return localProfile;
  }
}
