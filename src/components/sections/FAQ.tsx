"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Jak wybrać odpowiedni poziom kursu?",
    a: "Skorzystaj z naszego bezpłatnego testu poziomującego — to 40 pytań, które zajmują około 10 minut. Na podstawie wyników system automatycznie rekomenduje kurs. Jeśli znasz swój wynik z egzaminu zewnętrznego (np. Goethe, telc), możesz też wybrać poziom ręcznie.",
  },
  {
    q: "Czy mogę uczyć się we własnym tempie bez sztywnych godzin?",
    a: "Tak, to jedna z głównych zalet naszej platformy. Dostęp do kursu jest aktywny przez 24 godziny na dobę, 7 dni w tygodniu. Lekcje wideo możesz oglądać wielokrotnie, przerywać i wznawiać kiedy chcesz. Jedynym wyjątkiem są sesje z lektorem — te wymagają wcześniejszej rezerwacji terminu.",
  },
  {
    q: "Czy kurs przygotowuje do oficjalnych egzaminów językowych?",
    a: "Tak. Każdy poziom kursu zawiera moduł przygotowania do egzaminów: TestDaF, Goethe-Zertifikat, telc Deutsch i ÖSD Zertifikat. Zawiera pełne symulacje egzaminów, wskazówki dotyczące każdej części (czytanie, słuchanie, pisanie, mówienie) oraz feedback lektora na eseje i wypowiedzi mówione.",
  },
  {
    q: "Jak długo trwa dostęp do materiałów?",
    a: "Subskrypcja jest miesięczna i odnawialna. Przez cały czas aktywnej subskrypcji masz dostęp do wszystkich materiałów kursu. Materiały pobrane w trybie offline zostają na urządzeniu 30 dni od ostatniego odświeżenia subskrypcji.",
  },
  {
    q: "Co jeśli już znam podstawy — czy mogę zacząć od środka?",
    a: "Oczywiście. Na podstawie testu poziomującego możesz rozpocząć od dowolnego poziomu (A1, A2, B1, B2, C1 lub C2). Możesz też w każdej chwili przełączyć się na wyższy poziom, jeśli czujesz, że aktualny jest zbyt łatwy — bez dodatkowych kosztów w ramach subskrypcji.",
  },
  {
    q: "Jak kontaktować się z lektorem i jak przebiegają sesje?",
    a: "Sesje z lektorem są opcjonalnym dodatkiem w planach Standardowym i Pro. Rezerwujesz termin przez platformę (typowo z 24h wyprzedzeniem). Sesja odbywa się przez wideo (bez instalacji dodatkowego oprogramowania) i trwa 45 lub 60 minut. Liczba sesji zależy od wybranego planu.",
  },
  {
    q: "Czy istnieje gwarancja zwrotu pieniędzy?",
    a: "Tak. Oferujemy bezwarunkową gwarancję satysfakcji przez 14 dni od daty zakupu. Jeśli w tym czasie z dowolnego powodu zdecydujesz, że kurs nie odpowiada Twoim oczekiwaniom, zwrócimy pełną kwotę bez pytań. Zwrot jest przetwarzany w ciągu 5 dni roboczych.",
  },
  {
    q: "Czy mogę przełączyć plan w trakcie subskrypcji?",
    a: "Tak, możesz w każdej chwili zmienić plan — zarówno na wyższy, jak i na niższy. Zmiana jest proporcjonalna: płacisz różnicę za pozostałe dni lub otrzymujesz kredyt do wykorzystania w kolejnym miesiącu.",
  },
  {
    q: "Jak wygląda nauka dla zupełnych początkujących?",
    a: "Kurs A1 zaczyna absolutnie od zera — pierwsza lekcja to alfabet i wymowa. Każda lekcja jest dostępna z polskimi wyjaśnieniami i komentarzami. Lektorzy znają trudności Polaków uczących się niemieckiego i adresują je wprost. Nie potrzebujesz żadnej wcześniejszej wiedzy o języku.",
  },
  {
    q: "Czy na platformie są kursy specjalistyczne (biznesowy, medyczny)?",
    a: "W planach Standardowym i Pro dostępny jest dodatkowy moduł słownictwa zawodowego: biznesowy (negocjacje, korespondencja formalna, HR), techniczny (IT, inżynieria) oraz medyczny (dla lekarzy i pielęgniarek). Moduły są dostępne od poziomu B1.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-slate-600 text-xs font-bold uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 mb-4">
            Najczęściej zadawane <span className="text-amber-500">pytania</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Nie znalazłeś odpowiedzi? <a href="/kontakt" className="text-amber-600 font-semibold hover:underline">Napisz do nas</a> — odpowiemy w ciągu 24 godzin.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 overflow-hidden transition-colors ${
                open === i ? "border-amber-400 bg-amber-50" : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-bold text-navy-900 text-base pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${open === i ? "rotate-180 text-amber-500" : "text-slate-400"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact promo */}
        <div className="mt-10 bg-slate-50 rounded-2xl p-7 text-center border border-slate-200">
          <p className="text-navy-900 font-bold text-lg mb-2">Masz inne pytanie?</p>
          <p className="text-slate-600 text-sm mb-5">Nasz zespół odpowiada na wiadomości od poniedziałku do piątku w godzinach 8:00–20:00.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:kontakt@ger4pol.site" className="btn-primary text-sm">
              Napisz do nas
            </a>
            <a href="/kontakt" className="btn-outline !text-navy-800 !border-navy-300 hover:!border-amber-400 hover:!text-amber-600 text-sm">
              Formularz kontaktowy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
