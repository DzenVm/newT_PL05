"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroIllustration = dynamic(
  () => import("@/components/illustrations/HeroIllustration"),
  { ssr: false }
);

const floatingWords = [
  { word: "Hallo!", x: "8%", y: "20%", size: "text-sm", delay: "0s", color: "text-amber-400" },
  { word: "Danke!", x: "80%", y: "12%", size: "text-sm", delay: "0.8s", color: "text-white/60" },
  { word: "Bitte", x: "85%", y: "65%", size: "text-xs", delay: "1.5s", color: "text-amber-300/70" },
  { word: "Ja!", x: "5%", y: "58%", size: "text-base", delay: "2s", color: "text-crimson-500/70" },
  { word: "Nein", x: "75%", y: "85%", size: "text-xs", delay: "1s", color: "text-slate-400/50" },
  { word: "Schön!", x: "14%", y: "82%", size: "text-xs", delay: "2.5s", color: "text-amber-400/60" },
  { word: "Guten Tag", x: "60%", y: "5%", size: "text-xs", delay: "1.8s", color: "text-slate-300/40" },
  { word: "Auf Wiedersehen", x: "30%", y: "90%", size: "text-xs", delay: "3s", color: "text-slate-400/30" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 20% 50%, #1a2744 0%, #0f172a 60%, #060c1a 100%)" }}
    >
      {/* Dot grid overlay — separate layer so it doesn't clobber the gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial colour accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      {/* Floating German words */}
      {floatingWords.map((w, i) => (
        <span
          key={i}
          className={`absolute font-bold select-none pointer-events-none animate-float ${w.size} ${w.color}`}
          style={{
            left: w.x,
            top: w.y,
            animationDelay: w.delay,
            animationDuration: `${3.5 + i * 0.4}s`,
            opacity: visible ? 1 : 0,
            transition: `opacity 1s ease ${parseFloat(w.delay) + 0.5}s`,
          }}
        >
          {w.word}
        </span>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-32">
          {/* Left: text */}
          <div
            className="text-white"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse-glow" />
              <span className="text-amber-300 text-xs font-semibold tracking-wide uppercase">
                Nauka online · Poziomy A1–C2
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] mb-6 tracking-tight">
              Opanuj{" "}
              <span className="gradient-text">Język Niemiecki</span>
              <br />
              <span className="text-white">Online — na Twoich</span>
              <br />
              <span className="text-slate-300">Zasadach</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              Elastyczne kursy dostosowane do Twojego poziomu i harmonogramu.
              Ucz się kiedy chcesz, gdzie chcesz — z pełnym wsparciem certyfikowanych
              nauczycieli. Sprawdź swój poziom <strong className="text-white">bezpłatnie</strong> w 5 minut.
            </p>

            {/* Features row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-sm text-slate-300">
              {[
                "✓ Bezpłatny test poziomu",
                "✓ Lektorzy z certyfikatami",
                "✓ Dostęp 24/7",
                "✓ Gwarancja satysfakcji",
              ].map((f) => (
                <span key={f} className="flex items-center gap-1">
                  <span className="text-amber-400">{f.slice(0, 1)}</span>
                  {f.slice(2)}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kursy" className="btn-primary text-base">
                <span>Rozpocznij naukę</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/kursy#test-poziomu" className="btn-outline text-base">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Bezpłatny test poziomu</span>
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
              {[
                { value: "12 400+", label: "Aktywnych uczniów" },
                { value: "94%", label: "Zdawalność egzaminów" },
                { value: "200+", label: "Godzin materiałów" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-amber-400">{s.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: illustration */}
          <div
            className="flex items-center justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
            }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-2xl scale-90" />
              <HeroIllustration />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-slate-500 text-xs tracking-widest uppercase">Przewiń</span>
          <div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-amber-400 rounded-full animate-scroll-hint" />
          </div>
        </div>
      </div>
    </section>
  );
}
