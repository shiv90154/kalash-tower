"use client";

import { useState, useTransition } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    startTransition(async () => {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          requirement: "",
          message: "",
        });
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-slide-up">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-classic font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700 mb-6">
          Your enquiry has been received. Our team will contact you within 24
          hours.
        </p>
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
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}
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
          className="w-full rounded-md border border-gray-300 px-5 py-3 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-classic-gold focus:border-transparent transition duration-300"
        />
      </div>

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
          className="w-full rounded-md border border-gray-300 px-5 py-3 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-classic-gold focus:border-transparent transition duration-300"
        />
      </div>

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
          className="w-full rounded-md border border-gray-300 px-5 py-3 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-classic-gold focus:border-transparent transition duration-300"
        />
      </div>

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
          className="w-full rounded-md border border-gray-300 px-5 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-classic-gold focus:border-transparent transition duration-300"
        >
          <option value="">Select requirement</option>
          <option value="small">Small Office (100-500 sq.ft.)</option>
          <option value="medium">Medium Office (500-1500 sq.ft.)</option>
          <option value="large">Large Office (1500+ sq.ft.)</option>
          <option value="custom">Custom Requirement</option>
        </select>
      </div>

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
          className="w-full rounded-md border border-gray-300 px-5 py-3 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-classic-gold focus:border-transparent transition duration-300 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-classic-primary text-white py-3.5 font-semibold tracking-wide hover:bg-classic-primary-light transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Request a Call Back"
        )}
      </button>
    </form>
  );
}