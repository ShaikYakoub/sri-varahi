"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";
import FloatingActions2 from "@/components/FloatingActions2";
import CalculatorSection from "@/components/CalculatorSection";
import Image from "next/image";

export default function ReleaseGoldPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    bankName: "",
    loanAmount: "",
    goldWeight: "",
    karats: "",
    pledgedTicket: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you! We will verify your pledged gold details and contact you shortly.",
    );
  };

  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden md:min-h-125 flex items-center justify-center py-8 md:py-12">
          <Image
            src="/images/hero-release-gold-bg.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/55 dark:bg-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl">
            <div className="text-6xl mb-4">🔓</div>
            <span className="inline-block px-4 py-1.5 bg-white/10 dark:bg-amber-400/20 text-white/90 dark:text-amber-100 text-sm font-medium rounded-full mb-4 border border-white/20 dark:border-amber-400/40">
              ⭐ <span className="font-semibold">120+</span> Years of Trust
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

        <CalculatorSection defaultTab="release" />

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
                  src="/images/split-banks-supported.webp"
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
                  src="/images/split-loan-clearance.webp"
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
              Stuck with a gold loan from a bank or NBFC? Value Gold offers a
              hassle-free solution to release your pledged gold. We directly pay
              off your loan amount to the lender and give you the balance value
              of your gold instantly. No lengthy procedures, no complicated
              paperwork—just transparency and trust.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              With over{" "}
              <span className="font-semibold text-blue-600 dark:text-amber-400">
                120 years
              </span>{" "}
              of experience and cutting-edge XRF technology, we ensure fair
              valuation and complete transparency at every step. Our rates are
              linked to live market prices, and we handle all communications
              with your bank or NBFC. Say goodbye to high interest rates and
              unlock the full value of your gold today.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="relative overflow-hidden py-10">
          <Image
            src="/images/steps-process.webp"
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
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: 1,
                  title: "Submit Request",
                  desc: "Fill the form with loan details and pledged ticket",
                },
                {
                  step: 2,
                  title: "Verification",
                  desc: "We verify your details with the bank/NBFC",
                },
                {
                  step: 3,
                  title: "Gold Testing",
                  desc: "XRF testing to determine exact purity and value",
                },
                {
                  step: 4,
                  title: "Loan Clearance",
                  desc: "We pay off your loan amount directly",
                },
                {
                  step: 5,
                  title: "Get Balance",
                  desc: "Receive the remaining amount instantly",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="text-center bg-white/75 dark:bg-gray-900/65 rounded-xl p-4 border border-blue-100/70 dark:border-amber-500/20 backdrop-blur-xs"
                >
                  <div className="w-16 h-16 bg-blue-600 dark:bg-amber-500 text-white dark:text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Strip - Release in 4 Steps */}
        <section className="py-12 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground">
              Release Pledged Gold in 4 Steps
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-blue-200 dark:bg-amber-500/30 z-0" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    image: "/images/process-release-1-docs.webp",
                    label: "Share Loan Details",
                    sub: "Bank name and amount",
                  },
                  {
                    image: "/images/process-release-2-value.webp",
                    label: "Gold Valuation",
                    sub: "XRF and weighing",
                  },
                  {
                    image: "/images/process-release-3-settle.webp",
                    label: "We Pay the Bank",
                    sub: "Direct loan settlement",
                  },
                  {
                    image: "/images/process-release-4-balance.webp",
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
                    src="/images/release-before.webp"
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
                    src="/images/release-after.webp"
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

        {/* Form Section */}
        <section id="form" className="py-10 bg-slate-50 dark:bg-black">
          <div className="max-w-2xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-amber-500/20 text-blue-700 dark:text-amber-400 text-sm font-semibold rounded-full">
                📝 Quick Form
              </span>
            </span>
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground dark:text-foreground">
              Ready to Release?{" "}
              <span className="text-blue-600 dark:text-amber-500">
                Fill the Form
              </span>
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-card dark:bg-card rounded-2xl p-8 border border-blue-200 dark:border-amber-500/30 shadow-lg space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Bank/NBFC Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.bankName}
                    onChange={(e) =>
                      setFormData({ ...formData, bankName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="e.g., ICICI Bank, Muthoot Finance"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Outstanding Loan Amount (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.loanAmount}
                    onChange={(e) =>
                      setFormData({ ...formData, loanAmount: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Pledged Gold Weight
                  </label>
                  <input
                    type="number"
                    value={formData.goldWeight}
                    onChange={(e) =>
                      setFormData({ ...formData, goldWeight: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Karats (if known)
                  </label>
                  <select
                    value={formData.karats}
                    onChange={(e) =>
                      setFormData({ ...formData, karats: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  >
                    <option value="">Select karats</option>
                    <option value="24k">24K (99.9% pure)</option>
                    <option value="22k">22K (91.6% pure)</option>
                    <option value="18k">18K (75% pure)</option>
                    <option value="14k">14K (58.3% pure)</option>
                    <option value="unknown">Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Pledged Ticket Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pledgedTicket}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pledgedTicket: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Found on your loan receipt"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                  Additional Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Any special requests or questions?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg transition-all text-lg"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>
      <FloatingActions2 />
      <Footer2 />
    </>
  );
}
