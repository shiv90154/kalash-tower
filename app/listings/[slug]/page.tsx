import { notFound } from "next/navigation";
import PropertyDetailClient from "@/components/PropertyDetailClient";
import fs from "fs/promises";
import path from "path";

type Property = {
  title: string;
  location: string;
  size: string;
  price: string;
  priceValue?: number;
  imageFolder: string;
  slug: string;
  amenities: string[];
  type: "corporate" | "flats" | "kothi" | "land";
  description?: string;
  features?: string[];
  nearby?: string[];

  mainImage?: string;
  images?: string[];
  gallery?: string[];
  imageSrc?: string;
};

async function getProperties(): Promise<Property[]> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "properties.json"
  );

  const fileData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileData);
}

async function getPropertyImages(folder: string): Promise<string[]> {
  try {
    const dirPath = path.join(process.cwd(), "public", "images", folder);

    const files = await fs.readdir(dirPath);

    return files
      .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      .map((file) => `/images/${folder}/${file}`);
  } catch (error) {
    console.error("Failed to read property images:", error);
    return [];
  }
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const properties = await getProperties();

  const property = properties.find(
    (p) => p.slug?.toLowerCase() === slug.toLowerCase()
  );

  if (!property) {
    notFound();
  }

  const folderImages = await getPropertyImages(property.imageFolder);

  const finalImages = property.mainImage
    ? [
        property.mainImage,
        ...folderImages.filter((img) => img !== property.mainImage),
      ]
    : folderImages;

  const propertyWithImages: Property = {
    ...property,

    amenities: property.amenities || [],
    features: property.features || property.amenities || [],
    nearby: property.nearby || [],

    images: finalImages,
    gallery: finalImages,
    imageSrc:
      property.mainImage ||
      finalImages[0] ||
      "/images/placeholder.jpg",
  };

  return <PropertyDetailClient property={propertyWithImages} />;
}