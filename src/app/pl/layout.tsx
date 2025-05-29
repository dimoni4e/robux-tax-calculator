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
  title: "Kalkulator Robux - Oblicz Zyski z Marketplace Roblox",
  description:
    "Darmowy kalkulator do określania twoich zarobków netto i wymaganych cen sprzedaży dla przedmiotów z marketplace Roblox po 30% podatku. Szybki, dokładny i skoncentrowany na prywatności.",
  keywords: [
    "kalkulator robux",
    "kalkulator podatku robux",
    "podatek robux",
    "marketplace roblox",
    "kalkulator zarobków robux",
    "kalkulator ceny sprzedaży robux",
    "kalkulator 30% podatek",
    "narzędzia twórcy roblox",
  ],
  authors: [{ name: "Zespół Kalkulatora Robux" }],
  creator: "Kalkulator Robux",
  publisher: "Kalkulator Robux",
  openGraph: {
    title: "Kalkulator Robux - Oblicz Zyski z Marketplace Roblox",
    description:
      "Darmowy kalkulator do określania twoich zarobków netto i wymaganych cen sprzedaży dla przedmiotów z marketplace Roblox po 30% podatku.",
    type: "website",
    locale: "pl_PL",
    siteName: "Kalkulator Robux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Robux - Oblicz Zyski z Marketplace Roblox",
    description:
      "Darmowy kalkulator do określania twoich zarobków netto i wymaganych cen sprzedaży dla przedmiotów z marketplace Roblox po 30% podatku.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/pl",
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
    <html lang="pl" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
