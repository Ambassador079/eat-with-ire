import React from 'react';
import { MessageCircle, Instagram, Facebook, Twitter, MapPin } from 'lucide-react';
import Logo from '../components/Logo';
import { siteConfig } from '../data/siteConfig';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-brown text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo area – replace with your logo */}
            <div className="mb-4">
              <Logo size="md" className="[&_span]:text-white [&_div]:border-white/30" />
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              {siteConfig.brand.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-body text-white/60">
              <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0" />
              {siteConfig.contact.location}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="font-body text-white/60 hover:text-brand-orange text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-widest">
              Connect
            </h4>

            <a
              href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full mb-6 hover:bg-[#1eb859] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                aria-label="Twitter/X"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/40 text-xs text-center sm:text-left">
            © {year} Eat With Ire. All rights reserved. · Akobo, Ibadan, Nigeria
          </p>
          <p className="font-body text-white/30 text-xs">
            Good Food, Great Taste 🍽️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
