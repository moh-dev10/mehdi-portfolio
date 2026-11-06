"use client";

import { useState } from "react";

const tabContent = {
  problem: {
    title: "Problem",
    lead: "Real estate listings across Algiers, Oran, and Constantine are published in wildly different formats, with prices sometimes per square metre and sometimes per unit, and with location described only as free text.",
    points: [
      {
        bold: "Inconsistent data.",
        text: "Same property described five different ways across platforms with unstandardized fields.",
      },
      {
        bold: "No market transparency.",
        text: "Buyers and small agencies have no trustworthy reference for a fair market price.",
      },
      {
        bold: "Strong location effect.",
        text: "Commune and distance to city centre drive most of the price variance.",
      },
    ],
  },
  approach: {
    title: "Approach",
    lead: "A fully reproducible pipeline built with Pandas and Scikit-learn, versioned from raw scrape to tuned model.",
    points: [
      {
        bold: "Data cleaning.",
        text: "De-duplicated listings, normalised currency units, and parsed unstructured French/Arabic location text.",
      },
      {
        bold: "Feature engineering.",
        text: "Surface area, rooms, floor, commune, distance to city centre, building age, and listing freshness — 12 features total.",
      },
      {
        bold: "Modelling & CV.",
        text: "Benchmarked 5 algorithms with 5-fold cross-validation, then tuned Gradient Boosting on RMSE.",
      },
      {
        bold: "Explainability.",
        text: "Calculated permutation feature importance to verify that the model learned realistic pricing drivers.",
      },
    ],
  },
  results: {
    title: "Results",
    lead: "The tuned Gradient Boosting model beat the linear baseline decisively and delivered an explainable valuation tool.",
    points: [
      {
        bold: "+28% R² gain",
        text: "Achieved an R² of 0.89 compared to 0.61 on the ordinary least-squares baseline.",
      },
      {
        bold: "Primary predictors:",
        text: "Usable surface area, commune density, and travel distance to the commercial hub.",
      },
      {
        bold: "Error reduced",
        text: "Median absolute error dropped to approximately 11% of listing valuation.",
      },
      {
        bold: "Interactive demo",
        text: "Shipped an interactive lightweight interface where users input key features to receive instant price ranges.",
      },
    ],
  },
};

const models = [
  { name: "OLS baseline", score: 0.61, highlight: false },
  { name: "Ridge", score: 0.72, highlight: false },
  { name: "Random Forest", score: 0.84, highlight: false },
  { name: "Gradient Boosting", score: 0.87, highlight: true },
  { name: "Tuned GBM", score: 0.89, highlight: true },
];

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState("problem");
  const [hoveredModel, setHoveredModel] = useState(null);

  const currentTab = tabContent[activeTab];

  return (
    <section id="case" className="section">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-sky">
            04 — Project Deep Dive
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Deep dive: the real estate price model.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            How a raw scrape of messy classified ads became a model with an R² of 0.89 and an interactive valuation demo.
          </p>
        </div>

        {/* Case Card */}
        <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface shadow-[var(--shadow)]">
          {/* Top Banner */}
          <div className="relative border-b border-border p-6 md:p-8">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -top-24 -right-12 size-72 rounded-full bg-sky/15 blur-3xl" />

            <span className="mono inline-block rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs uppercase tracking-wider text-violet">
              Featured Case Study
            </span>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Algerian Real Estate Price Predictor
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
              Property listings in Algeria are inconsistent, unstandardised and full of noise. This project builds a
              reproducible pipeline that cleans, engineers, and models them into a trustworthy price estimate.
            </p>

            {/* Metrics Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <div className="rounded-xl border border-border bg-background-soft/80 p-4">
                <span className="text-2xl font-bold text-sky md:text-3xl">0.89</span>
                <span className="mono mt-1 block text-xs uppercase tracking-wider text-muted-2">
                  R² Score
                </span>
              </div>

              <div className="rounded-xl border border-border bg-background-soft/80 p-4">
                <span className="text-2xl font-bold text-foreground md:text-3xl">18.4k</span>
                <span className="mono mt-1 block text-xs uppercase tracking-wider text-muted-2">
                  Listings cleaned
                </span>
              </div>

              <div className="rounded-xl border border-border bg-background-soft/80 p-4">
                <span className="text-2xl font-bold text-mint md:text-3xl">−24%</span>
                <span className="mono mt-1 block text-xs uppercase tracking-wider text-muted-2">
                  MAE vs baseline
                </span>
              </div>

              <div className="rounded-xl border border-border bg-background-soft/80 p-4">
                <span className="text-2xl font-bold text-violet md:text-3xl">12</span>
                <span className="mono mt-1 block text-xs uppercase tracking-wider text-muted-2">
                  Engineered features
                </span>
              </div>
            </div>
          </div>

          {/* Split Content: Tabs & Chart */}
          <div className="grid lg:grid-cols-2">
            {/* Left: Tabbed narrative */}
            <div className="border-b border-border p-6 md:p-8 lg:border-r lg:border-b-0">
              {/* Tab Selector */}
              <div className="flex gap-2">
                {Object.keys(tabContent).map((key) => {
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      className={`rounded-lg px-4 py-2 text-xs font-semibold capitalize transition-all duration-200 ${
                        isActive
                          ? "border border-sky/30 bg-sky/15 text-sky"
                          : "border border-transparent text-muted hover:bg-white/5 hover:text-foreground"
                      }`}
                    >
                      {tabContent[key].title}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                <p className="text-sm leading-relaxed text-muted">
                  {currentTab.lead}
                </p>

                <ul className="mt-5 space-y-3.5">
                  {currentTab.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky shadow-[0_0_8px_var(--sky)]" />
                      <span>
                        <strong className="font-semibold text-foreground">{pt.bold} </strong>
                        {pt.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Model Comparison Chart */}
            <div className="flex flex-col justify-center bg-black/20 p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    Model comparison — R² by algorithm
                  </h4>
                  <p className="mono mt-0.5 text-xs text-muted-2">
                    5-fold cross-validation on test set
                  </p>
                </div>
                {hoveredModel && (
                  <span className="mono rounded bg-surface-2 px-2 py-0.5 text-xs text-sky">
                    R² = {hoveredModel.score.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Bar Chart Visualization */}
              <div className="space-y-4">
                {models.map((m) => {
                  const widthPercent = (m.score / 1.0) * 100;
                  return (
                    <div
                      key={m.name}
                      onMouseEnter={() => setHoveredModel(m)}
                      onMouseLeave={() => setHoveredModel(null)}
                      className="group cursor-default"
                    >
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span
                          className={`font-medium ${
                            m.highlight ? "text-foreground" : "text-muted"
                          }`}
                        >
                          {m.name}
                        </span>
                        <span className="mono text-muted">
                          {m.score.toFixed(2)}
                        </span>
                      </div>

                      <div className="h-4 overflow-hidden rounded-md bg-surface-2">
                        <div
                          className={`h-full rounded-md transition-all duration-500 ${
                            m.highlight
                              ? "bg-linear-to-r from-sky to-violet shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                              : "bg-muted-2/40 group-hover:bg-muted-2/60"
                          }`}
                          style={{ width: `${widthPercent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mono mt-6 flex justify-between border-t border-border pt-4 text-[10px] text-muted-2">
                <span>0.0</span>
                <span>0.2</span>
                <span>0.4</span>
                <span>0.6</span>
                <span>0.8</span>
                <span>1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
