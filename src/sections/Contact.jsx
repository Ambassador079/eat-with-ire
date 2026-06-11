import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const ContactCard = ({ icon: Icon, title, lines, href, colorClass }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-6 border border-brand-cream-dark shadow-sm"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClass}`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="font-display font-semibold text-brand-brown text-lg mb-2">{title}</h3>
    {lines.map((line, i) =>
      href && i === 0 ? (
        <a
          key={i}
          href={href}
          className="font-body text-brand-charcoal-light text-sm leading-relaxed hover:text-brand-orange transition-colors block"
        >
          {line}
        </a>
      ) : (
        <p key={i} className="font-body text-brand-charcoal-light text-sm leading-relaxed">
          {line}
        </p>
      )
    )}
  </motion.div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange font-body font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown mt-2 mb-4">
            Find Us & Reach Out
          </h2>
          <p className="font-body text-brand-charcoal-light max-w-md mx-auto">
            Have questions or want to place a bulk order? We're always happy to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          <ContactCard
            icon={MapPin}
            title="Our Location"
            colorClass="bg-red-50 text-red-500"
            lines={[siteConfig.contact.location]}
          />
          <ContactCard
            icon={Phone}
            title="Phone / WhatsApp"
            colorClass="bg-green-50 text-brand-green"
            lines={[siteConfig.contact.phone, 'Tap to call or message']}
            href={`tel:${siteConfig.contact.phone}`}
          />
          <ContactCard
            icon={Clock}
            title="Business Hours"
            colorClass="bg-orange-50 text-brand-orange"
            lines={[
              siteConfig.hours.weekdays,
              siteConfig.hours.sunday,
              siteConfig.hours.note,
            ]}
          />
        </div>

        {/* WhatsApp quick action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-cream rounded-3xl p-8 text-center border border-brand-cream-dark"
        >
          <p className="font-body text-brand-charcoal-light mb-4">
            The fastest way to reach us is on WhatsApp
          </p>
          <a
            href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1eb859] text-white font-body font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            Message us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
