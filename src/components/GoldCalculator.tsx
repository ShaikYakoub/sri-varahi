"use client";

import { useState, useEffect } from "react";
import CustomDropdown from "@/components/CustomDropdown";

export default function GoldCalculator() {
  const [purity, setPurity] = useState(24);
  const [weight, setWeight] = useState(1);
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);
  const goldRate = 6850; // This would come from GoldRateCard in production

  useEffect(() => {
    if (weight >= 1 && weight <= 100000) {
      const purityMultiplier = purity / 24;
      const value = goldRate * purityMultiplier * weight;
      setEstimatedValue(Math.round(value));
    } else {
      setEstimatedValue(null);
    }
  }, [purity, weight]);

  return (
    <section id="calculator" className="py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-600 dark:text-amber-400">
          Sell Gold Calculator
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Get instant valuation of your gold
        </p>

        <div className="bg-yellow-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-blue-200 dark:border-amber-500/30">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Purity Custom Dropdown */}
            <CustomDropdown
              label="Gold Purity"
              value={purity}
              onChange={(v) => setPurity(Number(v))}
              options={[
                { value: 24, label: "24K" },
                { value: 22, label: "22K" },
                { value: 18, label: "18K" },
                { value: 14, label: "14K" },
              ]}
            />

            {/* Weight Custom Dropdown */}
            <CustomDropdown
              label="Weight (grams)"
              value={weight}
              onChange={(v) => setWeight(Number(v))}
              options={[
                { value: 1, label: "1g" },
                { value: 5, label: "5g" },
                { value: 10, label: "10g" },
                { value: 20, label: "20g" },
                { value: 50, label: "50g" },
                { value: 100, label: "100g" },
                { value: 500, label: "500g" },
                { value: 1000, label: "1000g" },
              ]}
            />
          </div>

          {/* Result */}
          {estimatedValue !== null && (
            <div className="bg-white dark:bg-black rounded-xl p-6 text-center border-2 border-blue-500 dark:border-yellow-500">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Estimated Value
              </div>
              <div className="text-5xl font-extrabold bg-linear-to-r from-blue-600 to-blue-800 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
                ₹{estimatedValue.toLocaleString("en-IN")}
              </div>
            </div>
          )}

          {weight < 1 || weight > 100000 ? (
            <div className="mt-4 text-center text-sm text-red-600 dark:text-red-400">
              Please enter weight between 1 and 100,000 grams
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
