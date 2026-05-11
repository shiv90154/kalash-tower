import Image from "next/image";
import { Target, Gem, Handshake } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Natraj Properties – a legacy of providing premium office spaces in Mohali and Chandigarh for over 15 years.",
  alternates: {
    canonical: "/about",
  },
};

const teamMembers = [
  {
    name: "Rajesh Natraj",
    role: "Founder & CEO",
    bio: "With over 20 years in commercial real estate, Rajesh founded Natraj Properties with a vision to provide distinguished workspaces.",
  },
  {
    name: "Priya Kapoor",
    role: "Head of Operations",
    bio: "Priya ensures every property meets our exacting standards for quality, location, and client satisfaction.",
  },
  {
    name: "Amit Sharma",
    role: "Client Relations",
    bio: "Amit works closely with each client to understand their needs and find the perfect office space.",
  },
];

export default function AboutPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">
                Our Story
              </span>
              <h1 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-2 mb-6">
                A Legacy of Excellence
              </h1>
              <p className="text-gray-600 leading-relaxed mb-4">
                For over 15 years, Natraj Properties has been synonymous with
                distinguished commercial real estate in Mohali and Chandigarh.
                We believe an office should be more than a workspace – it should
                inspire confidence and reflect timeless values.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From IT parks to boutique business centres, every property in
                our portfolio is selected for its architectural character, prime
                location, and first‑class amenities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-classic-bg p-6 rounded-lg text-center">
                  <span className="text-classic-gold text-4xl font-classic font-bold">
                    50+
                  </span>
                  <p className="text-sm text-gray-500 mt-2">Offices Leased</p>
                </div>
                <div className="bg-classic-bg p-6 rounded-lg text-center">
                  <span className="text-classic-gold text-4xl font-classic font-bold">
                    100%
                  </span>
                  <p className="text-sm text-gray-500 mt-2">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <Image
                src="/team.avif"
                alt="Natraj Properties team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-classic-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">
              Our Values
            </span>
            <h2 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-2 mb-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Target/>,
                title: "Integrity",
                desc: "Honest and transparent dealings in every transaction.",
              },
              {
                icon: <Gem/>,
                title: "Quality",
                desc: "Only the finest commercial properties that meet our high standards.",
              },
              {
                icon: <Handshake/>,
                title: "Commitment",
                desc: "Dedicated to finding the perfect space for your business.",
              },
            ].map((value, idx) => (
           <div
  key={idx}
  className="group relative overflow-hidden rounded-3xl border border-classic-gold/30 bg-white/80 backdrop-blur-xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-slide-up"
  style={{ animationDelay: `${idx * 100}ms` }}
>
  {/* Glow Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-classic-gold/5 via-transparent to-classic-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

  <div className="relative z-10 flex items-start gap-5">
    
    {/* Icon */}
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-classic-bg text-classic-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
      <div className="text-3xl">
        {value.icon}
      </div>
    </div>

    {/* Content */}
    <div className="flex-1">
      <h3 className="font-classic text-2xl font-bold text-classic-primary mb-2">
        {value.title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {value.desc}
      </p>
    </div>
  </div>

  {/* Bottom Accent */}
  <div className="absolute bottom-0 left-0 h-1 w-0 bg-classic-gold transition-all duration-500 group-hover:w-full" />
</div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-classic-gold text-sm font-semibold tracking-widest uppercase">
              Our Team
            </span>
            <h2 className="font-classic text-4xl md:text-5xl font-bold text-classic-primary mt-2 mb-4">
              Meet the Experts
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-classic-primary flex items-center justify-center text-white text-2xl font-classic font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-classic text-xl font-semibold text-classic-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-classic-gold text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}