<li className="flex items-center gap-2">
  <span className="text-blue-600 dark:text-amber-400 text-lg">▶️</span>
  <a
    href="https://www.youtube.com/@SriVarahiGold"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
  >
    YouTube
  </a>
</li>;
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-black text-slate-700 dark:text-gray-300 pt-16 pb-8 border-t border-blue-100/50 dark:border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 grid-rows-2 gap-8 mb-12">
          {/* 1. Company Details */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.avif"
                alt="Sri Varahi Logo"
                width={48}
                height={48}
                className="mr-2"
                priority
              />
              <span
                className="text-xl md:text-2xl font-extrabold bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent select-none"
                style={{
                  letterSpacing: "1px",
                  textShadow: "0 1px 2px rgba(0,0,0,0.18)",
                }}
              >
                Sri Varahi
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-light">
              India&apos;s Redefining{" "}
              <span className="font-semibold text-blue-600 dark:text-amber-400">
                trust
              </span>
              ,{" "}
              <span className="font-semibold text-blue-600 dark:text-amber-400">
                transparency
              </span>
              ,<br />
              and value for a new value for a new <br />
              generation of gold{" "}
              <span className="font-semibold text-blue-600 dark:text-amber-400">
                Gold
              </span>{" "}
              owners
            </p>
          </div>
          {/* 2. Socials */}
          <div className="flex flex-col items-start">
            <h4 className="text-blue-600 dark:text-amber-400 font-semibold mb-4">
              Socials
            </h4>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/srivarahigoldcompany?igsh=MmIwMDVpajJxa20x"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://share.google/oSPElhVA5IEfN6DTu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 bg-[#1877F2] hover:bg-[#0C63D4] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@SriVarahiGold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          {/* 3. Services */}
          <div>
            <h4 className="text-blue-600 dark:text-amber-400 font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#calculator"
                  className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
                >
                  Sell Gold
                </a>
              </li>
              <li>
                <a
                  href="#pledged-calculator"
                  className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
                >
                  Release Gold
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
                >
                  Vehicle Dispatcher
                </a>
              </li>
              <li>
                <a
                  href="#gold-rate"
                  className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
                >
                  Live Gold Rates
                </a>
              </li>
              <li>
                <a
                  href="/branches"
                  className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
                >
                  Branches
                </a>
              </li>
            </ul>
          </div>
          {/* 4. Contact */}
          <div>
            <h4 className="text-blue-600 dark:text-amber-400 font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-amber-400 text-lg">
                  📞
                </span>
                <a
                  href="tel:+916262667272"
                  className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
                >
                  +91 62626 67272
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-amber-400 text-lg">
                  ✉️
                </span>
                <a
                  href="mailto:info@srivarahi.com"
                  className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
                >
                  info@srivarahi.com
                </a>
              </li>
              <li className="flex items-start gap-2 pt-2">
                <span className="text-blue-600 dark:text-amber-400 text-lg mt-0.5">
                  📍
                </span>
                <a
                  href="https://maps.app.goo.gl/6JrcMYyRwvvjizUs9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 no-underline"
                >
                  1st floor, 8-3-33 Mydukur - Badvel Rd
                  <br />
                  Beside HDFC BANK, Badvel
                  <br />
                  Andhra Pradesh - 516233
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-100/50 dark:border-amber-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © 2025{" "}
            <span
              className="bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold"
              style={{ textShadow: "0 1.5px 2px rgba(0,0,0,0.18)" }}
            >
              Sri Varahi
            </span>
            . All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            A Website by{" "}
            <a
              href="https://www.mavericktechnovations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-amber-400 transition-colors"
            >
              Maverick Technovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
