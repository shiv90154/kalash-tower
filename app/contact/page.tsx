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
              <p className="text-gray-600 leading-relaxed mb-8">
                Ready to find a distinguished office for your business? Fill in
                the details or reach out to us directly. Our team will respond
                within 24 hours.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
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
                  </div>
                </div>

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

          {/* Map Section – coordinates for KAILASH TOWER, Sector 74 */}
          <div className="mt-16">
            <h2 className="font-classic text-3xl font-bold text-classic-primary text-center mb-8">
              Find Us Here
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.212998947086!2d76.7179!3d30.7046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed7f2b7e5b5b%3A0xb0c3a3e1f24c0de2!2sKAILASH%20TOWER%2C%20Phase%208B%2C%20Industrial%20Area%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140307!5e0!3m2!1sen!2sin!4v1685951288990"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Natraj Properties Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}