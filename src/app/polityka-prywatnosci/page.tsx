import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description: "Polityka prywatności platformy ger4pol.site. Ochrona danych osobowych zgodna z RODO.",
  alternates: { canonical: "https://ger4pol.site/polityka-prywatnosci" },
};

export default function PolitykaPrywatnosci() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-extrabold text-navy-900 mb-2">Polityka Prywatności</h1>
        <p className="text-slate-500 text-sm mb-10">Ostatnia aktualizacja: 1 stycznia 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          {[
            {
              title: "1. Administrator danych osobowych",
              content: `Administratorem danych osobowych użytkowników platformy ger4pol.site jest podmiot prowadzący tę platformę edukacyjną, dostępny pod adresem e-mail: kontakt@ger4pol.site. Przetwarzamy dane osobowe zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz polską ustawą o ochronie danych osobowych.`,
            },
            {
              title: "2. Jakie dane zbieramy",
              content: `Zbieramy następujące kategorie danych: (a) Dane kontaktowe: imię, adres e-mail podany przy rejestracji lub poprzez formularz kontaktowy. (b) Dane dotyczące korzystania z platformy: postępy w nauce, wyniki testów, historia sesji. (c) Dane techniczne: adres IP, typ przeglądarki, system operacyjny, cookies. Nie zbieramy danych wrażliwych (zdrowotnych, rasowych, politycznych itp.).`,
            },
            {
              title: "3. Cel i podstawa prawna przetwarzania",
              content: `Dane przetwarzamy w następujących celach: (a) Realizacja umowy (art. 6 ust. 1 lit. b RODO): obsługa subskrypcji, dostęp do kursów, rozliczenia. (b) Prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO): analiza korzystania z platformy, poprawa jakości usług, bezpieczeństwo. (c) Zgoda (art. 6 ust. 1 lit. a RODO): newsletter e-mailowy. Zgodę możesz wycofać w dowolnej chwili. (d) Obowiązek prawny (art. 6 ust. 1 lit. c RODO): wystawianie faktur, archiwizacja podatkowa.`,
            },
            {
              title: "4. Cookies i technologie śledzące",
              content: `Platforma wykorzystuje pliki cookies: (a) Niezbędne: wymagane do działania platformy (sesja, logowanie). (b) Analityczne: anonimowe dane o korzystaniu z serwisu (statystyki). (c) Marketingowe: za Twoją zgodą — do personalizacji reklam. Możesz zarządzać cookies w ustawieniach przeglądarki. Wyłączenie cookies niezbędnych może uniemożliwić korzystanie z platformy.`,
            },
            {
              title: "5. Udostępnianie danych",
              content: `Nie sprzedajemy danych osobowych. Dane możemy udostępniać: (a) Dostawcom usług technicznych (hosting, poczta e-mail, płatności) — wyłącznie w zakresie niezbędnym do świadczenia usług na naszą rzecz, na podstawie umów powierzenia danych. (b) Organom publicznym — wyłącznie na podstawie przepisów prawa. Wszystkie podmioty przetwarzające dane na naszą rzecz działają zgodnie z RODO.`,
            },
            {
              title: "6. Okres przechowywania danych",
              content: `Dane przechowujemy przez: (a) Czas trwania umowy (aktywna subskrypcja) + 5 lat (obowiązek rachunkowy). (b) Do momentu wycofania zgody — w przypadku newslettera. (c) Do momentu zrealizowania prawnie uzasadnionego interesu lub do wniesienia skutecznego sprzeciwu. Po upływie okresu retencji dane są usuwane lub anonimizowane.`,
            },
            {
              title: "7. Twoje prawa",
              content: `Na mocy RODO przysługują Ci następujące prawa: (a) Dostęp do danych — prawo do uzyskania kopii swoich danych. (b) Sprostowanie — prawo do korekty nieprawidłowych danych. (c) Usunięcie — prawo do żądania usunięcia danych ("prawo do bycia zapomnianym"). (d) Ograniczenie przetwarzania — prawo do ograniczenia zakresu przetwarzania. (e) Przeniesienie danych — prawo do otrzymania danych w formacie maszynowym. (f) Sprzeciw — prawo do wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie. Wnioski kieruj na adres: kontakt@ger4pol.site. Odpowiedzi udzielamy w ciągu 30 dni. Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).`,
            },
            {
              title: "8. Bezpieczeństwo danych",
              content: `Stosujemy techniczne i organizacyjne środki bezpieczeństwa: szyfrowanie SSL/TLS dla transmisji danych, kontrolę dostępu, regularne kopie zapasowe i testy bezpieczeństwa. Mimo to żaden system nie gwarantuje stuprocentowego bezpieczeństwa — w razie naruszenia ochrony danych powiadomimy Cię zgodnie z wymogami RODO.`,
            },
            {
              title: "9. Zmiany polityki prywatności",
              content: `Zastrzegamy prawo do zmiany niniejszej polityki. O istotnych zmianach powiadomimy e-mailem lub przez komunikat w platformie. Aktualna wersja dostępna jest zawsze pod adresem ger4pol.site/polityka-prywatnosci.`,
            },
            {
              title: "10. Kontakt w sprawach danych osobowych",
              content: `W sprawie danych osobowych skontaktuj się z nami: E-mail: kontakt@ger4pol.site. Odpowiedź w ciągu 5 dni roboczych.`,
            },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-navy-900 mb-3">{section.title}</h2>
              <p className="text-slate-600 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
