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
  title:
    "Калькулятор Robux - Розрахуйте Доходи від Торгового Майданчика Roblox",
  description:
    "Безкоштовний калькулятор для визначення ваших чистих доходів та необхідних цін продажу для предметів торгового майданчика Roblox після 30% податку. Швидкий, точний та орієнтований на приватність.",
  keywords: [
    "калькулятор robux",
    "калькулятор податку robux",
    "податок robux",
    "торговий майданчик roblox",
    "калькулятор доходів robux",
    "калькулятор ціни продажу robux",
    "калькулятор 30% податок",
    "інструменти творця roblox",
  ],
  authors: [{ name: "Команда Калькулятора Robux" }],
  creator: "Калькулятор Robux",
  publisher: "Калькулятор Robux",
  openGraph: {
    title:
      "Калькулятор Robux - Розрахуйте Доходи від Торгового Майданчика Roblox",
    description:
      "Безкоштовний калькулятор для визначення ваших чистих доходів та необхідних цін продажу для предметів торгового майданчика Roblox після 30% податку.",
    type: "website",
    locale: "uk_UA",
    siteName: "Калькулятор Robux",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Калькулятор Robux - Розрахуйте Доходи від Торгового Майданчика Roblox",
    description:
      "Безкоштовний калькулятор для визначення ваших чистих доходів та необхідних цін продажу для предметів торгового майданчика Roblox після 30% податку.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/uk",
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
    <html lang="uk" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
