import { useState } from "react";
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
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
        <FloatingElements />

        <motion.div>
          <Hero />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -200px 0px" }}
        >
          <Products />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
        >
          <About />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
        >
          <Packaging />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
        >
          <Footer />
        </motion.div>

        <motion.a
          href="#home"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: scrollY > 300 ? 1 : 0,
            scale: scrollY > 300 ? 1 : 0.9,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(135deg, #d97706, #b45309)",
          }}
          className="fixed bottom-6 right-20 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl z-50"
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
