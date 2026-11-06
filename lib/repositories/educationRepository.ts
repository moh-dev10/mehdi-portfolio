import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { EducationRecord } from "@/lib/supabase/types";

/**
 * Canonical local education data reflecting verified academic background:
 * - Baccalauréat: 2025 (no invented grades or honors)
 * - Current studies: Second-year Data Science student at USTHB (2025 — Present)
 */
export const localEducation: EducationRecord[] = [
  {
    id: 1,
    period: "2025 — Present",
    qualification: "Licence in Data Science (Year 2)",
    institution: "USTHB — Université des Sciences et de la Technologie Houari Boumediene",
    location: "Bab Ezzouar, Algiers",
    description:
      "Undergraduate curriculum covering foundational probability theory, mathematical statistics, linear algebra, algorithms, data structures, relational database systems (SQL), and introductory machine learning.",
    coursework: ["Probability & Statistics", "Linear Algebra", "SQL & Databases", "Data Structures", "Python & Scikit-learn"],
    sort_order: 1,
  },
  {
    id: 2,
    period: "2025",
    qualification: "Baccalauréat",
    institution: "Secondary Education",
    location: "Algiers, Algeria",
    description:
      "Completed secondary education and obtained the Baccalauréat diploma, providing core preparation in mathematics and physical sciences for undergraduate studies in Data Science.",
    coursework: ["Mathematics", "Physical Sciences"],
    sort_order: 2,
  },
  {
    id: 3,
    period: "Ongoing",
    qualification: "Independent Study & Practical Projects",
    institution: "Self-Directed Learning",
    location: "Algiers, Algeria",
    description:
      "Practicing foundational data manipulation, exploratory data analysis, and introductory modeling through documented Python notebooks and open datasets.",
    coursework: ["Data Cleaning", "Exploratory Pipelines", "Jupyter Notebooks"],
    sort_order: 3,
  },
];

export async function getEducation(): Promise<EducationRecord[]> {
  try {
    const supabase = await getSupabaseServerClient();

    if (!supabase) {
      return localEducation;
    }

    const { data, error } = await supabase
      .from("education")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      if (error) {
        console.warn("[EducationRepository] Falling back to local data:", error.message);
      }
      return localEducation;
    }

    return data as EducationRecord[];
  } catch (err) {
    console.warn("[EducationRepository] Unexpected error, returning local education:", err);
    return localEducation;
  }
}
