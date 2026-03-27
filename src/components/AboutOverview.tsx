"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutOverview() {
  return (
    <section id="about" className="py-10 bg-slate-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
            ✨ A New Era Begins
          </span>
          <h2 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground">
            Our <span className="text-blue-600 dark:text-amber-500">Story</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Redefining trust, transparency, and value for a new generation of
            gold owners
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Our Spark */}
          <div className="bg-linear-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-8 rounded-2xl border border-blue-100/50 dark:border-amber-500/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
              The Spark That Drives Us
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4">
              Born from a passion to make gold selling simple, honest, and
              empowering, we are here to set a new standard for how value is
              unlocked and trust is built.
            </p>
          </div>

          {/* Values */}
          <div className="bg-linear-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-8 rounded-2xl border border-blue-100/50 dark:border-amber-500/20">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
              What We Stand For
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We believe in radical transparency, fair value for every customer,
              and a relentless focus on making your experience seamless and
              stress-free. Every interaction is built on respect and clarity.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="relative overflow-hidden bg-card dark:bg-card p-8 rounded-2xl border-2 border-blue-400 dark:border-amber-500 mb-12">
          <Image
            src="/images/texture-heritage.webp"
            alt=""
            fill
            className="object-cover opacity-20 dark:opacity-15"
          />
          <div className="absolute inset-0 bg-white/80 dark:bg-black/70" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-amber-400">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                To become the most trusted and innovative gold partner in Andhra
                Pradesh, making every transaction effortless, transparent, and
                rewarding for all.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-amber-400">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                We are on a mission to transform the way people experience gold
                selling—by combining technology, empathy, and expertise to
                deliver unmatched value and peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg transition-all"
          >
            Explore Our Complete Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
