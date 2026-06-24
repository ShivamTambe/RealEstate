import React, { useState } from "react";
import { Globe, Menu, User, Home, Sparkles, ShieldCheck, Mail, Sun, Moon } from "lucide-react";

export default function Header({ activeTab, setActiveTab, isDarkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: "homes", label: "Homes", icon: Home },
    { id: "experiences", label: "Experiences", icon: Sparkles },
    { id: "services", label: "Services", icon: ShieldCheck },
  ];

  return (
    <div className="w-full flex flex-col sticky top-0 z-50">
      
      {/* Top Utility Contact Bar */}
      <div className="w-full bg-zinc-950 text-zinc-300 text-[12px] py-2 px-4 sm:px-8 md:px-12 flex justify-between items-center border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <a 
            href="mailto:hariomm3277@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span className="font-semibold tracking-wide">hariomm3277@gmail.com</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span className="text-[11px] font-bold tracking-widest uppercase opacity-75">
            Luxury Portfolios & Architectures
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="h-[80px] w-full border-b border-hairline bg-canvas px-4 sm:px-8 md:px-12 flex items-center justify-between shadow-sm">
        
        {/* Brand Logo & Wordmark */}
        <div 
          onClick={() => setActiveTab("homes")}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <img
            src="https://catalog.wlimg.com/3/628115/other-images/64524.jpg"
            alt="HariOm Logo"
            className="h-10 w-10 rounded-airbnb-sm object-cover shadow-sm border border-hairline-soft transition-transform group-hover:scale-105 duration-200"
          />
          <span className="text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-primary duration-200">
            {/* Responsive Brand Text */}
            <span className="sm:hidden">HariOm</span>
            <span className="hidden sm:inline">HariOm <span className="text-primary font-medium">Estate</span></span>
          </span>
        </div>

        {/* Product Navigation Tabs - Desktop (>= 744px) */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 h-full px-1 text-[15px] font-semibold transition-all duration-200 cursor-pointer ${
                  isActive ? "text-ink border-b-2 border-ink" : "text-muted hover:text-ink"
                }`}
              >
                <Icon className="w-[18px] h-[18px]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right-side Utilities */}
        <div className="flex items-center gap-3.5">
          {/* Become a Host */}
          <button className="hidden lg:inline-block text-[14px] font-semibold text-ink px-4 py-2.5 rounded-full hover:bg-surface-soft transition-colors cursor-pointer">
            Become a Host
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-ink p-2.5 rounded-full hover:bg-surface-soft transition-colors cursor-pointer flex items-center justify-center"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="w-[18px] h-[18px] text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-muted hover:text-ink" />
            )}
          </button>

          {/* Language Selector */}
          <button className="text-ink p-2.5 rounded-full hover:bg-surface-soft transition-colors cursor-pointer hidden sm:flex items-center justify-center" aria-label="Language & Currency">
            <Globe className="w-[18px] h-[18px]" />
          </button>

          {/* Profile Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3 px-3 py-1.5 border border-hairline rounded-full bg-canvas shadow-sm hover:shadow-airbnb transition-all duration-200 cursor-pointer"
              aria-label="User Menu"
            >
              <Menu className="w-4 h-4 text-ink" />
              <div className="w-8 h-8 rounded-full bg-surface-strong flex items-center justify-center text-muted border border-hairline">
                <User className="w-4 h-4 text-muted" />
              </div>
            </button>

            {/* Account Dropdown Overlay */}
            {menuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2.5 w-60 bg-canvas rounded-airbnb-md shadow-airbnb border border-hairline py-2 z-50">
                  <button 
                    className="w-full text-left px-4 py-3 text-[14px] font-semibold text-ink hover:bg-surface-soft transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </button>
                  <button 
                    className="w-full text-left px-4 py-3 text-[14px] text-ink hover:bg-surface-soft transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Log In
                  </button>
                  <div className="h-[1px] bg-hairline my-2" />
                  <button 
                    className="w-full text-left px-4 py-3 text-[14px] text-ink hover:bg-surface-soft transition-colors cursor-pointer"
                    onClick={() => {
                      setActiveTab("homes");
                      setMenuOpen(false);
                    }}
                  >
                    Explore Homes
                  </button>
                  <button 
                    className="w-full text-left px-4 py-3 text-[14px] text-ink hover:bg-surface-soft transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Help Center
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
