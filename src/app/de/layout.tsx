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
  title: "Robux-Rechner - Berechnen Sie Gewinne vom Roblox-Marktplatz",
  description:
    "Kostenloser Rechner zur Bestimmung Ihrer Nettoeinnahmen und erforderlichen Verkaufspreise für Roblox-Marktplatz-Artikel nach der 30%-Steuer. Schnell, genau und datenschutzorientiert.",
  keywords: [
    "robux rechner",
    "robux steuer rechner",
    "robux steuer",
    "roblox marktplatz",
    "robux gewinn rechner",
    "robux verkaufspreis rechner",
    "30% steuer rechner",
    "roblox ersteller tools",
  ],
  authors: [{ name: "Robux-Rechner Team" }],
  creator: "Robux-Rechner",
  publisher: "Robux-Rechner",
  openGraph: {
    title: "Robux-Rechner - Berechnen Sie Gewinne vom Roblox-Marktplatz",
    description:
      "Kostenloser Rechner zur Bestimmung Ihrer Nettoeinnahmen und erforderlichen Verkaufspreise für Roblox-Marktplatz-Artikel nach der 30%-Steuer.",
    type: "website",
    locale: "de_DE",
    siteName: "Robux-Rechner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robux-Rechner - Berechnen Sie Gewinne vom Roblox-Marktplatz",
    description:
      "Kostenloser Rechner zur Bestimmung Ihrer Nettoeinnahmen und erforderlichen Verkaufspreise für Roblox-Marktplatz-Artikel nach der 30%-Steuer.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/de",
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
    <html lang="de" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
