import React, { useState } from "react";
import { Search, MapPin, Calendar, Minus, Plus } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [activeSegment, setActiveSegment] = useState(null);
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });

  const popularDestinations = [
    "Malibu, California",
    "Positano, Italy",
    "Beverly Hills, California",
    "Lake Como, Italy",
    "New York City, New York",
    "Kyoto, Japan",
    "Aspen, Colorado",
    "Lofoten, Norway"
  ];

  const handleSearchSubmit = (e) => {
    e?.stopPropagation();
    setActiveSegment(null);
    onSearch({
      location,
      checkIn,
      checkOut,
      totalGuests: guests.adults + guests.children + guests.infants
    });
  };

  const handleIncrement = (type) => {
    setGuests((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleDecrement = (type) => {
    if (type === "adults" && guests.adults <= 1) return;
    if (guests[type] <= 0) return;
    setGuests((prev) => ({ ...prev, [type]: prev[type] - 1 }));
  };

  const totalGuests = guests.adults + guests.children + guests.infants;

  return (
    <div className="relative w-full max-w-[850px] mx-auto px-4">
      
      {/* Compact Mobile Search Pill (hidden on desktop, visible on mobile) */}
      <button
        onClick={() => setActiveSegment("where")}
        className="flex md:hidden items-center justify-between w-full h-[56px] bg-canvas border border-hairline rounded-full px-4 shadow-sm hover:shadow-airbnb transition-all duration-200 cursor-pointer text-left focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Search className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-[13px] font-bold text-ink">Where to?</div>
            <div className="text-[11px] text-muted font-semibold">
              {location ? location.split(",")[0] : "Anywhere"} · {checkIn ? `${checkIn}` : "Any week"} · {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}` : "Add guests"}
            </div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center text-ink shrink-0 bg-surface-soft">
          <MapPin className="w-3.5 h-3.5" />
        </div>
      </button>

      {/* Full Desktop Search Pill (visible on desktop, hidden on mobile) */}
      <div 
        className={`hidden md:flex h-[66px] w-full bg-canvas border border-hairline rounded-full items-center shadow-sm hover:shadow-airbnb transition-all duration-200 ${
          activeSegment ? "bg-surface-soft border-hairline-soft" : ""
        }`}
      >
        {/* WHERE segment */}
        <button
          onClick={() => setActiveSegment(activeSegment === "where" ? null : "where")}
          className={`flex-1 text-left h-full px-8 rounded-full flex flex-col justify-center cursor-pointer transition-colors duration-150 ${
            activeSegment === "where" ? "bg-canvas shadow-md" : "hover:bg-surface-strong/40"
          }`}
        >
          <span className="text-[12px] font-bold text-ink uppercase tracking-wide">Where</span>
          <span className="text-[14px] text-muted truncate">
            {location || "Search destinations"}
          </span>
        </button>

        {/* Divider 1 */}
        <div className="h-8 w-[1px] bg-hairline" />

        {/* WHEN segment */}
        <button
          onClick={() => setActiveSegment(activeSegment === "when" ? null : "when")}
          className={`flex-1 text-left h-full px-8 rounded-full flex flex-col justify-center cursor-pointer transition-colors duration-150 ${
            activeSegment === "when" ? "bg-canvas shadow-md" : "hover:bg-surface-strong/40"
          }`}
        >
          <span className="text-[12px] font-bold text-ink uppercase tracking-wide">When</span>
          <span className="text-[14px] text-muted truncate">
            {checkIn && checkOut
              ? `${checkIn} - ${checkOut}`
              : "Add dates"}
          </span>
        </button>

        {/* Divider 2 */}
        <div className="h-8 w-[1px] bg-hairline" />

        {/* WHO segment */}
        <button
          onClick={() => setActiveSegment(activeSegment === "who" ? null : "who")}
          className={`flex-1 text-left h-full px-8 rounded-full flex flex-col justify-center cursor-pointer transition-colors duration-150 ${
            activeSegment === "who" ? "bg-canvas shadow-md" : "hover:bg-surface-strong/40"
          }`}
        >
          <span className="text-[12px] font-bold text-ink uppercase tracking-wide">Who</span>
          <span className="text-[14px] text-muted truncate">
            {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}` : "Add guests"}
          </span>
        </button>

        {/* SEARCH ORB */}
        <div className="pr-2.5">
          <button
            onClick={handleSearchSubmit}
            className="w-12 h-12 rounded-full bg-primary hover:bg-primary-active text-on-primary flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer animate-pulse-glow"
            aria-label="Search"
          >
            <Search className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* DROPDOWN OVERLAYS */}
      {activeSegment && (
        <>
          {/* Backdrop to close dropdown */}
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => setActiveSegment(null)}
          />

          <div className="absolute left-4 right-4 md:left-auto md:right-auto md:w-[480px] mt-3 bg-canvas border border-hairline rounded-airbnb-xl shadow-airbnb p-6 z-40 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* WHERE OVERLAY */}
            {activeSegment === "where" && (
              <div>
                <h4 className="text-[14px] font-bold text-ink mb-3">Popular Destinations</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => { setLocation(""); setActiveSegment("when"); }}
                    className="flex items-center gap-3 p-3 rounded-airbnb-sm hover:bg-surface-soft transition-colors cursor-pointer text-left w-full"
                  >
                    <div className="w-10 h-10 rounded-airbnb-sm bg-surface-strong flex items-center justify-center text-ink border border-hairline-soft">
                      <MapPin className="w-5 h-5 text-muted" />
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-ink">All Destinations</div>
                      <div className="text-[12px] text-muted">Explore our full portfolio</div>
                    </div>
                  </button>
                  {popularDestinations.map((dest) => (
                    <button
                      key={dest}
                      onClick={() => { setLocation(dest); setActiveSegment("when"); }}
                      className="flex items-center gap-3 p-3 rounded-airbnb-sm hover:bg-surface-soft transition-colors cursor-pointer text-left w-full"
                    >
                      <div className="w-10 h-10 rounded-airbnb-sm bg-surface-strong flex items-center justify-center text-ink border border-hairline-soft">
                        <MapPin className="w-5 h-5 text-muted" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-ink truncate max-w-[150px]">{dest.split(",")[0]}</div>
                        <div className="text-[12px] text-muted truncate max-w-[150px]">{dest.split(",")[1]}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* WHEN OVERLAY */}
            {activeSegment === "when" && (
              <div>
                <h4 className="text-[14px] font-bold text-ink mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> Select Reservation Dates
                </h4>
                <div className="space-y-4">
                  {/* Quick Select Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => { setCheckIn("Jul 10"); setCheckOut("Jul 17"); setActiveSegment("who"); }}
                      className="flex-1 py-2 px-3 border border-hairline hover:border-ink rounded-airbnb-sm text-[13px] font-medium text-ink bg-canvas cursor-pointer hover:bg-surface-soft text-center"
                    >
                      Next Week (Jul 10 - Jul 17)
                    </button>
                    <button
                      onClick={() => { setCheckIn("Aug 12"); setCheckOut("Aug 19"); setActiveSegment("who"); }}
                      className="flex-1 py-2 px-3 border border-hairline hover:border-ink rounded-airbnb-sm text-[13px] font-medium text-ink bg-canvas cursor-pointer hover:bg-surface-soft text-center"
                    >
                      Next Month (Aug 12 - Aug 19)
                    </button>
                  </div>
                  
                  {/* Calendar Grid representation */}
                  <div className="border border-hairline-soft rounded-airbnb-md p-4 bg-surface-soft/30">
                    <div className="text-center font-semibold text-[14px] text-ink mb-2">July 2026</div>
                    <div className="grid grid-cols-7 gap-1 text-center text-[12px] no-scrollbar overflow-x-auto">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                        <div key={d} className="font-bold text-muted py-1">{d}</div>
                      ))}
                      {/* Blank spots for offset */}
                      {Array.from({ length: 3 }).map((_, i) => <div key={`empty-${i}`} />)}
                      {/* Day spots */}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => {
                        const dayStr = `Jul ${day}`;
                        const isSelected = checkIn === dayStr || checkOut === dayStr;
                        const isInRange = checkIn && checkOut && day > parseInt(checkIn.split(" ")[1]) && day < parseInt(checkOut.split(" ")[1]);

                        return (
                          <button
                            key={day}
                            onClick={() => {
                              if (!checkIn || (checkIn && checkOut)) {
                                setCheckIn(dayStr);
                                setCheckOut(null);
                              } else {
                                const inDay = parseInt(checkIn.split(" ")[1]);
                                if (day < inDay) {
                                  setCheckIn(dayStr);
                                } else {
                                  setCheckOut(dayStr);
                                  setActiveSegment("who");
                                }
                              }
                            }}
                            className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-ink text-on-dark font-semibold"
                                : isInRange
                                ? "bg-surface-strong text-ink font-semibold"
                                : "hover:bg-surface-strong/60 text-ink"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Selected indicator */}
                  {checkIn && (
                    <div className="flex justify-between items-center text-[13px] text-ink font-semibold">
                      <span>Check-in: {checkIn}</span>
                      {checkOut && <span>Check-out: {checkOut}</span>}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* WHO OVERLAY */}
            {activeSegment === "who" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-[14px] font-bold text-ink">Adults</h5>
                    <p className="text-[12px] text-muted">Ages 13 or above</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDecrement("adults")}
                      disabled={guests.adults <= 1}
                      className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:border-ink disabled:opacity-30 disabled:hover:border-hairline cursor-pointer text-ink font-semibold"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-[15px] font-semibold text-ink w-4 text-center">{guests.adults}</span>
                    <button
                      onClick={() => handleIncrement("adults")}
                      className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:border-ink cursor-pointer text-ink font-semibold"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="h-[1px] bg-hairline" />

                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-[14px] font-bold text-ink">Children</h5>
                    <p className="text-[12px] text-muted">Ages 2 – 12</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDecrement("children")}
                      className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:border-ink disabled:opacity-30 cursor-pointer text-ink font-semibold"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-[15px] font-semibold text-ink w-4 text-center">{guests.children}</span>
                    <button
                      onClick={() => handleIncrement("children")}
                      className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:border-ink cursor-pointer text-ink font-semibold"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="h-[1px] bg-hairline" />

                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-[14px] font-bold text-ink">Infants</h5>
                    <p className="text-[12px] text-muted">Under 2</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDecrement("infants")}
                      className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:border-ink disabled:opacity-30 cursor-pointer text-ink font-semibold"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-[15px] font-semibold text-ink w-4 text-center">{guests.infants}</span>
                    <button
                      onClick={() => handleIncrement("infants")}
                      className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:border-ink cursor-pointer text-ink font-semibold"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleSearchSubmit}
                  className="w-full h-11 bg-primary hover:bg-primary-active text-on-primary font-semibold rounded-airbnb-sm transition-colors text-[14px] cursor-pointer mt-2"
                >
                  Search Properties
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
