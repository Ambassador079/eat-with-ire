import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { siteConfig } from "../data/siteConfig";

// ============================================================
// HERO BACKGROUND IMAGE
// Place your hero image at: /public/images/hero-bg.jpg
// Then update heroBg below
// ============================================================
const heroBg = "/images/hero-bg.png"; // your background image path

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const Hero = () => {
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Optional gradient overlay for bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-28 md:py-0 md:min-h-screen md:flex md:items-center">
        <div className="max-w-2xl">
          {/* Location badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6"
          >
            <MapPin className="w-3.5 h-3.5 text-brand-orange" />
            <span className="text-xs font-body font-medium text-white">
              {siteConfig.contact.locationShort}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-body font-medium text-green-300">
              Open Now
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5"
          >
            Authentic Nigerian{" "}
            <span className="text-brand-orange italic">Meals</span> Delivered
            Fresh
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="font-body text-white/80 text-lg leading-relaxed mb-8 max-w-lg"
          >
            From Ofada Rice to Chicken & Chips, enjoy delicious homemade meals
            prepared with care and delivered to your door in Ibadan.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex flex-wrap gap-3"
          >
            <WhatsAppButton size="lg" variant="solid" />
            <button
              onClick={scrollToMenu}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-white text-white font-body font-semibold text-base hover:bg-white hover:text-brand-brown transition-all duration-200 active:scale-95"
            >
              View Menu <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex items-center gap-8 mt-10"
          >
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "100%", label: "Fresh Daily" },
              { value: "3+", label: "Years Serving" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-brand-orange">
                  {stat.value}
                </div>
                <div className="text-xs font-body text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
