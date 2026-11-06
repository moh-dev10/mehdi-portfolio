import Reveal from "./Reveal";
import { getEducation } from "@/lib/repositories/educationRepository";

export default async function Education() {
  const education = await getEducation();

  return (
    <section id="education" className="section border-b border-border">
      <div className="wrap">
        {/* Section header */}
        <Reveal delay={0}>
          <div className="max-w-2xl">
            <div className="mono text-xs uppercase tracking-[0.18em] text-olive">
              05 / Education
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Academic timeline & coursework.
            </h2>

            <p className="mt-3 text-sm text-muted">
              Current undergraduate studies in Data Science at USTHB following completion of the Baccalauréat in 2025.
            </p>
          </div>
        </Reveal>

        {/* Chronological Record */}
        <div className="mt-12 divide-y divide-border border-t border-border">
          {education.map((item, index) => (
            <Reveal key={item.period + item.qualification} delay={index * 90} duration={550}>
              <div className="grid gap-4 py-8 lg:grid-cols-[220px_1fr]">
                <div>
                  <span className="mono text-xs text-olive font-medium">
                    {item.period}
                  </span>
                  <span className="block text-xs text-muted-2 mt-0.5">
                    {item.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.qualification}
                  </h3>

                  <p className="mt-0.5 text-xs text-muted-2">
                    {item.institution}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="mono rounded-[2px] border border-border bg-surface px-2 py-0.5 text-[11px] text-muted-2"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
