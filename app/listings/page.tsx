import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Listings",
  description: "Corporate Spaces, Flats, Kothi, and Land in Mohali & Chandigarh.",
};

// Example data – replace with yours
const allProperties = [
  { title: "IT Park Suite", location: "Sector 82, Mohali", size: "450 sq.ft.", price: "₹ 18,000/mo", imageSrc: "/images/property-1.jpg", slug: "it-park-mohali", amenities: ["24/7 Power","Parking","Security"], type: "corporate" },
  { title: "Business Centre", location: "Industrial Area, Chandigarh", size: "1,200 sq.ft.", price: "₹ 45,000/mo", imageSrc: "/images/property-2.jpg", slug: "business-centre-chandigarh", amenities: ["Reception","Board Room","AC"], type: "corporate" },
  { title: "2 BHK Luxury Flat", location: "Sector 70, Mohali", size: "950 sq.ft.", price: "₹ 12,000/mo", imageSrc: "/images/flat-1.jpg", slug: "2bhk-mohali", amenities: ["Furnished","Gym","Park"], type: "flats" },
  { title: "3 BHK Premium Apartment", location: "Sector 48, Chandigarh", size: "1,400 sq.ft.", price: "₹ 22,000/mo", imageSrc: "/images/flat-2.jpg", slug: "3bhk-chandigarh", amenities: ["Semi-furnished","Lift"], type: "flats" },
  { title: "Classic Kothi", location: "Sector 9, Chandigarh", size: "3,200 sq.ft.", price: "₹ 55,000/mo", imageSrc: "/images/kothi-1.jpg", slug: "kothi-chandigarh", amenities: ["Garden","Garage"], type: "kothi" },
  { title: "Grand Villa", location: "Phase 5, Mohali", size: "4,500 sq.ft.", price: "₹ 75,000/mo", imageSrc: "/images/kothi-2.jpg", slug: "villa-mohali", amenities: ["Pool","Modular Kitchen"], type: "kothi" },
  { title: "Residential Plot", location: "Sector 99, Mohali", size: "200 sq.yards", price: "₹ 8,500/sq.yard", imageSrc: "/images/land-1.jpg", slug: "plot-mohali", amenities: ["Corner Plot"], type: "land" },
  { title: "Commercial Land", location: "Airport Road, Mohali", size: "500 sq.yards", price: "₹ 25,000/sq.yard", imageSrc: "/images/land-2.jpg", slug: "commercial-land-mohali", amenities: ["Highway Frontage"], type: "land" },
];

const filters = [
  { key: "all", label: "All Properties", icon: "🏘️" },
  { key: "corporate", label: "Corporate Space", icon: "🏢" },
  { key: "flats", label: "Flats", icon: "🏬" },
  { key: "kothi", label: "Kothi", icon: "🏡" },
  { key: "land", label: "Land", icon: "🌳" },
];

export default function ListingsPage() {
  return (
    <section className="py-24 bg-classic-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-classic-gold">Home</Link> / <span className="text-classic-primary font-medium">Listings</span></nav>
        <div className="text-center mb-16">
          <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">Explore Properties</span>
          <h1 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-2 mb-4">Our Portfolio</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Filter by property type – Corporate, Flats, Kothi, Land.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button key={filter.key} className="px-6 py-2.5 rounded-full border-2 border-classic-primary text-classic-primary font-medium hover:bg-classic-primary hover:text-white transition-all duration-300 flex items-center gap-2">
              <span>{filter.icon}</span>{filter.label}
            </button>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-24">
          <Section title="Corporate Spaces" icon="🏢" properties={allProperties.filter(p => p.type === "corporate")} />
          <Section title="Flats" icon="🏬" properties={allProperties.filter(p => p.type === "flats")} />
          <Section title="Kothi" icon="🏡" properties={allProperties.filter(p => p.type === "kothi")} />
          <Section title="Land" icon="🌳" properties={allProperties.filter(p => p.type === "land")} />
        </div>
      </div>
    </section>
  );
}

function Section({ title, icon, properties }: { title: string; icon: string; properties: typeof allProperties }) {
  if (properties.length === 0) return null;
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">{icon}</span>
        <h2 className="font-classic text-3xl font-bold text-classic-primary">{title}</h2>
        <div className="flex-1 h-px bg-classic-gold/30 ml-4 hidden md:block" />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((prop, idx) => (
          <div id={prop.slug} key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
            <PropertyCard {...prop} />
          </div>
        ))}
      </div>
    </div>
  );
}