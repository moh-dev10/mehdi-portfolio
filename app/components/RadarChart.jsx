const data = [
  { label: "Python", value: 90 },
  { label: "Pandas", value: 88 },
  { label: "NumPy", value: 85 },
  { label: "SQL", value: 82 },
  { label: "ML", value: 78 },
  { label: "Statistics", value: 76 },
];

const size = 320;
const center = size / 2;
const radius = 105;
const levels = 5;

const angleStep = (Math.PI * 2) / data.length;

function getPoint(index, value = 1) {
  const angle = index * angleStep - Math.PI / 2;

  return {
    x: center + Math.cos(angle) * radius * value,
    y: center + Math.sin(angle) * radius * value,
  };
}

function createPolygon(value) {
  return data
    .map((_, index) => {
      const point = getPoint(index, value);
      return `${point.x},${point.y}`;
    })
    .join(" ");
}

function createDataPolygon() {
  return data
    .map((item, index) => {
      const point = getPoint(index, item.value / 100);
      return `${point.x},${point.y}`;
    })
    .join(" ");
}

export default function RadarChart() {
  return (
    <div className="w-full max-w-[320px]">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="Skill distribution radar chart"
      >
        {/* Grid */}
        {Array.from({ length: levels }, (_, index) => {
          const scale = (index + 1) / levels;

          return (
            <polygon
              key={`level-${index}`}
              points={createPolygon(scale)}
              fill="none"
              stroke="rgba(255,255,255,0.075)"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis lines */}
        {data.map((_, index) => {
          const point = getPoint(index);

          return (
            <line
              key={`axis-${index}`}
              x1={center}
              y1={center}
              x2={point.x}
              y2={point.y}
              stroke="rgba(255,255,255,0.075)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data area */}
        <polygon
          points={createDataPolygon()}
          fill="rgba(56,189,248,0.12)"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {data.map((item, index) => {
          const point = getPoint(index, item.value / 100);

          return (
            <circle
              key={`point-${item.label}`}
              cx={point.x}
              cy={point.y}
              r="3.5"
              fill="#38bdf8"
              stroke="#070b12"
              strokeWidth="2"
            />
          );
        })}

        {/* Labels */}
        {data.map((item, index) => {
          const point = getPoint(index, 1.22);

          const textAnchor =
            point.x < center - 10
              ? "end"
              : point.x > center + 10
                ? "start"
                : "middle";

          return (
            <text
              key={`label-${item.label}`}
              x={point.x}
              y={point.y}
              textAnchor={textAnchor}
              dominantBaseline="middle"
              className="fill-muted font-mono text-[10px]"
            >
              {item.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}