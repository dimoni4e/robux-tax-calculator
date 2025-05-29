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
  title: "Robux Hesaplayıcısı - Roblox Pazaryeri Kazançlarını Hesapla",
  description:
    "Roblox pazaryeri öğeleri için net kazançlarınızı ve gerekli satış fiyatlarını belirlemek için ücretsiz hesaplayıcı. %30 vergi sonrası. Hızlı, doğru ve gizlilik odaklı.",
  keywords: [
    "robux hesaplayıcısı",
    "robux vergi hesaplayıcısı",
    "robux vergisi",
    "roblox pazaryeri",
    "robux kazanç hesaplayıcısı",
    "robux satış fiyatı hesaplayıcısı",
    "%30 vergi hesaplayıcısı",
    "roblox yaratıcı araçları",
  ],
  authors: [{ name: "Robux Hesaplayıcısı Ekibi" }],
  creator: "Robux Hesaplayıcısı",
  publisher: "Robux Hesaplayıcısı",
  openGraph: {
    title: "Robux Hesaplayıcısı - Roblox Pazaryeri Kazançlarını Hesapla",
    description:
      "Roblox pazaryeri öğeleri için net kazançlarınızı ve gerekli satış fiyatlarını belirlemek için ücretsiz hesaplayıcı. %30 vergi sonrası.",
    type: "website",
    locale: "tr_TR",
    siteName: "Robux Hesaplayıcısı",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robux Hesaplayıcısı - Roblox Pazaryeri Kazançlarını Hesapla",
    description:
      "Roblox pazaryeri öğeleri için net kazançlarınızı ve gerekli satış fiyatlarını belirlemek için ücretsiz hesaplayıcı. %30 vergi sonrası.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/tr",
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
    <html lang="tr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
