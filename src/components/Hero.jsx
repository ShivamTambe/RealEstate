import React from "react";
import SearchBar from "./SearchBar";

export default function Hero({ onSearch }) {
  return (
    <section className="w-full bg-canvas pt-6 pb-12 md:py-16 overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Typographic Header & Search Bar */}
        <div className="lg:col-span-7 text-left space-y-5 lg:pr-6 z-10">
          <span className="text-[12px] font-bold text-primary tracking-[0.25em] uppercase">
            Introducing HariOm Curation
          </span>
          
          <h1 className="text-[32px] sm:text-[44px] md:text-[52px] font-extrabold text-ink leading-[1.15] tracking-[-1.5px]">
            Find your next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-active to-[#460479]">
              architectural sanctuary.
            </span>
          </h1>
          
          <p className="text-muted text-[15px] md:text-[17px] max-w-xl leading-relaxed">
            A highly curated portfolio of design-led residential properties, architectural masterpieces, and modern retreats around the globe.
          </p>

          {/* Search Bar - Nested locally */}
          <div className="pt-2 w-full">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>

        {/* Right Column: Premium Image Showcase (Overlapping frames inspired by Apple collage layouts) */}
        <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
          
          {/* Main Large Image (Cantilevered glass villa) */}
          <div className="absolute w-[70%] sm:w-[75%] h-[75%] sm:h-[80%] left-0 top-0 rounded-airbnb-lg overflow-hidden shadow-airbnb border border-hairline-soft hover:scale-102 hover:z-20 transition-all duration-500 animate-float">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
              alt="Luxury cantilevered glass villa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary Overlapping Image (Modern pool terrace) */}
          <div className="absolute w-[50%] sm:w-[55%] h-[55%] sm:h-[60%] right-2 bottom-2 sm:bottom-4 rounded-airbnb-lg overflow-hidden shadow-airbnb border border-hairline-soft hover:scale-102 hover:z-20 transition-all duration-500 animate-float-delayed">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
              alt="Modern swimming pool deck"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Floating badge */}
          <div className="absolute bottom-16 left-8 bg-canvas border border-hairline text-ink py-2.5 px-4 rounded-airbnb-sm shadow-airbnb text-[12px] font-bold z-10 flex items-center gap-2 select-none animate-bounce duration-1000">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping" />
            <span>12 New Properties Vetted Today</span>
          </div>

        </div>

      </div>
    </section>
  );
}
