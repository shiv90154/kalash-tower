"use client";

import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import { useState } from "react";

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
  { key: "all", label: "All", icon: "🏘️" },
  { key: "corporate", label: "Corporate", icon: "🏢" },
  { key: "flats", label: "Flats", icon: "🏬" },
  { key: "kothi", label: "Kothi", icon: "🏡" },
  { key: "land", label: "Land", icon: "🌳" },
];

export default function ListingsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const getFilteredProperties = () => {
    if (activeFilter === "all") {
      return allProperties;
    }
    return allProperties.filter(property => property.type === activeFilter);
  };

  const filteredProperties = getFilteredProperties();

  const getGroupedProperties = () => {
    if (activeFilter !== "all") {
      return { [activeFilter]: filteredProperties };
    }
    
    return {
      corporate: allProperties.filter(p => p.type === "corporate"),
      flats: allProperties.filter(p => p.type === "flats"),
      kothi: allProperties.filter(p => p.type === "kothi"),
      land: allProperties.filter(p => p.type === "land"),
    };
  };

  const groupedProperties = getGroupedProperties();

  return (
    <section className="py-12 bg-classic-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">        
        <div className="text-center mb-10 md:mb-16">
          <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">Explore Properties</span>
          <h1 className="font-classic text-3xl md:text-5xl font-bold text-classic-primary mt-2 mb-3">Our Portfolio</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Filter by property type – Corporate, Flats, Kothi, Land.</p>
        </div>

        {/* Compact filter buttons for mobile */}
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
              <span className="sm:hidden">{filter.key === "all" ? "All" : filter.key === "corporate" ? "Corp" : filter.key === "flats" ? "Flat" : filter.key === "kothi" ? "Kothi" : "Land"}</span>
            </button>
          ))}
        </div>

        <div className="mb-6 md:mb-8 text-right">
          <p className="text-gray-500 text-xs md:text-sm">
            Showing {filteredProperties.length} propert{filteredProperties.length !== 1 ? "ies" : "y"}
          </p>
        </div>

        {activeFilter === "all" ? (
          <div className="space-y-16 md:space-y-24">
            {groupedProperties.corporate.length > 0 && (
              <Section title="Corporate Spaces" icon="🏢" properties={groupedProperties.corporate} />
            )}
            {groupedProperties.flats.length > 0 && (
              <Section title="Flats" icon="🏬" properties={groupedProperties.flats} />
            )}
            {groupedProperties.kothi.length > 0 && (
              <Section title="Kothi" icon="🏡" properties={groupedProperties.kothi} />
            )}
            {groupedProperties.land.length > 0 && (
              <Section title="Land" icon="🌳" properties={groupedProperties.land} />
            )}
          </div>
        ) : (
          <div>
            <Section 
              title={filters.find(f => f.key === activeFilter)?.label || "Properties"} 
              icon={filters.find(f => f.key === activeFilter)?.icon || "🏠"} 
              properties={filteredProperties} 
            />
          </div>
        )}

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No properties found</h3>
            <p className="text-gray-500">Try changing your filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}

function Section({ title, icon, properties }: { title: string; icon: string; properties: typeof allProperties }) {
  if (properties.length === 0) return null;
  
  return (
    <div>
      <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
        <span className="text-2xl md:text-3xl">{icon}</span>
        <h2 className="font-classic text-2xl md:text-3xl font-bold text-classic-primary">{title}</h2>
        <div className="flex-1 h-px bg-classic-gold/30 ml-3 hidden md:block" />
      </div>
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((prop, idx) => (
          <div key={prop.slug} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
            <PropertyCard {...prop} />
          </div>
        ))}
      </div>
    </div>
  );
}