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

type Property = {
  title: string;
  location: string;
  size: string;
  price: string;
  imageFolder: string;
  slug: string;
  amenities: string[];
  type: "corporate" | "flats" | "kothi" | "land";
  mainImage?: string;
  imageSrc?: string;
  images?: string[];
};

async function getFeaturedProperties(): Promise<Property[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/data/properties.json`, {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const properties: Property[] = await res.json();

    const propertiesWithImages = await Promise.all(
      properties.map(async (property) => {
        try {
          const imageRes = await fetch(
            `${baseUrl}/api/property-images/${property.imageFolder}`,
            { cache: "no-store" }
          );

          const imageData = await imageRes.json();
          const folderImages: string[] = imageData.images || [];

          const finalImages = property.mainImage
            ? [
                property.mainImage,
                ...folderImages.filter((img) => img !== property.mainImage),
              ]
            : folderImages;

          return {
            ...property,
            images: finalImages,
            imageSrc:
              property.mainImage ||
              finalImages[0] ||
              "/images/listings/placeholder.jpg",
          };
        } catch {
          return {
            ...property,
            images: property.mainImage ? [property.mainImage] : [],
            imageSrc:
              property.mainImage || "/images/listings/placeholder.jpg",
          };
        }
      })
    );

    return propertiesWithImages.slice(0, 6);
  } catch {
    return [];
  }
}

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

export default async function Home() {
  const featuredProperties = await getFeaturedProperties();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden text-classic-primary">
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

        <div className="absolute inset-0 z-0 bg-white/85 backdrop-blur-[2px]" />

        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-classic-gold/20 blur-xl z-10" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-classic-primary/10 blur-xl z-10" />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-5 md:px-8 pt-20 pb-14">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="inline-flex mb-6 px-4 py-2 rounded-full border border-classic-primary/15 bg-white/70 text-sm font-medium text-classic-primary shadow-sm">
                Natraj Properties • Mohali & Chandigarh
              </p>

              <h1 className="font-classic text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Find a Property That
                <br />
                <span className="text-classic-gold">
                  Works for Your Future
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-gray-600">
                Premium offices, showrooms, and commercial spaces in prime
                locations — selected with trust, clarity, and long-term value in
                mind.
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
      <section className="py-12 bg-classic-bg overflow-hidden">
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

          {featuredProperties.length > 0 ? (
            <div
              className="flex gap-6 overflow-x-auto pb-8 -mx-2 px-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {featuredProperties.map((prop, idx) => (
                <div
                  key={prop.slug}
                  className="flex-shrink-0 w-[95%] max-w-[350px] mx-auto md:mx-0 md:w-[320px] lg:w-[350px]"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <PropertyCard
                    title={prop.title}
                    location={prop.location}
                    size={prop.size}
                    price={prop.price}
                    imageSrc={
                      prop.imageSrc || "/images/listings/placeholder.jpg"
                    }
                    slug={prop.slug}
                    amenities={prop.amenities}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No featured properties found.
            </p>
          )}

          <div className="text-center">
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
      <section className="py-12 bg-gradient-to-br from-white via-classic-bg/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-classic-gold/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-classic-primary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase inline-flex items-center gap-2">
              <span className="w-8 h-px bg-classic-gold" />
              Why Choose Us
              <span className="w-8 h-px bg-classic-gold" />
            </span>

            <h2 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-4 mb-4">
              The Natraj Advantage
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We bring decades of expertise to help you find the perfect
              commercial space.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Prime Locations",
                desc: "All properties are in high-demand commercial hubs with excellent connectivity and visibility.",
              },
              {
                title: "Ready to Move",
                desc: "Fully furnished spaces with power backup, high-speed internet – just plug and play.",
              },
              {
                title: "Transparent Deals",
                desc: "Zero brokerage on direct leases, clear terms, and hassle-free paperwork.",
              },
              {
                title: "24/7 Security",
                desc: "Round-the-clock security with CCTV surveillance, trained guards, and secure access control systems.",
              },
              {
                title: "Ample Parking",
                desc: "Dedicated parking spaces for employees and visitors with EV charging stations available.",
              },
              {
                title: "Modern Infrastructure",
                desc: "State-of-the-art buildings with premium amenities, high-speed elevators, and smart features.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-classic-gold to-classic-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="p-8">
                    <h3 className="font-classic text-2xl font-bold text-classic-primary mb-3 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </div>
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