import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, BadgeDollarSign, Package, Briefcase, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source fresh, quality ingredients daily. Every meal tastes exactly like it came from home.',
    color: 'bg-green-50 text-brand-green',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Hot meals delivered promptly to your location in Akobo and surrounding areas.',
    color: 'bg-orange-50 text-brand-orange',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable Prices',
    description: "Premium Nigerian meals at prices that make sense. Quality food shouldn't break the bank.",
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Package,
    title: 'Bulk Orders',
    description: 'Feeding a crowd? We handle bulk orders for events, offices, and gatherings with ease.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Lunch Packs',
    description: 'Daily lunch packs for offices and individuals. Never stress about lunch again.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description: "Your satisfaction is our priority. We don't rest until you're completely happy.",
    color: 'bg-red-50 text-red-500',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-brand-orange font-body font-semibold text-sm tracking-widest uppercase">
            Why Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown mt-2 mb-4">
            The Eat With Ire Difference
          </h2>
          <p className="font-body text-brand-charcoal-light max-w-md mx-auto">
            We're more than a food vendor. We're your daily meal solution, prepared with passion.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-brand-cream-dark hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-brand-brown text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-brand-charcoal-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
