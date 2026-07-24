"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="py-16 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/20 rounded-full px-4 py-1.5 mb-5">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Bezpłatne materiały</span>
        </div>

        <h2 className="text-3xl font-extrabold text-white mb-3">
          Otrzymaj <span className="text-amber-400">7 lekcji gratis</span>
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto">
          Zapisz się do newslettera i co tydzień otrzymaj bezpłatną lekcję języka niemieckiego,
          wskazówki gramatyczne i zestaw słownictwa. Bez zobowiązań — wypisz się kiedy chcesz.
        </p>

        {submitted ? (
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl px-8 py-6 inline-block">
            <div className="text-4xl mb-3">🎉</div>
            <p className="text-emerald-300 font-bold text-lg">Dziękujemy za zapis!</p>
            <p className="text-slate-400 text-sm mt-1">Sprawdź swoją skrzynkę — pierwsza lekcja już w drodze.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Twój adres e-mail"
              className="flex-1 bg-navy-700 border border-navy-600 text-white placeholder-slate-500 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
            />
            <button type="submit" className="btn-primary text-sm flex-shrink-0">
              Zapisz się
            </button>
          </form>
        )}

        <p className="text-slate-600 text-xs mt-4">
          Wysyłamy 1 e-mail tygodniowo. Bez spamu. Zgodnie z RODO.{" "}
          <a href="/polityka-prywatnosci" className="text-slate-500 hover:text-amber-400 underline">
            Polityka prywatności
          </a>
        </p>
      </div>
    </section>
  );
}
