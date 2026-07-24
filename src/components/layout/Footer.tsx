import Link from "next/link";

const courses = [
  { href: "/kursy#a1", label: "Kurs A1 – Podstawowy" },
  { href: "/kursy#a2", label: "Kurs A2 – Elementarny" },
  { href: "/kursy#b1", label: "Kurs B1 – Średniozaawansowany" },
  { href: "/kursy#b2", label: "Kurs B2 – Wyższy" },
  { href: "/kursy#c1", label: "Kurs C1 – Zaawansowany" },
  { href: "/kursy#c2", label: "Kurs C2 – Biegły" },
];

const links = [
  { href: "/o-nas", label: "O nas" },
  { href: "/cennik", label: "Cennik" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9">
                <svg viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="10" fill="#1e3a5f" />
                  <path d="M8 10 L28 10 L28 22 L20 22 L18 26 L16 22 L8 22 Z" fill="white" opacity="0.9" />
                  <text x="18" y="20" fill="#1e3a5f" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="system-ui">DE</text>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Język Niemiecki Online</p>
                <p className="text-amber-500 text-xs font-semibold">ger4pol.site</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Platforma edukacyjna do nauki języka niemieckiego dla polskojęzycznych uczniów.
              Elastyczne kursy od A1 do C2, materiały certyfikowane i nauczyciele z doświadczeniem
              w nauczaniu Polaków.
            </p>
            {/* German flag small */}
            <div className="flex gap-1 items-center mb-6">
              <div className="flex flex-col gap-0.5">
                <div className="w-10 h-2 bg-slate-900 rounded-sm"></div>
                <div className="w-10 h-2 bg-crimson-600 rounded-sm"></div>
                <div className="w-10 h-2 bg-amber-500 rounded-sm"></div>
              </div>
              <span className="text-xs ml-2">Platforma dla uczących się języka niemieckiego</span>
            </div>
            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MailIcon />
                <a href="mailto:kontakt@ger4pol.site" className="hover:text-amber-400 transition-colors">
                  kontakt@ger4pol.site
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon />
                <span>Pon–Pt: 8:00 – 20:00 · Sob: 9:00 – 16:00</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Kursy</h3>
            <ul className="space-y-2.5">
              {courses.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm hover:text-amber-400 transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Informacje</h3>
            <ul className="space-y-2.5 mb-8">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-amber-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="text-white font-semibold text-xs mb-3 uppercase tracking-wider">Egzaminy</h4>
              <ul className="space-y-2 text-xs">
                <li>TestDaF</li>
                <li>Goethe-Zertifikat</li>
                <li>telc Deutsch</li>
                <li>ÖSD Zertifikat</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} ger4pol.site · Wszelkie prawa zastrzeżone
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/polityka-prywatnosci" className="hover:text-amber-400 transition-colors">
              Polityka prywatności
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/regulamin" className="hover:text-amber-400 transition-colors">
              Regulamin
            </Link>
            <span className="text-slate-700">|</span>
            <span>Platforma edukacyjna PL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
