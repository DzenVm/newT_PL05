"use client";
import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Nauka we własnym tempie",
    desc: "Planuj naukę według swojego harmonogramu. Materiały dostępne 24/7 — ucz się rano, wieczorem lub w weekendy. Żadnych sztywnych godzin.",
    accent: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Certyfikowane materiały",
    desc: "Treści opracowane zgodnie ze standardami Europejskiego Systemu Opisu Kształcenia Językowego (CEFR). Przygotuj się do egzaminów TestDaF, Goethe i telc.",
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Doświadczeni lektorzy",
    desc: "Nasi nauczyciele to specjaliści z certyfikatami metodycznymi i długoletnim doświadczeniem w nauczaniu Polaków. Znają Twoje specyficzne trudności z wymową i gramatyką.",
    accent: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Interaktywne ćwiczenia",
    desc: "Ponad 2 000 interaktywnych ćwiczeń, flashcards, dialogi do odsłuchiwania i quizy adaptacyjne, które dostosowują się do Twoich słabości. Nauka przez działanie.",
    accent: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Nauka na każdym urządzeniu",
    desc: "Pełna wersja kursu działa na komputerze, tablecie i smartfonie. Pobierz materiały do nauki offline w podróży lub w miejscach bez internetu.",
    accent: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Wsparcie i forum społeczności",
    desc: "Zadaj pytanie lektorowi mailowo, dołącz do grupy ćwiczeniowej lub skorzystaj z forum, gdzie polscy uczniowie dzielą się wskazówkami i motywują się nawzajem.",
    accent: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">Dlaczego my</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 mb-4">
            Nauka, która <span className="text-amber-500">naprawdę działa</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Łączymy sprawdzone metody pedagogiczne z nowoczesną technologią, aby każda godzina nauki
            przynosiła maksymalne efekty.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`card-hover bg-white rounded-2xl p-7 border ${b.border} shadow-sm`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div className={`w-14 h-14 ${b.bg} ${b.accent} rounded-2xl flex items-center justify-center mb-5`}>
                {b.icon}
              </div>
              <h3 className="text-navy-900 font-bold text-lg mb-3">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
