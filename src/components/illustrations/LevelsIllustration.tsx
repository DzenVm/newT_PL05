"use client";
export default function LevelsIllustration() {
  const levels = [
    { label: "A1", height: 40, color: "#22c55e", width: 52 },
    { label: "A2", height: 70, color: "#84cc16", width: 52 },
    { label: "B1", height: 105, color: "#f59e0b", width: 52 },
    { label: "B2", height: 145, color: "#f97316", width: 52 },
    { label: "C1", height: 190, color: "#dc2626", width: 52 },
    { label: "C2", height: 240, color: "#7c3aed", width: 52 },
  ];

  const baseY = 300;
  const startX = 30;
  const gap = 68;

  return (
    <svg viewBox="0 0 450 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-hidden="true">
      {/* Grid lines */}
      {[50, 100, 150, 200, 250, 300].map((y) => (
        <line key={y} x1="20" y1={y} x2="440" y2={y} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
      ))}

      {/* Bars */}
      {levels.map((level, i) => {
        const x = startX + i * gap;
        const y = baseY - level.height;
        return (
          <g key={level.label}>
            <rect
              x={x}
              y={y}
              width={level.width}
              height={level.height}
              rx="6"
              fill={level.color}
              opacity="0.85"
            >
              <animate
                attributeName="height"
                from="0"
                to={level.height}
                dur="1.2s"
                begin={`${i * 0.15}s`}
                fill="freeze"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
              <animate
                attributeName="y"
                from={baseY}
                to={y}
                dur="1.2s"
                begin={`${i * 0.15}s`}
                fill="freeze"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
            </rect>
            {/* Shine */}
            <rect x={x} y={y} width={14} height={level.height} rx="6" fill="white" opacity="0.12" />

            {/* Label inside bar */}
            <text
              x={x + level.width / 2}
              y={baseY - 10}
              fill="white"
              fontSize="13"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="system-ui"
            >
              {level.label}
            </text>

            {/* Top dot */}
            <circle cx={x + level.width / 2} cy={y + 6} r="5" fill="white" opacity="0.6">
              <animate
                attributeName="cy"
                from={baseY + 6}
                to={y + 6}
                dur="1.2s"
                begin={`${i * 0.15}s`}
                fill="freeze"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
            </circle>
          </g>
        );
      })}

      {/* Base line */}
      <line x1="20" y1={baseY + 4} x2="440" y2={baseY + 4} stroke="#cbd5e1" strokeWidth="2" />

      {/* Axis labels */}
      <text x="440" y="55" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui">C2</text>
      <text x="440" y="105" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui">C1</text>
      <text x="440" y="155" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui">B2</text>
      <text x="440" y="205" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui">B1</text>
      <text x="440" y="255" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui">A2</text>
      <text x="440" y="305" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui">A1</text>

      {/* Person at top of C2 bar */}
      <g transform="translate(349, 42)">
        <circle cx="26" cy="-18" r="10" fill="#7c3aed" opacity="0.9" />
        <path d="M16 0 C16 -8 36 -8 36 0 L36 16 C36 18 16 18 16 16 Z" fill="#7c3aed" opacity="0.8" />
        <path d="M16 6 L8 18" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
        <path d="M36 6 L44 18" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
        {/* Star above head */}
        <path d="M26 -34 L28 -42 L30 -34 L38 -34 L32 -29 L34 -21 L26 -26 L18 -21 L20 -29 L14 -34 Z"
          fill="#f59e0b" />
      </g>

      {/* Caption */}
      <text x="225" y="335" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui">
        Postępy w nauce języka niemieckiego
      </text>
    </svg>
  );
}
