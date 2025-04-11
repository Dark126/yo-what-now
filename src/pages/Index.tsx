
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Packaging from "@/components/Packaging";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { handleAnimations, createParticleBackground } from "@/utils/animation";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
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
      duration: 0.9,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

const Index = () => {
  const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Setup scroll animations
    const cleanup = handleAnimations();
    
    // Setup 3D particle background
    let particleCleanup: (() => void) | undefined;
    
    if (backgroundCanvasRef.current) {
      particleCleanup = createParticleBackground(backgroundCanvasRef.current);
    }
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add a smooth page transition effect
    document.body.classList.add('transition-ready');
    
    return () => {
      cleanup();
      if (particleCleanup) particleCleanup();
      document.documentElement.style.scrollBehavior = '';
      document.body.classList.remove('transition-ready');
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
        
        {/* 3D Particle Background */}
        <canvas
          ref={backgroundCanvasRef}
          className="fixed inset-0 w-full h-full -z-10 opacity-30 pointer-events-none"
        />
        
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
        
        {/* Enhanced floating back to top button with 3D effects */}
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
            rotateY: 10,
            rotateX: -10,
            boxShadow: "0 10px 25px rgba(156, 107, 53, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 w-12 h-12 bg-spice-500 rounded-full flex items-center justify-center shadow-lg hover:bg-spice-600 transition-colors z-50"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
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

        {/* 3D decorative elements with animation */}
        <div className="fixed -z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-leaf-200 opacity-10 blur-3xl floating-3d"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-spice-300 opacity-10 blur-3xl floating-3d"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-[60%] left-[20%] w-40 h-40 rounded-full bg-spice-100 opacity-15 blur-2xl floating-3d"
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0], 
              rotate: [0, 8, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
