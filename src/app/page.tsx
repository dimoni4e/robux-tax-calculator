"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FAQAccordion from "@/components/FAQAccordion";

// Robux Tax Calculator Component
export default function Home() {
  const [sellingPrice, setSellingPrice] = useState("");
  const [desiredEarnings, setDesiredEarnings] = useState("");
  const { t } = useLanguage();

  // Simple calculation functions
  const calculateNet = (price: string) => {
    const num = parseFloat(price);
    if (isNaN(num) || num <= 0) return "";
    return (num * 0.7).toFixed(2);
  };

  const calculateRequired = (desired: string) => {
    const num = parseFloat(desired);
    if (isNaN(num) || num <= 0) return "";
    return (num / 0.7).toFixed(2);
  };

  const handleNumericInput = (value: string, setter: (val: string) => void) => {
    // Only allow numbers and decimal point
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  const netEarnings = calculateNet(sellingPrice);
  const requiredPrice = calculateRequired(desiredEarnings);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Language Switcher */}
        <div className="flex justify-end pt-4 pb-2">
          <LanguageSwitcher />
        </div>

        {/* Hero Section */}
        <header className="text-center py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Logo/Icon Container */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/tax.png"
                    alt="Robux Tax Calculator Icon"
                    width={64}
                    height={64}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
                {/* Decorative rings */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-3xl -z-10"></div>
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-300/10 to-purple-400/10 rounded-3xl -z-20"></div>
              </div>
            </div>

            {/* Hero Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
              {t.title}
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {t.subtitle}
            </p>

            {/* Hero Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-2 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-4 shadow-sm border border-gray-200/50">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {t.instantCalc || "Instant"}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-4 shadow-sm border border-gray-200/50">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {t.secure || "Secure"}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-4 shadow-sm border border-gray-200/50">
                <svg
                  className="w-5 h-5 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {t.global || "Global"}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("calculator-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                {t.startCalculating || "Start Calculating"}
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Calculator Grid */}
        <div
          id="calculator-section"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* After-Tax Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {t.afterTaxTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {t.afterTaxSubtitle}
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="selling-price"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t.sellingPriceLabel}
                </label>
                <input
                  id="selling-price"
                  type="text"
                  inputMode="decimal"
                  placeholder={t.sellingPricePlaceholder}
                  value={sellingPrice}
                  onChange={(e) =>
                    handleNumericInput(e.target.value, setSellingPrice)
                  }
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200 min-h-[44px]"
                  aria-describedby="selling-price-help"
                />
                <p id="selling-price-help" className="text-sm text-gray-500">
                  {t.sellingPriceHelp}
                </p>
              </div>

              <div className="bg-green-50 border-green-200 border p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">
                    {t.netEarningsLabel}
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    {netEarnings
                      ? `${netEarnings} ${t.robuxUnit}`
                      : `0 ${t.robuxUnit}`}
                  </span>
                </div>
              </div>

              {netEarnings && (
                <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                  <strong>{t.calculationLabel}</strong> {sellingPrice} × 0.7 ={" "}
                  {netEarnings} {t.robuxUnit}
                </div>
              )}
            </div>
          </div>

          {/* Pre-Tax Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {t.preTaxTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {t.preTaxSubtitle}
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="desired-earnings"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t.desiredEarningsLabel}
                </label>
                <input
                  id="desired-earnings"
                  type="text"
                  inputMode="decimal"
                  placeholder={t.desiredEarningsPlaceholder}
                  value={desiredEarnings}
                  onChange={(e) =>
                    handleNumericInput(e.target.value, setDesiredEarnings)
                  }
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200 min-h-[44px]"
                  aria-describedby="desired-earnings-help"
                />
                <p id="desired-earnings-help" className="text-sm text-gray-500">
                  {t.desiredEarningsHelp}
                </p>
              </div>

              <div className="bg-blue-50 border-blue-200 border p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">
                    {t.requiredPriceLabel}
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    {requiredPrice
                      ? `${requiredPrice} ${t.robuxUnit}`
                      : `0 ${t.robuxUnit}`}
                  </span>
                </div>
              </div>

              {requiredPrice && (
                <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                  <strong>{t.calculationLabel}</strong> {desiredEarnings} ÷ 0.7
                  = {requiredPrice} {t.robuxUnit}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <section className="mt-12 sm:mt-16 bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              {t.aboutTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {t.marketplaceTaxTitle}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t.marketplaceTaxContent1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.marketplaceTaxContent2}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {t.howToUseTitle}
                </h3>
                <ul className="text-gray-600 space-y-2 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{t.afterTaxUsage}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{t.preTaxUsage}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{t.realTimeUsage}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{t.mobileFriendlyUsage}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* New Content Sections */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* How We Calculate Robux */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {t.howWeCalculateTitle}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.howWeCalculateContent}
                </p>
              </div>

              {/* What Are Robux */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {t.whatAreRobuxTitle}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.whatAreRobuxContent}
                </p>
              </div>
            </div>

            {/* Robux Prices Table */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {t.robuxPricesTitle}
              </h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {t.robuxPricesContent}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t.priceTableRobux}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t.priceTableUSD}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t.priceTableRate}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        400 R$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        $4.99
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        80.2 R$
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        800 R$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        $9.99
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        80.1 R$
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1,700 R$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        $19.99
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        85.0 R$
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        4,500 R$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        $49.99
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        90.0 R$
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        10,000 R$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        $99.99
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        100.0 R$
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        22,500 R$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        $199.99
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        112.5 R$
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">
                {t.perfectForTitle}
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                {t.perfectForContent}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordion />

        {/* Footer Info */}
        <footer className="mt-8 sm:mt-12 text-center">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              {t.footerTitle}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {t.footerContent}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
