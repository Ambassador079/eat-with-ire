import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import WhyChooseUs from './sections/WhyChooseUs';
import About from './sections/About';
import WhatsAppCTA from './sections/WhatsAppCTA';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <WhyChooseUs />
        <About />
        <WhatsAppCTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
