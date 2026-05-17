// app/layout.tsx

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomeContactPopup from "@/components/HomeContactPopup";

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
    default:
      "Natraj Properties | Premium Office Spaces in Mohali & Chandigarh",
    template: "%s | Natraj Properties",
  },

  description:
    "Natraj Properties offers premium office spaces, flats, kothis, commercial buildings, and land for rent and sale in Mohali & Chandigarh.",

  keywords: [
    "Natraj Properties",
    "office space Mohali",
    "commercial property Chandigarh",
    "industrial building Mohali",
    "office rent Mohali",
    "premium office spaces",
    "commercial real estate Punjab",
    "flat Chandigarh",
    "kothi Mohali",
    "land sector 74",
  ],

  authors: [
    {
      name: "Natraj Properties",
    },
  ],

  creator: "Inphora Private Limited",

  publisher: "Natraj Properties",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "https://www.natrajproperties.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "https://www.natrajproperties.com",

    siteName: "Natraj Properties",

    title:
      "Natraj Properties | Premium Office Spaces in Mohali & Chandigarh",

    description:
      "Explore premium office spaces, flats, commercial buildings, and investment properties in Mohali & Chandigarh.",

    images: [
      {
        url: "/images/hero-office.jpg",
        width: 1200,
        height: 630,
        alt: "Natraj Properties",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Natraj Properties | Premium Office Spaces in Mohali & Chandigarh",

    description:
      "Find premium commercial properties, office spaces, flats, and land in Mohali & Chandigarh.",

    images: ["/images/hero-office.jpg"],
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "RealEstateAgent",

              name: "Natraj Properties",

              url: "https://www.natrajproperties.com",

              logo: "https://www.natrajproperties.com/Natraj.png",

              image:
                "https://www.natrajproperties.com/images/hero-office.jpg",

              telephone: "+919876543210",

              email: "info@natrajproperties.com",

              address: {
                "@type": "PostalAddress",

                streetAddress:
                  "KAILASH TOWER, F 177, Phase 8B, Industrial Area, Sector 74",

                addressLocality:
                  "Sahibzada Ajit Singh Nagar",

                addressRegion: "Punjab",

                postalCode: "140307",

                addressCountry: "IN",
              },

              geo: {
                "@type": "GeoCoordinates",

                latitude: "30.7046",

                longitude: "76.7179",
              },

              openingHours: "Mo-Sa 09:00-18:00",

              areaServed: [
                "Mohali",
                "Chandigarh",
                "Punjab",
              ],

              sameAs: [],
            }),
          }}
        />
      </head>

      <body className="font-body antialiased flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        <BackToTop />

        <HomeContactPopup />

        <WhatsAppButton />
      </body>
    </html>
  );
}