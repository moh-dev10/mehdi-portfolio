const data = [
  { label: "Python", value: 75 },
  { label: "Pandas", value: 75 },
  { label: "NumPy", value: 70 },
  { label: "SQL", value: 60 },
  { label: "ML", value: 55 },
  { label: "Statistics", value: 70 },
];

const size = 300;
const center = size / 2;
const radius = 95;
const levels = 4;

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
    <div className="w-full max-w-[300px]">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="Skill balance radar chart"
      >
        {/* Grid levels */}
        {Array.from({ length: levels }, (_, index) => {
          const scale = (index + 1) / levels;

          return (
            <polygon
              key={`level-${index}`}
              points={createPolygon(scale)}
              fill="none"
              stroke="rgba(242, 241, 234, 0.08)"
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
              stroke="rgba(242, 241, 234, 0.08)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={createDataPolygon()}
          fill="rgba(146, 151, 127, 0.15)"
          stroke="#92977F"
          strokeWidth="1.8"
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
              r="3"
              fill="#92977F"
              stroke="#10110F"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Labels */}
        {data.map((item, index) => {
          const point = getPoint(index, 1.25);

          const textAnchor =
            point.x < center - 8
              ? "end"
              : point.x > center + 8
                ? "start"
                : "middle";

          return (
            <text
              key={`label-${item.label}`}
              x={point.x}
              y={point.y}
              textAnchor={textAnchor}
              dominantBaseline="middle"
              className="fill-[#A5A69D] font-mono text-[10px]"
            >
              {item.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}