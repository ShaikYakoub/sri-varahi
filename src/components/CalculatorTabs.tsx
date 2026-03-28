"use client";

import { useState } from "react";

interface CalculatorTabsProps {
  defaultTab?: "sell" | "pledged";
}
import GoldCalculator from "@/components/GoldCalculator";
import PledgedGoldCalculator from "@/components/PledgedGoldCalculator";

interface TabConfig {
  label: string;
  value: "sell" | "pledged";
}

interface CalculatorTabsProps {
  defaultTab?: "sell" | "pledged";
  tabs?: TabConfig[];
}

const defaultTabs: TabConfig[] = [
  { label: "Sell Gold Calculator", value: "sell" },
  { label: "Pledged Gold Release Calculator", value: "pledged" },
];

export default function CalculatorTabs({
  defaultTab = "sell",
  tabs = defaultTabs,
}: CalculatorTabsProps) {
  const [activeTab, setActiveTab] = useState<"sell" | "pledged">(
    tabs.find((t) => t.value === defaultTab)?.value || tabs[0].value,
  );

  return (
    <div className="w-full">
      {tabs.length > 1 && (
        <div className="flex justify-center gap-2 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`px-4 py-2 rounded-full font-medium shadow-sm border transition-colors focus:outline-none text-sm md:text-base
                ${
                  activeTab === tab.value
                    ? "border-blue-600 dark:border-amber-400 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400"
                    : "border-blue-100 dark:border-amber-500/20 bg-white/70 dark:bg-black/40 text-gray-600 dark:text-gray-300 hover:bg-blue-50/60 dark:hover:bg-amber-500/10"
                }
              `}
              onClick={() => setActiveTab(tab.value)}
              type="button"
              style={{ minWidth: 160 }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      {activeTab === "sell" && tabs.some((t) => t.value === "sell") && (
        <GoldCalculator />
      )}
      {activeTab === "pledged" && tabs.some((t) => t.value === "pledged") && (
        <PledgedGoldCalculator />
      )}
    </div>
  );
}
