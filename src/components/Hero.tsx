import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background spice image optimized & converted to WebP */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url('/images/products/Main-Page.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25, // Vibrant but soft backdrop
          filter: "blur(2px) saturate(1.4)", // Better color density
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-gradient bg-gradient-to-r from-spice-600 via-amber-500 to-leaf-600 bg-clip-text text-transparent drop-shadow-lg">
              LLK International
            </span>
          </motion.h1>

          <motion.div
            className="h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-leaf-500 w-0 mx-auto my-6 rounded-full shadow-md"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          <motion.h2
            className="text-2xl md:text-4xl text-leaf-700 mb-8 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Premium Farm Fresh Spices
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-spice-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Experience the authentic flavors of nature with LLK International's
            carefully sourced and processed spices. From farm to your kitchen,
            we preserve the essence and aroma in every grain.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.a
              href="#products"
              className="bg-spice-500 hover:bg-spice-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
            </motion.a>

            <motion.a
              href="#contact"
              className="bg-leaf-100 hover:bg-leaf-200 text-leaf-800 font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 border-2 border-leaf-400"
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

