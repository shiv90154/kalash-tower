"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="relative bg-classic-bg text-classic-text overflow-hidden font-bold">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYTM2NWQiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDE4YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 pointer-events-none"></div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r via-classic-gold"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col mb-6 group">
              <span className="text-4xl font-classic font-extrabold tracking-tight text-classic-primary">
                Natraj
                <span className="text-classic-gold">.</span>
              </span>
              <span className="text-lg font-light text-classic-text-light -mt-1">
                Properties
              </span>
            </Link>

            <p className="text-sm text-classic-text-light leading-relaxed mb-6 max-w-md">
              Discover distinguished office spaces, premium flats, luxurious
              kothis, and valuable land opportunities across Mohali &
              Chandigarh. Backed by over 15 years of trusted expertise, we
              deliver reliable guidance, transparent deals, and a seamless
              property experience tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-classic font-semibold text-lg text-classic-primary mb-4 relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-classic-gold rounded-full"></span>
            </h4>

            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Blog", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-classic-text-light hover:text-classic-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-classic-gold rounded-full group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Listings */}
          <div>
            <h4 className="font-classic font-semibold text-lg text-classic-primary mb-4 relative inline-block">
              <span className="relative z-10">Our Listings</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-classic-gold rounded-full"></span>
            </h4>

            <ul className="space-y-2">
              {[
                { name: "All Properties", href: "/listings" },
                { name: "Corporate", href: "/listings?type=corporate" },
                { name: "Flats", href: "/listings?type=flats" },
                { name: "Kothi", href: "/listings?type=kothi" },
                { name: "Land", href: "/listings?type=land" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-classic-text-light hover:text-classic-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-classic-gold rounded-full group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-classic font-semibold text-lg text-classic-primary mb-4 relative inline-block">
              <span className="relative z-10">Connect</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-classic-gold rounded-full"></span>
            </h4>

            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-3">
                <span className="text-classic-gold mt-0.5 text-lg">📍</span>
                <span className="text-classic-text-light">
                  KAILASH TOWER, F 177, Phase 8B, Industrial Area, Sector 74,
                  Sahibzada Ajit Singh Nagar, Punjab 140307
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-classic-gold text-lg">📞</span>
                <a
                  href="tel:+918565800002"
                  className="text-classic-text-light hover:text-classic-primary transition-colors"
                >
                  +918565800002
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-classic-gold text-lg">✉️</span>
                <a
                  href="mailto:info@natrajproperties.com"
                  className="text-classic-text-light hover:text-classic-primary transition-colors"
                >
                  info@natrajproperties.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-classic-gold/20">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-classic-text-light">
          
          {/* Copyright */}
          <p className="flex flex-wrap items-center justify-center md:justify-start gap-1 text-center md:text-left leading-relaxed">
            <span>
              &copy; {currentYear} Natraj Properties. All rights reserved.
            </span>

            <span className="text-classic-gold">|</span>

            <span>Managed by</span>

            <a
              href="https://inphora.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-classic-primary hover:text-classic-gold transition-colors duration-300 font-semibold"
            >
              Inphora Pvt Ltd
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              {
                name: "Facebook",
                href: "#",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
              {
                name: "LinkedIn",
                href: "#",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                name: "Instagram",
                href: "#",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0z" />
                  </svg>
                ),
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${social.name}`}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-classic-gold/30 text-classic-text-light hover:bg-classic-gold hover:text-white hover:border-classic-gold transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              href="/privacy-policy"
              className="hover:text-classic-primary transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="hover:text-classic-primary transition-colors"
            >
              Terms of Service
            </Link>

            <Link
              href="#"
              className="hover:text-classic-primary transition-colors"
            >
              Sitemap
            </Link>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="hover:text-classic-primary transition-colors flex items-center gap-1.5 group"
            >
              <span className="w-4 h-4 rounded-full bg-classic-gold flex items-center justify-center text-white group-hover:animate-bounce">
                ↑
              </span>

              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}