import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { SkillCategoryRecord } from "@/lib/supabase/types";

export const localSkillCategories: SkillCategoryRecord[] = [
  {
    id: 1,
    category: "Languages & Core",
    items: [
      { name: "Python", status: "Primary tool", desc: "Data manipulation, scripts, notebook analysis" },
      { name: "SQL", status: "Academic study", desc: "Relational queries, joins, aggregations" },
    ],
    sort_order: 1,
  },
  {
    id: 2,
    category: "Data Analysis & ML",
    items: [
      { name: "Pandas & NumPy", status: "Frequent use", desc: "Data cleaning, reshaping, array operations" },
      { name: "Scikit-learn", status: "Active study", desc: "Regression, classification, CV workflows" },
      { name: "Matplotlib & Seaborn", status: "Frequent use", desc: "Exploratory plotting and statistical charts" },
    ],
    sort_order: 2,
  },
  {
    id: 3,
    category: "Mathematics & Statistics",
    items: [
      { name: "Probability & Inference", status: "L2 Curriculum", desc: "Distributions, hypothesis testing, estimators" },
      { name: "Linear Algebra", status: "L2 Curriculum", desc: "Matrix operations, eigenvalues, projections" },
    ],
    sort_order: 3,
  },
  {
    id: 4,
    category: "Environment & Tools",
    items: [
      { name: "Jupyter Notebooks", status: "Daily", desc: "Reproducible research and analysis" },
      { name: "Git & GitHub", status: "Practicing", desc: "Version control and project tracking" },
    ],
    sort_order: 4,
  },
];

export async function getSkillCategories(): Promise<SkillCategoryRecord[]> {
  try {
    const supabase = await getSupabaseServerClient();

    if (!supabase) {
      return localSkillCategories;
    }

    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      if (error) {
        console.warn("[SkillsRepository] Falling back to local skills:", error.message);
      }
      return localSkillCategories;
    }

    return data as SkillCategoryRecord[];
  } catch (err) {
    console.warn("[SkillsRepository] Unexpected error, returning local skills:", err);
    return localSkillCategories;
  }
}
