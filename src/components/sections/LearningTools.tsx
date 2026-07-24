"use client";

const tools = [
  {
    icon: "🎬",
    title: "Lekcje wideo HD",
    desc: "Profesjonalne nagrania w rozdzielczości HD z napisami w języku polskim i niemieckim. Każda lekcja dostępna do wielokrotnego obejrzenia.",
    features: ["Napisy PL/DE", "Regulacja prędkości", "Pobieranie offline"],
  },
  {
    icon: "🃏",
    title: "Flashcards z SRS",
    desc: "Inteligentny system powtórek spaced repetition (SRS) planuje powtórki w optymalnych odstępach czasu, maksymalizując trwałość wspomnień.",
    features: ["Algorytm SRS", "Obrazki i audio", "Statystyki postępów"],
  },
  {
    icon: "🎙️",
    title: "Rozpoznawanie mowy",
    desc: "Ćwicz wymowę z AI, który ocenia Twój akcent w czasie rzeczywistym i wskazuje konkretne dźwięki wymagające poprawy.",
    features: ["Ocena wymowy AI", "Porównanie z rodowitem", "Ćwiczenia fonetyczne"],
  },
  {
    icon: "📝",
    title: "Interaktywne ćwiczenia",
    desc: "Ponad 2 000 ćwiczeń różnych typów: uzupełnianie luk, dopasowywanie, tłumaczenie, budowanie zdań i wiele więcej.",
    features: ["2 000+ ćwiczeń", "Adaptacyjna trudność", "Natychmiastowy feedback"],
  },
  {
    icon: "🎧",
    title: "Dialogi audio",
    desc: "Setki nagrań audio z rodnowymówieniem — dialogi, wywiady, wiadomości. Ucz się naturalnego języka mówionego.",
    features: ["Rdzenne wymowy", "Przebieg konwersacji", "Zadania do słuchania"],
  },
  {
    icon: "📊",
    title: "Śledzenie postępów",
    desc: "Szczegółowy dashboard pokazuje Twój postęp w każdej umiejętności, czas nauki, serię dni i prognozowaną datę osiągnięcia celu.",
    features: ["Dashboard postępów", "Seria dni nauki", "Prognoza ukończenia"],
  },
  {
    icon: "📱",
    title: "Aplikacja mobilna",
    desc: "Pełna wersja kursu w aplikacji na iOS i Android. Tryb offline pozwala uczyć się bez internetu — w autobusie, pociągu czy samolocie.",
    features: ["iOS i Android", "Tryb offline", "Synchronizacja cloud"],
  },
  {
    icon: "👨‍🏫",
    title: "Sesje z lektorem",
    desc: "Zarezerwuj rozmowę 1:1 lub grupową z certyfikowanym lektorem. Ćwicz mówienie, pytaj o wątpliwości, dostaj osobisty feedback.",
    features: ["Lekcje 1:1", "Grupy konwersacyjne", "Feedback na żywo"],
  },
];

export default function LearningTools() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Narzędzia do nauki</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 mb-4">
            Kompletny zestaw <span className="text-amber-500">narzędzi do nauki</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Wszystko w jednym miejscu — od lekcji wideo przez flashcards po sesje z lektorem.
            Nie potrzebujesz żadnych dodatkowych narzędzi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <div
              key={tool.title}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm card-hover"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="font-bold text-navy-900 text-base mb-2">{tool.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{tool.desc}</p>
              <ul className="space-y-1.5">
                {tool.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Devices row */}
        <div className="mt-14 bg-navy-900 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-4">
                Ucz się na każdym urządzeniu
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Platforma działa na komputerze, tablecie i smartfonie. Zacznij lekcję
                na laptopie rano, kontynuuj na telefonie w przerwie obiadowej. Twój
                postęp synchronizuje się w czasie rzeczywistym.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Windows", "macOS", "iOS", "Android", "Linux"].map((os) => (
                  <span key={os} className="bg-navy-800 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-navy-700">
                    {os}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              {/* Simple device mockup SVG */}
              <svg viewBox="0 0 400 200" className="w-full max-w-sm">
                {/* Laptop */}
                <rect x="20" y="20" width="220" height="140" rx="8" fill="#1e3a5f" />
                <rect x="28" y="28" width="204" height="124" rx="4" fill="#233158" />
                <rect x="20" y="158" width="220" height="12" rx="0" fill="#0f172a" />
                <rect x="0" y="168" width="260" height="8" rx="4" fill="#0f172a" />
                {/* Screen content */}
                <rect x="36" y="36" width="80" height="8" rx="4" fill="#f59e0b" opacity="0.8" />
                <rect x="36" y="52" width="188" height="6" rx="3" fill="#475569" opacity="0.5" />
                <rect x="36" y="64" width="170" height="6" rx="3" fill="#475569" opacity="0.4" />
                <rect x="36" y="80" width="60" height="60" rx="6" fill="#1a2744" />
                <rect x="104" y="80" width="120" height="28" rx="6" fill="#1a2744" />
                <rect x="104" y="115" width="55" height="25" rx="6" fill="#f59e0b" opacity="0.7" />
                <rect x="166" y="115" width="58" height="25" rx="6" fill="#1e3a5f" />

                {/* Phone */}
                <rect x="300" y="30" width="80" height="140" rx="12" fill="#1e3a5f" />
                <rect x="307" y="42" width="66" height="116" rx="6" fill="#233158" />
                <circle cx="340" cy="38" r="3" fill="#0f172a" />
                <circle cx="340" cy="162" r="6" fill="#0f172a" />
                {/* Phone screen */}
                <rect x="313" y="50" width="54" height="8" rx="4" fill="#f59e0b" opacity="0.7" />
                <rect x="313" y="64" width="40" height="5" rx="2.5" fill="#475569" opacity="0.5" />
                <rect x="313" y="74" width="54" height="40" rx="4" fill="#1a2744" />
                <rect x="313" y="120" width="25" height="18" rx="3" fill="#1a2744" />
                <rect x="342" y="120" width="25" height="18" rx="3" fill="#f59e0b" opacity="0.5" />

                {/* Tablet between them */}
                <rect x="240" y="50" width="50" height="110" rx="6" fill="#1a2744" opacity="0.7" />
                <rect x="245" y="58" width="40" height="94" rx="4" fill="#233158" opacity="0.8" />
                <rect x="250" y="64" width="30" height="5" rx="2.5" fill="#f59e0b" opacity="0.5" />
                <rect x="250" y="74" width="30" height="30" rx="3" fill="#1e3a5f" />
                <rect x="250" y="110" width="30" height="5" rx="2.5" fill="#475569" opacity="0.4" />
                <rect x="250" y="120" width="30" height="5" rx="2.5" fill="#475569" opacity="0.3" />

                {/* WiFi sync arrows */}
                <path d="M270 25 C270 15 290 10 300 15" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeDasharray="4 3" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
