import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
    ))}
  </div>
);

const TestimonialCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-2xl p-6 border border-brand-cream-dark shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
  >
    <Stars count={item.rating} />

    <p className="font-body text-brand-charcoal-light text-sm leading-relaxed mt-4 mb-6 flex-1 italic">
      "{item.text}"
    </p>

    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
        <span className="font-display font-bold text-white text-sm">{item.initials}</span>
      </div>
      <div>
        <div className="font-body font-semibold text-brand-brown text-sm">{item.name}</div>
        <div className="font-body text-brand-charcoal-light text-xs">{item.location}</div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange font-body font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="font-body text-brand-charcoal-light max-w-md mx-auto">
            Don't just take our word for it — here's what people in Ibadan say about Eat With Ire.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonialsData.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-brand-cream-dark rounded-full px-6 py-3">
            <div className="flex">
              {['FA', 'TO', 'BM'].map((initials) => (
                <div
                  key={initials}
                  className="w-8 h-8 rounded-full bg-brand-orange border-2 border-white flex items-center justify-center -ml-2 first:ml-0"
                >
                  <span className="text-white font-body font-bold text-xs">{initials}</span>
                </div>
              ))}
            </div>
            <div className="text-sm font-body text-brand-charcoal-light">
              <span className="font-semibold text-brand-brown">500+</span> happy customers in Ibadan
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
