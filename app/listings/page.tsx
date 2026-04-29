"use client";

import PropertyCard from "@/components/PropertyCard";
import { useState } from "react";
import { 
  FaBuilding, 
  FaHome, 
  FaCity, 
  FaTree, 
  FaListUl 
} from "react-icons/fa";

// ---- Type definitions ----
type Property = {
  title: string;
  location: string;
  size: string;
  price: string;
  imageSrc: string;
  slug: string;
  amenities: string[];
  type: "corporate" | "flats" | "kothi" | "land";
};

// ---- Example data – replace with yours ----
const allProperties: Property[] = [
  { title: "IT Park Suite", location: "Sector 82, Mohali", size: "450 sq.ft.", price: "₹ 18,000/mo", imageSrc: "/images/property-1.jpg", slug: "it-park-mohali", amenities: ["24/7 Power","Parking","Security"], type: "corporate" },
  { title: "Business Centre", location: "Industrial Area, Chandigarh", size: "1,200 sq.ft.", price: "₹ 45,000/mo", imageSrc: "/images/property-2.jpg", slug: "business-centre-chandigarh", amenities: ["Reception","Board Room","AC"], type: "corporate" },
  { title: "2 BHK Luxury Flat", location: "Sector 70, Mohali", size: "950 sq.ft.", price: "₹ 12,000/mo", imageSrc: "/images/flat-1.jpg", slug: "2bhk-mohali", amenities: ["Furnished","Gym","Park"], type: "flats" },
  { title: "3 BHK Premium Apartment", location: "Sector 48, Chandigarh", size: "1,400 sq.ft.", price: "₹ 22,000/mo", imageSrc: "/images/flat-2.jpg", slug: "3bhk-chandigarh", amenities: ["Semi-furnished","Lift"], type: "flats" },
  { title: "Classic Kothi", location: "Sector 9, Chandigarh", size: "3,200 sq.ft.", price: "₹ 55,000/mo", imageSrc: "/images/kothi-1.jpg", slug: "kothi-chandigarh", amenities: ["Garden","Garage"], type: "kothi" },
  { title: "Grand Villa", location: "Phase 5, Mohali", size: "4,500 sq.ft.", price: "₹ 75,000/mo", imageSrc: "/images/kothi-2.jpg", slug: "villa-mohali", amenities: ["Pool","Modular Kitchen"], type: "kothi" },
  { title: "Residential Plot", location: "Sector 99, Mohali", size: "200 sq.yards", price: "₹ 8,500/sq.yard", imageSrc: "/images/land-1.jpg", slug: "plot-mohali", amenities: ["Corner Plot"], type: "land" },
  { title: "Commercial Land", location: "Airport Road, Mohali", size: "500 sq.yards", price: "₹ 25,000/sq.yard", imageSrc: "/images/land-2.jpg", slug: "commercial-land-mohali", amenities: ["Highway Frontage"], type: "land" },
];

// ---- Filter configuration with React Icons ----
const filters = [
  { key: "all", label: "All", icon: <FaListUl /> },
  { key: "corporate", label: "Corporate", icon: <FaBuilding /> },
  { key: "flats", label: "Flats", icon: <FaCity /> },
  { key: "kothi", label: "Kothi", icon: <FaHome /> },
  { key: "land", label: "Land", icon: <FaTree /> },
];

export default function ListingsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const getFilteredProperties = (): Property[] => {
    if (activeFilter === "all") {
      return allProperties;
    }
    return allProperties.filter((property) => property.type === activeFilter);
  };

  const filteredProperties = getFilteredProperties();

  // Explicit return type to help TypeScript understand the keys
  const getGroupedProperties = (): Record<string, Property[]> => {
    if (activeFilter !== "all") {
      // Return an object with the specific key, type asserted
      return { [activeFilter]: filteredProperties };
    }
    return {
      corporate: allProperties.filter((p) => p.type === "corporate"),
      flats: allProperties.filter((p) => p.type === "flats"),
      kothi: allProperties.filter((p) => p.type === "kothi"),
      land: allProperties.filter((p) => p.type === "land"),
    };
  };

  const groupedProperties = getGroupedProperties();

  return (
    <section className="py-12 bg-classic-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">
            Explore Properties
          </span>
          <h1 className="font-classic text-3xl md:text-5xl font-bold text-classic-primary mt-2 mb-3">
            Our Portfolio
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Filter by property type – Corporate, Flats, Kothi, Land.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-1">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-3 md:px-6 py-1.5 md:py-2.5 rounded-full border-2 font-medium transition-all duration-300 flex items-center gap-1 md:gap-2 text-sm md:text-base ${
                activeFilter === filter.key
                  ? "bg-classic-primary text-white border-classic-primary shadow-lg scale-105"
                  : "border-classic-primary text-classic-primary hover:bg-classic-primary hover:text-white"
              }`}
            >
              <span className="text-base md:text-xl">{filter.icon}</span>
              <span className="hidden sm:inline">{filter.label}</span>
              {/* Mobile short labels */}
              <span className="sm:hidden">
                {filter.key === "all"
                  ? "All"
                  : filter.key === "corporate"
                  ? "Corp"
                  : filter.key === "flats"
                  ? "Flat"
                  : filter.key === "kothi"
                  ? "Kothi"
                  : "Land"}
              </span>
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="mb-6 md:mb-8 text-right">
          <p className="text-gray-500 text-xs md:text-sm">
            Showing {filteredProperties.length} propert
            {filteredProperties.length !== 1 ? "ies" : "y"}
          </p>
        </div>

        {/* Display */}
        {activeFilter === "all" ? (
          <div className="space-y-16 md:space-y-24">
            {/* Use optional chaining with fallback to avoid TS errors */}
            {(groupedProperties.corporate ?? []).length > 0 && (
              <Section
                title="Corporate Spaces"
                icon={<FaBuilding />}
                properties={groupedProperties.corporate ?? []}
              />
            )}
            {(groupedProperties.flats ?? []).length > 0 && (
              <Section
                title="Flats"
                icon={<FaCity />}
                properties={groupedProperties.flats ?? []}
              />
            )}
            {(groupedProperties.kothi ?? []).length > 0 && (
              <Section
                title="Kothi"
                icon={<FaHome />}
                properties={groupedProperties.kothi ?? []}
              />
            )}
            {(groupedProperties.land ?? []).length > 0 && (
              <Section
                title="Land"
                icon={<FaTree />}
                properties={groupedProperties.land ?? []}
              />
            )}
          </div>
        ) : (
          <div>
            <Section
              title={filters.find((f) => f.key === activeFilter)?.label ?? "Properties"}
              icon={filters.find((f) => f.key === activeFilter)?.icon ?? <FaHome />}
              properties={filteredProperties}
            />
          </div>
        )}

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No properties found
            </h3>
            <p className="text-gray-500">Try changing your filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}

// --- Section sub-component (updated to accept JSX icon) ---
function Section({
  title,
  icon,
  properties,
}: {
  title: string;
  icon: React.ReactNode;
  properties: Property[];
}) {
  if (properties.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
        <span className="text-2xl md:text-3xl">{icon}</span>
        <h2 className="font-classic text-2xl md:text-3xl font-bold text-classic-primary">
          {title}
        </h2>
        <div className="flex-1 h-px bg-classic-gold/30 ml-3 hidden md:block" />
      </div>
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((prop, idx) => (
          <div
            key={prop.slug}
            className="animate-slide-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <PropertyCard {...prop} />
          </div>
        ))}
      </div>
    </div>
  );
}