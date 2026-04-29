"use client";

import { useState, useTransition } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", requirement: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    startTransition(async () => {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", requirement: "", message: "" });
      } else {
        setServerError(result.error || "Something went wrong.");
      }
    });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-slide-up">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-classic font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-6">Your enquiry has been received. Our team will contact you within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)} 
          className="text-green-700 underline hover:text-green-900 transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {serverError}
        </div>
      )}
      
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Mr. / Ms. Full Name"
          className="w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-classic-primary focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-classic-primary focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          className="w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-classic-primary focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Requirement */}
      <div>
        <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-1">
          Requirement *
        </label>
        <select
          id="requirement"
          name="requirement"
          required
          value={formData.requirement}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-classic-primary focus:border-transparent transition-all duration-200 bg-white appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            backgroundSize: '1.5rem'
          }}
        >
          <option value="">Select requirement</option>
          <option value="small">Small Office (100-500 sq.ft.)</option>
          <option value="medium">Medium Office (500-1500 sq.ft.)</option>
          <option value="large">Large Office (1500+ sq.ft.)</option>
          <option value="custom">Custom Requirement</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements..."
          className="w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-classic-primary focus:border-transparent transition-all duration-200 resize-y"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-classic-primary text-white py-3.5 font-semibold hover:bg-classic-primary-light transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-classic-primary focus:ring-offset-2"
      >
        {isPending ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          "Request a Call Back"
        )}
      </button>

      {/* Form Footer Note */}
      <p className="text-xs text-gray-500 text-center mt-4">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-classic-primary hover:underline">
          Privacy Policy
        </a>
        {" "}and consent to being contacted.
      </p>
    </form>
  );
}