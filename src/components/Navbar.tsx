"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  // Removed: mobileServicesOpen state (no longer needed)

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");

    // If no saved theme, default to light mode explicitly
    const isDarkMode = savedTheme === "dark";

    setIsDark(isDarkMode);

    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      html.classList.remove("light");
      html.setAttribute("data-theme", "dark");
      html.style.colorScheme = "dark";
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      html.setAttribute("data-theme", "light");
      html.style.colorScheme = "light";
      // Save light as default if nothing was saved
      if (!savedTheme) {
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;

    setIsDark(newIsDark);

    // Force class change immediately
    if (newIsDark) {
      html.classList.remove("light");
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
      html.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      html.setAttribute("data-theme", "light");
      html.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }

    // Force re-render
    document.body.style.transition = "none";
    setTimeout(() => {
      document.body.style.transition = "";
    }, 0);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-md ${
        scrolled
          ? "shadow-md border-b border-blue-100/50 dark:border-amber-500/20"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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
                textShadow: "0 1.5px 2px rgba(0,0,0,0.18)",
              }}
            >
              Sri Varahi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/sell-gold"
              className="text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Sell Gold
            </Link>
            <Link
              href="/release-gold"
              className="text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Release Gold
            </Link>

            <Link
              href="/branches"
              className="text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Branches
            </Link>

            <Link
              href="/legacy"
              className="text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              About Us
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors border border-gray-300 dark:border-gray-600"
              aria-label="Toggle theme"
            >
              <div
                className={`absolute w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center top-1 ${
                  isDark ? "left-9" : "left-1"
                }`}
              >
                <span className="text-sm">{isDark ? "🌙" : "☀️"}</span>
              </div>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full p-0.5 transition-colors border border-gray-300 dark:border-gray-600"
              aria-label="Toggle theme"
            >
              <div
                className={`absolute w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center top-0.5 ${
                  isDark ? "left-7" : "left-0.5"
                }`}
              >
                <span className="text-xs">{isDark ? "🌙" : "☀️"}</span>
              </div>
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground dark:text-foreground"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-blue-200 dark:border-amber-500/30 pt-4">
            <Link
              href="/sell-gold"
              onClick={() => setIsOpen(false)}
              className="block text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Sell Gold
            </Link>
            <Link
              href="/release-gold"
              onClick={() => setIsOpen(false)}
              className="block text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Release Gold
            </Link>

            <Link
              href="/branches"
              onClick={() => setIsOpen(false)}
              className="block text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Branches
            </Link>

            <Link
              href="/legacy"
              onClick={() => setIsOpen(false)}
              className="block text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Our Legacy
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
