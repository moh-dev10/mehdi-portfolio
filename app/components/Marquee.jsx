const technologies = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "Jupyter",
  "Git & GitHub",
  "Statistics",
  "Feature Engineering",
  "Data Cleaning",
];

export default function Marquee() {
  const items = [...technologies, ...technologies];

  return (
    <section className="relative overflow-hidden border-y border-border">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />

      {/* Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((technology, index) => (
          <span
            key={`${technology}-${index}`}
            className="flex shrink-0 items-center gap-3 px-6 py-5 font-mono text-xs text-muted"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-sky" />
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}