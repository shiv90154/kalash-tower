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
      className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-classic-gold/30 animate-fade-in-up relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Subtle gold accent top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-classic-gold to-classic-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

     

      {/* Quote Text */}
      <p className="text-classic-text-light italic mb-6 leading-relaxed text-sm md:text-base">
        {quote}
      </p>

      {/* Divider */}
      <div className="w-12 h-0.5 bg-classic-gold/40 mb-5"></div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-classic-primary flex items-center justify-center text-white font-semibold text-sm shadow-sm">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-classic-primary">{name}</p>
          <p className="text-xs text-classic-text-light/80">{company}</p>
        </div>
      </div>
    </div>
  );
}