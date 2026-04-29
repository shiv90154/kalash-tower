// components/PropertyCard.tsx
import Image from "next/image";
import Link from "next/link";

interface PropertyProps {
  title: string;
  location: string;
  size: string;
  price: string;
  imageSrc: string;
  slug: string;
  amenities?: string[];
}

export default function PropertyCard({
  title,
  location,
  size,
  price,
  imageSrc,
  slug,
  amenities = [],
}: PropertyProps) {
  return (
    <Link
      href={`/listings/${slug}`}  // Changed from /listings#${slug} to dynamic route
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-classic-gold/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 px-6 py-2 border-2 border-white rounded-md">
            View Details
          </span>
        </div>
        <div className="absolute bottom-0 left-0 bg-classic-primary/95 text-white text-xs px-4 py-2 font-medium">{size}</div>
        <div className="absolute top-0 right-0 bg-classic-gold text-white text-xs px-4 py-2 font-semibold">{price}</div>
      </div>
      <div className="p-6">
        <h3 className="font-classic text-xl font-semibold text-classic-primary mb-2 group-hover:text-classic-gold transition-colors">{title}</h3>
        <p className="text-sm text-gray-500 mb-4 flex items-center gap-1"><span>📍</span>{location}</p>
        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity, idx) => (
              <span key={idx} className="text-xs bg-classic-bg text-classic-text-light px-3 py-1 rounded-full border border-gray-200">{amenity}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}