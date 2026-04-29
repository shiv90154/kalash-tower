import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Natraj Properties",
  description: "Read our terms of service to understand the terms and conditions governing the use of Natraj Properties website and services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-10">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary">
      Terms of Service
    </h1>
 <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
      Please read these terms carefully before using our services.
    </p>
  </div>
</section>

      {/* Content Section */}
      <section className="py-0 bg-classic-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Last Updated */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <p className="text-gray-500 text-sm">
                <span className="font-semibold">Effective Date:</span> December 1, 2024
              </p>
            </div>

            {/* Agreement */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                By accessing or using the Natraj Properties website ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-yellow-800 text-sm">
                  <span className="font-semibold">⚠️ Important:</span> These terms constitute a legally binding agreement between you and Natraj Properties.
                </p>
              </div>
            </div>

            {/* Property Listings */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                2. Property Listings and Information
              </h2>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  While we strive to provide accurate and up-to-date information about properties:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>All property details, including pricing, availability, and specifications are subject to change without notice</li>
                  <li>Images and descriptions are for illustrative purposes only</li>
                  <li>We do not guarantee the accuracy or completeness of any property information</li>
                  <li>Property availability is subject to prior booking or lease</li>
                  <li>Final property terms and conditions are subject to the lease agreement</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">
                  It is your responsibility to verify all property details before making any decisions or commitments.
                </p>
              </div>
            </div>

            {/* Eligibility */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                3. Eligibility and User Responsibilities
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-classic-primary mb-2">
                    3.1 Eligibility
                  </h3>
                  <p className="text-gray-600">
                    By using our Service, you represent that you are at least 18 years old and have the legal capacity to enter into binding contracts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-classic-primary mb-2">
                    3.2 User Responsibilities
                  </h3>
                  <p className="text-gray-600 mb-2">You agree to:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                    <li>Provide accurate and complete information when using our services</li>
                    <li>Maintain the confidentiality of your account information</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not misuse or interfere with the proper functioning of our website</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking and Payments */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                4. Booking and Payment Terms
              </h2>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  When you express interest in a property or schedule a viewing:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Property viewings are subject to confirmation and availability</li>
                  <li>Security deposits and advance rent payments are governed by individual lease agreements</li>
                  <li>All payments must be made through approved channels as specified by us</li>
                  <li>Booking amounts are non-refundable unless otherwise specified in the lease agreement</li>
                  <li>We reserve the right to refuse any booking or service at our discretion</li>
                </ul>
              </div>
            </div>

            {/* Cancellation and Refunds */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                5. Cancellation and Refund Policy
              </h2>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  In the event you wish to cancel a booking or scheduled viewing:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-classic-primary mb-2">Viewing Cancellations</h4>
                    <p className="text-gray-500 text-sm">Notify us at least 24 hours in advance to reschedule without penalty.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-classic-primary mb-2">Lease Cancellations</h4>
                    <p className="text-gray-500 text-sm">Subject to terms specified in the individual lease agreement.</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Refund policies vary by property and are outlined in the specific lease agreement. Contact our team for detailed information.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                6. Intellectual Property Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                The Service and its original content, features, and functionality are owned by Natraj Properties and are protected by copyright, trademark, and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or logos without written consent</li>
                <li>Reproduce any part of our website for commercial purposes</li>
                <li>Frame or embed our content without authorization</li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                7. Prohibited Activities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Unauthorized scraping or data mining",
                  "Posting false or misleading information",
                  "Attempting to circumvent security measures",
                  "Uploading malicious code or viruses",
                  "Harassing or abusing our staff or other users",
                  "Using automated systems to access our website",
                  "Impersonating another person or entity",
                  "Violating any applicable laws or regulations"
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 text-lg">✗</span>
                    <span className="text-gray-600 text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                8. Limitation of Liability
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 leading-relaxed mb-3">
                  To the maximum extent permitted by law, Natraj Properties shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages arising from your use or inability to use our Service</li>
                  <li>Any unauthorized access to or use of our secure servers</li>
                  <li>Any bugs, viruses, or other harmful code</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3 text-sm">
                  Our total liability for any claim arising from these terms shall not exceed the amount you paid us (if any) in the past 12 months.
                </p>
              </div>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                9. Disclaimer of Warranties
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 leading-relaxed">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                10. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Natraj Properties and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                11. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may terminate or suspend your access to our Service immediately, without prior notice, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                12. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Mohali, Punjab.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-classic-bg rounded-xl p-6 mt-8">
              <h2 className="text-2xl font-classic font-bold text-classic-primary mb-4">
                14. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📍</span> Natraj Properties, Mohali, Punjab
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📧</span> legal@natrajproperties.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📞</span> +91 98765 43210
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">🕒</span> Monday - Saturday, 10:00 AM to 7:00 PM
                </p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-500 text-sm">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}