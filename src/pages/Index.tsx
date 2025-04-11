
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Packaging from "@/components/Packaging";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { optimizedHandleAnimations, createLightweightBackground } from "@/utils/optimizedAnimation";

// Improved page variants for smoother transitions
const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Smooth section animations
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // Implement smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optimize animations 
    const animationCleanup = optimizedHandleAnimations();
    
    // Initialize 3D background
    let backgroundCleanup: (() => void) | undefined;
    
    if (canvasRef.current) {
      backgroundCleanup = createLightweightBackground(canvasRef.current);
    }
    
    // Track scroll position for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      animationCleanup();
      if (backgroundCleanup) backgroundCleanup();
      document.documentElement.style.scrollBehavior = '';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
        
        {/* Canvas for WebGL effects */}
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full -z-10 opacity-20 pointer-events-none"
        />
        
        <motion.div 
          variants={sectionVariants}
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
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
          <Packaging />
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
        
        {/* Enhanced floating back to top button with smooth animations */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: scrollY > 300 ? 1 : 0, scale: scrollY > 300 ? 1 : 0.8 }}
          transition={{ 
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

        {/* Optimized decorative elements */}
        <div className="fixed -z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-leaf-200 opacity-10 blur-3xl"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          />
          <motion.div 
            className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-spice-300 opacity-10 blur-3xl"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
