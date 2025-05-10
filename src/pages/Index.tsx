
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

// Enhanced page variants for more vibrant transitions
const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    },
  },
};

// Enhanced section variants with more vibrant motion
const sectionVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    },
  },
};

const Index = () => {
  const [scrollY] = useState(0);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen relative"
        key="homepage"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Navbar />
        
        {/* Vibrant floating elements */}
        <FloatingElements />
        
        <motion.div>
          <Hero />
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Products />
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContactForm />
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Footer />
        </motion.div>
        
        {/* Enhanced back to top button with more vibrant animation */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: scrollY > 300 ? 1 : 0, 
            scale: scrollY > 300 ? 1 : 0.9 
          }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-spice-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
