"use client";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const LevelsIllustration = dynamic(
  () => import("@/components/illustrations/LevelsIllustration"),
  { ssr: false }
);

const levels = [
  {
    code: "A1",
    name: "Podstawowy",
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    activeBorder: "border-emerald-500",
    progress: 17,
    duration: "3–4 miesiące",
    lessons: 48,
    desc: "Kurs dla osób, które nigdy wcześniej nie miały kontaktu z językiem niemieckim. Zacznij od podstaw i buduj pewność siebie krok po kroku.",
    skills: [
      "Podstawowe zwroty i powitania (Hallo, Guten Morgen, Auf Wiedersehen)",
      "Przedstawianie siebie – imię, wiek, kraj, zawód",
      "Liczby, kolory, dni tygodnia, miesiące",
      "Zamawianie jedzenia i napojów w kawiarni",
      "Zakupy – pytanie o cenę i rozmiary",
      "Opisywanie rodziny i miejsca zamieszkania",
      "Podstawy gramatyki: rodzajniki, odmiana czasownika sein/haben",
    ],
    forWhom: "Dla absolutnych początkujących",
    exams: "Przygotowanie do egzaminu A1",
  },
  {
    code: "A2",
    name: "Elementarny",
    color: "bg-lime-500",
    textColor: "text-lime-700",
    bg: "bg-lime-50",
    border: "border-lime-200",
    activeBorder: "border-lime-500",
    progress: 33,
    duration: "3–5 miesięcy",
    lessons: 56,
    desc: "Rozwiń podstawy i zacznij porozumiewać się w typowych sytuacjach dnia codziennego. Ten poziom otwiera drzwi do pracy i podróży.",
    skills: [
      "Komunikacja w podróży – lotnisko, hotel, transport",
      "Opisywanie czynności dnia codziennego",
      "Rozmowy telefoniczne – umawianie wizyt",
      "Wyrażanie upodobań i preferencji",
      "Zdrowie – wizyta u lekarza, apteka",
      "Czas przeszły (Perfekt i Präteritum)",
      "Przypadki w języku niemieckim (Nominativ, Akkusativ, Dativ)",
    ],
    forWhom: "Dla tych z podstawami A1",
    exams: "Przygotowanie do egzaminów Goethe A2, telc A2",
  },
  {
    code: "B1",
    name: "Średniozaawansowany",
    color: "bg-amber-500",
    textColor: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    activeBorder: "border-amber-500",
    progress: 50,
    duration: "4–6 miesięcy",
    lessons: 72,
    desc: "Osiągnij samodzielność językową. Rozmawiaj na tematy bliskie Ci w pracy, w podróży i w codziennym życiu. Kluczowy poziom dla osób planujących pracę w Niemczech.",
    skills: [
      "Swobodna rozmowa na znane tematy (praca, hobby, kultura)",
      "Rozumienie i pisanie tekstów użytkowych (maile, formularze)",
      "Radzenie sobie w nieprzewidzianych sytuacjach",
      "Wyrażanie opinii i argumentowanie",
      "Niemcy i Austria – kultura, obyczaje, historia",
      "Tryb Konjunktiv II – prośby, przypuszczenia",
      "Zdania złożone i spójniki podrzędne",
    ],
    forWhom: "Dla samodzielnych użytkowników języka",
    exams: "Przygotowanie do B1 Goethe, telc B1, TestDaF (wstępny)",
  },
  {
    code: "B2",
    name: "Wyższy",
    color: "bg-orange-500",
    textColor: "text-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
    activeBorder: "border-orange-500",
    progress: 67,
    duration: "5–7 miesięcy",
    lessons: 84,
    desc: "Komunikuj się płynnie w kontekście zawodowym i akademickim. Piszesz raporty, prowadzisz negocjacje, rozumiesz media w języku niemieckim.",
    skills: [
      "Prezentacje i dyskusje w środowisku zawodowym",
      "Analiza tekstów literackich i publicystycznych",
      "Pisanie formalnych listów i raportów",
      "Rozumienie artykułów prasowych i podcastów",
      "Rejestr formalny i nieformalny – różnice i zastosowanie",
      "Pasywne formy czasownika (Passiv)",
      "Rozbudowana składnia i stylistyka",
    ],
    forWhom: "Dla sprawnych użytkowników języka",
    exams: "Przygotowanie do TestDaF, Goethe B2, telc B2, DSH",
  },
  {
    code: "C1",
    name: "Zaawansowany",
    color: "bg-rose-600",
    textColor: "text-rose-700",
    bg: "bg-rose-50",
    border: "border-rose-200",
    activeBorder: "border-rose-600",
    progress: 83,
    duration: "6–9 miesięcy",
    lessons: 96,
    desc: "Używaj języka sprawnie i spontanicznie w nauce, pracy i życiu codziennym. Czytasz oryginalną literaturę, piszesz akademicko — na poziomie niemal rodzimego użytkownika.",
    skills: [
      "Spontaniczna i płynna komunikacja w każdym kontekście",
      "Pisanie prac akademickich i analitycznych",
      "Rozumienie złożonych tekstów naukowych i literackich",
      "Rozróżnianie niuansów znaczeniowych i idiomów",
      "Retoryka i techniki perswazji",
      "Rozbudowane struktury gramatyczne i stylistica",
      "Przygotowanie do studiów lub pracy naukowej w Niemczech",
    ],
    forWhom: "Dla zaawansowanych użytkowników dążących do biegłości",
    exams: "Przygotowanie do C1 Goethe, telc C1 Hochschule, DSH",
  },
  {
    code: "C2",
    name: "Biegły",
    color: "bg-violet-600",
    textColor: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-200",
    activeBorder: "border-violet-600",
    progress: 100,
    duration: "6–12 miesięcy",
    lessons: 120,
    desc: "Najwyższy poziom według CEFR. Rozumiesz wszystko, co czytasz lub słyszysz. Wyrażasz się precyzyjnie w każdym rejestrze — jak rodzony użytkownik języka.",
    skills: [
      "Pełne rozumienie wszelkich tekstów i wypowiedzi",
      "Tworzenie spójnych, wyczerpujących tekstów",
      "Interpretacja literatury, poezji i tekstów filozoficznych",
      "Znajomość wszystkich dialektów i odmian języka",
      "Kulturowe subtelności i wiedza encyklopedyczna",
      "Przekład i interpretacja",
      "Praca jako tłumacz lub nauczyciel",
    ],
    forWhom: "Dla osób dążących do pełnej biegłości",
    exams: "Przygotowanie do C2 Goethe (GDS)",
  },
];

