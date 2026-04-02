import Navbar from "@/components/Navbar";
// import HeroSlider from "@/components/HeroSlider";
import ServicesOverview from "@/components/ServicesOverview";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import FAQs from "@/components/FAQs";
import AboutOverview from "@/components/AboutOverview";
import ContactSection from "@/components/ContactSection";
import FloatingActions from "@/components/FloatingActions";
import CalculatorSection from "@/components/CalculatorSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 py-8 md:py-12 mt-[-8px]">
          <Image
            src="/images/homepage/hero.avif"
            alt="gold being exchanged for cash at a Sri Varahi branch"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/65" />
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/30">
                ⭐ Trusted Gold Buyers | Instant Payment
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Best Gold Buyers in India
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/85 font-light max-w-3xl mx-auto">
              Live gold prices, instant valuation, and complete transparency.
              Modern technology, honest service, and instant payment— trusted by
              thousands across Andhra Pradesh.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/sell-gold#form"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
              >
                Sell Gold Now
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg shadow-md border-2 border-white/50 transition-all text-lg"
              >
                How It Works
              </a>
            </div>
          </div>
        </section>
        {/* Stats Band */}
        <section className="no-top-radius no-bottom-radius bg-slate-50 dark:bg-black py-10 border-y border-blue-100/50 dark:border-amber-500/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                Why Choose Sri Varahi
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Our{" "}
                <span className="text-blue-700 dark:text-amber-400">
                  Promise & Values
                </span>
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-2 font-light">
                Built on transparency, customer-first service, and a commitment
                to fair value
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-amber-400 mb-2">
                  10K+
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light">
                  Pledged Gold Released
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-amber-400 mb-2">
                  50K+
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-amber-400 mb-2">
                  ₹500Cr+
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light">
                  Gold Purchased
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-amber-400 mb-2">
                  100%
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light">
                  Transparency
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesOverview />

        {/* Split Section - XRF Testing */}
        <section className="py-12 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                  Why XRF Testing
                </span>
                <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground">
                  Scientific, Non-Destructive Purity Testing
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  We test your gold in front of you using XRF technology, which
                  delivers instant and accurate purity readings without melting
                  or damaging your jewelry. Certified instruments, transparent
                  process, and results you can trust.
                </p>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-blue-100/50 dark:border-amber-500/20">
                <Image
                  src="/images/homepage/xrf-closeup.avif"
                  alt="Close-up XRF testing machine scanning a gold bangle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Split Section - Instant Bank Transfer */}
        <section className="py-12 bg-slate-50 dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-blue-100/50 dark:border-amber-500/20 order-1 md:order-0">
                <Image
                  src="/images/homepage/money-transfer.avif"
                  alt="Smartphone showing successful bank transfer with gold jewelry nearby"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-2 md:order-0">
                <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                  Instant Settlement
                </span>
                <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground">
                  Payment in Minutes, Not Days
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Once your valuation is complete, we process NEFT or RTGS
                  transfer instantly. No delayed cash cycles, no hidden waits,
                  and no uncertainty. Your money reaches your bank account
                  quickly and securely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Branches Overview */}
        <section id="branches" className="py-12 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                📍 Our Locations
              </span>
              <h2 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground">
                Visit Us at Our{" "}
                <span className="text-blue-600 dark:text-amber-500">
                  Branches
                </span>
              </h2>
              <p className="text-xl text-blue-600 dark:text-amber-400 mb-2">
                <span className="font-semibold">3</span> branches across Andhra
                Pradesh
              </p>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
                Experience our trusted service at any of our conveniently
                located branches. Each location is equipped with
                state-of-the-art XRF testing machines and staffed by experienced
                professionals ready to serve you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-linear-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-amber-400">
                  Fixed Branches
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  3 permanent branches across Andhra Pradesh, with more
                  locations coming soon
                </p>
              </div>
              <div className="bg-linear-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="text-4xl mb-3">🚐</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-amber-400">
                  Mobile Branches
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  Our mobile units bring our services to your neighborhood for
                  your convenience
                </p>
              </div>
              <div className="bg-linear-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-amber-400">
                  Extended Hours
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  Open 6 days a week with convenient timing from 10 AM to 7 PM
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/branches"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg transition-all"
              >
                Find a Branch Near You →
              </a>
            </div>
          </div>
        </section>

        <ComparisonTable />

        {/* Gold Types Grid */}
        <section className="py-12 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                We Buy All Forms
              </span>
              <h2 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground">
                We Buy All Types of{" "}
                <span className="text-blue-600 dark:text-amber-500">Gold</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                {
                  src: "/images/homepage/grid/bangles.avif",
                  alt: "Stacked gold bangles",
                },
                {
                  src: "/images/homepage/grid/chains.avif",
                  alt: "Coiled gold chains",
                },
                {
                  src: "/images/homepage/grid/rings.avif",
                  alt: "Collection of gold rings",
                },
                {
                  src: "/images/homepage/grid/coins.avif",
                  alt: "Stacked gold coins",
                },
                {
                  src: "/images/homepage/grid/bars.avif",
                  alt: "Single gold bar close-up",
                },
                {
                  src: "/images/homepage/grid/broken.avif",
                  alt: "Broken and mismatched gold jewelry",
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square rounded-xl overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQs />
        <AboutOverview />
        <ContactSection />
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}
