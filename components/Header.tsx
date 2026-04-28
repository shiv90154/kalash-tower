"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/98 shadow-md backdrop-blur-sm"
          : "bg-white/95 shadow-sm backdrop-blur-sm"
      } border-b border-gray-200`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-2xl md:text-3xl font-classic font-bold text-classic-primary tracking-wide transition-colors group-hover:text-classic-gold">
            Natraj
          </span>
          <span className="text-lg md:text-xl font-light text-gray-500 tracking-wider">
            Properties
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-classic-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-classic-gold after:rounded-full"
                  : "text-gray-600 hover:text-classic-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-classic-primary rounded-md hover:bg-classic-primary-light transition-all duration-300 hover:shadow-lg"
          >
            Schedule Visit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-classic-primary hover:text-classic-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 text-lg rounded-md transition-colors ${
                  pathname === link.href
                    ? "bg-classic-bg text-classic-primary font-semibold"
                    : "text-gray-700 hover:bg-classic-bg hover:text-classic-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-2 py-3 px-4 text-center text-white bg-classic-primary rounded-md font-semibold hover:bg-classic-primary-light transition-colors"
            >
              Schedule Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}