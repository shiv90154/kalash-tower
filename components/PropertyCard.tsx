// components/PropertyCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PropertyProps {
  title: string;
  location: string;
  size: string;
  price: string;
  imageSrc: string;
  slug: string;
  amenities?: string[];
  images?: string[]; // Add this to support multiple images
}

export default function PropertyCard({
  title,
  location,
  size,
  price,
  imageSrc,
  slug,
  amenities = [],
  images = [],
}: PropertyProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Combine main image with additional images, remove duplicates
  const allImages = [imageSrc, ...images.filter(img => img !== imageSrc)];
  const hasMultipleImages = allImages.length > 1;
  
  // Thumbnails (max 4 for layout, but can show scroll if needed)
  const thumbnails = allImages.slice(0, 5);

  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  return (
    <Link href={`/listings/${slug}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
        {/* Desktop Layout: Thumbnails left + Main image right */}
        <div className="flex flex-col md:flex-row h-full">
          
          {/* Thumbnails Column - Left side (Desktop only) */}
          {hasMultipleImages && (
            <div className="hidden md:flex md:flex-col md:w-24 lg:w-28 gap-2 p-3 bg-gray-50/50 border-r border-gray-100">
              {thumbnails.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? "border-classic-gold shadow-md"
                      : "border-transparent hover:border-classic-gold/50"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${title} ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 0vw, 96px"
                    className="object-cover"
                  />
                </button>
              ))}
              {allImages.length > 5 && (
                <div className="text-center text-xs text-gray-500 mt-1">
                  +{allImages.length - 5} more
                </div>
              )}
            </div>
          )}

          {/* Main Image Section */}
          <div className="relative flex-1">
            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden bg-gray-100">
              <Image
                src={allImages[activeImageIndex]}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={activeImageIndex === 0}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 px-6 py-2 border-2 border-white rounded-md text-sm">
                  View Details
                </span>
              </div>

              {/* Navigation Arrows */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-classic-primary flex items-center justify-center shadow-md hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft size={14} />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-classic-primary flex items-center justify-center shadow-md hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <FaChevronRight size={14} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {hasMultipleImages && (
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                  {activeImageIndex + 1} / {allImages.length}
                </div>
              )}

              {/* Size Badge */}
              <div className="absolute bottom-0 left-0 bg-classic-primary/95 text-white text-xs px-3 py-1.5 font-medium">
                {size}
              </div>

              {/* Price Badge */}
              <div className="absolute top-0 right-0 bg-classic-gold text-white text-xs px-3 py-1.5 font-semibold">
                {price}
              </div>
            </div>

            {/* Horizontal Thumbnails - Mobile only */}
            {hasMultipleImages && (
              <div className="flex md:hidden gap-2 p-3 overflow-x-auto bg-white border-t border-gray-100">
                {allImages.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveImageIndex(idx);
                    }}
                    className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? "border-classic-gold"
                        : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${title} ${idx + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
                {allImages.length > 4 && (
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-600">
                    +{allImages.length - 4}
                  </div>
                )}
              </div>
            )}

            {/* Content Section */}
            <div className="p-4 md:p-5">
              <h3 className="font-classic text-lg md:text-xl font-semibold text-classic-primary mb-1 group-hover:text-classic-gold transition-colors line-clamp-1">
                {title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mb-3 flex items-center gap-1">
                <span className="text-base">📍</span>
                <span className="line-clamp-1">{location}</span>
              </p>
              
              {amenities.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {amenities.slice(0, 3).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-classic-bg text-classic-text-light px-2 py-0.5 rounded-full border border-gray-200"
                    >
                      {amenity}
                    </span>
                  ))}
                  {amenities.length > 3 && (
                    <span className="text-xs text-gray-500">+{amenities.length - 3}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}