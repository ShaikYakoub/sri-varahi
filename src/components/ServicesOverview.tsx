"use client";

import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesOverview() {
  return (
    <section id="services" className="py-10 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground">
            Our{" "}
            <span className="text-blue-600 dark:text-amber-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
            Comprehensive gold solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <ServiceCard
            image="/images/homepage/sell-gold.avif"
            imageAlt="Gold ring close-up"
            icon={"💰"}
            title="Sell Gold"
            description="Get instant cash at best market rates with transparent XRF testing"
            benefits={["Live market rates", "Instant payment"]}
          />
          <ServiceCard
            image="/images/homepage/release-gold.avif"
            imageAlt="Gold bangles with financial documents"
            icon={"🔓"}
            title="Release Pledged Gold"
            description="Close your gold loans from any bank with instant settlement"
            benefits={["All banks accepted", "Quick clearance"]}
          />
          <ServiceCard
            image="/images/homepage/van.avif"
            imageAlt="Vehicle ready for doorstep gold pickup"
            icon={"🚗"}
            title="Vehicle Dispatcher"
            description="Safe doorstep pickup service with insured transportation"
            benefits={["Doorstep service", "Verified staff"]}
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg transition-all"
          >
            View All Services in Detail →
          </Link>
        </div>
      </div>
    </section>
  );
}
