"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { Language, translations, Translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Detect language from URL
  const getInitialLanguage = (): Language => {
    if (pathname.startsWith("/es")) return "es";
    if (pathname.startsWith("/pt")) return "pt";
    if (pathname.startsWith("/fr")) return "fr";
    if (pathname.startsWith("/de")) return "de";
    if (pathname.startsWith("/pl")) return "pl";
    if (pathname.startsWith("/it")) return "it";
    if (pathname.startsWith("/tr")) return "tr";
    if (pathname.startsWith("/nl")) return "nl";
    if (pathname.startsWith("/uk")) return "uk";
    return "en";
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Update language when URL changes
  useEffect(() => {
    const detectLanguage = (): Language => {
      if (pathname.startsWith("/es")) return "es";
      if (pathname.startsWith("/pt")) return "pt";
      if (pathname.startsWith("/fr")) return "fr";
      if (pathname.startsWith("/de")) return "de";
      if (pathname.startsWith("/pl")) return "pl";
      if (pathname.startsWith("/it")) return "it";
      if (pathname.startsWith("/tr")) return "tr";
      if (pathname.startsWith("/nl")) return "nl";
      if (pathname.startsWith("/uk")) return "uk";
      return "en";
    };

    const newLanguage = detectLanguage();
    if (newLanguage !== language) {
      setLanguageState(newLanguage);
    }
  }, [pathname, language]);

  const setLanguage = (lang: Language) => {
    const routes: Record<Language, string> = {
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
    };

    router.push(routes[lang]);
    setLanguageState(lang);
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
