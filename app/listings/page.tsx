"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBuilding,
  FaHome,
  FaCity,
  FaTree,
  FaListUl,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// ---- Type definitions ----
type Property = {
  title: string;
  location: string;
  size: string;
  price: string;
  mainImage?: string;
  imageFolder: string;
  slug: string;
  amenities: string[];
  type: "corporate" | "flats" | "kothi" | "land";
  images?: string[];
};

// ---- Filter configuration ----
const filters = [
  { key: "all", label: "All", icon: <FaListUl /> },
  { key: "corporate", label: "Corporate", icon: <FaBuilding /> },
  { key: "flats", label: "Flats", icon: <FaCity /> },
  { key: "kothi", label: "Kothi", icon: <FaHome /> },
  { key: "land", label: "Land", icon: <FaTree /> },
];

export default function ListingsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/data/properties.json");
        const properties: Property[] = await res.json();

        const propertiesWithImages = await Promise.all(
  properties.map(async (property) => {
    try {
      const imageRes = await fetch(
        `/api/property-images/${property.imageFolder}`
      );

      const imageData = await imageRes.json();
      const folderImages = imageData.images || [];

      const finalImages = property.mainImage
        ? [
            property.mainImage,
            ...folderImages.filter((img: string) => img !== property.mainImage),
          ]
        : folderImages;

      return {
        ...property,
        images: finalImages,
      };
    } catch {
      return {
        ...property,
        images: property.mainImage ? [property.mainImage] : [],
      };
    }
  })
);
        setAllProperties(propertiesWithImages);
      } catch (error) {
        console.error("Failed to load properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const getFilteredProperties = (): Property[] => {
    if (activeFilter === "all") {
      return allProperties;
    }

    return allProperties.filter((property) => property.type === activeFilter);
  };

  const filteredProperties = getFilteredProperties();

  const getGroupedProperties = (): Record<string, Property[]> => {
    if (activeFilter !== "all") {
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

  if (loading) {
    return (
      <section className="py-12 bg-classic-bg min-h-screen flex items-center justify-center">
        <p className="text-classic-primary font-medium">
          Loading properties...
        </p>
      </section>
    );
  }

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
              title={
                filters.find((f) => f.key === activeFilter)?.label ??
                "Properties"
              }
              icon={
                filters.find((f) => f.key === activeFilter)?.icon ?? <FaHome />
              }
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

// ---- Section component ----
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
        {properties.map((property, idx) => (
          <div
            key={property.slug}
            className="animate-slide-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <GalleryPropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Card with gallery + slug link ----
function GalleryPropertyCard({ property }: { property: Property }) {
  const images = property.images || [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const visibleImages = images.slice(0, 3);

  const currentImage =
    images[activeImageIndex] || "/images/listings/placeholder.jpg";

  const goNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (images.length === 0) return;

    setActiveImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const goPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (images.length === 0) return;

    setActiveImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const selectImage = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex(index);
  };

  return (
    <Link href={`/listings/${property.slug}`} className="block group">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="relative h-64 bg-gray-100 overflow-hidden">
          <img
            src={currentImage}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-classic-primary flex items-center justify-center shadow hover:bg-white z-10"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-classic-primary flex items-center justify-center shadow hover:bg-white z-10"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {images.length > 0 && (
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
              {activeImageIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {visibleImages.length > 1 && (
          <div className="grid grid-cols-3 gap-2 p-3">
            {visibleImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={(e) => selectImage(e, index)}
                className={`h-20 rounded-lg overflow-hidden border-2 ${
                  activeImageIndex === index
                    ? "border-classic-primary"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`${property.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="p-5">
          <h3 className="font-classic text-xl font-bold text-classic-primary mb-2">
            {property.title}
          </h3>

          <p className="text-gray-500 text-sm mb-2">{property.location}</p>

          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-gray-600">{property.size}</span>

            <span className="font-semibold text-classic-gold">
              {property.price}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {property.amenities.map((amenity) => (
              <span
                key={amenity}
                className="text-xs bg-classic-bg text-classic-primary px-3 py-1 rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}