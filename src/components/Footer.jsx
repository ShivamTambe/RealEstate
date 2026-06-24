import React from "react";
import { Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    support: [
      { label: "Help Center", href: "#" },
      { label: "Safety Information", href: "#" },
      { label: "Cancellation Options", href: "#" },
      { label: "Our COVID-19 Response", href: "#" },
      { label: "Report a Concern", href: "#" }
    ],
    hosting: [
      { label: "List Your Property", href: "#" },
      { label: "EstateCore Cover", href: "#" },
      { label: "Hosting Resources", href: "#" },
      { label: "Community Forum", href: "#" },
      { label: "Host Responsibly", href: "#" }
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Press Room", href: "#" },
      { label: "Careers at EstateCore", href: "#" },
      { label: "Our Investors", href: "#" },
      { label: "Trust & Safety", href: "#" }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-canvas border-t border-hairline pt-12 pb-8">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Upper Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-hairline text-left">
          {/* Column 1: Support */}
          <div>
            <h4 className="text-[14px] font-bold text-ink mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[14px] text-muted hover:text-ink hover:underline transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Hosting */}
          <div>
            <h4 className="text-[14px] font-bold text-ink mb-4 uppercase tracking-wider">Hosting</h4>
            <ul className="space-y-3">
              {footerLinks.hosting.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[14px] text-muted hover:text-ink hover:underline transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[14px] font-bold text-ink mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[14px] text-muted hover:text-ink hover:underline transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lower Footer: Legal Band */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright and Company Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <img
                src="https://catalog.wlimg.com/3/628115/other-images/64524.jpg"
                alt="HariOm Logo"
                className="h-6 w-6 rounded-sm object-cover opacity-85 border border-hairline-soft"
              />
              <span className="text-[13px] font-bold text-ink">HariOm Estate, Inc.</span>
            </div>
            <span className="text-[13px] text-muted">
              © {new Date().getFullYear()} HariOm Estate · <a href="#" className="hover:underline">Privacy</a> · <a href="#" className="hover:underline">Terms</a> · <a href="#" className="hover:underline">Sitemap</a>
            </span>
          </div>

          {/* Selectors and Social Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            
            {/* Language & Currency */}
            <div className="flex items-center gap-4 text-[13px] font-bold text-ink">
              <button className="flex items-center gap-1.5 hover:underline cursor-pointer">
                <Globe className="w-4 h-4" />
                <span>English (IN)</span>
              </button>
              <button className="flex items-center gap-1.5 hover:underline cursor-pointer">
                <span className="text-[14px] leading-none text-ink">₹</span>
                <span>INR</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-ink">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>

            {/* Scroll Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-strong hover:bg-hairline text-ink border border-hairline-soft transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
