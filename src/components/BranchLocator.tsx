"use client";

import { useState } from "react";
import { branches } from "@/data/branches";
import ServiceCard from "@/components/ServiceCard";

const STATES = ["Andhra Pradesh"] as const;

export default function BranchLocator() {
  const [openState, setOpenState] = useState<string | null>(STATES[0]);

  return (
    <section id="branches" className="space-y-6">
      {STATES.map((state) => (
        <div
          key={state}
          className="border border-blue-100/50 dark:border-amber-500/20 rounded-xl"
        >
          <button
            onClick={() => setOpenState(openState === state ? null : state)}
            className="w-full flex justify-between items-center px-6 py-4 font-semibold text-lg hover:bg-blue-50 dark:hover:bg-amber-500/10 transition-colors rounded-xl"
          >
            <span className="text-blue-600 dark:text-amber-400">
              📍 {state}
            </span>
            <span className="text-blue-600 dark:text-amber-400">
              {openState === state ? "−" : "+"}
            </span>
          </button>
          {openState === state && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {branches
                .filter((b) => b.state === state)
                .map((branch) => (
                  <ServiceCard
                    key={branch.id}
                    image={undefined}
                    imageAlt={branch.name}
                    icon={
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    title={branch.name}
                    description={`${branch.city} — ${branch.address}`}
                    benefits={[`Phone: ${branch.phone}`]}
                    embedUrl={branch.embedUrl}
                    mapUrl={branch.mapUrl}
                  />
                ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
