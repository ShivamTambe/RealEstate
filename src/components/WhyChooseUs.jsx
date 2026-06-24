import React from "react";
import { Sparkles, Coins, HeartHandshake, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Sparkles,
      iconColor: "text-amber-500",
      title: "Curated Excellence",
      description: "Every single home in our portfolio is hand-selected and rigorously inspected to ensure it meets our strict design, comfort, and architectural standards."
    },
    {
      icon: Coins,
      iconColor: "text-emerald-500",
      title: "Transparent Pricing",
      description: "Enjoy flat-rate pricing with zero hidden fees. We provide complete and clear fee breakdowns from the moment you search to when you finalize bookings."
    },
    {
      icon: HeartHandshake,
      iconColor: "text-primary",
      title: "Unmatched Service",
      description: "Our dedicated local hosts and 24/7 concierge support are always available to make your stay seamless, comfortable, and memorable."
    },
    {
      icon: ShieldCheck,
      iconColor: "text-blue-500",
      title: "Seamless Experience",
      description: "From fully integrated smart locks to custom check-in guidelines, our digital guest app handles everything in a single, intuitive interface."
    }
  ];

  return (
    <section className="w-full bg-surface-soft py-16 md:py-24 border-y border-hairline">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="text-center md:text-left max-w-2xl mb-12 md:mb-16">
          <span className="text-[12px] font-bold text-primary tracking-[0.2em] uppercase">
            The HariOm Difference
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold text-ink leading-tight mt-3">
            Rethinking the real estate experience. Inspired by hospitality.
          </h2>
          <p className="text-muted text-[16px] mt-4 leading-relaxed">
            We combine high-end property curation with top-tier technology and hospitality to provide a living experience that feels natural and premium.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="group flex flex-col items-start p-6 bg-canvas border border-hairline rounded-airbnb-md shadow-sm hover:shadow-airbnb hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-airbnb-sm bg-surface-soft flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200 border border-hairline-soft ${pillar.iconColor}`}>
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-[18px] font-semibold text-ink mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted text-[14px] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
