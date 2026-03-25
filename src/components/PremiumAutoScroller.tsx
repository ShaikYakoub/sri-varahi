"use client";

import { useEffect, useRef } from "react";

const partners = [
  { id: 1, name: "SBI", fullName: "State Bank of India" },
  { id: 2, name: "HDFC", fullName: "HDFC Bank" },
  { id: 3, name: "ICICI", fullName: "ICICI Bank" },
  { id: 4, name: "Muthoot", fullName: "Muthoot Finance" },
  { id: 5, name: "Manappuram", fullName: "Manappuram Finance" },
  { id: 6, name: "Axis", fullName: "Axis Bank" },
];

export default function PremiumAutoScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    let animationId: number;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scroller.scrollWidth / 3) {
        scrollAmount = 0;
      }
      scroller.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="scroller-section relative bg-slate-50 dark:bg-black overflow-hidden">
      <div className="py-2">
        <h3 className="text-center text-xs font-semibold text-blue-600 dark:text-amber-400 mb-2 uppercase tracking-wider">
          Trusted by Leading Organizations
        </h3>
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 dark:from-black to-transparent z-10 pointer-events-none"></div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 dark:from-black to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollerRef}
            className="flex gap-8 overflow-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {/* Triple items for truly seamless loop */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="shrink-0 min-w-32 h-14 px-3 bg-gradient-to-br from-white to-slate-50 dark:from-black dark:to-gray-900 flex items-center justify-center border border-blue-100 dark:border-amber-500/20"
                title={partner.fullName}
                aria-label={partner.fullName}
              >
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide uppercase">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
