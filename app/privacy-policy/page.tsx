import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Natraj Properties",
  description: "Read our privacy policy to understand how Natraj Properties collects, uses, and protects your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
       <section className="py-10">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary">
                 Privacy Policy
    </h1>
 <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
                 Your privacy matters to us. Learn how we protect your information.
    </p>
  </div>
</section>

      {/* Content Section */}
      <section className="py-6 bg-classic-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Last Updated */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <p className="text-gray-500 text-sm">
                <span className="font-semibold">Last Updated:</span> 29 April 2026
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Natraj Properties ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Information Collection */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-classic-primary mb-2">
                    2.1 Personal Information
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 ml-4">
                    <li>Fill out contact or inquiry forms</li>
                    <li>Schedule property visits</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Apply for property rentals</li>
                    <li>Contact us via phone, email, or WhatsApp</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-2">
                    This information may include your name, email address, phone number, company name, and property preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-classic-primary mb-2">
                    2.2 Automatically Collected Information
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    When you visit our website, we automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 ml-4">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages you visit and time spent</li>
                    <li>Referring website addresses</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We use the information we collect for various purposes:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {[
                  "Respond to your inquiries and requests",
                  "Schedule and confirm property viewings",
                  "Send property recommendations and updates",
                  "Process rental applications",
                  "Improve our website and services",
                  "Send marketing communications (with your consent)",
                  "Comply with legal obligations",
                  "Protect against fraudulent activities"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-classic-gold text-lg">✓</span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sharing Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                4. Sharing Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><span className="font-semibold">Service Providers:</span> With trusted third-party vendors who assist in operating our website and providing services</li>
                <li><span className="font-semibold">Legal Requirements:</span> When required by law or to protect our rights</li>
                <li><span className="font-semibold">Business Transfers:</span> In connection with a merger, acquisition, or sale of assets</li>
                <li><span className="font-semibold">With Your Consent:</span> When you have given us explicit permission</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                You have the following rights regarding your personal information:
              </p>
              <div className="space-y-3">
                {[
                  "Access and receive a copy of your personal data",
                  "Correct inaccurate or incomplete information",
                  "Request deletion of your personal data",
                  "Opt-out of marketing communications",
                  "Withdraw consent at any time"
                ].map((right, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-classic-gold">•</span>
                    <span className="text-gray-600">{right}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mt-3">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                10. Updates to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-classic-bg rounded-xl p-6 mt-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📍</span> Natraj Properties, Mohali, Punjab
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📧</span> privacy@natrajproperties.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📞</span> +91 98765 43210
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">🕒</span> Monday - Saturday, 10:00 AM to 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}