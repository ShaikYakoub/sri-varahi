"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";
import FloatingActions2 from "@/components/FloatingActions2";
import BranchLocator from "@/components/BranchLocator";

export default function BranchesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden md:min-h-100 flex items-center justify-center py-8 md:py-12">
          <Image
            src="/images/hero-branches-bg.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-blue-800/70 dark:bg-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl">
            <div className="text-6xl mb-4">📍</div>
            <span className="inline-block px-4 py-1.5 bg-white/10 dark:bg-amber-400/20 text-white/90 dark:text-amber-100 text-sm font-medium rounded-full mb-4 border border-white/20 dark:border-amber-400/40">
              🏢 <span className="font-semibold">19+</span> Locations
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Us Near You
            </h1>
            <p className="text-xl mb-4 text-white/80 font-light">
              <span className="font-bold">19+</span> branches including mobile
              branches across Andhra Pradesh and Telangana
            </p>
            <p className="text-lg text-white/70 font-light">
              Visit any of our convenient locations for gold buying, selling,
              and loan release services
            </p>
          </div>
        </section>

        {/* Branch Locator */}
        <section className="py-10 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <BranchLocator />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-10 bg-gray-50 dark:bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">
                Why Visit Us
              </span>
            </span>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Why Visit Our{" "}
              <span className="text-blue-600 dark:text-amber-500">
                Branches
              </span>
              ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="relative h-40">
                  <Image
                    src="/images/card-xrf-testing.webp"
                    alt="XRF testing equipment setup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-amber-400">
                    XRF Testing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-light">
                    Advanced technology for accurate purity testing right in
                    front of you
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="relative h-40">
                  <Image
                    src="/images/card-instant-payment.webp"
                    alt="Instant payment confirmation on smartphone"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-amber-400">
                    Instant Payment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-light">
                    Get your money within minutes via NEFT/RTGS or cash (up to
                    ₹2 lakhs)
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="relative h-40">
                  <Image
                    src="/images/card-expertise.webp"
                    alt="Professional gold testing instruments"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-amber-400">
                    Expert Team
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-light">
                    <span className="font-semibold text-blue-600 dark:text-amber-400">
                      120+
                    </span>{" "}
                    years of experience in gold valuation and customer service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Branch Split */}
        <section className="py-12 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                  Mobile Branch Service
                </span>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Fully Equipped Branches on Wheels
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Our mobile branch vans bring professional gold testing,
                  valuation tools, and secure handling directly to your area.
                  You receive the same trusted process and transparent pricing
                  without traveling to a fixed branch.
                </p>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-blue-100/50 dark:border-amber-500/20">
                <Image
                  src="/images/split-mobile-branch.webp"
                  alt="Professional mobile branch van parked in a residential neighborhood"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingActions2 />
      <Footer2 />
    </>
  );
}
