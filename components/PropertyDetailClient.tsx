// components/PropertyDetailClient.tsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PropertyDetailClient({ property }: { property: any }) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const gallery = property?.gallery || [];

  return (
    <section className="bg-classic-bg min-h-screen py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-2 text-classic-primary hover:text-classic-gold transition-colors text-sm md:text-base"
        >
          ← Back to Listings
        </button>

        {/* Desktop / Tablet Gallery */}
        <div className="hidden md:grid grid-cols-[minmax(0,1fr)_220px] lg:grid-cols-[minmax(0,1fr)_280px] gap-4 mb-8">
          <div className="relative h-[460px] lg:h-[560px] rounded-xl overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src={gallery[currentImageIndex]}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {gallery.length > 1 && (
            <div className="grid grid-rows-3 gap-4 h-[460px] lg:h-[560px]">
              {gallery.slice(0, 3).map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all bg-gray-100 ${
                    currentImageIndex === idx
                      ? "border-classic-gold"
                      : "border-transparent hover:border-classic-gold/60"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${property.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />

                  {idx === 2 && gallery.length > 3 && (
                    <div className="absolute inset-0 bg-black/45 flex items-center justify-center text-white font-semibold text-lg">
                      +{gallery.length - 3} More
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Gallery - current layout kept */}
        <div className="md:hidden space-y-3 mb-6">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={gallery[currentImageIndex]}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {gallery.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
                    currentImageIndex === idx
                      ? "border-classic-gold"
                      : "border-transparent hover:border-classic-gold/50"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${property.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Below Gallery */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-6 lg:gap-10 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm">
              <h1 className="font-classic text-2xl md:text-4xl font-bold text-classic-primary mb-3">
                {property.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-gray-600 mb-4">
                <span className="text-sm md:text-base">📍 {property.location}</span>
                <span className="text-classic-gold hidden md:inline">|</span>
                <span className="text-sm md:text-base">📐 {property.size}</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-bold text-classic-gold">
                  {property.price}
                </span>
                {property.type === "land" && (
                  <span className="text-gray-500 text-xs md:text-sm">
                    *Negotiable
                  </span>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold text-classic-primary mb-3">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {property.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm">
                <h2 className="text-lg md:text-xl font-semibold text-classic-primary mb-3">
                  Key Features
                </h2>
                <div className="space-y-2">
                  {property.features.map((feature: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-600 text-sm md:text-base"
                    >
                      <span className="text-classic-gold">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm">
                <h2 className="text-lg md:text-xl font-semibold text-classic-primary mb-3">
                  Amenities
                </h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity: string, idx: number) => (
                    <span
                      key={idx}
                      className="bg-classic-bg border border-classic-primary/20 text-classic-primary px-3 py-1 rounded-full text-xs md:text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold text-classic-primary mb-3">
                Location Map
              </h2>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    property.title + " " + property.location
                  )}&output=embed`}
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${property.title} in ${property.location}`}
                />
              </div>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold text-classic-primary mb-3">
                Nearby Landmarks
              </h2>
              <div className="space-y-3">
                {property.nearby.map((place: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-600 text-sm md:text-base"
                  >
                    <span>📍</span>
                    <span>{place}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm">
              <h3 className="text-base md:text-lg font-semibold text-classic-primary mb-4">
                Interested in this property?
              </h3>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full bg-classic-primary text-white px-5 py-3 rounded-lg font-semibold hover:bg-classic-primary-light transition-colors text-sm md:text-base"
              >
                Contact Agent
              </Link>

              <p className="text-center text-gray-500 text-xs md:text-sm mt-3">
                Call us: +91 98765 43210
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}