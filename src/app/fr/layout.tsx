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
  title: "Calculateur de Robux - Calculez les Gains du Marketplace Roblox",
  description:
    "Calculateur gratuit pour déterminer vos gains nets et les prix de vente requis pour les articles du marketplace Roblox après la taxe de 30%. Rapide, précis et axé sur la confidentialité.",
  keywords: [
    "calculateur robux",
    "calculateur taxe roblox",
    "taxe robux",
    "marketplace roblox",
    "calculateur gains robux",
    "calculateur prix vente roblox",
    "calculateur taxe 30%",
    "outils créateur roblox",
  ],
  authors: [{ name: "Équipe Calculateur de Robux" }],
  creator: "Calculateur de Robux",
  publisher: "Calculateur de Robux",
  openGraph: {
    title: "Calculateur de Robux - Calculez les Gains du Marketplace Roblox",
    description:
      "Calculateur gratuit pour déterminer vos gains nets et les prix de vente requis pour les articles du marketplace Roblox après la taxe de 30%.",
    type: "website",
    locale: "fr_FR",
    siteName: "Calculateur de Robux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculateur de Robux - Calculez les Gains du Marketplace Roblox",
    description:
      "Calculateur gratuit pour déterminer vos gains nets et les prix de vente requis pour les articles du marketplace Roblox après la taxe de 30%.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/fr",
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
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
