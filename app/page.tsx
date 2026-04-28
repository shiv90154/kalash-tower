import Image from "next/image";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import TestimonialCard from "@/components/TestimonialCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Natraj Properties offers premium office spaces for rent in Mohali and Chandigarh. Explore our distinguished commercial properties.",
  alternates: {
    canonical: "/",
  },
};

const featuredProperties = [
  {
    title: "IT Park Address",
    location: "Sector 82, Mohali",
    size: "450 sq.ft.",
    price: "₹ 18,000/mo",
    imageSrc: "/images/property-1.jpg",
    slug: "it-park-mohali",
    amenities: ["24/7 Power", "Parking", "Security", "Cafeteria"],
  },
  {
    title: "Business Centre",
    location: "Industrial Area, Chandigarh",
    size: "1,200 sq.ft.",
    price: "₹ 45,000/mo",
    imageSrc: "/images/property-2.jpg",
    slug: "business-centre-chandigarh",
    amenities: ["Reception", "Board Room", "AC", "Parking"],
  },
  {
    title: "Corporate Tower",
    location: "Airport Road, Mohali",
    size: "2,500 sq.ft.",
    price: "₹ 95,000/mo",
    imageSrc: "/images/property-3.jpg",
    slug: "corporate-tower-mohali",
    amenities: ["Gym", "Cafeteria", "Security", "Power Backup"],
  },
  {
    title: "Executive Suite",
    location: "Sector 17, Chandigarh",
    size: "800 sq.ft.",
    price: "₹ 32,000/mo",
    imageSrc: "/images/property-4.jpg",
    slug: "executive-suite-chandigarh",
    amenities: ["Furnished", "AC", "Reception", "WiFi"],
  },
];

const testimonials = [
  {
    quote:
      "Natraj Properties helped us find the perfect office space in Mohali. The process was seamless and professional. Our team loves the new workspace!",
    name: "Rajesh Kumar",
    company: "TechVentures India",
  },
  {
    quote:
      "The location and amenities are outstanding. We moved into our new office in just two weeks. Highly recommended for any business looking for premium space.",
    name: "Priya Sharma",
    company: "DesignCraft Studio",
  },
  {
    quote:
      "Transparent dealings and excellent after-sales support. They truly understand what businesses need in a commercial space.",
    name: "Amit Patel",
    company: "Patel & Associates",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gentle Zoom */}
        <div className="absolute inset-0 z-0 animate-gentle-zoom">
          <Image
            src="/images/hero-office.jpg"
            alt="Premium office building by Natraj Properties"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 animate-gradient" />
        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl animate-slide-up pt-20">
          <h1 className="font-classic text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Timeless Offices,
            <br />
            Distinguished Address
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Premium commercial spaces for rent in Mohali & Chandigarh.
            <br />
            Where your business finds its perfect home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/listings"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-classic-primary font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              Explore Listings
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Schedule Visit
            </Link>
          </div>
          {/* Scroll Indicator */}
          <div className="mt-16 animate-pulse-slow">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Offices Leased" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "2", label: "Prime Cities" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-classic font-bold text-classic-gold mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-classic-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">
              Our Portfolio
            </span>
            <h2 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-2 mb-4">
              Featured Office Spaces
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Handpicked commercial properties ready for immediate occupancy.
              Each space is selected for its prime location and exceptional
              amenities.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProperties.map((prop, idx) => (
              <div
                key={idx}
                className="animate-slide-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <PropertyCard {...prop} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/listings"
              className="inline-flex items-center text-classic-gold font-semibold hover:text-classic-gold-light transition-colors underline underline-offset-4"
            >
              View all listings
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-2 mb-4">
              The Natraj Advantage
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We bring decades of expertise to help you find the perfect
              commercial space.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: "📍",
                title: "Prime Locations",
                desc: "All properties are in high-demand commercial hubs with excellent connectivity and visibility.",
              },
              {
                icon: "⚡",
                title: "Ready to Move",
                desc: "Fully furnished spaces with power backup, high-speed internet – just plug and play.",
              },
              {
                icon: "🤝",
                title: "Transparent Deals",
                desc: "Zero brokerage on direct leases, clear terms, and hassle-free paperwork.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-classic-bg p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-classic-gold/30 animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-classic text-2xl font-semibold text-classic-primary mb-3 group-hover:text-classic-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-classic-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Trusted by businesses across Mohali and Chandigarh.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                {...testimonial}
                delay={idx * 150}
              />
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
}