import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Agar font change karna chahein toh yahan se line badlein
// e.g., Cormorant + Raleway ke liye:
// import { Cormorant_Garamond, Raleway } from "next/font/google";
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

// SEO metadata (aap apne domain ke hisaab se update kar sakte hain)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.natrajproperties.com"),
  title: {
    default:
      "Natraj Properties | Premium Office Spaces in Mohali & Chandigarh",
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
        {/* Structured data for business */}
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
        

        {/* WhatsApp Floating Button – classical look, gold / green mix */}
        <a
          href={`https://wa.me/919876543210?text=${encodeURIComponent(
            "Hi Natraj Properties, I'm interested in an office space."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden group-hover:inline-block text-sm font-medium">
            Chat with us
          </span>
        </a>
      </body>
    </html>
  );
}