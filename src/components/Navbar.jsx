import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import { siteConfig } from "../data/siteConfig";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-brand-cream-dark"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav("#home")}
              className="flex-shrink-0"
            >
              <Logo size="md" />
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="text-brand-charcoal-light hover:text-brand-orange font-body font-medium text-sm transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <WhatsAppButton size="sm" variant="solid" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-brand-charcoal hover:bg-brand-cream-dark transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 md:hidden flex flex-col shadow-2xl"
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-brand-cream-dark">
                <Logo size="sm" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-brand-charcoal hover:bg-brand-cream-dark"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile nav links */}
              <div className="flex flex-col px-6 py-8 gap-1 flex-1">
                {siteConfig.nav.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNav(item.href)}
                    className="text-left py-4 text-brand-charcoal font-body font-medium text-lg border-b border-brand-cream-dark last:border-0 hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="px-6 pb-10">
                <WhatsAppButton size="md" variant="solid" className="w-full" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
