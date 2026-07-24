"use client";
import { useState } from "react";
import type { Metadata } from "next";

const metadata = {
  title: "Kontakt — Kursy Języka Niemieckiego Online",
  description:
    "Skontaktuj się z nami w sprawie kursów języka niemieckiego. E-mail: kontakt@ger4pol.site. Odpowiadamy w ciągu 24 godzin w dni robocze.",
};

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="bg-navy-900 py-16 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Kontakt</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-4">
            Porozmawiajmy o <span className="text-amber-400">Twojej nauce</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Masz pytania? Nasz zespół odpowiada w ciągu 24 godzin w dni robocze.
          </p>
        </div>
      </div>

      <div className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-7">
              <div>
                <h2 className="text-xl font-extrabold text-navy-900 mb-5">Dane kontaktowe</h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: "✉️",
                      title: "E-mail",
                      text: "kontakt@ger4pol.site",
                      sub: "Odpowiadamy w ciągu 24h",
                      href: "mailto:kontakt@ger4pol.site",
                    },
                    {
                      icon: "🕐",
                      title: "Godziny pracy",
                      text: "Pon–Pt: 8:00–20:00",
                      sub: "Sob: 9:00–16:00",
                    },
                    {
                      icon: "🌐",
                      title: "Platforma",
                      text: "ger4pol.site",
                      sub: "Dostęp 24/7",
                    },
                  ].map((c) => (
                    <div key={c.title} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-200">
                      <span className="text-2xl">{c.icon}</span>
                      <div>
                        <p className="font-bold text-navy-900 text-sm">{c.title}</p>
                        {c.href ? (
                          <a href={c.href} className="text-amber-600 font-semibold text-sm hover:underline">{c.text}</a>
                        ) : (
                          <p className="text-slate-700 text-sm">{c.text}</p>
                        )}
                        <p className="text-slate-500 text-xs">{c.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick answers */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="font-bold text-navy-900 mb-4 text-sm">Najczęstsze pytania:</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">→</span>
                    <a href="/kursy#test-poziomu" className="hover:text-amber-600">Bezpłatny test poziomu</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">→</span>
                    <a href="/cennik" className="hover:text-amber-600">Porównanie planów cenowych</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">→</span>
                    <a href="/kursy" className="hover:text-amber-600">Wszystkie kursy A1–C2</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                {sent ? (
                  <div className="text-center py-10">
                    <div className="text-5xl mb-5">🎉</div>
                    <h3 className="text-2xl font-extrabold text-navy-900 mb-3">Wiadomość wysłana!</h3>
                    <p className="text-slate-600">
                      Dziękujemy za kontakt. Odpowiemy na Twój e-mail w ciągu 24 godzin roboczych.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-extrabold text-navy-900 mb-6">Napisz do nas</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-navy-900 mb-1.5">Imię i nazwisko *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-slate-400"
                            placeholder="Jan Kowalski"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-navy-900 mb-1.5">E-mail *</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-slate-400"
                            placeholder="jan@email.pl"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Temat *</label>
                        <select
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy-900 bg-white"
                        >
                          <option value="">Wybierz temat...</option>
                          <option>Wybór kursu / test poziomu</option>
                          <option>Pytanie o płatności i plany</option>
                          <option>Techniczne problemy z platformą</option>
                          <option>Sesje z lektorem</option>
                          <option>Certyfikaty i egzaminy</option>
                          <option>Inne pytanie</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy-900 mb-1.5">Wiadomość *</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-slate-400 resize-none"
                          placeholder="Opisz swoje pytanie lub potrzebę..."
                        />
                      </div>
                      <p className="text-xs text-slate-500">
                        Przesyłając formularz wyrażasz zgodę na przetwarzanie danych osobowych w celu udzielenia odpowiedzi.{" "}
                        <a href="/polityka-prywatnosci" className="text-amber-600 hover:underline">Polityka prywatności</a>
                      </p>
                      <button type="submit" className="btn-primary w-full justify-center text-base">
                        Wyślij wiadomość
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
