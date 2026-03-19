import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Packaging from "@/components/Packaging";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="homepage"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        ref={scrollRef}
      >
        <Navbar />
        <FloatingElements />
        <Hero />
        <Products />
        <About />
        <Packaging />
        <ContactForm />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
