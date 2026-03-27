"use client";

import Link from "next/link";
import Image from "next/image";

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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Service 1 */}
          <div className="bg-card dark:bg-card rounded-xl overflow-hidden shadow-sm border border-blue-100/50 dark:border-amber-500/20 hover:shadow-md hover:border-blue-300 dark:hover:border-amber-500/40 transition-all">
            <div className="relative h-32">
              <Image
                src="/images/homepage/sell-gold.avif"
                alt="Gold ring close-up"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-amber-400">
                Sell Gold
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-light mb-4">
                Get instant cash at best market rates with transparent XRF
                testing
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 font-light">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-amber-400">✓</span>
                  Live market rates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-amber-400">✓</span>
                  Instant payment
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-card dark:bg-card rounded-xl overflow-hidden shadow-sm border border-blue-100/50 dark:border-amber-500/20 hover:shadow-md hover:border-blue-300 dark:hover:border-amber-500/40 transition-all">
            <div className="relative h-32">
              <Image
                src="/images/homepage/release-gold.avif"
                alt="Gold bangles with financial documents"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🔓</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-amber-400">
                Release Pledged Gold
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-light mb-4">
                Close your gold loans from any bank with instant settlement
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 font-light">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-amber-400">✓</span>
                  All banks accepted
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-amber-400">✓</span>
                  Quick clearance
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-card dark:bg-card rounded-xl overflow-hidden shadow-sm border border-blue-100/50 dark:border-amber-500/20 hover:shadow-md hover:border-blue-300 dark:hover:border-amber-500/40 transition-all">
            <div className="relative h-32">
              <Image
                src="/images/homepage/van.avif"
                alt="Vehicle ready for doorstep gold pickup"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-amber-400">
                Vehicle Dispatcher
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-light mb-4">
                Safe doorstep pickup service with insured transportation
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 font-light">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-amber-400">✓</span>
                  Doorstep service
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-amber-400">✓</span>
                  Verified staff
                </li>
              </ul>
            </div>
          </div>
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
