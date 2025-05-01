
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background spice image */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/lovable-uploads/cee2d2e9-05ae-4469-879b-51f077498a2e.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          filter: "blur(2px)"
        }}
      />
      
      <div className="spice-container max-w-4xl text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="px-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-spice-700 leading-tight font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            LA UNJHA
          </motion.h1>
          
          <motion.div 
            className="h-0.5 bg-spice-500 w-0 mx-auto my-6"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          
          <motion.h2 
            className="text-2xl md:text-4xl text-leaf-600 mb-8 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Premium Farm Fresh Spices
          </motion.h2>
          
          <motion.p 
            className="mt-6 text-lg text-spice-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.6,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Experience the authentic flavors of nature with LA UNJHA's carefully sourced
            and processed spices. From farm to your kitchen, we preserve the
            essence and aroma in every grain.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.a 
              href="#products" 
              className="button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="button-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
