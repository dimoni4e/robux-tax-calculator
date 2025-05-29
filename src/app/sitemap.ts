import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rbxadds.com";

  // All supported languages
  const languages = [
    "en",
    "es",
    "pt",
    "fr",
    "de",
    "pl",
    "it",
    "tr",
    "nl",
    "uk",
  ];

  // Create alternates object for all languages
  const alternates = {
    languages: languages.reduce((acc, lang) => {
      acc[lang] = lang === "en" ? baseUrl : `${baseUrl}/${lang}`;
      return acc;
    }, {} as Record<string, string>),
  };

  // Generate sitemap entries for all languages
  const sitemapEntries = languages.map((lang) => ({
    url: lang === "en" ? baseUrl : `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
    alternates,
  }));

  return sitemapEntries;
}
