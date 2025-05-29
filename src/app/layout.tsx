import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Robux Tax Calculator - Calculate Roblox Marketplace Earnings",
  description:
    "Free calculator to determine your net earnings and required selling prices for Roblox marketplace items after 30% tax. Fast, accurate, and privacy-focused.",
  keywords: [
    "robux calculator",
    "roblox tax calculator",
    "robux tax",
    "roblox marketplace",
    "robux earnings calculator",
    "roblox selling price calculator",
    "30% tax calculator",
    "roblox creator tools",
  ],
  authors: [{ name: "Robux Tax Calculator Team" }],
  creator: "Robux Tax Calculator",
  publisher: "Robux Tax Calculator",
  openGraph: {
    title: "Robux Tax Calculator - Calculate Roblox Marketplace Earnings",
    description:
      "Free calculator to determine your net earnings and required selling prices for Roblox marketplace items after 30% tax.",
    type: "website",
    locale: "en_US",
    url: "https://rbxadds.com",
    siteName: "Robux Tax Calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robux Tax Calculator - Calculate Roblox Marketplace Earnings",
    description:
      "Free calculator to determine your net earnings and required selling prices for Roblox marketplace items after 30% tax.",
    site: "@rbxadds",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rbxadds.com",
    languages: {
      en: "https://rbxadds.com",
      es: "https://rbxadds.com/es",
      pt: "https://rbxadds.com/pt",
      fr: "https://rbxadds.com/fr",
      de: "https://rbxadds.com/de",
      pl: "https://rbxadds.com/pl",
      it: "https://rbxadds.com/it",
      tr: "https://rbxadds.com/tr",
      nl: "https://rbxadds.com/nl",
      uk: "https://rbxadds.com/uk",
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
      { url: "/tax.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Robux Tax Calculator",
    description:
      "Free calculator to determine your net earnings and required selling prices for Roblox marketplace items after 30% tax",
    url: "https://rbxadds.com",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Calculate net earnings after 30% Roblox tax",
      "Determine required selling price for desired earnings",
      "Real-time calculations",
      "Mobile-friendly interface",
      "Multi-language support (English, Spanish)",
    ],
    inLanguage: ["en", "es"],
    creator: {
      "@type": "Organization",
      name: "Robux Tax Calculator Team",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
