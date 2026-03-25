"use client";

import { useState } from "react";
import GoldRateCard from "@/components/GoldRateCard";
import GoldCalculator from "@/components/GoldCalculator";
import PledgedGoldCalculator from "@/components/PledgedGoldCalculator";

type Tab = "sell" | "release";

type CalculatorSectionProps = {
  defaultTab?: Tab;
};

export default function CalculatorSection({
  defaultTab = "sell",
}: CalculatorSectionProps) {
  const [tab, setTab] = useState<Tab>(defaultTab);

  return (
    <section id="calculators" className="py-10 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <GoldRateCard />

        <div className="flex justify-center gap-2 my-6">
          <button
            onClick={() => setTab("sell")}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
              tab === "sell"
                ? "bg-blue-600 dark:bg-amber-500 text-white dark:text-gray-900 shadow-md"
                : "bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400"
            }`}
          >
            Sell Gold
          </button>
          <button
            onClick={() => setTab("release")}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
              tab === "release"
                ? "bg-blue-600 dark:bg-amber-500 text-white dark:text-gray-900 shadow-md"
                : "bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400"
            }`}
          >
            Release Pledged Gold
          </button>
        </div>

        {tab === "sell" ? <GoldCalculator /> : <PledgedGoldCalculator />}
      </div>
    </section>
  );
}
