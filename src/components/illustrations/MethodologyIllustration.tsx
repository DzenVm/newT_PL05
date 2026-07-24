"use client";
export default function MethodologyIllustration() {
  return (
    <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[480px]" aria-hidden="true">
      {/* Central brain */}
      <ellipse cx="240" cy="190" rx="90" ry="80" fill="#1e3a5f" opacity="0.6" />
      <ellipse cx="240" cy="190" rx="70" ry="62" fill="#233158" opacity="0.8" />

      {/* Brain convolutions */}
      <path d="M190 170 C195 155 215 148 230 158 C235 145 255 140 265 155 C280 148 295 158 290 175 C305 175 310 190 298 198 C305 210 295 225 280 220 C275 235 255 238 245 225 C235 238 215 235 210 220 C195 225 185 210 192 198 C178 190 183 173 190 170 Z"
        fill="#375082" stroke="#2563eb" strokeWidth="1.5" opacity="0.7" />

      {/* Brain sparkle */}
      <circle cx="240" cy="185" r="25" fill="url(#brainGlow)" opacity="0.5" />

      {/* Central letter Ä */}
      <text x="240" y="202" fill="#f59e0b" fontSize="36" fontWeight="900" textAnchor="middle" fontFamily="Georgia, serif">Ä</text>

      {/* Orbit ring */}
      <circle cx="240" cy="190" r="120" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.3" />

      {/* Satellite nodes */}
      {/* Node 1 - Listening (top) */}
      <g>
        <circle cx="240" cy="62" r="32" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
        <path d="M228 57 C228 50 234 45 240 45 C246 45 252 50 252 57" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <rect x="224" y="54" width="7" height="10" rx="3.5" fill="#fbbf24" />
        <rect x="249" y="54" width="7" height="10" rx="3.5" fill="#fbbf24" />
        <path d="M227 67 C227 72 233 76 240 76 C247 76 253 72 253 67" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
        <text x="240" y="85" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui">Słuchanie</text>
      </g>

      {/* Node 2 - Speaking (top right) */}
      <g>
        <circle cx="346" cy="108" r="32" fill="#0f172a" stroke="#dc2626" strokeWidth="2" />
        <path d="M334 103 C334 96 352 92 352 103 L352 118 C352 121 334 121 334 118 Z" fill="#dc2626" opacity="0.7" />
        <path d="M334 110 C330 110 327 120 330 124 C325 124 322 130 325 133" stroke="#dc2626" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="355" cy="94" r="5" fill="#dc2626" opacity="0.5" />
        <circle cx="362" cy="102" r="3.5" fill="#dc2626" opacity="0.35" />
        <circle cx="365" cy="112" r="2.5" fill="#dc2626" opacity="0.2" />
        <text x="364" y="131" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui">Mówienie</text>
      </g>

      {/* Node 3 - Reading (right) */}
      <g>
        <circle cx="372" cy="220" r="32" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />
        <rect x="358" y="207" width="28" height="26" rx="3" fill="#22c55e" opacity="0.6" />
        <rect x="363" y="212" width="18" height="2.5" rx="1.25" fill="white" />
        <rect x="363" y="217" width="14" height="2.5" rx="1.25" fill="white" />
        <rect x="363" y="222" width="16" height="2.5" rx="1.25" fill="white" />
        <rect x="363" y="227" width="10" height="2.5" rx="1.25" fill="white" />
        <text x="372" y="253" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui">Czytanie</text>
      </g>

      {/* Node 4 - Writing (bottom right) */}
      <g>
        <circle cx="318" cy="320" r="32" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M306 328 L322 308 L334 320 L318 340 Z" fill="#8b5cf6" opacity="0.7" />
        <path d="M322 308 L330 302 L338 310 L334 320 Z" fill="#8b5cf6" opacity="0.5" />
        <line x1="304" y1="336" x2="320" y2="342" stroke="#8b5cf6" strokeWidth="2" />
        <text x="318" y="357" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui">Pisanie</text>
      </g>

      {/* Node 5 - Grammar (bottom left) */}
      <g>
        <circle cx="162" cy="320" r="32" fill="#0f172a" stroke="#f97316" strokeWidth="2" />
        <text x="162" y="329" fill="#f97316" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="Georgia, serif">G</text>
        <circle cx="155" cy="310" r="3" fill="#f97316" opacity="0.5" />
        <circle cx="169" cy="310" r="3" fill="#f97316" opacity="0.5" />
        <text x="162" y="357" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui">Gramatyka</text>
      </g>

      {/* Node 6 - Speaking/Vocabulary (left) */}
      <g>
        <circle cx="108" cy="220" r="32" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
        <path d="M96 208 L130 208 L130 224 L118 224 L114 232 L110 224 L96 224 Z" fill="#06b6d4" opacity="0.6" />
        <rect x="101" y="213" width="24" height="2.5" rx="1.25" fill="white" opacity="0.8" />
        <rect x="101" y="218" width="18" height="2.5" rx="1.25" fill="white" opacity="0.6" />
        <text x="108" y="253" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui">Słownictwo</text>
      </g>

      {/* Connection lines */}
      <line x1="240" y1="94" x2="240" y2="130" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />
      <line x1="318" y1="129" x2="302" y2="152" stroke="#dc2626" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />
      <line x1="350" y1="210" x2="330" y2="205" stroke="#22c55e" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />
      <line x1="298" y1="298" x2="282" y2="260" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />
      <line x1="182" y1="298" x2="198" y2="260" stroke="#f97316" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />
      <line x1="130" y1="210" x2="154" y2="205" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />
      <line x1="162" y1="129" x2="178" y2="152" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />

      {/* Node 7 - top left */}
      <g>
        <circle cx="134" cy="108" r="32" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
        <text x="134" y="117" fill="#f59e0b" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="system-ui">💡</text>
        <text x="134" y="131" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui">Rozumienie</text>
      </g>

      <defs>
        <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
