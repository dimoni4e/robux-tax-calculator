"use client";

import { useState } from "react";
import {
  calculateNetEarnings,
  calculateRequiredPrice,
  formatRobux,
  validateInput,
  sanitizeNumericInput,
} from "@/lib/calculations";
import {
  CalculatorInputProps,
  CalculatorResultProps,
} from "@/types/calculator";

// Input component for calculator fields
function CalculatorInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  helpText,
}: CalculatorInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeNumericInput(e.target.value);
    if (validateInput(sanitized)) {
      onChange(sanitized);
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode="decimal"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition-colors duration-200 min-h-[44px]"
        aria-describedby={helpText ? `${id}-help` : undefined}
      />
      {helpText && (
        <p id={`${id}-help`} className="text-sm text-gray-500">
          {helpText}
        </p>
      )}
    </div>
  );
}

// Result display component
function CalculatorResult({
  label,
  value,
  className = "",
}: CalculatorResultProps) {
  return (
    <div className={`bg-gray-50 p-4 rounded-lg border ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <span className="text-xl font-bold text-gray-900">
          {value ? `${value} Robux` : "0 Robux"}
        </span>
      </div>
    </div>
  );
}

// Main Calculator component
export default function Calculator() {
  const [sellingPrice, setSellingPrice] = useState("");
  const [desiredEarnings, setDesiredEarnings] = useState("");

  // Calculate results in real-time
  const netEarnings =
    sellingPrice && parseFloat(sellingPrice) > 0
      ? formatRobux(calculateNetEarnings(parseFloat(sellingPrice)))
      : "";

  const requiredPrice =
    desiredEarnings && parseFloat(desiredEarnings) > 0
      ? formatRobux(calculateRequiredPrice(parseFloat(desiredEarnings)))
      : "";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Robux Tax Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your net earnings and required selling prices for Roblox
            marketplace items. Roblox takes a 30% marketplace tax on all sales.
          </p>
        </header>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* After-Tax Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                After-Tax Calculator
              </h2>
              <p className="text-gray-600">
                Enter your selling price to see net earnings after 30% tax
              </p>
            </div>

            <div className="space-y-6">
              <CalculatorInput
                id="selling-price"
                label="Selling Price (Robux)"
                value={sellingPrice}
                onChange={setSellingPrice}
                placeholder="100"
                helpText="Enter the price you plan to sell for"
              />

              <CalculatorResult
                label="Net Earnings After Tax"
                value={netEarnings}
                className="bg-green-50 border-green-200"
              />

              {netEarnings && (
                <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                  <strong>Calculation:</strong> {sellingPrice} × 0.7 ={" "}
                  {netEarnings} Robux
                </div>
              )}
            </div>
          </div>

          {/* Pre-Tax Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Pre-Tax Calculator
              </h2>
              <p className="text-gray-600">
                Enter your desired earnings to see required selling price
              </p>
            </div>

            <div className="space-y-6">
              <CalculatorInput
                id="desired-earnings"
                label="Desired Net Earnings (Robux)"
                value={desiredEarnings}
                onChange={setDesiredEarnings}
                placeholder="70"
                helpText="Enter how much you want to earn after tax"
              />

              <CalculatorResult
                label="Required Selling Price"
                value={requiredPrice}
                className="bg-blue-50 border-blue-200"
              />

              {requiredPrice && (
                <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                  <strong>Calculation:</strong> {desiredEarnings} ÷ 0.7 ={" "}
                  {requiredPrice} Robux
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              How Roblox Marketplace Tax Works
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Roblox charges a 30% marketplace fee on all sales. This means you
              receive 70% of the selling price as your net earnings. Use this
              calculator to plan your pricing strategy and understand your
              actual profits.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
