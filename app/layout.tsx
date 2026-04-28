import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-classic",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.natrajproperties.com"),
  title: {
    default: "Natraj Properties | Premium Office Spaces in Mohali & Chandigarh",
    template: "%s | Natraj Properties",
  },
  description:
    "Discover distinguished office spaces for rent in Mohali and Chandigarh. Timeless architecture, prime locations, fully serviced for your business needs.",
  keywords: [
    "office rent Mohali",
    "commercial space Chandigarh",
    "Natraj Properties",
    "classical office spaces",
    "premium office rental",
    "corporate office Mohali",
    "business centre Chandigarh",
    "IT park office space",
    "commercial property rental",
    "office for lease Mohali",
  ],
  authors: [{ name: "Natraj Properties" }],
  creator: "Natraj Properties",
  publisher: "Natraj Properties",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.natrajproperties.com",
    siteName: "Natraj Properties",
    title: "Natraj Properties | Distinguished Office Spaces for Rent",
    description:
      "Classically elegant office spaces for rent in Mohali and Chandigarh. Contact us for a private viewing today.",
    images: [
      {
        url: "/images/hero-office.jpg",
        width: 1200,
        height: 630,
        alt: "Natraj Properties Office Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natraj Properties | Premium Office Rentals",
    description:
      "Find timeless office spaces in Mohali & Chandigarh. Call us today for a viewing.",
    images: ["/images/hero-office.jpg"],
    creator: "@natrajproperties",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your code
  },
  alternates: {
    canonical: "https://www.natrajproperties.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Natraj Properties",
              description:
                "Premium office spaces for rent in Mohali and Chandigarh",
              url: "https://www.natrajproperties.com",
              telephone: "+919876543210",
              email: "info@natrajproperties.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sector 82",
                addressLocality: "Mohali",
                addressRegion: "Punjab",
                postalCode: "140306",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "30.7046",
                longitude: "76.7179",
              },
              openingHours: "Mo-Sa 09:00-18:00",
              sameAs: [
                "https://www.facebook.com/natrajproperties",
                "https://www.linkedin.com/company/natrajproperties",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.natrajproperties.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Office Listings",
                  item: "https://www.natrajproperties.com/listings",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "About Us",
                  item: "https://www.natrajproperties.com/about",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contact",
                  item: "https://www.natrajproperties.com/contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}