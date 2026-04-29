// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    default: "Natraj Properties | Premium Spaces in Mohali & Chandigarh",
    template: "%s | Natraj Properties",
  },
  description: "Corporate Offices, Flats, Kothi & Land for rent/sale in Mohali & Chandigarh. Timeless properties with prime locations.",
  keywords: ["office rent Mohali","flat Chandigarh","kothi Mohali","land sector 74","Natraj Properties"],
  authors: [{ name: "Natraj Properties" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.natrajproperties.com",
    siteName: "Natraj Properties",
    title: "Natraj Properties | Distinguished Spaces",
    description: "Corporate offices, flats, kothi & land in Mohali, Chandigarh. Book a visit today.",
    images: [{ url: "/images/hero-office.jpg", width: 1200, height: 630, alt: "Natraj Properties" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natraj Properties | Premium Rentals",
    description: "Find timeless office spaces, flats & land in Mohali & Chandigarh.",
    images: ["/images/hero-office.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.natrajproperties.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Natraj Properties",
            url: "https://www.natrajproperties.com",
            telephone: "+919876543210",
            email: "info@natrajproperties.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "KAILASH TOWER, F 177, Phase 8B, Industrial Area, Sector 74",
              addressLocality: "Sahibzada Ajit Singh Nagar",
              addressRegion: "Punjab",
              postalCode: "140307",
              addressCountry: "IN"
            },
            geo: { "@type": "GeoCoordinates", latitude: "30.7046", longitude: "76.7179" },
            openingHours: "Mo-Sa 09:00-18:00"
          })
        }} />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}