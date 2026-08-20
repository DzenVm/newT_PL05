import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ger4pol.site"),
  title: {
    default: "Kursy Języka Niemieckiego Online | A1–C2 | ger4pol.site",
    template: "%s | Język Niemiecki Online",
  },
  description:
    "Naucz się języka niemieckiego online od A1 do C2. Elastyczne kursy, certyfikowani lektorzy, materiały 24/7. Przygotowanie do TestDaF, Goethe i telc. Sprawdź bezpłatny test poziomu!",
  keywords: [
    "kursy języka niemieckiego online",
    "nauka niemieckiego",
    "kurs niemecki online Polska",
    "TestDaF przygotowanie",
    "Goethe certyfikat",
    "niemecki A1 B1 C1",
    "lekcje niemeckiego przez internet",
    "kurs niemecki dla Polaków",
    "język niemiecki online kurs",
    "niemecki egzamin",
  ],
  authors: [{ url: "https://ger4pol.site" }],
  creator: "ger4pol.site",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://ger4pol.site",
    siteName: "Język Niemiecki Online",
    title: "Kursy Języka Niemieckiego Online | A1–C2 | ger4pol.site",
    description:
      "Naucz się języka niemieckiego online od A1 do C2. Elastyczne kursy, certyfikowani lektorzy, materiały 24/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kursy Języka Niemieckiego Online | ger4pol.site",
    description: "Elastyczne kursy niemeckiego A1–C2 dla Polaków. Certyfikowani lektorzy, test poziomu gratis.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://ger4pol.site" },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="pl" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="canonical" href="https://ger4pol.site" />
        <meta name="theme-color" content="#0f172a" />
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Język Niemiecki Online",
              url: "https://ger4pol.site",
              description: "Platforma do nauki języka niemieckiego online dla Polaków. Kursy A1–C2.",
              areaServed: "PL",
              availableLanguage: ["pl", "de"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Kursy języka niemieckiego",
                itemListElement: [
                  { "@type": "Course", name: "Kurs Języka Niemieckiego A1", courseLanguage: "pl" },
                  { "@type": "Course", name: "Kurs Języka Niemieckiego B1", courseLanguage: "pl" },
                  { "@type": "Course", name: "Kurs Języka Niemieckiego C1", courseLanguage: "pl" },
                ],
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "kontakt@ger4pol.site",
                contactType: "customer service",
                availableLanguage: "Polish",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        <Header />
        <main className="flex-1 pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
