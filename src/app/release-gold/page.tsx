"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";
import FloatingActions2 from "@/components/FloatingActions2";
import CalculatorSection from "@/components/CalculatorSection";
import Image from "next/image";

export default function ReleaseGoldPage() {
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
            src="/images/release/hero.avif"
            alt="gold necklace placed on a jewellary box"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/55 dark:bg-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl">
            <div className="text-6xl mb-4">🔓</div>
            <span className="inline-block px-4 py-1.5 bg-white/10 dark:bg-amber-400/20 text-white/90 dark:text-amber-100 text-sm font-medium rounded-full mb-4 border border-white/20 dark:border-amber-400/40">
              ⭐ Trusted Gold Buyers | Instant Payment
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Release Your Pledged Gold
            </h1>
            <p className="text-xl mb-8 text-white/80 font-light">
              Close your gold loan from any bank with instant settlement and
              fair valuation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg transition-all border-2 border-blue-500 dark:border-amber-400"
              >
                Release Gold Now
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

        <CalculatorSection
          defaultTab="pledged"
          tabs={[
            { label: "Pledged Gold Release Calculator", value: "pledged" },
          ]}
        />

        {/* Split Section - Banks Supported */}
        <section className="py-12 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                  Banks & NBFC Support
                </span>
                <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground">
                  Which Banks We Work With
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  We support releases from SBI, HDFC, ICICI, Axis, Muthoot,
                  Manappuram, and virtually all major banks or NBFC lenders.
                  Share your loan details, and we handle coordination and
                  settlement seamlessly.
                </p>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-blue-100/50 dark:border-amber-500/20">
                <Image
                  src="/images/release/partnered-banks.avif"
                  alt="Different bank passbooks and loan documents arranged on desk"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Split Section - Loan Clearance Flow */}
        <section className="py-12 bg-slate-50 dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-2">
                <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                  Loan Clearance Journey
                </span>
                <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground">
                  How Loan Clearance Works
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  We evaluate your gold, settle your outstanding loan amount
                  directly with the lender, and transfer the remaining balance
                  to you instantly. Every step is transparent, documented, and
                  built to help you unlock maximum value.
                </p>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-blue-100/50 dark:border-amber-500/20 order-1 md:order-1">
                <Image
                  src="/images/release/loan-clearance.avif"
                  alt="Gold, currency, and envelope arranged to represent loan settlement"
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
              Hassle-Free Process
            </span>
            <h2 className="text-4xl font-bold mb-6 text-foreground dark:text-foreground">
              Freedom from Gold Loans{" "}
              <span className="text-blue-600 dark:text-amber-500">
                Made Easy
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4">
              Stuck with a gold loan from a bank or NBFC?{" "}
              <span className="text-blue-600 dark:text-amber-500 font-semibold">
                Sri Varahi Gold Recovery and Buyers
              </span>{" "}
              offers a hassle-free way to release your pledged gold. We settle
              your outstanding loan directly with the lender and pay you the
              remaining value of your gold instantly—no lengthy procedures or
              complicated paperwork.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              As a modern, independent company, we use advanced XRF technology
              for accurate, transparent valuation. Our rates are always linked
              to live market prices, and we coordinate directly with your bank
              or NBFC for a smooth, stress-free experience. Say goodbye to high
              interest rates and unlock the full value of your gold today.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="relative overflow-hidden py-10">
          <Image
            src="/images/release/steps-process.avif"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/92 dark:bg-black/85" />
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">
                Simple 5-Step Process
              </span>
            </span>
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground">
              How It{" "}
              <span className="text-blue-600 dark:text-amber-500">Works</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  image: "/images/release/process/1.avif",
                  label: "Share Loan Details",
                  sub: "Bank name and amount",
                },
                {
                  image: "/images/release/process/2.avif",
                  label: "Gold Valuation",
                  sub: "XRF and weighing",
                },
                {
                  image: "/images/release/process/3.avif",
                  label: "We Pay the Bank",
                  sub: "Direct loan settlement",
                },
                {
                  image: "/images/release/process/4.avif",
                  label: "You Get the Balance",
                  sub: "Remaining amount instantly",
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
        </section>

        {/* Before After Grid */}
        <section className="py-12 bg-slate-50 dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                Your Gold. Freed.
              </span>
              <h2 className="text-3xl font-bold text-foreground dark:text-foreground">
                Before & After
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card dark:bg-card rounded-xl overflow-hidden border border-blue-100/50 dark:border-amber-500/20">
                <div className="relative h-72">
                  <Image
                    src="/images/release/release-before.avif"
                    alt="Pledged gold kept locked inside safety box"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <p className="text-sm font-semibold text-blue-600 dark:text-amber-400">
                    Before — Pledged
                  </p>
                </div>
              </div>
              <div className="bg-card dark:bg-card rounded-xl overflow-hidden border border-blue-100/50 dark:border-amber-500/20">
                <div className="relative h-72">
                  <Image
                    src="/images/release/release-after.avif"
                    alt="Released gold with successful payment confirmation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <p className="text-sm font-semibold text-blue-600 dark:text-amber-400">
                    After — Released
                  </p>
                </div>
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
            <div className="bg-blue-50/50 dark:bg-amber-500/5 rounded-2xl p-8 border border-blue-100/50 dark:border-amber-500/20">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-400 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">
                      Pledged Ticket/Receipt:
                    </strong>
                    <span className="text-gray-600 dark:text-gray-300">
                      {" "}
                      Original document provided by the bank/NBFC when you
                      pledged the gold
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-400 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">
                      Valid Government ID:
                    </strong>
                    <span className="text-gray-600 dark:text-gray-300">
                      {" "}
                      Aadhar Card, PAN Card, Driving License, or Passport
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-400 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">
                      PAN Card (Mandatory):
                    </strong>
                    <span className="text-gray-600 dark:text-gray-300">
                      {" "}
                      Required for all transactions above ₹2 lakhs
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-400 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">
                      Loan Statement:
                    </strong>
                    <span className="text-gray-600 dark:text-gray-300">
                      {" "}
                      Recent loan statement showing outstanding amount and
                      interest details
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-400 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">
                      Bank Account Details:
                    </strong>
                    <span className="text-gray-600 dark:text-gray-300">
                      {" "}
                      For receiving the balance amount after loan clearance
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-amber-500/10 rounded-lg border border-blue-100/50 dark:border-amber-500/20">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-blue-600 dark:text-amber-400">
                    Important:
                  </strong>{" "}
                  <span className="text-gray-600 dark:text-gray-300">
                    Interest and deductions will be calculated transparently.
                    We&apos;ll deduct the outstanding loan amount (principal +
                    interest) and any bank processing fees. The remaining value
                    will be paid to you instantly.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-10 bg-slate-50 dark:bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">
                🔍 100% Transparent
              </span>
            </span>
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground dark:text-foreground">
              Complete{" "}
              <span className="text-blue-600 dark:text-amber-500">
                Transparency
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card dark:bg-card p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
                  XRF Testing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  We use advanced XRF technology to test your pledged
                  gold&apos;s purity right in front of you. The exact karat and
                  weight are displayed on screen, ensuring complete transparency
                  in valuation.
                </p>
              </div>
              <div className="bg-card dark:bg-card p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
                  Live Market Rates
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  Your gold is valued at live international market rates. We
                  show you the exact calculation: (Weight × Purity × Rate) -
                  Loan Amount = Your Balance.
                </p>
              </div>
              <div className="bg-card dark:bg-card p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
                  Direct Bank Settlement
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  We handle all communications with your bank/NBFC. You
                  don&apos;t need to visit them—we&apos;ll directly pay off your
                  loan and provide you with the closure receipt.
                </p>
              </div>
              <div className="bg-card dark:bg-card p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
                  Instant Payment
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  Once the loan is cleared, the balance amount is transferred to
                  your bank account within minutes via NEFT/RTGS. No waiting, no
                  delays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-10 bg-white dark:bg-black">
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
                  q: "Which banks and NBFCs do you work with?",
                  a: "We work with all major banks and NBFCs including SBI, ICICI, HDFC, Muthoot Finance, Manappuram, and many others. If you have a gold loan from any institution, we can help you release it.",
                },
                {
                  q: "How long does the entire process take?",
                  a: "After verification (which takes 1-2 hours), the testing, loan clearance, and payment process takes about 30-45 minutes. You'll have your gold back and balance amount the same day.",
                },
                {
                  q: "What if my gold value is less than the loan amount?",
                  a: "In rare cases where accumulated interest makes the loan higher than gold's value, we'll inform you upfront. You can choose to pay the difference or we can guide you on other options.",
                },
                {
                  q: "Are there any charges for this service?",
                  a: "We don't charge any service fees. We buy your gold at fair market rates. The only deductions are your outstanding loan amount and any bank processing charges (which we pay on your behalf).",
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
      <FloatingActions2 />
      <Footer2 />
    </>
  );
}
