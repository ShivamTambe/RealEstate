import React, { useState } from "react";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyCard({ property, onSelect }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const handleSaveToggle = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const isGuestFavorite = property.rating >= 4.95;

  return (
    <div
      onClick={() => onSelect(property)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col gap-3 cursor-pointer w-full text-left"
    >
      {/* Property Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-airbnb-md bg-surface-strong">
        <img
          src={property.images[currentImgIndex]}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
        />

        {/* Carousel Hover Arrows */}
        {isHovered && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-canvas/90 border border-hairline flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer text-ink z-10 hover:bg-canvas"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4.5 h-4.5 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-canvas/90 border border-hairline flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer text-ink z-10 hover:bg-canvas"
              aria-label="Next image"
            >
              <ChevronRight className="w-4.5 h-4.5 stroke-[2.5]" />
            </button>
          </>
        )}

        {/* Image Index Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {property.images.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-350 ${
                idx === currentImgIndex
                  ? "bg-canvas scale-110 opacity-100"
                  : "bg-canvas/50 scale-100 opacity-60"
              }`}
            />
          ))}
        </div>

        {/* Top Badges */}
        {isGuestFavorite && (
          <div className="absolute top-3 left-3 bg-canvas text-ink text-[11px] font-bold px-3 py-1.5 rounded-full shadow-airbnb border border-hairline-soft select-none tracking-tight">
            Guest favorite
          </div>
        )}

        {/* Heart Save Button */}
        <button
          onClick={handleSaveToggle}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-transparent transition-transform active:scale-80 cursor-pointer z-10"
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-6 h-6 stroke-canvas drop-shadow-md transition-all duration-200 ${
              isSaved ? "fill-primary stroke-primary scale-110" : "fill-scrim/30 stroke-canvas"
            }`}
          />
        </button>
      </div>

      {/* Property Details / Meta */}
      <div className="flex flex-col gap-1 text-[14px]">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-ink leading-tight truncate flex-1">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 font-medium">
            <Star className="w-3.5 h-3.5 fill-ink stroke-ink" />
            <span className="text-ink">{property.rating.toFixed(2)}</span>
          </div>
        </div>

        <p className="text-muted truncate font-normal leading-snug">
          {property.location}
        </p>

        <p className="text-muted text-[13px] font-normal leading-snug">
          Jul 10 – Jul 17 · {property.details.split("·")[0].trim()}
        </p>

        <div className="mt-1 flex items-baseline gap-1 text-ink">
          <span className="font-bold text-[15px]">₹{property.price.toLocaleString()}</span>
          <span className="text-muted text-[13px] font-normal">night</span>
        </div>
      </div>
    </div>
  );
}
