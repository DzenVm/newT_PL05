"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Zrób bezpłatny test poziomujący",
    desc: "W 5–10 minut określamy Twój aktualny poziom znajomości języka niemieckiego. Test jest bezpłatny i nie wymaga rejestracji. Na końcu otrzymujesz spersonalizowane rekomendacje kursu.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    details: ["Test 40 pytań", "Wynik w ciągu sekundy", "Bez rejestracji"],
    color: "from-amber-400 to-amber-500",
    shadowColor: "shadow-amber-200",
  },
  {
    num: "02",
    title: "Wybierz kurs i plan nauki",
    desc: "Na podstawie wyników wybierasz odpowiedni kurs oraz plan nauki — intensywny (codziennie 30 min) lub spokojny (3x w tygodniu). Dostosuj do swojego trybu życia.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    details: ["Elastyczny harmonogram", "Plan intensywny lub spokojny", "Możliwość zmiany w trakcie"],
    color: "from-blue-500 to-blue-600",
    shadowColor: "shadow-blue-200",
  },
  {
    num: "03",
    title: "Ucz się i ćwicz każdego dnia",
    desc: "Lekcje wideo, ćwiczenia interaktywne, dialogi do posłuchania i flashcards czekają na Ciebie każdego dnia. System przypomień dba o regularność nauki.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    details: ["Lekcje wideo HD", "Flashcards i quizy", "Aplikacja mobilna"],
    color: "from-emerald-500 to-emerald-600",
    shadowColor: "shadow-emerald-200",
  },
  {
    num: "04",
    title: "Ćwicz z lektorem i zdaj egzamin",
    desc: "Zarezerwuj sesje konwersacyjne z lektorem, by przećwiczyć mówienie. Kiedy jesteś gotowy, platforma pomaga Ci znaleźć i przygotować się do oficjalnego egzaminu językowego.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    details: ["Sesje z lektorem 1:1", "Symulacja egzaminów", "Certyfikat ukończenia"],
    color: "from-violet-500 to-violet-600",
    shadowColor: "shadow-violet-200",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 section-wave" style={{ backgroundColor: "#0f172a" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Jak to działa</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Cztery kroki do <span className="text-amber-400">biegłego Niemca</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Sprawdzony proces, który prowadzi setki Polaków od pierwszego „Hallo"
            do swobodnej rozmowy — i do zdania egzaminu.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative bg-navy-800 rounded-2xl p-7 border border-navy-700`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              }}
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 -right-3 z-10">
                  <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* Number badge */}
              <div className="text-slate-700 text-6xl font-black leading-none mb-4 select-none">{step.num}</div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-5 shadow-lg ${step.shadowColor}`}>
                {step.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{step.desc}</p>

              {/* Details */}
              <ul className="space-y-1.5">
                {step.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-slate-400">
                    <svg className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/kursy#test-poziomu" className="btn-primary text-base inline-flex">
            <span>Zacznij od bezpłatnego testu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
