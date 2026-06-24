import React from "react";
import CategoryStrip from "./CategoryStrip";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties({ 
  properties, 
  activeCategory, 
  setActiveCategory, 
  onSelectProperty 
}) {
  return (
    <section className="w-full bg-canvas py-6">
      {/* Category Strip */}
      <CategoryStrip 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Grid Container */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        {properties.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-hairline rounded-airbnb-xl bg-surface-soft/40 px-4">
            <h3 className="text-lg font-bold text-ink mb-1">No homes match your search</h3>
            <p className="text-muted text-[14px] max-w-md">
              Try changing or removing some of your filters or searching for another region.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
              }}
              className="mt-6 px-5 py-2.5 bg-ink hover:bg-body text-on-dark text-[14px] font-semibold rounded-airbnb-sm cursor-pointer transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div 
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 animate-[grid-fade_0.4s_ease-out_forwards]"
          >
            {properties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onSelect={onSelectProperty} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
