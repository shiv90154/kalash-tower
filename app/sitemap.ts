import { MetadataRoute } from "next";

const BASE_URL = "https://www.natrajproperties.com";

const listings = [
  "industrial-building-phase-8a",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/listings",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const listingPages = listings.map((slug) => ({
    url: `${BASE_URL}/listings/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...listingPages];
}