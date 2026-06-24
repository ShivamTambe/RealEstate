import React, { useRef, useState, useEffect } from "react";
import { Waves, Flame, Palette, Trees, TreePine, ChevronLeft, ChevronRight, Castle } from "lucide-react";

export default function CategoryStrip({ activeCategory, setActiveCategory }) {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categories = [
    { id: "all", label: "All Homes", icon: Trees },
    { id: "beachfront", label: "Beachfront", icon: Waves },
    { id: "mansions", label: "Mansions", icon: Castle },
    { id: "trending", label: "Trending", icon: Flame },
    { id: "design", label: "Design", icon: Palette },
    { id: "countryside", label: "Countryside", icon: Trees },
    { id: "cabins", label: "Cabins", icon: TreePine },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      // Run once on load
      checkScroll();
      // Also run when window resizes
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 my-6 flex items-center">
      {/* Left Scroll Button */}
      {showLeftArrow && (
        <div className="absolute left-2 sm:left-6 md:left-10 z-10 bg-gradient-to-r from-canvas via-canvas to-transparent pr-8">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full border border-hairline bg-canvas flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer text-ink"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-ink" />
          </button>
        </div>
      )}

      {/* Categories Scroll Area */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth w-full py-2"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-2 pb-2.5 border-b-2 transition-all duration-200 cursor-pointer min-w-[70px] ${
                isActive
                  ? "border-ink text-ink font-semibold opacity-100"
                  : "border-transparent text-muted hover:text-ink hover:border-hairline opacity-75 hover:opacity-100"
              }`}
            >
              <Icon className="w-6 h-6 stroke-[1.8]" />
              <span className="text-[12px] whitespace-nowrap tracking-tight">
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Right Scroll Button */}
      {showRightArrow && (
        <div className="absolute right-2 sm:right-6 md:right-10 z-10 bg-gradient-to-l from-canvas via-canvas to-transparent pl-8">
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full border border-hairline bg-canvas flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer text-ink"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-ink" />
          </button>
        </div>
      )}
    </div>
  );
}
