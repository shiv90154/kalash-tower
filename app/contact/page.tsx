import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Natraj Properties for premium office rentals in Mohali. Visit KAILASH TOWER, Phase 8B, Industrial Area, Sector 74, Mohali.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumb */}
    
      <section className="py-16 bg-classic-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
         <div className="animate-slide-up">
  <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">
    Get in Touch
  </span>

  <h1 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-2 mb-6">
    Contact Us
  </h1>

  <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
    Ready to find a distinguished office for your business? Fill in the details or reach out to us directly. Our team ensures quick, reliable responses within 24 hours to assist you with the best property solutions.
  </p>

  {/* Contact Details */}
  <div className="space-y-6 mb-10">

    {/* Address */}
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-classic-gold/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
        📍
      </div>
      <div>
        <h3 className="font-semibold text-classic-primary mb-1">
          Office Address
        </h3>

        <p className="text-gray-600">
          KAILASH TOWER, F 177, Phase 8B,
          <br />
          Industrial Area, Sector 74,
          <br />
          Sahibzada Ajit Singh Nagar,
          <br />
          Punjab 140307
        </p>

        {/* Map Button */}
        <a
          href="https://www.google.com/maps?q=KAILASH+TOWER+Phase+8B+Mohali"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm text-classic-gold hover:underline"
        >
          View on Map →
        </a>

        {/* Embedded Map */}
      
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-classic-gold/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
        📞
      </div>
      <div>
        <h3 className="font-semibold text-classic-primary mb-1">
          Phone
        </h3>
        <a
          href="tel:+919876543210"
          className="text-gray-600 hover:text-classic-gold transition-colors"
        >
          +91 98765 43210
        </a>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-classic-gold/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
        ✉️
      </div>
      <div>
        <h3 className="font-semibold text-classic-primary mb-1">
          Email
        </h3>
        <a
          href="mailto:info@natrajproperties.com"
          className="text-gray-600 hover:text-classic-gold transition-colors"
        >
          info@natrajproperties.com
        </a>
      </div>
    </div>

    {/* Business Hours */}
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-classic-gold/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
        🕐
      </div>
      <div>
        <h3 className="font-semibold text-classic-primary mb-1">
          Business Hours
        </h3>
        <p className="text-gray-600">
          Monday - Saturday
          <br />
          9:00 AM - 6:00 PM
        </p>
      </div>
    </div>

  </div>
</div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="font-classic text-2xl font-semibold text-classic-primary mb-6">
                  Send Enquiry
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </>
  );
}