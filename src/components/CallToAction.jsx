import React, { useState } from "react";
import { MessageSquare, PhoneCall, Send, CheckCircle } from "lucide-react";

export default function CallToAction() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact-us" className="w-full bg-canvas py-16 md:py-24 border-t border-hairline">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Heading and WhatsApp Link */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <span className="text-[12px] font-bold text-primary tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold text-ink leading-tight">
            Ready to find your next architectural sanctuary?
          </h2>
          <p className="text-muted text-[15px] leading-relaxed">
            Whether you want to acquire one of our featured homes, arrange a private tour, or discuss listing your own property with us, our specialists are ready to help.
          </p>

          <div className="h-[1px] bg-hairline my-6" />

          {/* Quick Connect Grid */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-canvas font-semibold text-[14px] px-6 py-3.5 rounded-airbnb-sm shadow-sm transition-all hover:scale-101 active:scale-99 cursor-pointer text-center"
            >
              <MessageSquare className="w-5 h-5 fill-canvas text-[#25D366]" />
              <span>Connect on WhatsApp</span>
            </a>
            
            <a
              href="tel:+1234567890"
              className="flex-1 flex items-center justify-center gap-2.5 bg-canvas border border-ink text-ink font-semibold text-[14px] px-6 py-3.5 rounded-airbnb-sm hover:bg-surface-soft transition-all hover:scale-101 active:scale-99 cursor-pointer text-center"
            >
              <PhoneCall className="w-5 h-5 text-ink" />
              <span>Schedule a Call</span>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Contact Form */}
        <div className="lg:col-span-7 bg-surface-soft border border-hairline-soft p-8 rounded-airbnb-xl shadow-sm hover:shadow-airbnb transition-all duration-300">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 animate-in fade-in zoom-in-95 duration-200">
              <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
              <h3 className="text-[20px] font-bold text-ink">Inquiry Received</h3>
              <p className="text-muted text-[14px] mt-2 max-w-sm">
                Thank you for your message. One of our senior real estate consultants will reach out to you within the next 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-[18px] font-bold text-ink text-left mb-2">Send an Inquiry</h3>

              {/* Name Input */}
              <div className="relative w-full h-[56px] border border-hairline bg-canvas rounded-airbnb-sm focus-within:ring-0">
                <input
                  type="text"
                  name="name"
                  id="form-name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full h-full pt-5 pb-1 px-3 bg-transparent text-[14px] font-medium text-ink border-0 rounded-airbnb-sm outline-none placeholder-transparent"
                />
                <label 
                  htmlFor="form-name"
                  className="absolute left-3 top-1.5 text-[10px] font-bold text-muted uppercase tracking-wide transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:font-normal peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-muted pointer-events-none peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal"
                >
                  Your Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative w-full h-[56px] border border-hairline bg-canvas rounded-airbnb-sm focus-within:ring-0">
                <input
                  type="email"
                  name="email"
                  id="form-email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full h-full pt-5 pb-1 px-3 bg-transparent text-[14px] font-medium text-ink border-0 rounded-airbnb-sm outline-none placeholder-transparent"
                />
                <label 
                  htmlFor="form-email"
                  className="absolute left-3 top-1.5 text-[10px] font-bold text-muted uppercase tracking-wide transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:font-normal peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-muted pointer-events-none peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal"
                >
                  Email Address
                </label>
              </div>

              {/* Phone Input */}
              <div className="relative w-full h-[56px] border border-hairline bg-canvas rounded-airbnb-sm focus-within:ring-0">
                <input
                  type="tel"
                  name="phone"
                  id="form-phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full h-full pt-5 pb-1 px-3 bg-transparent text-[14px] font-medium text-ink border-0 rounded-airbnb-sm outline-none placeholder-transparent"
                />
                <label 
                  htmlFor="form-phone"
                  className="absolute left-3 top-1.5 text-[10px] font-bold text-muted uppercase tracking-wide transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:font-normal peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-muted pointer-events-none peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal"
                >
                  Phone Number
                </label>
              </div>

              {/* Message Input */}
              <div className="relative w-full h-24 border border-hairline bg-canvas rounded-airbnb-sm focus-within:ring-0">
                <textarea
                  name="message"
                  id="form-message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full h-full pt-5 pb-1 px-3 bg-transparent text-[14px] font-medium text-ink border-0 rounded-airbnb-sm outline-none resize-none placeholder-transparent"
                />
                <label 
                  htmlFor="form-message"
                  className="absolute left-3 top-1.5 text-[10px] font-bold text-muted uppercase tracking-wide transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:font-normal peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-muted pointer-events-none peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal"
                >
                  Inquiry Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary-active text-on-primary font-semibold text-[14px] rounded-airbnb-sm flex items-center justify-center gap-2 cursor-pointer transition-colors active:scale-99"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
