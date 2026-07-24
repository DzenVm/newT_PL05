import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin korzystania z platformy edukacyjnej ger4pol.site — kursy języka niemieckiego online.",
  alternates: { canonical: "https://ger4pol.site/regulamin" },
};

export default function RegulamIn() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-extrabold text-navy-900 mb-2">Regulamin</h1>
        <p className="text-slate-500 text-sm mb-10">Ostatnia aktualizacja: 1 stycznia 2025</p>

        <div className="space-y-8">
          {[
            {
              title: "§1. Postanowienia ogólne",
              content: "Niniejszy regulamin określa zasady korzystania z platformy edukacyjnej dostępnej pod adresem ger4pol.site, oferującej kursy języka niemieckiego online. Korzystając z platformy, akceptujesz niniejszy regulamin w całości.",
            },
            {
              title: "§2. Usługi",
              content: "Platforma świadczy następujące usługi: (a) Dostęp do kursów języka niemieckiego w formie lekcji wideo, ćwiczeń interaktywnych i materiałów audio. (b) System flashcards z algorytmem powtórek spaced repetition. (c) Sesje konwersacyjne z lektorem (w zależności od planu). (d) Testy poziomujące i egzaminy próbne.",
            },
            {
              title: "§3. Rejestracja i konto",
              content: "Dostęp do pełnych treści kursu wymaga rejestracji konta i aktywnej subskrypcji. Użytkownik zobowiązuje się podać prawdziwe dane podczas rejestracji. Konto jest nieprzenaszalne — zakaz udostępniania danych logowania osobom trzecim.",
            },
            {
              title: "§4. Płatności i subskrypcja",
              content: "Subskrypcja jest miesięczna i odnawiana automatycznie. Cena subskrypcji pobierana jest z góry za dany miesiąc. Anulowanie subskrypcji nie skutkuje zwrotem środków za bieżący okres, lecz uniemożliwia kolejną płatność cykliczną.",
            },
            {
              title: "§5. Gwarancja zwrotu",
              content: "W ciągu 14 dni od pierwszego zakupu możesz zażądać zwrotu pełnej kwoty bez podawania przyczyny. Zwroty nie dotyczą kolejnych miesięcy subskrypcji. Wniosek o zwrot kieruj na: kontakt@ger4pol.site.",
            },
            {
              title: "§6. Własność intelektualna",
              content: "Wszelkie materiały dostępne na platformie (lekcje wideo, ćwiczenia, teksty, nagrania audio) są własnością platformy lub jej licencjodawców. Zabronione jest kopiowanie, rozprowadzanie lub publiczne udostępnianie materiałów bez zgody.",
            },
            {
              title: "§7. Odpowiedzialność",
              content: "Platforma dołoży wszelkich starań, by usługi były dostępne 24/7, lecz nie gwarantuje nieprzerwanego dostępu. Nie ponosi odpowiedzialności za przerwy spowodowane awariami technicznymi lub pracami konserwacyjnymi. Wyniki nauki zależą od zaangażowania ucznia.",
            },
            {
              title: "§8. Postanowienia końcowe",
              content: "Regulamin podlega prawu polskiemu. Wszelkie spory rozstrzygane są przez sąd właściwy miejscowo dla siedziby platformy. W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego i ustawy o świadczeniu usług drogą elektroniczną.",
            },
          ].map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-bold text-navy-900 mb-3">{s.title}</h2>
              <p className="text-slate-600 leading-relaxed">{s.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
