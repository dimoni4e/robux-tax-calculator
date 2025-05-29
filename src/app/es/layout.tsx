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
    "Calculadora de Impuestos de Robux - Calcula Ganancias del Mercado de Roblox",
  description:
    "Calculadora gratuita para determinar tus ganancias netas y precios de venta requeridos para artículos del mercado de Roblox después del impuesto del 30%. Rápida, precisa y enfocada en la privacidad.",
  keywords: [
    "calculadora robux",
    "calculadora impuestos roblox",
    "impuesto robux",
    "mercado roblox",
    "calculadora ganancias robux",
    "calculadora precio venta roblox",
    "calculadora impuesto 30%",
    "herramientas creador roblox",
  ],
  authors: [{ name: "Equipo Calculadora de Impuestos de Robux" }],
  creator: "Calculadora de Impuestos de Robux",
  publisher: "Calculadora de Impuestos de Robux",
  openGraph: {
    title:
      "Calculadora de Impuestos de Robux - Calcula Ganancias del Mercado de Roblox",
    description:
      "Calculadora gratuita para determinar tus ganancias netas y precios de venta requeridos para artículos del mercado de Roblox después del impuesto del 30%.",
    type: "website",
    locale: "es_ES",
    siteName: "Calculadora de Impuestos de Robux",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Calculadora de Impuestos de Robux - Calcula Ganancias del Mercado de Roblox",
    description:
      "Calculadora gratuita para determinar tus ganancias netas y precios de venta requeridos para artículos del mercado de Roblox después del impuesto del 30%.",
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
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
};

export default function SpanishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Impuestos de Robux",
    description:
      "Calculadora gratuita para determinar tus ganancias netas y precios de venta requeridos para artículos del mercado de Roblox después del impuesto del 30%",
    url: "/es",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Calcular ganancias netas después del impuesto del 30% de Roblox",
      "Determinar precio de venta requerido para ganancias deseadas",
      "Cálculos en tiempo real",
      "Interfaz compatible con móviles",
      "Soporte multiidioma (Inglés, Español)",
    ],
    inLanguage: ["en", "es"],
    creator: {
      "@type": "Organization",
      name: "Equipo Calculadora de Impuestos de Robux",
    },
  };

  return (
    <html lang="es">
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
