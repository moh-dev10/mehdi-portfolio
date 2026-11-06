import RadarChart from "./RadarChart";
import Reveal from "./Reveal";
import { getSkillCategories } from "@/lib/repositories/skillsRepository";

const nextStudies = [
  { topic: "PyTorch", note: "Deep learning mathematical foundations" },
  { topic: "Docker", note: "Containerized environments for reproducibility" },
  { topic: "Streamlit", note: "Interactive prototypes for model demonstration" },
  { topic: "NLP", note: "Text preprocessing & tokenization techniques" },
];

export default async function Skills() {
  const skillMatrix = await getSkillCategories();

  return (
    <section id="skills" className="section border-b border-border">
      <div className="wrap">
        {/* Section header */}
        <Reveal delay={0}>
          <div className="max-w-2xl">
            <div className="mono text-xs uppercase tracking-[0.18em] text-olive">
              02 / Technical Matrix
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Working toolset & academic proficiencies.
            </h2>

            <p className="mt-3 text-sm text-muted">
              Organized by functional domain and current academic application rather than arbitrary scores.
            </p>
          </div>
        </Reveal>

        {/* 2-Column Layout */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left: Structured Matrix */}
          <Reveal delay={40}>
            <div className="space-y-8">
              {skillMatrix.map((group) => (
                <div key={group.category} className="border-t border-border pt-4">
                  <span className="mono text-[11px] uppercase tracking-wider text-muted-2">
                    {group.category}
                  </span>

                  <div className="mt-3 divide-y divide-border">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col justify-between py-2.5 sm:flex-row sm:items-baseline sm:gap-4"
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="text-sm font-medium text-foreground">
                            {item.name}
                          </span>
                          <span className="text-xs text-muted-2">
                            {item.desc}
                          </span>
                        </div>

                        <span className="mono mt-1 shrink-0 text-[11px] text-olive sm:mt-0">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: Radar balance & Study topics */}
          <Reveal delay={100}>
            <div className="space-y-10 lg:border-l lg:border-border lg:pl-10">
              {/* Minimal Radar Chart */}
              <div>
                <span className="mono text-[11px] uppercase tracking-wider text-muted-2">
                  Relative Balance · Academic Self-Assessment
                </span>
                <div className="mt-4 flex items-center justify-center rounded-[4px] border border-border bg-surface p-6">
                  <RadarChart />
                </div>
              </div>

              {/* Next Studies */}
              <div className="border-t border-border pt-6">
                <span className="mono text-[11px] uppercase tracking-wider text-muted-2">
                  Upcoming Academic Exploration
                </span>

                <div className="mt-4 space-y-3">
                  {nextStudies.map((study) => (
                    <div
                      key={study.topic}
                      className="flex items-baseline justify-between rounded-[4px] border border-border bg-surface px-3.5 py-2.5 text-xs"
                    >
                      <span className="font-medium text-foreground">
                        {study.topic}
                      </span>
                      <span className="mono text-muted-2">
                        {study.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}