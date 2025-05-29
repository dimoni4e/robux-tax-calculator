"use client";

import { useState } from "react";

export default function Calculator() {
  const [sellingPrice, setSellingPrice] = useState("");
  const [desiredEarnings, setDesiredEarnings] = useState("");

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
              <div className="space-y-2">
                <label
                  htmlFor="selling-price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Selling Price (Robux)
                </label>
                <input
                  id="selling-price"
                  type="text"
                  inputMode="decimal"
                  placeholder="100"
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
                  Enter the price you plan to sell for
                </p>
              </div>

              <div className="bg-green-50 border-green-200 border p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Net Earnings After Tax
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    {netEarnings ? `${netEarnings} Robux` : "0 Robux"}
                  </span>
                </div>
              </div>

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
              <div className="space-y-2">
                <label
                  htmlFor="desired-earnings"
                  className="block text-sm font-medium text-gray-700"
                >
                  Desired Net Earnings (Robux)
                </label>
                <input
                  id="desired-earnings"
                  type="text"
                  inputMode="decimal"
                  placeholder="70"
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
                  Enter how much you want to earn after tax
                </p>
              </div>

              <div className="bg-blue-50 border-blue-200 border p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Required Selling Price
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    {requiredPrice ? `${requiredPrice} Robux` : "0 Robux"}
                  </span>
                </div>
              </div>

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
