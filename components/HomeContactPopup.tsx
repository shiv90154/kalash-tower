"use client";

import { useEffect, useState, useTransition } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  requirement?: string;
}

function validate(formData: {
  name: string;
  email: string;
  phone: string;
  requirement: string;
}): FormErrors {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Full name is required.";
  } else if (/\d/.test(formData.name)) {
    errors.name = "Name must not contain numbers.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Enter a valid email.";
  }

  const phoneDigits = formData.phone.replace(/\D/g, "");
  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (phoneDigits.length !== 10) {
    errors.phone = "Enter 10 digit phone number.";
  }

  if (!formData.requirement) {
    errors.requirement = "Select a requirement.";
  }

  return errors;
}

export default function HomeContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    setServerError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
        setErrors({});
      } else {
        setServerError(result.error || "Something went wrong.");
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 backdrop-blur-sm px-3 py-3 sm:px-5">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl border border-classic-gold/30 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-classic-primary shadow-md border border-classic-gold/30 hover:bg-classic-primary hover:text-white transition-all duration-300"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-[0.85fr_1.15fr]">
          {/* Left Info Section */}
          <div className="hidden md:flex flex-col justify-between bg-classic-primary p-7 text-white">
            <div>
              <span className="text-classic-gold text-xs font-semibold tracking-widest uppercase">
                Natraj Properties
              </span>

              <h2 className="font-classic text-3xl font-bold mt-3 leading-tight">
                Find Your Premium Office Space
              </h2>

              <p className="mt-4 text-sm text-white/80 leading-relaxed">
                Share your requirement and our team will help you find the best
                office rental options in Mohali.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-classic-gold">Address</p>
                <p className="text-white/80">
                  KAILASH TOWER, Phase 8B, Industrial Area, Sector 74, Mohali
                </p>
              </div>

              <div>
                <p className="font-semibold text-classic-gold">Response Time</p>
                <p className="text-white/80">Usually within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-classic-bg p-4 sm:p-5 md:p-7">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
                  ✓
                </div>

                <h3 className="font-classic text-2xl font-bold text-green-800">
                  Thank You!
                </h3>

                <p className="mt-2 max-w-sm text-sm text-green-700">
                  Your enquiry has been received. Our team will contact you
                  within 24 hours.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 rounded-md bg-classic-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-classic-primary-light transition"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4 pr-10">
                  <span className="text-classic-gold text-xs font-semibold tracking-widest uppercase">
                    Get in Touch
                  </span>

                  <h2 className="font-classic text-2xl sm:text-3xl font-bold text-classic-primary mt-1">
                    Send Enquiry
                  </h2>

                  <p className="mt-1 text-xs sm:text-sm text-gray-600">
                    Fill your details and we will call you back shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  {serverError && (
                    <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                      {serverError}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-classic-primary ${
                          errors.name ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-700">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10 digit mobile number"
                        className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-classic-primary ${
                          errors.phone ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-classic-primary ${
                          errors.email ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-700">
                        Requirement *
                      </label>
                      <select
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-classic-primary bg-white ${
                          errors.requirement
                            ? "border-red-400 bg-red-50"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Select requirement</option>
                        <option value="small">Small Office (100-500 sq.ft.)</option>
                        <option value="medium">Medium Office (500-1500 sq.ft.)</option>
                        <option value="large">Large Office (1500+ sq.ft.)</option>
                        <option value="custom">Custom Requirement</option>
                      </select>
                      {errors.requirement && (
                        <p className="mt-1 text-[11px] text-red-600">
                          {errors.requirement}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-classic-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-lg bg-classic-primary py-3 text-sm font-semibold text-white shadow-md hover:bg-classic-primary-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isPending ? "Sending..." : "Request a Call Back"}
                  </button>

                  <p className="text-center text-[11px] leading-relaxed text-gray-500">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-classic-primary hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}