"use client";
export default function CertificateIllustration() {
  return (
    <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[420px]" aria-hidden="true">
      {/* Shadow */}
      <ellipse cx="210" cy="308" rx="150" ry="10" fill="#0f172a" opacity="0.08" />

      {/* Certificate body */}
      <rect x="40" y="20" width="340" height="260" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2" />

      {/* Inner border */}
      <rect x="52" y="32" width="316" height="236" rx="8" fill="white" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="0" opacity="0.6" />

      {/* Top ribbon */}
      <rect x="40" y="20" width="340" height="8" rx="0" fill="#0f172a" />
      <rect x="40" y="20" width="340" height="8" rx="0" fill="url(#ribbonGrad)" />

      {/* German flag stripes - decorative corners */}
      <rect x="52" y="38" width="80" height="5" rx="0" fill="#0f172a" opacity="0.9" />
      <rect x="52" y="43" width="80" height="5" rx="0" fill="#dc2626" opacity="0.9" />
      <rect x="52" y="48" width="80" height="5" rx="0" fill="#f59e0b" opacity="0.9" />

      <rect x="288" y="38" width="80" height="5" rx="0" fill="#0f172a" opacity="0.9" />
      <rect x="288" y="43" width="80" height="5" rx="0" fill="#dc2626" opacity="0.9" />
      <rect x="288" y="48" width="80" height="5" rx="0" fill="#f59e0b" opacity="0.9" />

      {/* Seal circle */}
      <circle cx="210" cy="80" r="42" fill="url(#sealGrad)" />
      <circle cx="210" cy="80" r="36" fill="none" stroke="white" strokeWidth="2" opacity="0.4" />
      <circle cx="210" cy="80" r="28" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />

      {/* Seal star */}
      <path d="M210 52 L214 66 L228 66 L218 75 L221 89 L210 81 L199 89 L202 75 L192 66 L206 66 Z"
        fill="white" opacity="0.9" />

      {/* Seal letter */}
      <text x="210" y="90" fill="white" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="Georgia, serif">C1</text>

      {/* Certificate title */}
      <text x="210" y="150" fill="#0f172a" fontSize="20" fontWeight="800" textAnchor="middle" fontFamily="Georgia, serif">
        Certyfikat Ukończenia
      </text>
      <text x="210" y="170" fill="#64748b" fontSize="13" textAnchor="middle" fontFamily="system-ui">
        Kursu Języka Niemieckiego
      </text>

      {/* Divider line */}
      <line x1="90" y1="185" x2="330" y2="185" stroke="#e2e8f0" strokeWidth="1.5" />

      {/* German text decoration */}
      <text x="210" y="208" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic">
        Poziom C1 · Zertifikat Deutsch
      </text>

      {/* Placeholder name line */}
      <line x1="120" y1="228" x2="300" y2="228" stroke="#0f172a" strokeWidth="1.5" />
      <text x="210" y="245" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui">Imię i Nazwisko</text>

      {/* Bottom decorations */}
      <g transform="translate(68, 256)">
        {/* Signature line left */}
        <line x1="0" y1="20" x2="70" y2="20" stroke="#94a3b8" strokeWidth="1" />
        <text x="35" y="32" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui">Nauczyciel</text>
      </g>
      <g transform="translate(282, 256)">
        <line x1="0" y1="20" x2="70" y2="20" stroke="#94a3b8" strokeWidth="1" />
        <text x="35" y="32" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui">Data ukończenia</text>
      </g>

      {/* Rosette */}
      <circle cx="210" cy="264" r="12" fill="#f59e0b" opacity="0.2" />
      <circle cx="210" cy="264" r="8" fill="#f59e0b" opacity="0.5" />
      <circle cx="210" cy="264" r="5" fill="#f59e0b" />
      <text x="210" y="268" fill="white" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="system-ui">✓</text>

      {/* Floating stars around certificate */}
      <path d="M30 100 L32 92 L34 100 L42 100 L36 105 L38 113 L30 108 L22 113 L24 105 L18 100 Z"
        fill="#f59e0b" opacity="0.4" transform="scale(0.7)" />
      <path d="M390 50 L392 42 L394 50 L402 50 L396 55 L398 63 L390 58 L382 63 L384 55 L378 50 Z"
        fill="#f59e0b" opacity="0.3" transform="scale(0.6) translate(60, 20)" />
      <circle cx="34" cy="200" r="5" fill="#f59e0b" opacity="0.3" />
      <circle cx="388" cy="180" r="4" fill="#dc2626" opacity="0.3" />

      <defs>
        <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="33%" stopColor="#dc2626" />
          <stop offset="66%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <radialGradient id="sealGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>
      </defs>
    </svg>
  );
}
