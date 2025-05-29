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
  title: "Calculadora de Robux - Calcula Ganhos do Marketplace do Roblox",
  description:
    "Calculadora gratuita para determinar seus ganhos líquidos e preços de venda necessários para itens do marketplace do Roblox após o imposto de 30%. Rápida, precisa e focada na privacidade.",
  keywords: [
    "calculadora robux",
    "calculadora imposto roblox",
    "imposto robux",
    "marketplace roblox",
    "calculadora ganhos robux",
    "calculadora preço venda roblox",
    "calculadora imposto 30%",
    "ferramentas criador roblox",
  ],
  authors: [{ name: "Equipe Calculadora de Robux" }],
  creator: "Calculadora de Robux",
  publisher: "Calculadora de Robux",
  openGraph: {
    title: "Calculadora de Robux - Calcula Ganhos do Marketplace do Roblox",
    description:
      "Calculadora gratuita para determinar seus ganhos líquidos e preços de venda necessários para itens do marketplace do Roblox após o imposto de 30%.",
    type: "website",
    locale: "pt_BR",
    siteName: "Calculadora de Robux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Robux - Calcula Ganhos do Marketplace do Roblox",
    description:
      "Calculadora gratuita para determinar seus ganhos líquidos e preços de venda necessários para itens do marketplace do Roblox após o imposto de 30%.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/pt",
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
    <html lang="pt" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
