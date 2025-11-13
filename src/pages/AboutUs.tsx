import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

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

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⭐ JSON-LD using correct public founder image path
  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About LLK International - LA Unjha Spices",
    "url": "https://launjha.com/about",
    "description":
      "Learn about LLK International, a leading Indian spice supplier from Unjha. Founded by Mr. Anil Kumar Singhal with over 28 years of experience in sourcing, processing, and exporting authentic Indian spices.",
    "about": {
      "@type": "Organization",
      "name": "LLK International",
      "brand": "LA Unjha Spices",
      "url": "https://launjha.com",
      "logo": "https://launjha.com/opengraph-image.png",
      "description":
        "LLK International supplies premium cumin, fennel, sesame, black pepper, cardamom, and psyllium husk globally. Based in Unjha, the spice capital of India.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Unjha",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "founder": {
        "@type": "Person",
        "name": "Mr. Anil Kumar Singhal",
        "jobTitle": "Founder & Director",
        "description":
          "Anil Kumar Singhal, founder of LLK International, has 28+ years of experience in the Indian spice industry, specializing in cumin, fennel, sesame, psyllium husk, and other premium spices sourced from Unjha, Gujarat.",
        "image": "https://launjha.com/founder-transparent.webp",
        "worksFor": {
          "@type": "Organization",
          "name": "LLK International"
        }
      }
    }
  };

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

        {/* ⭐ Inject JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(aboutPageJsonLd)}
        </script>

        <div className="pt-20">
          <About />
        </div>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUs;





