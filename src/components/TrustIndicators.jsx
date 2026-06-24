import React from "react";
import { Award, UserCheck, MapPin } from "lucide-react";

export default function TrustIndicators() {
  const stats = [
    {
      icon: Award,
      value: "15,000+",
      label: "Premium Stays Completed",
      description: "Curating high-end residential experiences globally."
    },
    {
      icon: UserCheck,
      value: "98.4%",
      label: "Guest Satisfaction Rate",
      description: "Based on our post-checkout experience audits."
    },
    {
      icon: MapPin,
      value: "120+",
      label: "Vetted Micro-Destinations",
      description: "From active beach fronts to quiet winter peaks."
    }
  ];

  return (
    <section className="w-full bg-canvas py-16 md:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Laurel Wreath Rating Display Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 bg-surface-soft border border-hairline-soft rounded-airbnb-xl shadow-sm hover:shadow-airbnb transition-all duration-300">
          <span className="text-[12px] font-bold text-muted uppercase tracking-[0.15em] mb-4">
            Guest Rated Excellent
          </span>

          <div className="flex items-center gap-6">
            {/* Left Laurel Wreath SVG */}
            <svg 
              className="w-12 h-16 text-ink shrink-0 opacity-80" 
              viewBox="0 0 24 32" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path d="M4 8C4 8 2 11 2 14C2 17 3.5 20 6 22" strokeLinecap="round" />
              <path d="M4 8C5.5 9 6.5 10.5 6.5 12" strokeLinecap="round" />
              <path d="M2 13C3.5 13.5 5 14.5 5 16" strokeLinecap="round" />
              <path d="M2 18C3.5 18 4.5 19 5.5 20.5" strokeLinecap="round" />
              <circle cx="6.5" cy="12" r="1.5" fill="currentColor" />
              <circle cx="5" cy="16" r="1.5" fill="currentColor" />
              <circle cx="5.5" cy="20.5" r="1.5" fill="currentColor" />
              <path d="M3 26C5 25.5 7 24.5 8 22.5" strokeLinecap="round" />
              <circle cx="8" cy="22.5" r="1.5" fill="currentColor" />
            </svg>

            {/* Rating text */}
            <div className="flex flex-col">
              <span className="text-[64px] font-extrabold text-ink leading-none tracking-[-1px]">
                4.92
              </span>
              <span className="text-[13px] font-bold text-ink mt-2">
                OUT OF 5 STARS
              </span>
            </div>

            {/* Right Laurel Wreath SVG */}
            <svg 
              className="w-12 h-16 text-ink shrink-0 opacity-80 scale-x-[-1]" 
              viewBox="0 0 24 32" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path d="M4 8C4 8 2 11 2 14C2 17 3.5 20 6 22" strokeLinecap="round" />
              <path d="M4 8C5.5 9 6.5 10.5 6.5 12" strokeLinecap="round" />
              <path d="M2 13C3.5 13.5 5 14.5 5 16" strokeLinecap="round" />
              <path d="M2 18C3.5 18 4.5 19 5.5 20.5" strokeLinecap="round" />
              <circle cx="6.5" cy="12" r="1.5" fill="currentColor" />
              <circle cx="5" cy="16" r="1.5" fill="currentColor" />
              <circle cx="5.5" cy="20.5" r="1.5" fill="currentColor" />
              <path d="M3 26C5 25.5 7 24.5 8 22.5" strokeLinecap="round" />
              <circle cx="8" cy="22.5" r="1.5" fill="currentColor" />
            </svg>
          </div>

          <p className="text-muted text-[13px] font-medium mt-6 max-w-xs leading-relaxed">
            Consistently rated as one of the most reliable and premium property agencies in consumer travel.
          </p>
        </div>

        {/* Right Column: Other Stats indicators */}
        <div className="lg:col-span-7 flex flex-col gap-8 justify-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-4 p-4 hover:bg-surface-soft/60 rounded-airbnb-md transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-surface-strong flex items-center justify-center text-ink shrink-0 border border-hairline-soft">
                  <Icon className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-[24px] font-bold text-ink leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-[14px] font-semibold text-ink">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-muted text-[14px] mt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
