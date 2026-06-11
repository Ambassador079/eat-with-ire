import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, ImageIcon } from 'lucide-react';
import { menuData, categories } from '../data/menuData';
import { siteConfig } from '../data/siteConfig';

// Renders food image or a clean "Add Photo" placeholder
const FoodImage = ({ src, alt }) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    );
  }
  return (
    <div className="w-full h-full bg-brand-cream flex flex-col items-center justify-center gap-2 text-brand-charcoal-light">
      <ImageIcon className="w-10 h-10 opacity-30" />
      <span className="text-xs font-body opacity-50">Add Photo</span>
    </div>
  );
};

const MenuCard = ({ item, index }) => {
  const orderMsg = `Hello! I'd like to order *${item.name}* (${item.price}) from Eat With Ire`;
  const href = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(orderMsg)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-brand-cream-dark flex flex-col group"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <FoodImage src={item.image} alt={item.imageAlt} />

        {item.popular && (
          <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-body font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-white" /> Popular
          </div>
        )}

        <div className="absolute top-3 right-3 bg-white text-brand-charcoal-light text-xs font-body px-2.5 py-1 rounded-full shadow-sm">
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-brand-brown text-lg leading-tight">{item.name}</h3>
          <span className="font-display font-bold text-brand-orange text-lg flex-shrink-0">{item.price}</span>
        </div>
        <p className="font-body text-brand-charcoal-light text-sm leading-relaxed mb-5 flex-1">
          {item.description}
        </p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-body font-semibold text-sm transition-colors duration-200 active:scale-95"
          aria-label={`Order ${item.name} on WhatsApp`}
        >
          <MessageCircle className="w-4 h-4" />
          Order This
        </a>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? menuData
    : menuData.filter((m) => m.category === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange font-body font-semibold text-sm tracking-widest uppercase">
            Our Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown mt-2 mb-4">
            Meals Made with Love
          </h2>
          <p className="font-body text-brand-charcoal-light max-w-lg mx-auto leading-relaxed">
            Every meal is freshly prepared using quality ingredients. No shortcuts, no compromises.
          </p>
        </motion.div>

        {/* Category Filter */}
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'bg-brand-cream text-brand-charcoal-light hover:bg-brand-cream-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-body text-brand-charcoal-light text-sm mb-4">
            Don't see what you want? We might have it!
          </p>
          <a
            href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent("Hello! I'd like to ask about your menu options")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-orange font-body font-semibold text-sm hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
