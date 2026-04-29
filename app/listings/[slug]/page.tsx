import { notFound } from "next/navigation";
import PropertyDetailClient from "@/components/PropertyDetailClient";
// Property data (you can move this to a shared file later)
const allProperties = [
  { 
    title: "IT Park Suite", 
    location: "Sector 82, Mohali", 
    size: "450 sq.ft.", 
    price: "₹ 18,000/mo",
    priceValue: 18000,
    imageSrc: "@/images/property-1.jpg", 
    slug: "it-park-mohali", 
    amenities: ["24/7 Power", "Parking", "Security", "AC", "WiFi", "Conference Room"],
    type: "corporate",
    description: "Premium corporate suite located in the heart of IT Park Mohali. This fully furnished office space comes with modern amenities and 24/7 security. Perfect for startups and established businesses looking for a professional workspace.",
    features: [
      "24/7 Power Backup",
      "Covered Parking",
      "CCTV Surveillance",
      "High-speed Internet",
      "Meeting Rooms",
      "Pantry Area"
    ],
    nearby: ["IT Park Plaza (200m)", "Food Court (100m)", "Bus Stand (500m)", "Metro Station (1km)"],
    gallery: ["/images/property-1.jpg", "/images/property-1.jpg", "/images/property-1.jpg"]
  },
  { 
    title: "Business Centre", 
    location: "Industrial Area, Chandigarh", 
    size: "1,200 sq.ft.", 
    price: "₹ 45,000/mo",
    priceValue: 45000,
    imageSrc: "/images/property-2.jpg", 
    slug: "business-centre-chandigarh", 
    amenities: ["Reception", "Board Room", "AC", "Parking", "Security", "Cafeteria"],
    type: "corporate",
    description: "Fully equipped business centre in the prime location of Industrial Area, Chandigarh. Ideal for corporate offices with excellent connectivity to all major sectors.",
    features: [
      "Professional Reception",
      "Board Room",
      "Air Conditioning",
      "Ample Parking",
      "Security 24/7",
      "Cafeteria"
    ],
    nearby: ["Sector 17 Market (2km)", "Railway Station (3km)", "Airport (8km)", "Bank (500m)"],
    gallery: ["/images/property-2.jpg", "/images/property-2.jpg", "/images/property-2.jpg"]
  },
  { 
    title: "2 BHK Luxury Flat", 
    location: "Sector 70, Mohali", 
    size: "950 sq.ft.", 
    price: "₹ 12,000/mo",
    priceValue: 12000,
    imageSrc: "/images/flat-1.jpg", 
    slug: "2bhk-mohali", 
    amenities: ["Furnished", "Gym", "Park", "Security", "Power Backup", "Lift"],
    type: "flats",
    description: "Beautiful 2 BHK luxury flat in Sector 70, Mohali. Fully furnished with modern interiors and access to premium amenities. Close to schools, hospitals, and shopping centers.",
    features: [
      "Fully Furnished",
      "Modular Kitchen",
      "Gymnasium",
      "Children's Park",
      "24/7 Security",
      "Power Backup",
      "Lift"
    ],
    nearby: ["School (500m)", "Hospital (1km)", "Mall (2km)", "Park (200m)"],
    gallery: ["/images/flat-1.jpg", "/images/flat-1.jpg", "/images/flat-1.jpg"]
  },
  { 
    title: "3 BHK Premium Apartment", 
    location: "Sector 48, Chandigarh", 
    size: "1,400 sq.ft.", 
    price: "₹ 22,000/mo",
    priceValue: 22000,
    imageSrc: "/images/flat-2.jpg", 
    slug: "3bhk-chandigarh", 
    amenities: ["Semi-furnished", "Lift", "Parking", "Security", "Garden"],
    type: "flats",
    description: "Spacious 3 BHK premium apartment in Sector 48, Chandigarh. Semi-furnished with beautiful design and ample natural light. Perfect for families looking for a comfortable home.",
    features: [
      "Semi-furnished",
      "Spacious Rooms",
      "Balcony",
      "Lift",
      "Parking",
      "Security",
      "Community Garden"
    ],
    nearby: ["Market (300m)", "School (800m)", "Hospital (1.5km)", "Bus Stop (200m)"],
    gallery: ["/images/flat-2.jpg", "/images/flat-2.jpg", "/images/flat-2.jpg"]
  },
  { 
    title: "Classic Kothi", 
    location: "Sector 9, Chandigarh", 
    size: "3,200 sq.ft.", 
    price: "₹ 55,000/mo",
    priceValue: 55000,
    imageSrc: "/images/kothi-1.jpg", 
    slug: "kothi-chandigarh", 
    amenities: ["Garden", "Garage", "Security", "Modular Kitchen", "Servant Room"],
    type: "kothi",
    description: "Elegant classic kothi in the prestigious Sector 9, Chandigarh. Large garden area, dedicated garage, and premium finishes throughout. Close to all major landmarks.",
    features: [
      "Private Garden",
      "Covered Garage",
      "Modular Kitchen",
      "Servant Room",
      "Security System",
      "Lawn Area"
    ],
    nearby: ["Sector 17 Market (1km)", "Rose Garden (2km)", "Hospital (1.5km)", "School (800m)"],
    gallery: ["/images/kothi-1.jpg", "/images/kothi-1.jpg", "/images/kothi-1.jpg"]
  },
  { 
    title: "Grand Villa", 
    location: "Phase 5, Mohali", 
    size: "4,500 sq.ft.", 
    price: "₹ 75,000/mo",
    priceValue: 75000,
    imageSrc: "/images/kothi-2.jpg", 
    slug: "villa-mohali", 
    amenities: ["Pool", "Modular Kitchen", "Garden", "Garage", "Terrace", "Security"],
    type: "kothi",
    description: "Luxurious grand villa in Phase 5, Mohali. Features a private swimming pool, beautifully landscaped garden, and premium interiors. The epitome of luxury living.",
    features: [
      "Private Swimming Pool",
      "Modern Modular Kitchen",
      "Landscaped Garden",
      "Double Garage",
      "Rooftop Terrace",
      "Smart Home Features"
    ],
    nearby: ["Punjab Cricket Stadium (2km)", "Mall (3km)", "Airport (6km)", "School (1km)"],
    gallery: ["/images/kothi-2.jpg", "/images/kothi-2.jpg", "/images/kothi-2.jpg"]
  },
  { 
    title: "Residential Plot", 
    location: "Sector 99, Mohali", 
    size: "200 sq.yards", 
    price: "₹ 8,500/sq.yard",
    priceValue: 8500,
    imageSrc: "/images/land-1.jpg", 
    slug: "plot-mohali", 
    amenities: ["Corner Plot", "Clear Title", "Wide Road Frontage"],
    type: "land",
    description: "Prime residential corner plot in Sector 99, Mohali. Located on a wide road with all utilities available. Perfect for building your dream home.",
    features: [
      "Corner Plot",
      "Clear Title",
      "Wide Road Frontage",
      "Water Connection Available",
      "Electricity Available",
      "Close to Main Road"
    ],
    nearby: ["School (500m)", "Hospital (1km)", "Market (800m)", "Park (300m)"],
    gallery: ["/images/land-1.jpg", "/images/land-1.jpg", "/images/land-1.jpg"]
  },
  { 
    title: "Commercial Land", 
    location: "Airport Road, Mohali", 
    size: "500 sq.yards", 
    price: "₹ 25,000/sq.yard",
    priceValue: 25000,
    imageSrc: "/images/land-2.jpg", 
    slug: "commercial-land-mohali", 
    amenities: ["Highway Frontage", "Commercial Use", "Excellent Location"],
    type: "land",
    description: "Prime commercial land on Airport Road, Mohali. Highway frontage with high visibility. Ideal for retail, office, or mixed-use development.",
    features: [
      "Highway Frontage",
      "Commercial Zone",
      "High Visibility",
      "Excellent Location",
      "Near Airport",
      "High Traffic Area"
    ],
    nearby: ["Airport (2km)", "Hotel (500m)", "Fuel Station (200m)", "Restaurants (300m)"],
    gallery: ["/images/land-2.jpg", "/images/land-2.jpg", "/images/land-2.jpg"]
  },
];

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = allProperties.find(p => p.slug === slug);
  
  if (!property) {
    notFound();
  }

  // Pass the property data to a client component for interactivity
  return <PropertyDetailClient property={property} />;
}