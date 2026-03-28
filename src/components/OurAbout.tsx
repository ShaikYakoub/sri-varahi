import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

export default function OurAbout() {
  return (
    <div className="contents">
      {/* Heritage Section */}
      <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen flex items-center">
        <Image
          src="/images/about/hero.avif"
          alt="sri varahi team at work in the store"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/55 dark:bg-black/70" />
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="text-center text-white mb-8">
            <span className="inline-block px-4 py-1.5 bg-white/10 dark:bg-amber-400/20 text-white/90 dark:text-amber-100 text-sm font-medium rounded-full mb-4 border border-white/20 dark:border-amber-400/40">
              ⭐ Modern Gold Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              🏛️ Our Story of Trust
            </h2>
            <p className="text-xl text-white/70 font-light">
              Built on transparency, technology, and customer-first values
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 gap-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Experience Gold Selling, The Modern Way
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sell-gold"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white font-bold rounded-lg shadow-lg transition-all border-2 border-blue-500 dark:border-amber-400"
              >
                Sell Gold Now
              </a>
              <a
                href="/release-gold"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border-2 border-white/70 hover:border-white transition-all flex items-center justify-center gap-2"
              >
                Release Pledged Gold
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values, Vision & Mission Section */}
      <section className="py-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Our Values, Vision{" "}
              <span className="text-blue-700 dark:text-amber-400">
                & Mission
              </span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2 font-light">
              The principles and purpose behind everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <ServiceCard
              image="/images/about/values.avif"
              imageAlt="Antique brass balance scale with gold weights"
              icon={"💎"}
              title="Our Values"
              description="We stand for trust, transparency, and fairness. Every customer who walks in is treated with dignity, and every gram of gold is evaluated with honesty, accuracy, and respect."
              benefits={[]}
            />
            <ServiceCard
              image="/images/about/vision.avif"
              imageAlt="Vision illustration"
              icon={"🎯"}
              title="Our Vision"
              description={
                "Empower – Be the most trusted gold buying partner. Expand – Build a nationwide network with standardized processes. Excel – Set benchmarks in the gold buying industry."
              }
              benefits={[]}
            />
            <ServiceCard
              image="/images/about/mission.avif"
              imageAlt="Mission illustration"
              icon={"🎯"}
              title="Our Mission"
              description={
                "Integrity – Transparent pricing with no hidden conditions. Innovation – Advanced tools for accuracy and speed. Commitment – Put customers first with simple, respectful service."
              }
              benefits={[]}
            />
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-8 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="block text-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">
              Leadership
            </span>
          </span>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            👔 Management{" "}
            <span className="text-blue-600 dark:text-amber-500">Team</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 font-light">
            Leadership driving innovation and excellence
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Mr. John Doe",
                title: "Managing Director",
                image: "👤",
                bio: "some inspiring bio about the managing director and his vision for the company",
              },
              {
                name: "Mr. John Doe",
                title: "Managing Director",
                image: "👤",
                bio: "some inspiring bio about the managing director and his vision for the company",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-blue-200 dark:border-amber-500/30"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-6xl mx-auto md:mx-0">{person.image}</div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {person.name}
                    </h4>
                    <p className="text-blue-600 dark:text-amber-400 font-semibold mb-4">
                      {person.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-light text-justify md:text-left">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative overflow-hidden py-8 bg-white dark:bg-black">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <Image
            src="/images/about/certificates.avif"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <span className="block text-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">
              Quality Assured
            </span>
          </span>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            📜 Certifications &{" "}
            <span className="text-blue-600 dark:text-amber-500">
              Credentials
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 font-light">
            Recognized for quality and excellence
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📜", name: "EGAC Accredited", subtitle: "CAB#118005" },
              {
                icon: "🌐",
                name: "IAF Member",
                subtitle: "Multilateral Recognition",
              },
              {
                icon: "✓",
                name: "ISO 9001:2015",
                subtitle: "Certified Company",
              },
              {
                icon: "⭐",
                name: "MMS Certified",
                subtitle: "Quality Assured",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="text-center p-6 bg-blue-50/50 dark:bg-amber-500/5 rounded-xl border border-blue-100/50 dark:border-amber-500/20 hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors"
              >
                <div className="text-5xl mb-3">{cert.icon}</div>
                <h3 className="font-semibold text-blue-600 dark:text-amber-400 mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-light">
                  {cert.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section
      <section className="relative overflow-hidden py-8 bg-gray-50 dark:bg-black">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <Image
            src="/images/about/awards.avif"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <span className="block text-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">
              Recognition
            </span>
          </span>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            🏆 Awards &{" "}
            <span className="text-blue-600 dark:text-amber-500">
              Recognition
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 font-light">
            Honoring our commitment to excellence
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2000", name: "award" },
              { year: "2025", name: "Success Awards" },
              { year: "2000", name: "Icon Awards" },
              { year: "2000", name: "Business Awards" },
            ].map((award, index) => (
              <div
                key={index}
                className="text-center p-6 bg-blue-50/50 dark:bg-amber-500/5 rounded-xl border border-blue-100/50 dark:border-amber-500/20 hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors"
              >
                <div className="text-5xl mb-3">🏆</div>
                <h3 className="font-semibold text-blue-600 dark:text-amber-400 mb-1">
                  {award.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-light">
                  {award.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
