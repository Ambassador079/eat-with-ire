import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const WhatsAppCTA = () => {
  const href = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-brand-brown to-[#3a1a05] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-orange/10 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* WhatsApp icon */}
          <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to Order?{' '}
            <span className="text-brand-orange">Let's Chat!</span>
          </h2>

          <p className="font-body text-white/70 text-lg mb-6 max-w-lg mx-auto leading-relaxed">
            Place your order in seconds. Just send us a message and we'll handle the rest.
          </p>

          {/* Phone number display */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8">
            <Phone className="w-4 h-4 text-brand-orange" />
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-body font-semibold text-white text-lg tracking-wide hover:text-brand-orange transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1eb859] text-white font-body font-bold text-lg px-10 py-5 rounded-full shadow-2xl transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="font-body text-white/40 text-sm mt-6">
            Typically replies within minutes ·{' '}
            <span className="text-white/60">{siteConfig.hours.weekdays}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
