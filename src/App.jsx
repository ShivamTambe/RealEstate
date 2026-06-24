import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyChooseUs from "./components/WhyChooseUs";
import TrustIndicators from "./components/TrustIndicators";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import PropertyDetailModal from "./components/PropertyDetailModal";

import { properties } from "./data/properties";

function App() {
  const [activeTab, setActiveTab] = useState("homes");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  // 1. Initialize dark mode to true (default dark mode)
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // 2. Pre-loader State
  const [isLoading, setIsLoading] = useState(true);

  // Set html class on mount for dark mode and trigger loader
  useEffect(() => {
    // Apply default dark mode
    document.documentElement.classList.add("dark");
    
    // Simulate loading time
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(loaderTimer);
  }, []);

  // 3. Scroll Reveal intersection observer
  useEffect(() => {
    if (isLoading) return;

    // Timeout to make sure DOM is fully rendered after loading screen hides
    const observerTimer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              // Stop observing once revealed to keep layout performant
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -40px 0px"
        }
      );

      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(observerTimer);
  }, [isLoading, activeCategory, searchCriteria]);

  const toggleDarkMode = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
  };

  // Derive filtered properties dynamically inside render
  const filteredProperties = properties.filter((property) => {
    if (activeCategory !== "all" && property.category !== activeCategory) {
      return false;
    }

    if (searchCriteria) {
      if (
        searchCriteria.location &&
        !property.location.toLowerCase().includes(searchCriteria.location.toLowerCase())
      ) {
        return false;
      }

      if (searchCriteria.totalGuests) {
        const capacityMatch = property.details.match(/^(\d+)\s+guest/);
        if (capacityMatch) {
          const maxGuests = parseInt(capacityMatch[1], 10);
          if (maxGuests < searchCriteria.totalGuests) {
            return false;
          }
        }
      }
    }

    return true;
  });

  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
  };

  const handleSelectProperty = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  // Premium Pre-loader Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#090a0f] flex flex-col items-center justify-center select-none transition-opacity duration-300">
        <div className="flex flex-col items-center max-w-xs w-full px-6 text-center space-y-6">
          {/* Logo with pulsing shadow */}
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl animate-pulse">
            <img
              src="https://catalog.wlimg.com/3/628115/other-images/64524.jpg"
              alt="HariOm Logo"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Title */}
          <div className="space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
            <h2 className="text-[20px] font-bold text-white tracking-wide">HariOm Estate</h2>
            <p className="text-[10px] text-primary font-bold tracking-[0.25em] uppercase">Luxury Curation</p>
          </div>

          {/* Minimalist Loader line */}
          <div className="w-32 h-[2px] bg-zinc-800 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-primary rounded-full animate-[loader-bar_1.3s_ease-out_forwards]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-canvas animate-in fade-in duration-500">
      {/* 1. Sticky Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section with Search bar */}
        <div className="reveal-on-scroll">
          <Hero onSearch={handleSearch} />
        </div>

        {/* 3. Featured Properties Grid Section (with Category filtering) */}
        <div className="reveal-on-scroll">
          <FeaturedProperties
            properties={filteredProperties}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            onSelectProperty={handleSelectProperty}
          />
        </div>

        {/* 4. Why Choose Us (Value propositions) */}
        <div className="reveal-on-scroll">
          <WhyChooseUs />
        </div>

        {/* 5. Trust Indicators (Ratings and stats) */}
        <div className="reveal-on-scroll">
          <TrustIndicators />
        </div>

        {/* 6. Contact and Call-to-Action (WhatsApp) */}
        <div className="reveal-on-scroll">
          <CallToAction />
        </div>
      </main>

      {/* 7. Modern Flat Footer */}
      <Footer />

      {/* 8. Listing Details Modal Overlay */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
