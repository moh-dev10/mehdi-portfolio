import { projects as localProjects } from "@/app/data/projects";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { ProjectRecord, ProjectDbRow } from "@/lib/supabase/types";

/**
 * Normalizes either database snake_case or local camelCase records to ProjectRecord.
 * Ensures UI components (like ProjectCard) consistently receive githubUrl and demoUrl.
 */
function normalizeProject(item: Partial<ProjectRecord> & Partial<ProjectDbRow>): ProjectRecord {
  return {
    id: Number(item.id),
    title: item.title || "",
    slug: item.slug || "",
    description: item.description || "",
    category: item.category || "",
    image: item.image || "",
    tags: Array.isArray(item.tags) ? item.tags : [],
    githubUrl: item.githubUrl || item.github_url || "#",
    demoUrl: item.demoUrl ?? item.demo_url ?? null,
    featured: Boolean(item.featured),
    sort_order: item.sort_order,
    created_at: item.created_at,
  };
}

/**
 * Data access layer for portfolio projects.
 * Preserves the exact 4 existing projects as canonical source of truth until Supabase is verified.
 */
export async function getProjects(): Promise<ProjectRecord[]> {
  try {
    const supabase = await getSupabaseServerClient();

    if (!supabase) {
      return (localProjects as unknown as (Partial<ProjectRecord> & Partial<ProjectDbRow>)[]).map(normalizeProject);
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      if (error) {
        console.warn("[ProjectsRepository] Falling back to local data:", error.message);
      }
      return (localProjects as unknown as (Partial<ProjectRecord> & Partial<ProjectDbRow>)[]).map(normalizeProject);
    }

    return (data as unknown as (Partial<ProjectRecord> & Partial<ProjectDbRow>)[]).map(normalizeProject);
  } catch (err) {
    console.warn("[ProjectsRepository] Unexpected error, returning local projects:", err);
    return (localProjects as unknown as (Partial<ProjectRecord> & Partial<ProjectDbRow>)[]).map(normalizeProject);
  }
}

export async function getProjectBySlug(slug: string): Promise<ProjectRecord | null> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug) || null;
}
