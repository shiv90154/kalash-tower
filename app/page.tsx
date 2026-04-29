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
<section className="relative min-h-[85vh] flex items-center overflow-hidden text-classic-primary">
  
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/hero-office.jpg"
      alt="Natraj Properties"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  </div>

  {/* Light Overlay (important for readability) */}
  <div className="absolute inset-0 z-0 bg-white/85 backdrop-blur-[2px]" />

  {/* Soft Gradient Accents (still visible on top) */}
  <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-classic-gold/20 blur-xl z-10" />
  <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-classic-primary/10 blur-xl z-10" />

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto w-full px-5 md:px-8 pt-20 pb-14">
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
      
      {/* Left Content */}
      <div>
        <p className="inline-flex mb-6 px-4 py-2 rounded-full border border-classic-primary/15 bg-white/70 text-sm font-medium text-classic-primary shadow-sm">
          Natraj Properties • Mohali & Chandigarh
        </p>

        <h1 className="font-classic text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Find a Property That
          <br />
          <span className="text-classic-gold">Works for Your Future</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-gray-600">
          Premium offices, showrooms, and commercial spaces in prime locations —
          selected with trust, clarity, and long-term value in mind.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/listings"
            className="inline-flex items-center justify-center rounded-lg bg-classic-primary px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-classic-gold"
          >
            Browse Properties
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-classic-primary/20 bg-white px-8 py-4 font-semibold text-classic-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-classic-gold hover:text-classic-gold"
          >
            Get Consultation
          </Link>
        </div>
      </div>

      {/* Right Card */}
      <div className="rounded-3xl border border-classic-primary/10 bg-white/90 backdrop-blur-md p-6 md:p-8 shadow-xl">
        <p className="text-sm font-medium text-classic-gold mb-3">
          Why Choose Us
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-classic-primary mb-6">
          Local property guidance with verified options.
        </h2>

        <div className="space-y-5">
          {[
            "Commercial spaces in prime business areas",
            "Transparent dealing and practical advice",
            "Quick site visits and negotiation support",
            "Options for offices, showrooms, and investment properties",
          ].map((item, index) => (
            <div key={index} className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-classic-gold/15 text-classic-gold text-sm">
                ✓
              </span>
              <p className="text-gray-600">{item}</p>
            </div>
          ))}
        </div>

       <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-5">
  {[
    { number: "50+", label: "Offices Leased" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2", label: "Prime Cities" },
  ].map((stat, idx) => (
    <div
      key={idx}
      className="text-center animate-slide-up"
      style={{ animationDelay: `${idx * 100}ms` }}
    >
      <p className="text-2xl md:text-3xl font-bold text-classic-primary">
        {stat.number}
      </p>
      <p className="text-xs md:text-sm text-gray-500 mt-1">
        {stat.label}
      </p>
    </div>
  ))}
</div>
      </div>

    </div>
  </div>
</section>

      {/* Featured Properties */}
  <section className="py-24 bg-classic-bg overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">
        Our Portfolio
      </span>
      <h2 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-2 mb-4">
        Featured Properties
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto">
        Handpicked commercial properties ready for immediate occupancy.
        Each space is selected for its prime location and exceptional
        amenities.
      </p>
    </div>

    {/* Horizontal Scroll Container */}
    <div className="relative">
      {/* Horizontal Scrollable Cards */}
      <div
        id="horizontalScroll"
        className="flex gap-6 overflow-x-auto pb-8 -mx-2 px-2"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {featuredProperties.map((prop, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[350px] animate-slide-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <PropertyCard {...prop} />
          </div>
        ))}
      </div>
    </div>

    <div className="mt-12 text-center">
      <Link
        href="/listings"
        className="inline-flex items-center text-classic-gold font-semibold hover:text-classic-gold-light transition-colors underline underline-offset-4 group"
      >
        View all listings
        <svg
          className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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