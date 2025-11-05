import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

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

const AboutUs = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen relative"
        key="about-page"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Navbar />
        
        <div className="pt-20">
          <About />
        </div>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUs;
