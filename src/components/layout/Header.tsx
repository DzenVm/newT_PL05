"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Strona główna" },
  { href: "/kursy", label: "Kursy" },
  { href: "/cennik", label: "Cennik" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Visual mark - speech bubble icon, no text logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Strona główna">
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                <rect width="36" height="36" rx="10" fill="#0f172a" />
                <rect x="1" y="1" width="34" height="34" rx="9" fill="url(#headerIconGrad)" />
                <path d="M8 10 L28 10 L28 22 L20 22 L18 26 L16 22 L8 22 Z" fill="white" opacity="0.95" />
                <text x="18" y="20" fill="#0f172a" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="system-ui">DE</text>
                <defs>
                  <linearGradient id="headerIconGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#1e3a5f" />
                    <stop offset="1" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={`hidden sm:flex flex-col leading-tight transition-colors ${scrolled ? "text-navy-900" : "text-white"}`}>
              <span className="text-sm font-800 tracking-tight" style={{ fontWeight: 800 }}>Język Niemiecki</span>
              <span className={`text-xs ${scrolled ? "text-slate-500" : "text-amber-400"}`} style={{ fontWeight: 600 }}>Online</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  pathname === item.href
                    ? scrolled ? "text-amber-600" : "text-amber-400"
                    : scrolled
                    ? "text-slate-700 hover:text-navy-900"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/kontakt"
              className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                scrolled ? "text-slate-700 hover:text-navy-900" : "text-slate-200 hover:text-white"
              }`}
            >
              Bezpłatna konsultacja
            </Link>
            <Link href="/kursy" className="btn-primary text-sm !py-2.5 !px-5">
              <span>Rozpocznij naukę</span>
              <ArrowRight />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-white border-b border-slate-200 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                pathname === item.href
                  ? "bg-amber-50 text-amber-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-semibold text-slate-600 hover:text-navy-900 text-center"
            >
              Bezpłatna konsultacja
            </Link>
            <Link
              href="/kursy"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center text-sm"
            >
              <span>Rozpocznij naukę</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArrowRight() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}
