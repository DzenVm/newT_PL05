import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kursy Języka Niemieckiego Online A1–C2",
  description:
    "Przeglądaj wszystkie kursy języka niemieckiego online: od A1 dla początkujących po C2 dla zaawansowanych. Certyfikowani lektorzy, interaktywne materiały, przygotowanie do egzaminów.",
  alternates: { canonical: "https://ger4pol.site/kursy" },
};

const allCourses = [
  {
    id: "a1",
    level: "A1",
    name: "Kurs Podstawowy",
    badge: "bg-emerald-500",
    badgeText: "Dla początkujących",
    duration: "3–4 miesiące",
    lessons: 48,
    price: "119",
    desc: "Zacznij od zera. Opanuj alfabet, podstawowe zwroty, przedstawianie siebie i proste dialogi codzienne. Idealne wprowadzenie do języka niemieckiego dla osób bez żadnej wcześniejszej wiedzy.",
    topics: ["Alfabet i wymowa", "Powitania i pożegnania", "Rodzina i przyjaciele", "Liczby i kolory", "Jedzenie i napoje", "Zakupy i ceny", "Kierunki i transport", "Czas i daty"],
  },
  {
    id: "a2",
    level: "A2",
    name: "Kurs Elementarny",
    badge: "bg-lime-500",
    badgeText: "Elementarny",
    duration: "3–5 miesięcy",
    lessons: 56,
    price: "119",
    desc: "Rozwijaj swoje podstawy. Komunikuj się w typowych sytuacjach dnia codziennego: na poczcie, w hotelu, u lekarza. Gramatyka w praktyce — czas przeszły, przypadki, modalność.",
    topics: ["Podróże i transport", "Zdrowie i lekarze", "Dom i mieszkanie", "Czas wolny i hobby", "Opisywanie przeszłości", "Plany i zamierzenia", "Media i technologia", "Środowisko"],
  },
  {
    id: "b1",
    level: "B1",
    name: "Kurs Komunikacyjny",
    badge: "bg-amber-500",
    badgeText: "Samodzielny",
    duration: "4–6 miesięcy",
    lessons: 72,
    price: "149",
    desc: "Osiągnij samodzielność językową w codziennych i zawodowych sytuacjach. Rozmawiaj o pracy, kulturze, wydarzeniach. Czytaj i pisz e-maile, krótkie teksty. Klucz do pracy w Niemczech.",
    topics: ["Praca i kariera", "Niemcy i Austria — kultura", "Wiadomości i media", "Zdrowie i styl życia", "Edukacja i szkolenia", "Zakupy i usługi", "Środowisko i ekologia", "Relacje społeczne"],
  },
  {
    id: "b2",
    level: "B2",
    name: "Kurs Zawodowy",
    badge: "bg-orange-500",
    badgeText: "Sprawny",
    duration: "5–7 miesięcy",
    lessons: 84,
    price: "149",
    desc: "Komunikuj się płynnie w pracy i środowisku akademickim. Pisz raporty, prowadź negocjacje, analizuj teksty prasowe. Poziom wymagany przez większość pracodawców w Niemczech i Austrii.",
    topics: ["Komunikacja biznesowa", "Prezentacje i negocjacje", "Prasa i publicystyka", "Literatura i kultura", "Nauka i technologia", "Prawo i polityka", "Historia i geografia", "Etyka i filozofia"],
  },
  {
    id: "c1",
    level: "C1",
    name: "Kurs Zaawansowany",
    badge: "bg-rose-600",
    badgeText: "Zaawansowany",
    duration: "6–9 miesięcy",
    lessons: 96,
    price: "199",
    desc: "Komunikuj się jak native speaker w każdej sytuacji. Czytaj oryginalną literaturę, pisz akademicko, prowadź kompleksowe dyskusje. Przygotowanie do TestDaF i DSH.",
    topics: ["Akademickie pisanie esejów", "Retoryka i perswazja", "Literatura i interpretacja", "Filozofia języka", "Idiomy i kolokacje", "Proza naukowa", "Analiza medialna", "Lingwistyka stosowana"],
  },
  {
    id: "c2",
    level: "C2",
    name: "Kurs Mistrzowski",
    badge: "bg-violet-600",
    badgeText: "Biegły",
    duration: "6–12 miesięcy",
    lessons: 120,
    price: "199",
    desc: "Najwyższy poziom biegłości językowej. Rozumiesz wszystko, wyrażasz się precyzyjnie we wszystkich rejestrach, tworzysz złożone teksty jak rodowity użytkownik języka.",
    topics: ["Pełna biegłość pisemna", "Dialekty i odmiany", "Przekład i interpretacja", "Analiza literacka C2", "Stylistyka zaawansowana", "Retoryka akademicka", "Kultura i cywilizacja", "Przygotowanie do GDS"],
  },
];

export default function KursyPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div id="test-poziomu" className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Wszystkie kursy</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-5">
            Kursy Języka Niemieckiego <span className="text-amber-400">A1–C2</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Wybierz kurs odpowiedni do swojego aktualnego poziomu. Nie wiesz od czego zacząć?
            Skorzystaj z bezpłatnego testu poziomującego — wynik w 5 minut.
          </p>
          <div className="bg-navy-800 border border-amber-500/30 rounded-2xl p-6 max-w-lg mx-auto">
            <p className="text-amber-300 font-bold mb-2">🎯 Bezpłatny test poziomu</p>
            <p className="text-slate-400 text-sm mb-4">40 pytań · 5–10 minut · Wynik natychmiastowy</p>
            <Link href="/kontakt" className="btn-primary text-sm w-full justify-center">
              Rozpocznij test poziomu
            </Link>
          </div>
        </div>
      </div>

      {/* Courses grid */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {allCourses.map((c) => (
              <div key={c.id} id={c.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm card-hover overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-7 border-b border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`level-badge ${c.badge} text-white text-sm px-3 py-1`}>{c.level}</span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">{c.badgeText}</span>
                  </div>
                  <h2 className="text-xl font-extrabold text-navy-900 mb-2">{c.name}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
                </div>

                {/* Meta */}
                <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
                  <div className="p-4 text-center">
                    <p className="font-bold text-navy-900 text-sm">{c.duration}</p>
                    <p className="text-slate-500 text-xs">Czas trwania</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-bold text-navy-900 text-sm">{c.lessons}</p>
                    <p className="text-slate-500 text-xs">Lekcji</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-bold text-navy-900 text-sm">{c.price} zł</p>
                    <p className="text-slate-500 text-xs">/miesiąc</p>
                  </div>
                </div>

                {/* Topics */}
                <div className="p-7 flex-1">
                  <p className="font-bold text-navy-900 text-sm mb-3">Tematy kursu:</p>
                  <div className="flex flex-wrap gap-2">
                    {c.topics.map((t) => (
                      <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">{t}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-7 pt-0">
                  <Link href="/cennik" className="btn-primary w-full justify-center text-sm">
                    Zapisz się na kurs {c.level}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-navy-900 mb-4">
            Potrzebujesz pomocy w wyborze kursu?
          </h2>
          <p className="text-slate-600 mb-6">
            Nasi doradcy językowi pomogą wybrać kurs dostosowany do Twoich celów i harmonogramu.
            Konsultacja jest bezpłatna.
          </p>
          <Link href="/kontakt" className="btn-primary text-base inline-flex">
            Bezpłatna konsultacja
          </Link>
        </div>
      </div>
    </div>
  );
}
