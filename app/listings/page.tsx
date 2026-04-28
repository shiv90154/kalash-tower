import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Listings",
  description:
    "Browse our complete portfolio of premium office spaces for rent in Mohali and Chandigarh. Filter by location and size.",
  alternates: {
    canonical: "/listings",
  },
};

const allProperties = [
  {
    title: "IT Park Address",
    location: "Sector 82, Mohali",
    size: "450 sq.ft.",
    price: "₹ 18,000/mo",
    imageSrc: "/images/property-1.jpg",
    slug: "it-park-mohali",
    amenities: ["24/7 Power", "Parking", "Security", "Cafeteria"],
    city: "Mohali",
  },
  {
    title: "Business Centre",
    location: "Industrial Area, Chandigarh",
    size: "1,200 sq.ft.",
    price: "₹ 45,000/mo",
    imageSrc: "/images/property-2.jpg",
    slug: "business-centre-chandigarh",
    amenities: ["Reception", "Board Room", "AC", "Parking"],
    city: "Chandigarh",
  },
  {
    title: "Corporate Tower",
    location: "Airport Road, Mohali",
    size: "2,500 sq.ft.",
    price: "₹ 95,000/mo",
    imageSrc: "/images/property-3.jpg",
    slug: "corporate-tower-mohali",
    amenities: ["Gym", "Cafeteria", "Security", "Power Backup"],
    city: "Mohali",
  },
  {
    title: "Executive Suite",
    location: "Sector 17, Chandigarh",
    size: "800 sq.ft.",
    price: "₹ 32,000/mo",
    imageSrc: "/images/property-4.jpg",
    slug: "executive-suite-chandigarh",
    amenities: ["Furnished", "AC", "Reception", "WiFi"],
    city: "Chandigarh",
  },
  {
    title: "Startup Hub",
    location: "Sector 67, Mohali",
    size: "300 sq.ft.",
    price: "₹ 12,000/mo",
    imageSrc: "/images/property-1.jpg",
    slug: "startup-hub-mohali",
    amenities: ["WiFi", "Cafeteria", "Parking", "Meeting Rooms"],
    city: "Mohali",
  },
  {
    title: "Premium Plaza",
    location: "Sector 9, Chandigarh",
    size: "1,800 sq.ft.",
    price: "₹ 65,000/mo",
    imageSrc: "/images/property-2.jpg",
    slug: "premium-plaza-chandigarh",
    amenities: ["AC", "Lift", "Security", "Parking"],
    city: "Chandigarh",
  },
];

export default function ListingsPage() {
  return (
    <section className="py-24 bg-classic-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-classic-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-classic-primary font-medium">Listings</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">
            Our Portfolio
          </span>
          <h1 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-2 mb-4">
            Office Spaces for Rent
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our distinguished collection of commercial properties in
            Mohali and Chandigarh. Each space is meticulously selected for its
            prime location and superior amenities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Mohali", "Chandigarh"].map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 rounded-full border-2 border-classic-primary text-classic-primary font-medium hover:bg-classic-primary hover:text-white transition-all duration-300"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProperties.map((prop, idx) => (
            <div
              key={idx}
              className="animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <PropertyCard {...prop} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {allProperties.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏢</div>
            <h3 className="font-classic text-2xl font-semibold text-classic-primary mb-2">
              No Properties Found
            </h3>
            <p className="text-gray-500">
              Please check back later or contact us for availability.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}