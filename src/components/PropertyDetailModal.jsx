import React, { useState } from "react";
import { X, Star, Heart, Share, Shield, ChevronLeft, ChevronRight, Check, Calendar, Info, MessageSquare } from "lucide-react";

export default function PropertyDetailModal({ property, onClose }) {
  const [isSaved, setIsSaved] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [guestsCount, setGuestsCount] = useState(2);
  const dateRange = { checkIn: "Jul 10", checkOut: "Jul 17", nights: 7 };
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  if (!property) return null;

  // Pricing calculations
  const baseTotal = property.price * dateRange.nights;
  const serviceFee = Math.round(baseTotal * 0.12);
  const occupancyTax = Math.round(baseTotal * 0.08);
  const totalAmount = baseTotal + serviceFee + occupancyTax;

  const handlePrevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImgIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareTooltip(true);
    setTimeout(() => setShowShareTooltip(false), 2000);
  };

  // Mock Reviews
  const reviews = [
    {
      author: "Michael Green",
      date: "May 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
      content: "An absolutely stunning architectural marvel. The views of the ocean were breathtaking and the interior design felt incredibly luxurious but warm. Highly recommend!"
    },
    {
      author: "Sophia Loren",
      date: "April 2026",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
      content: "The host was wonderful and the property was immaculate. Everything from the bedding to the kitchen amenities was top notch. A truly premium experience."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-scrim/50 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 md:p-6">
      {/* Modal Container */}
      <div className="relative w-full max-w-[1080px] h-full sm:h-auto sm:max-h-[92vh] bg-canvas sm:rounded-airbnb-xl shadow-airbnb overflow-y-auto flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Sticky Header */}
        <div className="sticky top-0 bg-canvas border-b border-hairline px-4 sm:px-6 py-3.5 flex items-center justify-between z-20 shrink-0">
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-strong hover:bg-hairline text-ink flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            {/* Share Button */}
            <div className="relative">
              <button 
                onClick={handleShareClick}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-surface-soft text-[14px] font-semibold text-ink cursor-pointer transition-colors"
              >
                <Share className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
              {showShareTooltip && (
                <div className="absolute right-0 bottom-full mb-2 bg-ink text-on-dark text-[12px] px-3 py-1 rounded-airbnb-xs whitespace-nowrap shadow-md">
                  Link copied!
                </div>
              )}
            </div>

            {/* Favorite Button */}
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-surface-soft text-[14px] font-semibold text-ink cursor-pointer transition-colors"
            >
              <Heart className={`w-4 h-4 ${isSaved ? "fill-primary stroke-primary text-primary" : "text-ink"}`} />
              <span className="hidden sm:inline">{isSaved ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 overflow-y-auto flex-1 pb-32 sm:pb-8">
          
          {/* Headline & Breadcrumbs */}
          <div className="text-left space-y-2">
            <h1 className="text-[22px] md:text-[28px] font-bold text-ink leading-tight">
              {property.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-[14px] text-muted">
              <div className="flex items-center gap-1 font-semibold text-ink">
                <Star className="w-4 h-4 fill-ink stroke-ink" />
                <span>{property.rating.toFixed(2)} · {property.reviewsCount} reviews</span>
              </div>
              <span>•</span>
              <span className="underline hover:text-ink cursor-pointer font-medium">{property.location}</span>
            </div>
          </div>

          {/* Photo Carousel / Gallery Grid */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-airbnb-md bg-surface-strong">
            <img 
              src={property.images[currentImgIndex]} 
              alt={property.title} 
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            {/* Carousel Navigation */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-canvas/90 border border-hairline flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all text-ink z-10 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-canvas/90 border border-hairline flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all text-ink z-10 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Floating Index indicator */}
            <div className="absolute bottom-4 right-4 bg-scrim/75 text-on-dark text-[12px] font-semibold px-3 py-1 rounded-airbnb-xs select-none">
              {currentImgIndex + 1} / {property.images.length}
            </div>
          </div>

          {/* 2-Column Details Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            
            {/* Left Column (64% Width on Large Screens) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Host overview row */}
              <div className="flex items-center justify-between pb-6 border-b border-hairline">
                <div>
                  <h2 className="text-[20px] font-semibold text-ink">
                    Entire home hosted by {property.host.name}
                  </h2>
                  <p className="text-[14px] text-muted mt-1 font-medium">
                    {property.details}
                  </p>
                </div>
                <div className="relative shrink-0">
                  <img 
                    src={property.host.image} 
                    alt={property.host.name}
                    className="w-12 h-12 rounded-full object-cover border border-hairline"
                  />
                  {property.host.superhost && (
                    <span className="absolute -bottom-1 -right-1 bg-primary text-on-primary text-[8px] font-bold px-1.5 py-0.5 rounded-full border border-canvas shadow-sm">
                      SH
                    </span>
                  )}
                </div>
              </div>

              {/* Brand Perks / Highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 flex items-center justify-center text-ink shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-ink">Superhost</h4>
                    <p className="text-[13px] text-muted mt-0.5">
                      {property.host.name} is experienced, highly rated, and committed to providing great stays.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 flex items-center justify-center text-ink shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-ink">Free cancellation for 48 hours</h4>
                    <p className="text-[13px] text-muted mt-0.5">
                      Cancel within 48 hours of booking to get a full refund.
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-hairline" />

              {/* Property Description */}
              <div className="space-y-4">
                <h3 className="text-[18px] font-semibold text-ink">About this space</h3>
                <p className="text-body text-[15px] leading-relaxed">
                  {property.description}
                </p>
                <p className="text-body text-[15px] leading-relaxed">
                  This custom architectural build offers a highly curated blend of premium building materials, expansive layouts, and dynamic landscape views. Meticulously designed for privacy and luxury, this is a quintessential retreat for discerning guests.
                </p>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-hairline" />

              {/* Amenity Row Component */}
              <div className="space-y-4">
                <h3 className="text-[18px] font-semibold text-ink">What this place offers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3.5 text-ink py-1">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 stroke-[2.5]" />
                      <span className="text-[15px] font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-hairline" />

              {/* Laurel Wreath Rating Display & Reviews Grid */}
              <div className="space-y-6">
                
                {/* rating-display-card */}
                <div className="flex items-center justify-between flex-wrap gap-4 pb-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-10 text-ink" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 8C4 8 2 11 2 14C2 17 3.5 20 6 22" strokeLinecap="round" />
                      <circle cx="6.5" cy="12" r="1.5" fill="currentColor" />
                      <circle cx="5" cy="16" r="1.5" fill="currentColor" />
                      <circle cx="5.5" cy="20.5" r="1.5" fill="currentColor" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[36px] font-bold text-ink leading-none">{property.rating.toFixed(2)}</span>
                      <span className="text-[11px] font-bold text-muted uppercase tracking-wider mt-1">Guest Favorite Rating</span>
                    </div>
                    <svg className="w-8 h-10 text-ink scale-x-[-1]" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 8C4 8 2 11 2 14C2 17 3.5 20 6 22" strokeLinecap="round" />
                      <circle cx="6.5" cy="12" r="1.5" fill="currentColor" />
                      <circle cx="5" cy="16" r="1.5" fill="currentColor" />
                      <circle cx="5.5" cy="20.5" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  
                  <div className="text-[14px] font-semibold text-ink">
                    Showing {property.reviewsCount} verified guest reviews
                  </div>
                </div>

                {/* reviews-card (2 column grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-hairline-soft">
                  {reviews.map((rev, idx) => (
                    <div key={idx} className="space-y-3 bg-surface-soft/40 p-5 rounded-airbnb-md border border-hairline-soft">
                      <div className="flex items-center gap-3">
                        <img 
                          src={rev.avatar} 
                          alt={rev.author} 
                          className="w-10 h-10 rounded-full object-cover border border-hairline"
                        />
                        <div className="text-left">
                          <h5 className="text-[14px] font-bold text-ink">{rev.author}</h5>
                          <p className="text-[12px] text-muted">{rev.date}</p>
                        </div>
                      </div>
                      <p className="text-body text-[14px] leading-relaxed text-left">
                        "{rev.content}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-hairline" />

              {/* Host Card */}
              <div className="p-6 bg-surface-soft border border-hairline-soft rounded-airbnb-md flex flex-col sm:flex-row items-center gap-6 justify-between text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <img 
                    src={property.host.image} 
                    alt={property.host.name} 
                    className="w-16 h-16 rounded-full object-cover border border-hairline"
                  />
                  <div>
                    <h4 className="text-[16px] font-bold text-ink">Hosted by {property.host.name}</h4>
                    <p className="text-[13px] text-muted mt-0.5">Joined in 2022 · Superhost · 99% Response Rate</p>
                  </div>
                </div>
                
                <button className="px-5 py-2.5 bg-canvas border border-ink text-ink font-semibold text-[13px] rounded-airbnb-sm hover:bg-surface-soft active:scale-98 transition-all cursor-pointer flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Host</span>
                </button>
              </div>

            </div>

            {/* Right Column: Sticky Reservation Rail (32% Width on Large Screens) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 border border-hairline bg-canvas rounded-airbnb-md p-6 shadow-airbnb space-y-6">
                
                {/* Nightly price header */}
                <div className="flex justify-between items-baseline text-ink">
                  <div>
                    <span className="text-[22px] font-bold">₹{property.price.toLocaleString()}</span>
                    <span className="text-muted text-[14px] font-normal"> / night</span>
                  </div>
                  <div className="flex items-center gap-1 text-[13px] font-bold">
                    <Star className="w-3.5 h-3.5 fill-ink stroke-ink" />
                    <span>{property.rating.toFixed(2)}</span>
                  </div>
                </div>

                {/* Date Inputs grid */}
                <div className="grid grid-cols-2 border border-hairline rounded-airbnb-sm overflow-hidden text-left">
                  <div className="p-3 border-r border-hairline">
                    <span className="text-[9px] font-bold text-ink uppercase tracking-wide">CHECK-IN</span>
                    <div className="text-[14px] font-semibold text-muted mt-0.5">{dateRange.checkIn}</div>
                  </div>
                  <div className="p-3">
                    <span className="text-[9px] font-bold text-ink uppercase tracking-wide">CHECKOUT</span>
                    <div className="text-[14px] font-semibold text-muted mt-0.5">{dateRange.checkOut}</div>
                  </div>
                  <div className="col-span-2 p-3 border-t border-hairline flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-ink uppercase tracking-wide block">GUESTS</span>
                      <span className="text-[14px] font-semibold text-ink mt-0.5">{guestsCount} guest{guestsCount > 1 ? "s" : ""}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button 
                        onClick={() => setGuestsCount(prev => Math.max(1, prev - 1))}
                        className="w-7 h-7 rounded-full border border-hairline flex items-center justify-center text-ink font-semibold hover:border-ink hover:bg-surface-soft cursor-pointer"
                      >
                        -
                      </button>
                      <button 
                        onClick={() => setGuestsCount(prev => Math.min(6, prev + 1))}
                        className="w-7 h-7 rounded-full border border-hairline flex items-center justify-center text-ink font-semibold hover:border-ink hover:bg-surface-soft cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Reserve primary CTA */}
                <button className="w-full py-3.5 bg-primary hover:bg-primary-active text-on-primary font-bold text-[14px] rounded-airbnb-sm shadow-sm transition-all hover:scale-101 active:scale-99 cursor-pointer">
                  Reserve Property
                </button>

                <p className="text-[12px] text-muted text-center font-medium">You won't be charged yet</p>

                {/* Fee breakdown stack */}
                <div className="space-y-3.5 pt-2 text-[14px]">
                  <div className="flex justify-between items-center text-muted">
                    <span className="underline hover:text-ink cursor-pointer">₹{property.price.toLocaleString()} x {dateRange.nights} nights</span>
                    <span className="text-ink">₹{baseTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-muted">
                    <span className="underline hover:text-ink cursor-pointer flex items-center gap-1">
                      HariOm Service fee <Info className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-ink">₹{serviceFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-muted">
                    <span className="underline hover:text-ink cursor-pointer">Occupancy taxes & fees</span>
                    <span className="text-ink">₹{occupancyTax.toLocaleString()}</span>
                  </div>
                  
                  <div className="h-[1px] bg-hairline my-2" />
                  
                  <div className="flex justify-between items-center text-ink font-bold text-[15px]">
                    <span>Total before taxes</span>
                    <span>₹{totalAmount.toLocaleString()}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Modal Sticky Bottom Bar - Mobile ONLY (< 1024px) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-canvas border-t border-hairline px-6 py-3.5 flex items-center justify-between z-30 shadow-lg">
          <div className="text-left">
            <div>
              <span className="text-[16px] font-bold text-ink">₹{property.price.toLocaleString()}</span>
              <span className="text-muted text-[12px]"> / night</span>
            </div>
            <span className="text-[12px] text-primary underline font-semibold mt-0.5 block">{dateRange.checkIn} – {dateRange.checkOut}</span>
          </div>
          
          <button className="px-6 py-3 bg-primary hover:bg-primary-active text-on-primary font-bold text-[13px] rounded-airbnb-sm shadow-sm transition-colors active:scale-99 cursor-pointer">
            Reserve
          </button>
        </div>

      </div>
    </div>
  );
}
