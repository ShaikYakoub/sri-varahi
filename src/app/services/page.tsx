import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";
import FloatingActions2 from "@/components/FloatingActions2";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:min-h-125 flex items-center">
          <Image
            src="/images/hero-services-bg.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/55 dark:bg-black/70" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center w-full">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-4 border border-white/30">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our{" "}
              <span className="text-blue-600 dark:text-amber-500">
                Services
              </span>
            </h1>
            <p className="text-xl text-white/85 max-w-3xl mx-auto font-light">
              Comprehensive gold solutions tailored to your needs
            </p>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-16 bg-gray-50 dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-16">
              {/* Service 1 - Sell Gold */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-blue-100/50 dark:border-amber-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-video">
                    <Image
                      src="/images/service-sell-gold.webp"
                      alt="Gold jewelry arranged for selling valuation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
                      Sell Gold
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-light">
                      Get instant cash for your gold jewelry, coins, or bars at
                      the best market rates with complete transparency. We use
                      advanced XRF technology to accurately test the purity of
                      your gold, ensuring you get the best value.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          Live market-linked rates
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          XRF technology testing
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          Instant bank transfer
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          No minimum quantity required
                        </span>
                      </li>
                    </ul>
                    <Link
                      href="/#sell-gold-calculator"
                      className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-semibold rounded-lg transition-colors"
                    >
                      Calculate Value Now →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service 2 - Release Pledged Gold */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-blue-100/50 dark:border-amber-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
                      Release Pledged Gold
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-light">
                      Close your gold loans from any bank or financial
                      institution. We pay off your loan amount directly and give
                      you the balance instantly. A hassle-free way to get your
                      gold back and unlock its full value.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          Works with all banks & NBFCs
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          Instant loan clearance
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          Fair valuation of pledged gold
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          Immediate balance payment
                        </span>
                      </li>
                    </ul>
                    <Link
                      href="/#pledged-gold-calculator"
                      className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-semibold rounded-lg transition-colors"
                    >
                      Calculate Release Value →
                    </Link>
                  </div>
                  <div className="relative aspect-video order-1 md:order-2">
                    <Image
                      src="/images/service-release-gold.webp"
                      alt="Gold jewelry with pledged loan paperwork"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Service 3 - Vehicle Dispatcher */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-blue-100/50 dark:border-amber-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-video">
                    <Image
                      src="/images/service-dispatcher.webp"
                      alt="Vehicle dispatcher ready for secure doorstep pickup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
                      Vehicle Dispatcher
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-light">
                      Safe and secure doorstep pickup service. Our trained
                      professionals will collect your gold from your location
                      with complete safety measures. No need to visit our branch
                      - we come to you!
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          Doorstep gold collection
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          Trained & verified staff
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          Insured transportation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-amber-400 font-bold mt-1">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-light">
                          Available across all branches
                        </span>
                      </li>
                    </ul>
                    <Link
                      href="/#contact"
                      className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-semibold rounded-lg transition-colors"
                    >
                      Request Pickup →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Process Grid */}
        <section className="py-12 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                Our Testing Process
              </span>
              <h2 className="text-4xl font-bold text-foreground dark:text-foreground">
                Transparent 3-Step Evaluation
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  src: "/images/process-step1-jewel.webp",
                  step: "Step 1",
                  title: "Bring Your Gold",
                },
                {
                  src: "/images/process-step2-test.webp",
                  step: "Step 2",
                  title: "XRF Purity Testing",
                },
                {
                  src: "/images/process-step3-pay.webp",
                  step: "Step 3",
                  title: "Instant Payment",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card dark:bg-card rounded-xl overflow-hidden border border-blue-100/50 dark:border-amber-500/20"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-sm font-semibold text-blue-600 dark:text-amber-400 mb-1">
                      {item.step}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground dark:text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-16">
          <Image
            src="/images/cta-bg.webp"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-600/80 dark:bg-amber-500/70" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 dark:text-gray-900/70 mb-8 font-light">
              Visit any of our branches or request a doorstep pickup today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#branches"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 dark:text-amber-700 font-bold rounded-lg shadow-lg transition-all"
              >
                Find a Branch
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-4 bg-transparent hover:bg-white/10 dark:hover:bg-gray-900/10 text-white dark:text-gray-900 font-bold rounded-lg border-2 border-white dark:border-gray-900 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FloatingActions2 />
      <Footer2 />
    </>
  );
}
