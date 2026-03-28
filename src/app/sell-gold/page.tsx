"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import GoldRateCard from "@/components/GoldRateCard";
import GoldCalculator from "@/components/GoldCalculator";
import Image from "next/image";

export default function SellGoldPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen flex items-center justify-center py-8 md:py-12">
          <Image
            src="/images/sell/hero.avif"
            alt="gold on a weighing scale"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/55 dark:bg-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl">
            <div className="text-6xl mb-4">💰</div>
            <span className="inline-block px-4 py-1.5 bg-white/10 dark:bg-amber-400/20 text-white/90 dark:text-amber-200 text-sm font-medium rounded-full mb-4 border border-white/20 dark:border-amber-400/40">
              ⭐ Trusted Gold Buyers | Instant Payment
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sell Your Gold Today
            </h1>
            <p className="text-xl mb-8 text-white/80 font-light">
              Get the best rates with instant payment and complete transparency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white font-bold rounded-lg shadow-lg transition-all border-2 border-blue-500 dark:border-amber-400"
              >
                Sell Gold Now
              </button>
              <button
                onClick={scrollToProcess}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border-2 border-white/70 hover:border-white transition-all flex items-center justify-center gap-2"
              >
                Know More <span>→</span>
              </button>
            </div>
          </div>
        </section>

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
            <GoldCalculator />
          </div>
        </section>

        {/* Split Section - What We Accept */}
        <section className="py-12 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                  What We Accept
                </span>
                <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground">
                  We Buy Every Form of Gold
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Bring gold jewelry, coins, bars, broken chains, mismatched
                  earrings, and even old or damaged ornaments. We evaluate each
                  piece transparently and offer live market-linked value based
                  on purity and weight.
                </p>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-blue-100/50 dark:border-amber-500/20">
                <Image
                  src="/images/sell/accepted-gold.avif"
                  alt="Assorted gold items including jewelry, coins, and bars"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Split Section - No Hidden Deductions */}
        <section className="py-12 bg-slate-50 dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-2">
                <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                  Transparent Pricing
                </span>
                <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground">
                  No Hidden Deductions
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  No vague wastage cuts, no unexplained making-charge
                  deductions, and no hidden fees. You see the test result, live
                  rate, and final payable amount clearly before you confirm.
                </p>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-blue-100/50 dark:border-amber-500/20 order-1 md:order-1">
                <Image
                  src="/images/sell/no-hidden-deductions.avif"
                  alt="Precision scale weighing gold chain with receipt beside it"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="process" className="py-10 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold mb-6 text-foreground dark:text-foreground">
              Trust Meets{" "}
              <span className="text-blue-600 dark:text-amber-500">
                Technology
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4">
              At{" "}
              <span className="text-blue-600 dark:text-amber-500 font-semibold">
                Varahi Gold Recovery and Buyers
              </span>
              , we are redefining the gold selling experience for a new
              generation. As a modern, independent company, our mission is to
              make selling your gold{" "}
              <span className="text-blue-600 dark:text-amber-500 font-semibold">
                simple, transparent,
              </span>{" "}
              and rewarding—every step of the way.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              We use advanced XRF (X-Ray Fluorescence) technology to test your
              gold’s purity with{" "}
              <span className="text-blue-600 dark:text-amber-500 font-semibold">
                scientific accuracy
              </span>
              , right in front of you. Our rates are always linked to{" "}
              <span className="text-blue-600 dark:text-amber-500 font-semibold">
                live international gold prices
              </span>
              , so you receive the best possible value. With instant bank
              transfers, your payment is processed within minutes—no waiting, no
              hassle.
            </p>
          </div>
        </section>

        {/* Process Strip - Sell Gold in 5 Steps */}
        <section className="py-12 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Sell Gold in{" "}
                <span className="text-blue-700 dark:text-amber-400">
                  5 Steps
                </span>
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-2 font-light">
                The simplest, fastest, and most transparent way to turn your
                gold into cash
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-blue-200 dark:bg-amber-500/30 z-0" />
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
                {[
                  {
                    image: "/images/sell/process/1.avif",
                    label: "Visit Our Branch",
                    sub: "Any location near you",
                  },
                  {
                    image: "/images/sell/process/2.avif",
                    label: "Submit Your Gold",
                    sub: "Jewelry, coins, or bars",
                  },
                  {
                    image: "/images/sell/process/3.avif",
                    label: "XRF Purity Test",
                    sub: "Takes under 2 minutes",
                  },
                  {
                    image: "/images/sell/process/4.avif",
                    label: "Weighing & Valuation",
                    sub: "Live market-rate pricing",
                  },
                  {
                    image: "/images/sell/process/5.avif",
                    label: "Instant Payment",
                    sub: "NEFT/RTGS in minutes",
                  },
                ].map((step, i) => (
                  <div
                    key={step.label}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-gray-900 shadow-lg">
                      <Image
                        src={step.image}
                        alt={step.label}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-blue-600 dark:bg-amber-500 text-white dark:text-gray-900 text-xs font-bold flex items-center justify-center mb-2">
                      {i + 1}
                    </div>
                    <p className="text-sm font-semibold text-foreground dark:text-foreground">
                      {step.label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {step.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Grid - Inside Our Branch */}
        <section className="py-12 bg-slate-50 dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                Inside Our Branch
              </span>
              <h2 className="text-3xl font-bold text-foreground dark:text-foreground">
                How It Looks At Our Branch
              </h2>
            </div>
            <div className="grid grid-rows-3 gap-3">
              {/* Top: full width image, aspect-video for wide look */}
              <div className="relative rounded-xl overflow-hidden shadow-sm border border-blue-100/50 dark:border-amber-500/20 bg-white dark:bg-black aspect-video row-span-1">
                <Image
                  src="/images/sell/inside-our-branch/1.avif"
                  alt="Main interior view of Value Gold branch"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
              {/* Middle: left is former bottom image, right is secure vault */}
              <div className="grid grid-cols-2 gap-3 row-span-1">
                <div className="relative rounded-xl overflow-hidden shadow-sm border border-blue-100/50 dark:border-amber-500/20 bg-white dark:bg-black">
                  <Image
                    src="/images/sell/inside-our-branch/4.avif"
                    alt="Precision weighing station at branch"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 450px"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-sm border border-blue-100/50 dark:border-amber-500/20 bg-white dark:bg-black">
                  <Image
                    src="/images/sell/inside-our-branch/3.avif"
                    alt="Secure vault area in branch"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 450px"
                  />
                </div>
              </div>
              {/* Bottom: full width image, now XRF table */}
              <div className="relative rounded-xl overflow-hidden shadow-sm border border-blue-100/50 dark:border-amber-500/20 bg-white dark:bg-black aspect-video row-span-1">
                <Image
                  src="/images/sell/inside-our-branch/2.avif"
                  alt="XRF testing table setup inside branch"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="py-10 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">
                📋 What You Need
              </span>
            </span>
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground dark:text-foreground">
              Documents{" "}
              <span className="text-blue-600 dark:text-amber-500">
                Required
              </span>
            </h2>
            <div className="bg-slate-50 dark:bg-gray-800 rounded-2xl p-8 border border-blue-100/50 dark:border-amber-500/20">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-500 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">
                      Valid Government ID:
                    </strong>
                    <span className="text-gray-600 dark:text-gray-300 font-light">
                      {" "}
                      Aadhar Card, PAN Card, Driving License, or Passport
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-500 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">
                      PAN Card (Mandatory):
                    </strong>
                    <span className="text-gray-600 dark:text-gray-300 font-light">
                      {" "}
                      Required for all transactions above ₹2 lakhs as per
                      government regulations
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-500 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">
                      Bank Account Details:
                    </strong>
                    <span className="text-gray-600 dark:text-gray-300 font-light">
                      {" "}
                      For instant NEFT/RTGS transfer
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50/50 dark:bg-amber-500/5 rounded-lg border border-blue-100/50 dark:border-amber-500/20">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-blue-600 dark:text-amber-400">
                    Important:
                  </strong>{" "}
                  Cash payments are not permitted for transactions above ₹2
                  lakhs. All payments will be made via bank transfer for
                  security and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-10 bg-slate-50 dark:bg-black">
          <div className="max-w-3xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">
                ❓ Got Questions?
              </span>
            </span>
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground">
              Frequently Asked{" "}
              <span className="text-blue-600 dark:text-amber-500">
                Questions
              </span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What types of gold do you accept?",
                  a: "We accept all forms of gold including jewelry (22K, 18K, 14K), coins, bars, broken jewelry, old ornaments, dental gold, and scrap gold. Each item is tested separately for accurate valuation.",
                },
                {
                  q: "Is there a minimum quantity required?",
                  a: "No! You can sell gold starting from just 1 gram. We accept all quantities without any minimum requirement.",
                },
                {
                  q: "Are there any deductions or hidden charges?",
                  a: "No hidden charges at all! The price you see is the price you get. We don't deduct for making charges, wastage, or stones. The only deduction is for impurities, which is clearly shown during XRF testing.",
                },
                {
                  q: "How is the gold rate determined?",
                  a: "Our rates are linked to live international gold prices and updated in real-time. We offer competitive rates based on current market value and purity of your gold.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="bg-card dark:bg-card rounded-xl shadow-sm border border-blue-50 dark:border-amber-500/20 overflow-hidden cursor-pointer hover:border-blue-200 dark:hover:border-amber-500/40 transition-colors"
                >
                  <div className="w-full flex justify-between items-center px-6 py-4 text-left">
                    <span className="font-semibold text-foreground dark:text-foreground pr-4">
                      {faq.q}
                    </span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-amber-400 shrink-0">
                      {openFaqIndex === i ? "−" : "+"}
                    </span>
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openFaqIndex === i
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 font-light">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}
