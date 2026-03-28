export default function ContactSection() {
  return (
    <section id="contact" className="py-10 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <span className="block text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">
            📞 Reach Out
          </span>
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground dark:text-foreground">
          Get In{" "}
          <span className="text-blue-600 dark:text-amber-500">Touch</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 font-light mb-12">
          We&apos;re here to help you with all your gold-related queries
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Head Office */}
          <div className="bg-card dark:bg-card rounded-2xl shadow-sm p-8 border border-blue-100/50 dark:border-amber-500/20">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
              Head Office
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              1st floor, 8-3-33, Mydukur - Badvel Rd
              <br />
              Beside HDFC BANK, Badvel
              <br />
              Andhra Pradesh - 516233
            </p>
          </div>

          {/* Phone */}
          <div className="bg-card dark:bg-card rounded-2xl shadow-sm p-8 border border-blue-100/50 dark:border-amber-500/20">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
              Call Us
            </h3>
            <div className="space-y-2">
              <a
                href="tel:+916262667272"
                className="block text-blue-600 dark:text-amber-400 hover:underline font-semibold"
              >
                +91 62626 67272
              </a>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                Available Mon-Sat, 10 AM - 7 PM
              </p>
            </div>
          </div>
        </div>

        {/* Social Media - Full Width */}
        <div className="bg-card dark:bg-card rounded-2xl shadow-lg p-8 border-2 border-blue-400 dark:border-amber-500">
          <div className="text-center">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground dark:text-foreground">
              Follow Us on Social Media
            </h3>
            <p className="mb-8 text-gray-600 dark:text-gray-300 font-light">
              Stay connected for latest updates, gold rates, and offers
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://www.instagram.com/srivarahigoldcompany?igsh=MmIwMDVpajJxa20x"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                aria-label="Instagram"
              >
                <svg
                  className="w-7 h-7"
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
                className="w-14 h-14 bg-[#1877F2] hover:bg-[#0C63D4] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                aria-label="Facebook"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="http://www.youtube.com/@SriVarahiGold"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                aria-label="YouTube"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