export default function CourseLevels() {
  const [active, setActive] = useState(0);
  const level = levels[active];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-navy-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-navy-700 text-xs font-bold uppercase tracking-wider">Poziomy językowe CEFR</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 mb-4">
            Od <span className="text-amber-500">A1 do C2</span> — wybierz swój poziom
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Nie wiesz, który poziom wybrać? Zrób bezpłatny test i dowiedz się w 5 minut,
            od jakiego kursu powinieneś zacząć.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Tabs */}
          <div className="lg:col-span-2">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {levels.map((l, i) => (
                <button
                  key={l.code}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all flex-shrink-0 w-full ${
                    active === i
                      ? `${l.bg} ${l.activeBorder} shadow-sm`
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span className={`level-badge ${active === i ? `${l.color} text-white` : "bg-slate-200 text-slate-600"}`}>
                    {l.code}
                  </span>
                  <div className="min-w-0">
                    <p className={`font-bold text-sm ${active === i ? l.textColor : "text-slate-700"}`}>
                      {l.name}
                    </p>
                    <p className="text-xs text-slate-500">{l.duration}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="progress-bar w-16">
                      <div
                        className="progress-fill"
                        style={{ width: `${active === i ? l.progress : 0}%`, transition: "width 0.6s ease" }}
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Illustration */}
            <div className="hidden lg:block mt-8">
              <LevelsIllustration />
            </div>
          </div>

          {/* Detail panel */}
          <div className={`lg:col-span-3 ${level.bg} rounded-2xl p-8 border-2 ${level.activeBorder}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className={`level-badge ${level.color} text-white text-base px-4 py-1.5`}>{level.code}</span>
              <h3 className="text-2xl font-extrabold text-navy-900">{level.name}</h3>
            </div>

            <p className="text-slate-700 text-base leading-relaxed mb-6">{level.desc}</p>

            {/* Info row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-7">
              <div className="bg-white/70 rounded-xl p-3.5">
                <p className="text-xs text-slate-500 mb-1">Czas trwania</p>
                <p className="font-bold text-navy-900 text-sm">{level.duration}</p>
              </div>
              <div className="bg-white/70 rounded-xl p-3.5">
                <p className="text-xs text-slate-500 mb-1">Liczba lekcji</p>
                <p className="font-bold text-navy-900 text-sm">{level.lessons} lekcji</p>
              </div>
              <div className="bg-white/70 rounded-xl p-3.5">
                <p className="text-xs text-slate-500 mb-1">Egzaminy</p>
                <p className="font-bold text-navy-900 text-sm">{level.exams.split(" ")[2] ?? level.code}</p>
              </div>
            </div>

            {/* Skills */}
            <h4 className="font-bold text-navy-900 mb-3">Czego się nauczysz:</h4>
            <ul className="space-y-2 mb-7">
              {level.skills.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${level.textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={`/kursy#${level.code.toLowerCase()}`} className="btn-primary text-sm">
                <span>Zapisz się na kurs {level.code}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/kursy#test-poziomu" className="btn-outline !text-navy-800 !border-navy-300 hover:!border-amber-500 hover:!text-amber-600 text-sm">
                Nie znam swojego poziomu → test
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
