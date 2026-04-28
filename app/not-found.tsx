import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-classic-bg">
      <div className="text-center px-6">
        <div className="text-9xl font-classic font-bold text-classic-gold mb-4 animate-fade-in">
          404
        </div>
        <h1 className="font-classic text-4xl font-bold text-classic-primary mb-4 animate-slide-up">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto animate-slide-up">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find the right office space instead.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-classic-primary text-white font-semibold hover:bg-classic-primary-light transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/listings"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-classic-primary text-classic-primary font-semibold hover:bg-classic-primary hover:text-white transition-all duration-300"
          >
            View Listings
          </Link>
        </div>
      </div>
    </section>
  );
}