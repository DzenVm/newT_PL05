"use client";
import dynamic from "next/dynamic";


const MethodologyIllustration = dynamic(
  () => import("@/components/illustrations/MethodologyIllustration"),
  { ssr: false }
);

const pillars = [
  {
    title: "Nauka przez kontekst",
    desc: "Nowe słowa i struktury gramatyczne pojawiają się zawsze w naturalnym kontekście — w dialogach, artykułach i nagraniach audio. Mózg zapamiętuje lepiej, gdy uczy się w kontekście, nie przez listy słówek.",
    num: "01",
  },
  {
    title: "Powtarzanie z rosnącymi odstępami (SRS)",
    desc: "System inteligentnie planuje powtórki materiału dokładnie wtedy, gdy zaczynajesz go zapominać. Dzięki temu uczysz się raz i pamiętasz na zawsze — bez bezmyślnego wkuwania.",
    num: "02",
  },
  {
    title: "Output od pierwszej lekcji",
    desc: "Od razu mówisz i piszesz po niemiecku — nawet jeśli popełniasz błędy. Badania pokazują, że aktywne używanie języka jest 3x skuteczniejsze niż bierne słuchanie.",
    num: "03",
  },
  {
    title: "Mikrolekcje + natychmiastowa informacja zwrotna",
    desc: "Każda lekcja trwa 15–25 minut i kończy się zestawem ćwiczeń z natychmiastową oceną. System zapamiętuje Twoje błędy i wraca do trudnych obszarów.",
    num: "04",
  },
];

export default function Methodology() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-violet-700 text-xs font-bold uppercase tracking-wider">Metodologia</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 mb-5">
              Nauka oparta na <span className="text-amber-500">neuronauce</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Nasze kursy nie są zbiorem filmików. To przemyślany system pedagogiczny oparty
              na najnowszych badaniach nad uczeniem się języków obcych — dopasowany specjalnie
              do polskich uczniów uczących się niemieckiego.
            </p>

            <div className="space-y-7">
              {pillars.map((p) => (
                <div key={p.num} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-900 text-amber-400 rounded-xl flex items-center justify-center font-black text-sm">
                    {p.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1.5">{p.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-blue-600/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <MethodologyIllustration />
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { label: "Słuchanie", color: "bg-amber-100 text-amber-700" },
                    { label: "Mówienie", color: "bg-rose-100 text-rose-700" },
                    { label: "Czytanie", color: "bg-emerald-100 text-emerald-700" },
                    { label: "Pisanie", color: "bg-violet-100 text-violet-700" },
                    { label: "Gramatyka", color: "bg-orange-100 text-orange-700" },
                    { label: "Słownictwo", color: "bg-cyan-100 text-cyan-700" },
                  ].map((skill) => (
                    <div key={skill.label} className={`${skill.color} rounded-xl px-3 py-2 text-xs font-bold text-center`}>
                      {skill.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 bg-navy-900 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="relative max-w-3xl">
            <p className="text-white text-xl lg:text-2xl font-semibold leading-relaxed mb-4">
              &ldquo;Polacy uczący się niemieckiego mają wyjątkowe zalety — podobna struktura zdań
              i wspólne słownictwo słowiańsko-germańskie. Nasz program to w pełni wykorzystuje.&rdquo;
            </p>
            <p className="text-amber-400 text-sm font-semibold">— Zespół pedagogiczny platformy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
