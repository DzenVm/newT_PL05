"use client";
export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[560px]"
      aria-hidden="true"
    >
      {/* Background glow */}
      <ellipse cx="280" cy="240" rx="220" ry="200" fill="url(#heroGlow)" opacity="0.4" />

      {/* Laptop base */}
      <rect x="110" y="280" width="340" height="18" rx="6" fill="#1e293b" />
      <rect x="90" y="293" width="380" height="10" rx="5" fill="#0f172a" />

      {/* Laptop screen */}
      <rect x="120" y="90" width="320" height="200" rx="12" fill="#0f172a" />
      <rect x="126" y="96" width="308" height="188" rx="8" fill="#1e3a5f" />

      {/* Screen content - code/text editor look */}
      <rect x="134" y="104" width="60" height="8" rx="4" fill="#f59e0b" opacity="0.9" />
      <rect x="202" y="104" width="40" height="8" rx="4" fill="#64748b" opacity="0.5" />

      {/* Screen text lines - German lesson */}
      <rect x="134" y="124" width="20" height="7" rx="3" fill="#94a3b8" opacity="0.4" />
      <rect x="160" y="124" width="80" height="7" rx="3" fill="#fbbf24" opacity="0.8" />
      <rect x="134" y="138" width="20" height="7" rx="3" fill="#94a3b8" opacity="0.4" />
      <rect x="160" y="138" width="100" height="7" rx="3" fill="#e2e8f0" opacity="0.7" />
      <rect x="134" y="152" width="20" height="7" rx="3" fill="#94a3b8" opacity="0.4" />
      <rect x="160" y="152" width="60" height="7" rx="3" fill="#fbbf24" opacity="0.8" />
      <rect x="228" y="152" width="40" height="7" rx="3" fill="#e2e8f0" opacity="0.5" />

      {/* German text on screen */}
      <text x="134" y="185" fill="#f59e0b" fontSize="13" fontWeight="bold" fontFamily="monospace" opacity="0.95">
        Guten Morgen!
      </text>
      <text x="134" y="203" fill="#94a3b8" fontSize="11" fontFamily="monospace" opacity="0.7">
        Wie heißt du?
      </text>
      <text x="134" y="219" fill="#fbbf24" fontSize="11" fontFamily="monospace" opacity="0.85">
        Ich heiße Anna.
      </text>
      <text x="134" y="237" fill="#64748b" fontSize="11" fontFamily="monospace" opacity="0.6">
        Sehr angenehm!
      </text>
      <text x="134" y="255" fill="#f59e0b" fontSize="11" fontFamily="monospace" opacity="0.7">
        Danke schön!
      </text>

      {/* Cursor blink */}
      <rect x="134" y="266" width="8" height="13" rx="1" fill="#f59e0b" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite" />
      </rect>

      {/* Webcam dot */}
      <circle cx="280" cy="100" r="4" fill="#475569" />
      <circle cx="280" cy="100" r="2" fill="#1e293b" />

      {/* Floating word bubbles */}
      {/* Bubble 1 - top left */}
      <g>
        <animate attributeName="transform" values="translate(0,0);translate(-4,-10);translate(0,0)" dur="3.5s" repeatCount="indefinite" />
        <rect x="30" y="60" width="90" height="36" rx="18" fill="#f59e0b" />
        <polygon points="70,96 82,96 76,108" fill="#f59e0b" />
        <text x="75" y="83" fill="#0f172a" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="system-ui">Hallo!</text>
      </g>

      {/* Bubble 2 - top right */}
      <g>
        <animate attributeName="transform" values="translate(0,0);translate(5,-12);translate(0,0)" dur="4s" repeatCount="indefinite" begin="0.8s" />
        <rect x="420" y="40" width="110" height="36" rx="18" fill="#1e3a5f" stroke="#f59e0b" strokeWidth="2" />
        <polygon points="460,76 472,76 466,88" fill="#1e3a5f" />
        <polygon points="460,75 472,75 466,87" fill="#f59e0b" />
        <text x="475" y="63" fill="#fbbf24" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui">Danke!</text>
      </g>

      {/* Bubble 3 - bottom right */}
      <g>
        <animate attributeName="transform" values="translate(0,0);translate(6,8);translate(0,0)" dur="5s" repeatCount="indefinite" begin="1.2s" />
        <rect x="430" y="230" width="100" height="36" rx="18" fill="white" opacity="0.92" />
        <polygon points="452,266 464,266 458,278" fill="white" opacity="0.92" />
        <text x="480" y="252" fill="#0f172a" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui">Bitte!</text>
      </g>

      {/* Bubble 4 - left middle */}
      <g>
        <animate attributeName="transform" values="translate(0,0);translate(-6,6);translate(0,0)" dur="4.5s" repeatCount="indefinite" begin="2s" />
        <rect x="18" y="190" width="80" height="34" rx="17" fill="#dc2626" opacity="0.85" />
        <polygon points="50,224 62,224 56,236" fill="#dc2626" opacity="0.85" />
        <text x="58" y="212" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui">Ja!</text>
      </g>

      {/* Floating letters */}
      <text x="480" y="160" fill="#f59e0b" fontSize="40" fontWeight="900" opacity="0.12" fontFamily="system-ui">Ä</text>
      <text x="50" y="360" fill="#fbbf24" fontSize="36" fontWeight="900" opacity="0.1" fontFamily="system-ui">Ö</text>
      <text x="490" y="380" fill="#dc2626" fontSize="34" fontWeight="900" opacity="0.1" fontFamily="system-ui">Ü</text>
      <text x="20" y="280" fill="#e2e8f0" fontSize="28" fontWeight="900" opacity="0.08" fontFamily="system-ui">ß</text>

      {/* Progress indicator on right */}
      <g transform="translate(510, 110)">
        <rect width="28" height="160" rx="14" fill="#1e293b" />
        <rect x="8" y="8" width="12" height="50" rx="6" fill="#f59e0b" />
        <rect x="8" y="65" width="12" height="36" rx="6" fill="#fbbf24" opacity="0.6" />
        <rect x="8" y="108" width="12" height="44" rx="6" fill="#475569" opacity="0.4" />
      </g>

      {/* Stars decoration */}
      <path d="M60 140 L63 130 L66 140 L76 140 L68 147 L71 157 L63 150 L55 157 L58 147 L50 140 Z"
        fill="#f59e0b" opacity="0.7" transform="scale(0.7) translate(20,60)" />
      <path d="M500 310 L503 300 L506 310 L516 310 L508 317 L511 327 L503 320 L495 327 L498 317 L490 310 Z"
        fill="#fbbf24" opacity="0.5" transform="scale(0.6)" />

      {/* Headphones icon - bottom left of laptop */}
      <circle cx="148" cy="330" r="14" fill="#1e3a5f" />
      <path d="M141 330 C141 325 144 322 148 322 C152 322 155 325 155 330" stroke="#f59e0b" strokeWidth="2" fill="none" />
      <rect x="139" y="327" width="5" height="8" rx="2.5" fill="#f59e0b" />
      <rect x="154" y="327" width="5" height="8" rx="2.5" fill="#f59e0b" />

      {/* Certificate icon - bottom right */}
      <rect x="390" y="318" width="40" height="30" rx="4" fill="#1e3a5f" />
      <path d="M398 328 L422 328" stroke="#f59e0b" strokeWidth="2" />
      <path d="M398 335 L415 335" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="415" cy="342" r="5" fill="#f59e0b" opacity="0.9" />
      <path d="M413 342 L415 344 L418 340" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />

      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
