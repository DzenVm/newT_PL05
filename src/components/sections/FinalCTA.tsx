"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

const CertificateIllustration = dynamic(
  () => import("@/components/illustrations/CertificateIllustration"),
  { ssr: false }
);

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/20 rounded-full px-4 py-1.5 mb-7 w-fit">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse-glow" />
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Zacznij teraz</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
                Twój certyfikat językowy<br />
                czeka — <span className="text-amber-400">zacznij dziś</span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Setki Polaków już osiągnęły swoje cele językowe korzystając z tej platformy.
                Bez długich dojazdów. Bez sztywnych godzin. W swoim tempie.
              </p>

              {/* Checklist */}
              <ul className="space-y-3 mb-10">
                {[
                  "Bezpłatny test poziomujący — wynik w 5 minut",
                  "14-dniowa gwarancja zwrotu pieniędzy",
                  "Dostęp natychmiastowy — zacznij za kilka minut",
                  "Materiały dostępne 24/7 na wszystkich urządzeniach",
                  "Przygotowanie do egzaminów TestDaF, Goethe i telc",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kursy" className="btn-primary text-base">
                  <span>Rozpocznij bezpłatny test</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/cennik" className="btn-outline text-base">
                  Zobacz plany i ceny
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-8 border-t border-navy-700 grid grid-cols-3 gap-4">
                {[
                  { icon: "🔒", label: "Bezpieczna płatność" },
                  { icon: "📜", label: "Certyfikat CEFR" },
                  { icon: "↩️", label: "14 dni gwarancja" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="text-slate-500 text-xs">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center p-10 bg-navy-800/50 relative overflow-hidden">
              {/* Decorative rings */}
              <div className="absolute w-80 h-80 border border-amber-500/10 rounded-full" />
              <div className="absolute w-56 h-56 border border-amber-500/15 rounded-full" />
              <div className="relative">
                <CertificateIllustration />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "CEFR", desc: "Zgodność ze standardem europejskim" },
            { value: "RODO", desc: "Ochrona danych osobowych" },
            { value: "SSL", desc: "Szyfrowane połączenie" },
            { value: "PL", desc: "Polska platforma edukacyjna" },
          ].map((item) => (
            <div key={item.value} className="bg-white rounded-xl p-4 border border-slate-200 text-center shadow-sm">
              <p className="text-navy-900 font-extrabold text-lg mb-1">{item.value}</p>
              <p className="text-slate-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
