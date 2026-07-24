"use client";
export default function OnlineLearning() {
  return (
    <svg viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-hidden="true">
      {/* Background circles */}
      <circle cx="250" cy="190" r="170" fill="#f1f5f9" />
      <circle cx="250" cy="190" r="130" fill="#e8edf8" opacity="0.5" />

      {/* Main desk */}
      <rect x="80" y="270" width="340" height="16" rx="4" fill="#cbd5e1" />
      <rect x="130" y="282" width="20" height="50" rx="4" fill="#94a3b8" />
      <rect x="350" y="282" width="20" height="50" rx="4" fill="#94a3b8" />

      {/* Monitor */}
      <rect x="140" y="130" width="220" height="148" rx="12" fill="#0f172a" />
      <rect x="148" y="138" width="204" height="132" rx="8" fill="#1e3a5f" />
      <rect x="228" y="275" width="44" height="10" rx="3" fill="#94a3b8" />
      <rect x="210" y="283" width="80" height="8" rx="4" fill="#94a3b8" />

      {/* Screen content - video call */}
      {/* Teacher face (left side of screen) */}
      <rect x="156" y="146" width="92" height="116" rx="6" fill="#233158" />
      <circle cx="202" cy="178" r="22" fill="#f59e0b" opacity="0.2" />
      <circle cx="202" cy="175" r="18" fill="#fde68a" />
      {/* Face features */}
      <circle cx="196" cy="172" r="3" fill="#0f172a" />
      <circle cx="208" cy="172" r="3" fill="#0f172a" />
      <path d="M196 183 Q202 188 208 183" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M188 165 Q202 155 216 165" stroke="#92400e" strokeWidth="2" fill="none" />
      {/* Body */}
      <path d="M184 210 Q186 196 202 194 Q218 196 220 210" fill="#1e40af" opacity="0.6" />
      {/* Name tag */}
      <rect x="162" y="248" width="80" height="8" rx="4" fill="#f59e0b" opacity="0.8" />

      {/* Student materials (right side of screen) */}
      <rect x="256" y="146" width="92" height="116" rx="6" fill="#1a2744" />
      {/* Textbook */}
      <rect x="264" y="158" width="52" height="68" rx="4" fill="#dc2626" opacity="0.7" />
      <rect x="269" y="165" width="42" height="3" rx="1.5" fill="white" opacity="0.6" />
      <rect x="269" y="172" width="35" height="3" rx="1.5" fill="white" opacity="0.5" />
      <rect x="269" y="179" width="38" height="3" rx="1.5" fill="white" opacity="0.5" />
      <rect x="269" y="186" width="28" height="3" rx="1.5" fill="white" opacity="0.4" />
      <rect x="269" y="193" width="40" height="3" rx="1.5" fill="white" opacity="0.4" />
      {/* German flag on book */}
      <rect x="269" y="200" width="42" height="7" rx="0" fill="#0f172a" />
      <rect x="269" y="207" width="42" height="7" rx="0" fill="#dc2626" />
      <rect x="269" y="214" width="42" height="7" rx="0" fill="#f59e0b" />

      {/* Pencil */}
      <rect x="318" y="190" width="10" height="50" rx="3" fill="#fbbf24" transform="rotate(-15 318 190)" />
      <rect x="316" y="238" width="10" height="8" rx="0" fill="#f59e0b" transform="rotate(-15 316 238)" />
      <path d="M316 246 L321 252 L326 246" fill="#0f172a" transform="rotate(-15 316 238)" />

      {/* Screen icons bar */}
      <rect x="156" y="256" width="196" height="14" rx="4" fill="#0f172a" opacity="0.8" />
      <circle cx="170" cy="263" r="5" fill="#22c55e" />
      <circle cx="186" cy="263" r="5" fill="#ef4444" />
      <circle cx="202" cy="263" r="5" fill="#f59e0b" />
      <rect x="218" y="259" width="30" height="8" rx="4" fill="#475569" />
      <rect x="254" y="259" width="24" height="8" rx="4" fill="#475569" />
      <rect x="284" y="259" width="20" height="8" rx="4" fill="#475569" />
      <rect x="310" y="259" width="24" height="8" rx="4" fill="#2563eb" />
      <rect x="340" y="259" width="8" height="8" rx="2" fill="#475569" />

      {/* Floating elements */}
      {/* Microphone */}
      <g transform="translate(60, 130)">
        <circle cx="0" cy="0" r="28" fill="#f59e0b" opacity="0.15" />
        <circle cx="0" cy="0" r="20" fill="#f59e0b" opacity="0.2" />
        <rect x="-7" y="-16" width="14" height="22" rx="7" fill="#f59e0b" opacity="0.9" />
        <path d="M-12 6 C-12 16 12 16 12 6" stroke="#f59e0b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <line x1="0" y1="18" x2="0" y2="26" stroke="#f59e0b" strokeWidth="2.5" />
        <line x1="-7" y1="26" x2="7" y2="26" stroke="#f59e0b" strokeWidth="2.5" />
      </g>

      {/* Chat bubble with German text */}
      <g transform="translate(370, 120)">
        <rect x="0" y="0" width="110" height="48" rx="16" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <polygon points="15,48 27,48 21,60" fill="#0f172a" />
        <polygon points="14,47 28,47 21,59" fill="#f59e0b" opacity="0.3" />
        <text x="55" y="20" fill="#fbbf24" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui">Ich lerne</text>
        <text x="55" y="36" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui">Deutsch!</text>
      </g>

      {/* Stars */}
      <g transform="translate(420, 220)">
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i}
            d={`M${i * 18} 0 L${i * 18 + 2} 6 L${i * 18 + 8} 6 L${i * 18 + 3} 10 L${i * 18 + 5} 16 L${i * 18} 12 L${i * 18 - 5} 16 L${i * 18 - 3} 10 L${i * 18 - 8} 6 L${i * 18 - 2} 6 Z`}
            fill={i < 4 ? "#f59e0b" : "#e2e8f0"}
          />
        ))}
      </g>

      {/* WiFi signal */}
      <g transform="translate(38, 220)">
        <path d="M0 20 C8 10 30 10 38 20" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
        <path d="M6 28 C11 20 27 20 32 28" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M12 36 C15 30 23 30 26 36" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
        <circle cx="19" cy="40" r="4" fill="#22c55e" />
      </g>

      {/* Bottom label */}
      <text x="250" y="365" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui">
        Lekcje na żywo z certyfikowanymi nauczycielami
      </text>
    </svg>
  );
}
