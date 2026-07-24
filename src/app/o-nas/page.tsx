import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nas — Platforma Nauki Języka Niemieckiego",
  description:
    "Dowiedz się więcej o platformie ger4pol.site — misja, metodologia, zespół pedagogiczny i historia. Nauka niemieckiego dla Polaków od A1 do C2.",
  alternates: { canonical: "https://ger4pol.site/o-nas" },
};

export default function ONasPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">O nas</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-5">
            Platforma stworzona przez <span className="text-amber-400">Polaków dla Polaków</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Wiemy, jak trudno jest uczyć się języka obcego z platform stworzonych dla uczniów
            z całego świata. Dlatego zbudowaliśmy coś specjalnego — kurs języka niemieckiego,
            który uwzględnia specyfikę polskiego ucznia.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-navy-900 mb-5">Nasza misja</h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Naszą misją jest sprawienie, że każdy Polak, który chce nauczyć się języka
                niemieckiego — niezależnie od wieku, doświadczenia i harmonogramu — może to
                zrobić efektywnie, wygodnie i po przystępnej cenie.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Język niemiecki jest dziś jednym z najważniejszych języków zawodowych dla Polaków.
                Otwiera drzwi do pracy w Niemczech, Austrii i Szwajcarii, umożliwia studia za granicą
                i ułatwia komunikację z blisko 100 milionami native speakerów.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Platforma ger4pol.site to odpowiedź na brakujący element: kurs niemeckiego,
                który naprawdę rozumie trudności polskiego ucznia — od wymowy po gramatykę.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { num: "2019", label: "Rok założenia platformy" },
                { num: "12 400+", label: "Uczniów w Polsce i diasporze" },
                { num: "94%", label: "Zdawalność egzaminów naszych uczniów" },
                { num: "A1–C2", label: "Pełne spektrum poziomów CEFR" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-5 bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <div className="text-3xl font-extrabold text-amber-500 w-28 flex-shrink-0">{s.num}</div>
                  <p className="text-navy-900 font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-10 text-center">Nasze wartości</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Efektywność", desc: "Każda lekcja jest zaprojektowana tak, by przynieść maksymalne efekty w minimalnym czasie. Nie ma tu wypełniaczy." },
              { icon: "🤝", title: "Autentyczność", desc: "Treści tworzone przez doświadczonych pedagogów, nie generowane automatycznie. Każdy kurs przeszedł recenzję metodyczną." },
              { icon: "🌍", title: "Dostępność", desc: "Wierzymy, że dobra edukacja językowa powinna być dostępna dla każdego — nie tylko dla zamożnych lub mieszkańców dużych miast." },
              { icon: "📈", title: "Wyniki", desc: "Liczy się to, co osiągasz. Monitorujemy postępy każdego ucznia i stale ulepszamy materiały na podstawie rzeczywistych danych." },
              { icon: "💬", title: "Polskie podejście", desc: "Znamy trudności Polaków z niemieckim — wymowę Ä, Ö, Ü, przypadki, szyk zdania. Adresujemy je wprost, po polsku." },
              { icon: "🔬", title: "Nauka oparta na faktach", desc: "Metodologia oparta na badaniach naukowych z dziedziny akwizycji języków obcych i kognitywistyki." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm card-hover">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodology note */}
      <div className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-navy-900 mb-5">Platforma edukacyjna dla polskojęzycznych</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Jesteśmy polską platformą edukacyjną specjalizującą się wyłącznie w jednym zadaniu:
            nauczaniu języka niemieckiego polskojęzycznych uczniów. Wąska specjalizacja pozwala nam
            tworzyć materiały wyjątkowej jakości, precyzyjnie dobrane do potrzeb polskiego ucznia.
          </p>
          <Link href="/kontakt" className="btn-primary text-base inline-flex">
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </div>
  );
}
