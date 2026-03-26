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
        <GoldRateCard />
        <div className="my-6" />
        <CalculatorTabs defaultTab={defaultTab} tabs={tabs} />
      </div>
    </section>
  );
}
