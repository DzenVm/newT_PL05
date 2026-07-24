"use client";
import Link from "next/link";

const courses = [
  {
    level: "A1–A2",
    levelColor: "bg-emerald-500",
    title: "Kurs dla Początkujących",
    subtitle: "Pierwsze kroki w języku niemieckim",
    duration: "6–9 miesięcy",
    lessons: 104,
    price: "119",
    oldPrice: "159",
    popular: false,
    desc: "Idealny punkt startowy dla osób, które nigdy wcześniej nie uczyły się niemieckiego. Zacznij od powitań i podstawowych zdań, by skończyć na swobodnej rozmowie o codziennym życiu.",
    includes: ["104 lekcje wideo", "1 800 ćwiczeń interaktywnych", "Słownik A1–A2 (2 000 słów)", "Aplikacja mobilna", "Certyfikat ukończenia"],
    tag: null,
  },
  {
    level: "B1–B2",
    levelColor: "bg-amber-500",
    title: "Kurs Komunikacyjny",
    subtitle: "Komunikacja w pracy i podróży",
    duration: "9–14 miesięcy",
    lessons: 156,
    price: "149",
    oldPrice: "199",
    popular: true,
    desc: "Najpopularniejszy kurs na platformie. Przygotowuje do samodzielnej pracy w Niemczech, zdania egzaminu B1/B2 oraz codziennej komunikacji bez tłumacza.",
    includes: ["156 lekcji wideo", "3 200 ćwiczeń", "Leksyka B1–B2 (5 000 słów)", "2 sesje z lektorem/m-c", "Symulacja egzaminu", "Certyfikat ukończenia"],
    tag: "Najchętniej wybierany",
  },
  {
    level: "C1–C2",
    levelColor: "bg-violet-600",
    title: "Kurs Zaawansowany",
    subtitle: "Biegłość i certyfikaty oficjalne",
    duration: "12–20 miesięcy",
    lessons: 216,
    price: "199",
    oldPrice: "269",
    popular: false,
    desc: "Dla tych, którzy chcą osiągnąć poziom C1 lub C2 i uzyskać oficjalny certyfikat Goethe, DSH lub TestDaF. Intensywny trening akademicki i zawodowy.",
    includes: ["216 lekcji wideo", "5 000 ćwiczeń", "Pełny leksykon C1–C2", "4 sesje z lektorem/m-c", "Pełna symulacja egzaminu", "Oficjalny certyfikat ukończenia", "Dostęp do archiwum"],
    tag: null,
  },
];

export default function PopularCourses() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">Popularne kursy</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 mb-4">
            Wybierz kurs <span className="text-amber-500">dopasowany do Twoich celów</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Każdy kurs zawiera wszystko, czego potrzebujesz — od materiałów wideo przez ćwiczenia
            po sesje z lektorem i symulację egzaminu.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7 mb-10">
          {courses.map((c) => (
            <div
              key={c.title}
              className={`relative rounded-2xl border-2 overflow-hidden card-hover flex flex-col ${
                c.popular ? "border-amber-400 shadow-xl shadow-amber-100" : "border-slate-200 shadow-sm"
              }`}
            >
              {/* Popular tag */}
              {c.tag && (
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {c.tag}
                </div>
              )}

              {/* Top */}
              <div className={`p-7 ${c.popular ? "bg-amber-50" : "bg-slate-50"}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`level-badge ${c.levelColor} text-white`}>{c.level}</span>
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-1">{c.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{c.subtitle}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-navy-900">{c.price} zł</span>
                  <span className="text-slate-400 line-through text-sm">{c.oldPrice} zł</span>
                  <span className="text-xs text-slate-500">/miesiąc</span>
                </div>
                <p className="text-xs text-slate-500 mb-5">Czas trwania: {c.duration} · {c.lessons} lekcji</p>

                <Link
                  href="/kursy"
                  className={c.popular ? "btn-primary w-full justify-center text-sm" : "btn-outline !text-navy-800 !border-navy-300 hover:!border-amber-400 hover:!text-amber-600 w-full justify-center text-sm"}
                >
                  Zapisz się na kurs
                </Link>
              </div>

              {/* Body */}
              <div className="p-7 flex-1">
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{c.desc}</p>
                <h4 className="font-bold text-navy-900 text-sm mb-3">W zestawie:</h4>
                <ul className="space-y-2">
                  {c.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="bg-slate-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-600 border border-slate-200">
          <div className="flex items-center gap-2 flex-shrink-0">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <strong className="text-navy-900">Gwarancja 14 dni</strong>
          </div>
          <p>Jeśli w ciągu 14 dni od zakupu zdecydujesz, że kurs nie spełnia Twoich oczekiwań — zwracamy pieniądze bez pytań. Nauka bez ryzyka.</p>
          <Link href="/cennik" className="flex-shrink-0 text-amber-600 font-semibold hover:underline">
            Porównaj plany →
          </Link>
        </div>
      </div>
    </section>
  );
}
