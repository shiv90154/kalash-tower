"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const icons = {
  home: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1-1m-6 0h4"/></svg>,
  listings: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h5m-3 4h2"/></svg>,
  about: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  contact: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  call: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
};

const navLinks = [
  { href: "/", label: "Home", iconKey: "home" },
  { href: "/listings", label: "Listings", iconKey: "listings" },
  { href: "/about", label: "About", iconKey: "about" },
  { href: "/contact", label: "Contact", iconKey: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header className={`hidden md:block sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/98 shadow-lg backdrop-blur-md" : "bg-white/95 shadow-sm backdrop-blur-sm"} border-b border-gray-200`}>
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Left: Brand */}
          <Link href="/" className="flex  items-center gap-1 group cursor-pointer">
            <Image src="/Natraj.png" alt="Natraj Properties Logo" width={32} height={32} className="rounded-full" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-black tracking-wide group-hover:text-classic-gold transition-colors duration-300">
                Natraj
              </span>
              <span className="text-[10px] text-gray-500 tracking-wider uppercase">
                Properties
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links (absolutely centered) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`relative py-2 tracking-wide transition-colors font-bold cursor-pointer ${pathname === link.href ? "text-classic-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-classic-gold after:rounded-full" : "text-gray-600 hover:text-classic-primary"}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Schedule Visit Button */}
          <Link href="/contact" className="ml-auto px-5 py-2.5 text-sm font-semibold text-white bg-classic-primary rounded-md hover:bg-classic-primary-light transition-all duration-300 hover:shadow-lg cursor-pointer">
            Schedule Visit
          </Link>
        </nav>
      </header>

      {/* Mobile Top Bar */}
    <header className="md:hidden sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
  <div className="flex items-center justify-center px-4 py-3">
    
    <Link
      href="/"
      className="flex items-center gap-2 group"
    >
      {/* Logo */}
      <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-200 shadow-sm">
        <Image
          src="/Natraj.png"
          alt="Natraj Properties Logo"
          fill
          sizes="36px"
          className="object-cover"
        />
      </div>

      {/* Brand */}
      <div className="flex flex-col leading-tight text-center">
        <span className="text-sm font-bold text-classic-primary tracking-wide">
          Natraj
        </span>
        <span className="text-[6px] uppercase tracking-[0.18em] text-classic-gold">
          Properties
        </span>
      </div>
    </Link>

  </div>
</header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] safe-area-inset-bottom">
        <div className="flex items-center justify-around h-16 px-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const icon = icons[link.iconKey as keyof typeof icons];
            return (
              <Link key={link.href} href={link.href} className={`flex flex-col items-center gap-0.5 min-w-[64px] py-1 px-2 rounded-xl transition-all duration-200 cursor-pointer ${isActive ? "text-classic-primary scale-105" : "text-gray-500 hover:text-classic-primary"}`}>
                <span>{icon}</span>
                <span className="text-[10px] font-medium leading-none">{link.label}</span>
                {isActive && <span className="mt-0.5 w-1 h-1 bg-classic-gold rounded-full" />}
              </Link>
            );
          })}
          <a href="tel:+919876543210" className="flex flex-col items-center gap-0.5 min-w-[64px] py-1 px-2 rounded-xl text-gray-500 hover:scale-105 transition-all duration-200 cursor-pointer">
            <span>{icons.call}</span>
            <span className="text-[10px] font-medium leading-none">Call</span>
          </a>
        </div>
      </nav>
    </>
  );
}