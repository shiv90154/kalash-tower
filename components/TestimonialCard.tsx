interface TestimonialProps {
  quote: string;
  name: string;
  company: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  name,
  company,
  delay = 0,
}: TestimonialProps) {
  return (
    <div
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Quote Icon */}
      <div className="text-classic-gold text-5xl font-classic mb-4">
        &ldquo;
      </div>
      <p className="text-gray-600 italic mb-6 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-classic-primary flex items-center justify-center text-white font-semibold text-sm">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-semibold text-classic-primary">{name}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
}