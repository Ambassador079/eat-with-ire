import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";

// Edit these content arrays to update the About section
const highlights = [
  "Freshly prepared every morning",
  "Authentic Nigerian recipes",
  "Catering & bulk orders available",
  "Daily lunch packs for offices",
  "No preservatives, no shortcuts",
  "Serving Akobo & surrounding areas",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left – Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-brand-cream-dark to-brand-warm border border-brand-cream-dark shadow-xl">
              <img
                src="/images/chef.png"
                alt="Chef preparing food"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-display font-bold text-2xl">3+</div>
              <div className="font-body text-xs opacity-90">
                Years of
                <br />
                Great Taste
              </div>
            </div>

            {/* Small accent card */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-brand-cream-dark">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div>
                  <div className="font-display font-bold text-brand-brown text-sm">
                    4.9/5
                  </div>
                  <div className="font-body text-xs text-brand-charcoal-light">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-orange font-body font-semibold text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown mt-2 mb-5 leading-tight">
              Homemade Taste,{" "}
              <span className="text-brand-orange italic">Every Single Day</span>
            </h2>

            {/* Editable story text */}
            <div className="font-body text-brand-charcoal-light leading-relaxed space-y-4 mb-8">
              <p>
                Eat With Ire was born from a simple belief: everyone deserves to
                eat food that feels like it was made by someone who truly cares.
                Based in Olowu Estate, Akobo, Ibadan, we've been serving the
                community with authentic Nigerian flavours that bring families
                together.
              </p>
              <p>
                From our signature Ofada Rice with plantain sauce to our crispy
                Chicken & Chips, every dish is prepared fresh daily using the
                best ingredients we can find. No freezer shortcuts. No
                compromises. Just good food, great taste.
              </p>
              <p>
                Whether you need a quick lunch pack, a family dinner, or
                catering for your next event — Eat With Ire has you covered.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span className="font-body text-sm text-brand-charcoal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <WhatsAppButton size="md" variant="orange" children="Order Now" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
