
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Packaging from "@/components/Packaging";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { handleAnimations } from "@/utils/animation";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    // Setup scroll animations
    const cleanup = handleAnimations();
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      cleanup();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Packaging />
      <ContactForm />
      <Footer />
      
      {/* Floating back to top button */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-spice-500 rounded-full flex items-center justify-center shadow-lg hover:bg-spice-600 transition-colors z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.a>
    </div>
  );
};

export default Index;
