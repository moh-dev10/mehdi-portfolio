import { ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="hero" className="section border-b border-border pt-28 pb-20">
      <div className="wrap">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Main Editorial Narrative */}
          <Reveal delay={0} duration={450} y={12}>
            <div className="mono text-xs uppercase tracking-[0.18em] text-olive">
              USTHB, Algiers — Data Science (L2)
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Mehdi.
              <span className="block font-normal text-muted">
                Data Science student studying analytical pipelines and statistical modelling.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
              I am a second-year undergraduate in the Data Science program at USTHB. My work focuses on working through the messy realities of real data — exploratory analysis, data cleaning in Python, SQL querying, and evaluating machine learning algorithms with proper validation discipline.
            </p>

            {/* Direct action links */}
            <div className="mt-9 flex flex-wrap items-center gap-4 text-xs font-medium">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-[4px] bg-olive px-4 py-2.5 text-[#10110F] font-semibold transition-colors hover:bg-olive-hover"
              >
                <span>View Projects</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="#case"
                className="inline-flex items-center gap-2 rounded-[4px] border border-border bg-surface px-4 py-2.5 text-foreground transition-colors hover:border-border-strong hover:bg-surface-2"
              >
                <span>Case Study</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-muted transition-colors hover:text-foreground"
              >
                <span>Get in touch</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

          {/* Academic & Curriculum Index Card (Swiss / Tabular Record) */}
          <Reveal delay={90} duration={500} y={14}>
            <div className="rounded-[4px] border border-border bg-surface p-6 sm:p-7">
              <div className="border-b border-border pb-4">
                <span className="mono text-[11px] uppercase tracking-wider text-olive">
                  Curriculum & Working Focus
                </span>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  Academic Index · Second Year Undergraduate
                </p>
              </div>

              <dl className="mt-4 divide-y divide-border text-xs">
                <div className="flex justify-between py-2.5">
                  <dt className="mono text-muted-2">Institution</dt>
                  <dd className="font-medium text-foreground">USTHB, Algiers</dd>
                </div>

                <div className="flex justify-between py-2.5">
                  <dt className="mono text-muted-2">Program</dt>
                  <dd className="font-medium text-foreground">Licence Data Science (L2)</dd>
                </div>

                <div className="flex justify-between py-2.5">
                  <dt className="mono text-muted-2">Baccalauréat</dt>
                  <dd className="font-medium text-foreground">2025</dd>
                </div>

                <div className="flex justify-between py-2.5">
                  <dt className="mono text-muted-2">Current Coursework</dt>
                  <dd className="text-right font-medium text-foreground">
                    Inference, Linear Algebra, SQL, ML
                  </dd>
                </div>

                <div className="flex justify-between py-2.5">
                  <dt className="mono text-muted-2">Working Environment</dt>
                  <dd className="font-medium text-foreground">Python 3 · Jupyter · Git</dd>
                </div>

                <div className="flex justify-between py-2.5">
                  <dt className="mono text-muted-2">Active Libraries</dt>
                  <dd className="font-medium text-foreground">Pandas · NumPy · Scikit-learn</dd>
                </div>

                <div className="flex justify-between py-2.5">
                  <dt className="mono text-muted-2">Portfolio</dt>
                  <dd className="font-medium text-foreground">4 documented projects</dd>
                </div>

                <div className="flex justify-between py-2.5">
                  <dt className="mono text-muted-2">Status</dt>
                  <dd className="flex items-center gap-1.5 font-medium text-olive">
                    <span className="size-1.5 rounded-full bg-olive" />
                    Seeking summer student internships
                  </dd>
                </div>
              </dl>

              <div className="mt-5 border-t border-border pt-4">
                <p className="text-[11px] leading-relaxed text-muted-2 italic">
                  &ldquo;Focusing on understanding data distributions and sound validation before increasing model complexity.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}