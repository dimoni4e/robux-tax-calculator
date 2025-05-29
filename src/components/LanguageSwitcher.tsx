"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "pl", name: "Polski", flag: "🇵🇱" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "nl", name: "Nederlands", flag: "🇳🇱" },
    { code: "uk", name: "Українська", flag: "🇺🇦" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 min-h-[40px] shadow-sm"
        aria-label={t.languageLabel}
      >
        <span
          className="text-base"
          role="img"
          aria-label={currentLanguage?.name}
        >
          {currentLanguage?.flag}
        </span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLanguage?.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left text-sm flex items-center space-x-2 transition-all duration-200 ${
                language === lang.code
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              } ${lang === languages[0] ? "rounded-t-lg" : ""} ${
                lang === languages[languages.length - 1] ? "rounded-b-lg" : ""
              }`}
              aria-label={`Switch to ${lang.name}`}
            >
              <span className="text-base" role="img" aria-label={lang.name}>
                {lang.flag}
              </span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
