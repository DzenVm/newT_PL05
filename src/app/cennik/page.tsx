import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cennik Kursów Języka Niemieckiego Online",
  description:
    "Przejrzyste ceny kursów języka niemieckiego online. Plan Podstawowy od 99 zł/mies. Gwarancja zwrotu 14 dni. Porównaj plany Podstawowy, Standardowy i Pro.",
  alternates: { canonical: "https://ger4pol.site/cennik" },
};

const plans = [
  {
    name: "Podstawowy",
    price: "99",
    period: "miesięcznie",
    desc: "Idealne wprowadzenie dla osób, które chcą sprawdzić platformę lub uczą się w wolniejszym tempie.",
    color: "border-slate-200",
    badge: null,
    features: [
      { text: "Dostęp do 1 poziomu kursu", included: true },
      { text: "Wszystkie lekcje wideo", included: true },
      { text: "Interaktywne ćwiczenia", included: true },
      { text: "System flashcards SRS", included: true },
      { text: "Aplikacja mobilna (iOS/Android)", included: true },
      { text: "Certyfikat ukończenia kursu", included: true },
      { text: "Sesje z lektorem", included: false },
      { text: "Dostęp do 3+ poziomów", included: false },
      { text: "Symulacja egzaminów oficjalnych", included: false },
      { text: "Moduł słownictwa zawodowego", included: false },
    ],
    cta: "Wybierz plan Podstawowy",
    ctaStyle: "btn-outline !text-navy-800 !border-navy-300 hover:!border-amber-400 hover:!text-amber-600 w-full justify-center",
  },
  {
    name: "Standardowy",
    price: "149",
    period: "miesięcznie",
    desc: "Najlepszy wybór dla zdecydowanej większości uczniów. Pełny dostęp z sesjami lektora.",
    color: "border-amber-400",
    badge: "Najpopularniejszy",
    features: [
      { text: "Dostęp do 3 poziomów kursu", included: true },
      { text: "Wszystkie lekcje wideo", included: true },
      { text: "Interaktywne ćwiczenia", included: true },
      { text: "System flashcards SRS", included: true },
      { text: "Aplikacja mobilna (iOS/Android)", included: true },
      { text: "Certyfikat ukończenia kursu", included: true },
      { text: "2 sesje z lektorem/miesiąc", included: true },
      { text: "Symulacja egzaminów oficjalnych", included: true },
      { text: "Moduł słownictwa zawodowego", included: true },
      { text: "Forum społeczności", included: true },
    ],
    cta: "Wybierz plan Standardowy",
    ctaStyle: "btn-primary w-full justify-center",
  },
  {
    name: "Pro",
    price: "199",
    period: "miesięcznie",
    desc: "Dla tych, którzy chcą osiągnąć cel jak najszybciej i potrzebują maksymalnego wsparcia lektora.",
    color: "border-violet-300",
    badge: null,
    features: [
      { text: "Pełny dostęp do wszystkich poziomów (A1–C2)", included: true },
      { text: "Wszystkie lekcje wideo", included: true },
      { text: "Interaktywne ćwiczenia", included: true },
      { text: "System flashcards SRS", included: true },
      { text: "Aplikacja mobilna (iOS/Android)", included: true },
      { text: "Certyfikat ukończenia kursu", included: true },
      { text: "4 sesje z lektorem/miesiąc (1:1)", included: true },
      { text: "Pełna symulacja + ocena egzaminów", included: true },
      { text: "Wszystkie moduły zawodowe", included: true },
      { text: "Priorytetowe wsparcie", included: true },
    ],
    cta: "Wybierz plan Pro",
    ctaStyle: "btn-outline !text-navy-800 !border-navy-300 hover:!border-amber-400 hover:!text-amber-600 w-full justify-center",
  },
];

export default function CennikPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="bg-navy-900 py-16 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Cennik</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-5">
            Przejrzyste <span className="text-amber-400">ceny bez niespodzianek</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Anuluj w każdej chwili. 14-dniowa gwarancja zwrotu pieniędzy bez pytań.
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-7 mb-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 ${plan.color} shadow-sm ${plan.badge ? "shadow-amber-100 shadow-xl" : ""} flex flex-col`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <div className={`p-8 ${plan.badge ? "bg-amber-50" : ""} rounded-t-2xl`}>
                  <h2 className="text-xl font-extrabold text-navy-900 mb-1">{plan.name}</h2>
                  <p className="text-slate-500 text-sm mb-5">{plan.desc}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-extrabold text-navy-900">{plan.price} zł</span>
                    <span className="text-slate-500 text-sm">/{plan.period.replace("miesięcznie", "mies.")}</span>
                  </div>
                  <p className="text-slate-400 text-xs mb-6">Rozliczenie miesięczne. Anuluj kiedy chcesz.</p>
                  <Link href="/kontakt" className={plan.ctaStyle}>
                    {plan.cta}
                  </Link>
                </div>
                <div className="p-8 pt-6 flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.text} className={`flex items-start gap-3 text-sm ${f.included ? "text-slate-700" : "text-slate-400"}`}>
                        {f.included ? (
                          <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-7 text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-xl font-extrabold text-navy-900 mb-2">Gwarancja satysfakcji 14 dni</h3>
            <p className="text-slate-600 max-w-xl mx-auto">
              Jeśli w ciągu 14 dni od pierwszego zakupu zdecydujesz, że kurs nie spełnia Twoich oczekiwań
              — zwracamy pełną kwotę bez pytań, bez biurokracji, bez zbędnych formalności.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ mini */}
      <div className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-navy-900 mb-8 text-center">Pytania o płatności</h2>
          <div className="space-y-4">
            {[
              { q: "Czy mogę anulować subskrypcję?", a: "Tak, w dowolnym momencie przez panel użytkownika lub na żądanie wysłane e-mailem. Anulowanie wchodzi w życie z końcem bieżącego okresu rozliczeniowego." },
              { q: "Jakie metody płatności akceptujecie?", a: "Akceptujemy karty Visa, Mastercard, przelewy bankowe (BLIK) oraz PayPal." },
              { q: "Czy cena zmienia się po pierwszym miesiącu?", a: "Nie. Cena podana w momencie zakupu obowiązuje przez cały czas trwania subskrypcji, chyba że samodzielnie zmienisz plan." },
              { q: "Czy mogę kupić kurs na prezent?", a: "Tak. Skontaktuj się z nami e-mailem, a wystawimy specjalny voucher prezentowy na wybrany kurs i plan." },
            ].map((item) => (
              <div key={item.q} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <p className="font-bold text-navy-900 mb-2">{item.q}</p>
                <p className="text-slate-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
