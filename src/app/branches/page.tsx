"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BranchLocator from "@/components/BranchLocator";
import ServiceCard from "@/components/ServiceCard";

export default function BranchesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen flex items-center justify-center py-8 md:py-12 mt-[-8px]">
          <Image
            src="/images/branches/hero.avif"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/55 dark:bg-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl">
            <div className="text-6xl mb-4">📍</div>
            <span className="inline-block px-4 py-1.5 bg-white/10 dark:bg-amber-400/20 text-white/90 dark:text-amber-100 text-sm font-medium rounded-full mb-4 border border-white/20 dark:border-amber-400/40">
              🏢 <span className="font-semibold">3</span> Locations
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Us Near You
            </h1>
            <p className="text-xl mb-4 text-white/80 font-light">
              <span className="font-bold">3</span> branches across Andhra
              Pradesh
            </p>
            <p className="text-lg text-white/70 font-light">
              Visit any of our convenient locations for gold buying, selling,
              and loan release services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="#branch-locator"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
              >
                Get Directions
              </a>
              <a
                href="tel:+919999999999"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg shadow-md border-2 border-white/50 transition-all text-lg"
              >
                Contact Branch
              </a>
            </div>
          </div>
        </section>

        {/* Branch Locator */}
        <section className="py-10 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                Find a Branch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Branch{" "}
                <span className="text-blue-700 dark:text-amber-400">
                  Locator
                </span>
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-2 font-light">
                Search for the nearest Sri Varahi branch and get directions
                instantly
              </p>
            </div>
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
              {/* Use ServiceCard for each card */}
              <ServiceCard
                image="/images/branches/xrf-testing.avif"
                imageAlt="XRF testing equipment setup"
                icon={<span>🔬</span>}
                title="XRF Testing"
                description="Advanced technology for accurate purity testing right in front of you"
                benefits={[]}
              />
              <ServiceCard
                image="/images/branches/instant-payments.avif"
                imageAlt="Instant payment confirmation on smartphone"
                icon={<span>💰</span>}
                title="Instant Payment"
                description="Get your money within minutes via NEFT/RTGS or cash (up to ₹2 lakhs)"
                benefits={[]}
              />
              <ServiceCard
                image="/images/branches/expert-team.avif"
                imageAlt="Professional gold testing instruments"
                icon={<span>👥</span>}
                title="Expert Team"
                description="Trusted expertise in modern gold valuation and customer care"
                benefits={[]}
              />
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
                  src="/images/branches/van.avif"
                  alt="Professional mobile branch van parked in a residential neighborhood"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}
