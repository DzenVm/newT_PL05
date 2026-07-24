"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const OnlineLearning = dynamic(
  () => import("@/components/illustrations/OnlineLearning"),
  { ssr: false }
);

const testimonials = [
  {
    initials: "MK",
    name: "Marta K.",
    location: "Warszawa",
    level: "C1",
    stars: 5,
    date: "marzec 2025",
    text: "Zdałam egzamin TestDaF na poziomie TDN 4 z każdej części! Kurs naprawdę dobrze przygotowuje do egzaminu — symulacje były bardzo zbliżone do rzeczywistego testu. Polecam każdemu, kto poważnie traktuje naukę.",
    goal: "Przygotowanie do TestDaF",
    result: "TDN 4 w każdej części",
    color: "bg-amber-500",
  },
  {
    initials: "TW",
    name: "Tomasz W.",
    location: "Kraków",
    level: "B2",
    stars: 5,
    date: "styczeń 2025",
    text: "W 8 miesięcy osiągnąłem poziom B2 i teraz pracuję jako inżynier w Monachium. Kurs B1–B2 był strzałem w dziesiątkę — szczególnie moduł słownictwa zawodowego i technicznego. Gdybym uczył się tradycyjnie, zajęłoby mi to 2 lata.",
    goal: "Praca w Niemczech",
    result: "Inżynier w Monachium",
    color: "bg-blue-500",
  },
  {
    initials: "AN",
    name: "Anna N.",
    location: "Wrocław",
    level: "B1",
    stars: 5,
    date: "kwiecień 2025",
    text: "Jestem mamą trojga dzieci i nie miałam czasu na tradycyjną szkołę językową. Elastyczny harmonogram na tej platformie pozwolił mi uczyć się wieczorami po 20–30 minut. Po roku mam B1 i już rozumiem teściową z Berlina!",
    goal: "Komunikacja z rodziną",
    result: "B1 po 12 miesiącach",
    color: "bg-emerald-500",
  },
  {
    initials: "PB",
    name: "Piotr B.",
    location: "Gdańsk",
    level: "A2",
    stars: 5,
    date: "luty 2025",
    text: "Wcześniej próbowałem uczyć się z podręczników i aplikacji mobilnych — bez efektu. Tutaj lekcje są żywe, lektorzy tłumaczą po polsku gdy trzeba, a system powtórek naprawdę działa. Polecam szczególnie kurs A1–A2.",
    goal: "Nauka od zera",
    result: "A2 w 6 miesięcy",
    color: "bg-rose-500",
  },
  {
    initials: "KL",
    name: "Katarzyna L.",
    location: "Poznań",
    level: "C2",
    stars: 5,
    date: "maj 2025",
    text: "Przygotowywałam się do egzaminu Goethe C2 (GDS) przez 18 miesięcy. Zdałam z wynikiem 89 punktów. Trudne części — esej i dyskusja — były dokładnie omawiane w kursie. Jakość materiałów porównywalna z drogimi szkołami językowymi.",
    goal: "Certyfikat C2 Goethe",
    result: "89 pkt — zdany!",
    color: "bg-violet-500",
  },
  {
    initials: "RS",
    name: "Robert S.",
    location: "Łódź",
    level: "B2",
    stars: 4,
    date: "marzec 2025",
    text: "Dobra platforma z szerokim materiałem. Sesje z lektorem 1:1 są wartościowe — lektor daje konkretny feedback na wymowę. Jedyna uwaga: początkowo brakowało mi więcej nagrań dialektów regionalnych, ale moduł zaawansowany je ma.",
    goal: "Doskonalenie akcentu",
    result: "Wymowa bez akcentu polskiego",
    color: "bg-orange-500",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-slate-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-navy-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Opinie uczniów</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Co mówią <span className="text-amber-400">nasi uczniowie</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ponad 12 000 Polaków wybrało tę platformę do nauki niemieckiego.
            Przeczytaj ich prawdziwe opinie i osiągnięcia.
          </p>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <Stars count={5} />
            <span className="text-white font-bold text-xl">4.9</span>
            <span className="text-slate-400 text-sm">(2 847 opinii)</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card bg-navy-800 rounded-2xl p-7 border border-navy-700 flex flex-col"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.location} · {t.date}</p>
                </div>
                <div className="ml-auto">
                  <span className="level-badge bg-slate-700 text-slate-300">{t.level}</span>
                </div>
              </div>

              <Stars count={t.stars} />
              <p className="text-slate-300 text-sm leading-relaxed mt-4 mb-5 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Goal/result */}
              <div className="border-t border-navy-700 pt-4 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Cel</p>
                  <p className="text-slate-300 text-xs font-semibold">{t.goal}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Efekt</p>
                  <p className="text-amber-400 text-xs font-bold">{t.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Illustration + CTA */}
        <div className="bg-navy-800 rounded-3xl overflow-hidden border border-navy-700">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
                Dołącz do 12 400+ uczniów, <br />
                <span className="text-amber-400">którzy już uczą się z nami</span>
              </h3>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Zacznij od bezpłatnego testu poziomującego. W 5 minut dowiesz się,
                który kurs jest dla Ciebie — bez zobowiązań, bez karty kredytowej.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/kursy#test-poziomu" className="btn-primary text-sm">
                  <span>Zrób bezpłatny test</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="/kontakt" className="btn-outline text-sm">Porozmawiaj z doradcą</a>
              </div>
            </div>
            <div className="p-8 flex items-center justify-center bg-navy-900/40">
              <OnlineLearning />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
