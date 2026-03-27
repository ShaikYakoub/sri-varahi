"use client";

import GoldRateCard from "@/components/GoldRateCard";
import CalculatorTabs from "@/components/CalculatorTabs";

interface CalculatorSectionProps {
  defaultTab?: "sell" | "pledged";
  tabs?: { label: string; value: "sell" | "pledged" }[];
}

export default function CalculatorSection({
  defaultTab = "sell",
  tabs,
}: CalculatorSectionProps) {
  return (
    <section id="calculators" className="py-10 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
            Calculate Instantly
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Gold{" "}
            <span className="text-blue-700 dark:text-amber-400">
              Calculator
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-2 font-light">
            Check live gold rates and estimate your payout in seconds
          </p>
        </div>
        <GoldRateCard />
        <div className="my-6" />
        <CalculatorTabs defaultTab={defaultTab} tabs={tabs} />
      </div>
    </section>
  );
}
