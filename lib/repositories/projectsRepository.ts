import { projects as localProjects } from "@/app/data/projects";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { ProjectRecord } from "@/lib/supabase/types";

/**
 * Data access layer for portfolio projects.
 * Preserves the exact 4 existing projects as source of truth until Supabase is verified.
 */
export async function getProjects(): Promise<ProjectRecord[]> {
  try {
    const supabase = await getSupabaseServerClient();

    if (!supabase) {
      return localProjects as ProjectRecord[];
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      if (error) {
        console.warn("[ProjectsRepository] Falling back to local data:", error.message);
      }
      return localProjects as ProjectRecord[];
    }

    return data as ProjectRecord[];
  } catch (err) {
    console.warn("[ProjectsRepository] Unexpected error, returning local projects:", err);
    return localProjects as ProjectRecord[];
  }
}

export async function getProjectBySlug(slug: string): Promise<ProjectRecord | null> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug) || null;
}
