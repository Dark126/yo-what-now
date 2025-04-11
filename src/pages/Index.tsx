
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Packaging from "@/components/Packaging";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { handleAnimations } from "@/utils/animation";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

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
    
    // Add smooth scrolling to the whole page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add a smooth page transition effect
    document.body.classList.add('transition-ready');
    
    return () => {
      cleanup();
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = '';
      document.body.classList.remove('transition-ready');
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen"
        key="homepage"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Navbar />
        
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Products />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Packaging />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ContactForm />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Footer />
        </motion.div>
        
        {/* Floating back to top button with smoother animations */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 1.5,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(156, 107, 53, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
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

        {/* 3D decorative elements */}
        <div className="fixed -z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-leaf-200 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-spice-300 opacity-10 blur-3xl"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
