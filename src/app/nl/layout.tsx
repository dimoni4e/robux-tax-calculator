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
  title: "Robux Rekenmachine - Bereken Winst van Roblox Marktplaats",
  description:
    "Gratis rekenmachine om je netto-inkomsten en vereiste verkoopprijzen te bepalen voor Roblox marktplaats items na 30% belasting. Snel, accuraat en privacygericht.",
  keywords: [
    "robux rekenmachine",
    "robux belasting rekenmachine",
    "robux belasting",
    "roblox marktplaats",
    "robux winst rekenmachine",
    "robux verkoopprijs rekenmachine",
    "30% belasting rekenmachine",
    "roblox maker tools",
  ],
  authors: [{ name: "Robux Rekenmachine Team" }],
  creator: "Robux Rekenmachine",
  publisher: "Robux Rekenmachine",
  openGraph: {
    title: "Robux Rekenmachine - Bereken Winst van Roblox Marktplaats",
    description:
      "Gratis rekenmachine om je netto-inkomsten en vereiste verkoopprijzen te bepalen voor Roblox marktplaats items na 30% belasting.",
    type: "website",
    locale: "nl_NL",
    siteName: "Robux Rekenmachine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robux Rekenmachine - Bereken Winst van Roblox Marktplaats",
    description:
      "Gratis rekenmachine om je netto-inkomsten en vereiste verkoopprijzen te bepalen voor Roblox marktplaats items na 30% belasting.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/nl",
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
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
