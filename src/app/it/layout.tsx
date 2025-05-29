import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calcolatore di Robux - Calcola i Guadagni del Marketplace Roblox",
  description:
    "Calcolatore gratuito per determinare i tuoi guadagni netti e i prezzi di vendita richiesti per gli oggetti del marketplace Roblox dopo la tassa del 30%. Veloce, accurato e incentrato sulla privacy.",
  keywords: [
    "calcolatore robux",
    "calcolatore tasse robux",
    "tassa robux",
    "marketplace roblox",
    "calcolatore guadagni robux",
    "calcolatore prezzo vendita robux",
    "calcolatore tassa 30%",
    "strumenti creatore roblox",
  ],
  authors: [{ name: "Team Calcolatore di Robux" }],
  creator: "Calcolatore di Robux",
  publisher: "Calcolatore di Robux",
  openGraph: {
    title: "Calcolatore di Robux - Calcola i Guadagni del Marketplace Roblox",
    description:
      "Calcolatore gratuito per determinare i tuoi guadagni netti e i prezzi di vendita richiesti per gli oggetti del marketplace Roblox dopo la tassa del 30%.",
    type: "website",
    locale: "it_IT",
    siteName: "Calcolatore di Robux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolatore di Robux - Calcola i Guadagni del Marketplace Roblox",
    description:
      "Calcolatore gratuito per determinare i tuoi guadagni netti e i prezzi di vendita richiesti per gli oggetti del marketplace Roblox dopo la tassa del 30%.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/it",
    languages: {
      en: "/",
      es: "/es",
      pt: "/pt",
      fr: "/fr",
      de: "/de",
      pl: "/pl",
      it: "/it",
      tr: "/tr",
      nl: "/nl",
      uk: "/uk",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
