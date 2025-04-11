
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const handleScroll = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-leaf-50/50 via-white to-spice-50/50"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(229,241,212,0.3) 0%, rgba(255,255,255,0.5) 50%, rgba(245,230,212,0.3) 100%)",
            "linear-gradient(135deg, rgba(245,230,212,0.3) 0%, rgba(255,255,255,0.5) 50%, rgba(229,241,212,0.3) 100%)",
            "linear-gradient(135deg, rgba(229,241,212,0.3) 0%, rgba(255,255,255,0.5) 50%, rgba(245,230,212,0.3) 100%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating 3D particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-50 blur-md"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(233,166,107,0.2) 0%, rgba(255,255,255,0) 70%)`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, Math.random() * 0.3 + 0.9, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="spice-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-spice-700 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              LA UNJHA <br />
              <motion.span 
                className="text-leaf-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                Premium Farm Fresh Spices
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-spice-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Experience the authentic flavors of nature with LA UNJHA's carefully sourced
              and processed spices. From farm to your kitchen, we preserve the
              essence and aroma in every grain.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.button 
                onClick={handleScroll} 
                className="button-primary flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(156, 107, 53, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Explore Products
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown size={16} />
                </motion.div>
              </motion.button>
              
              <motion.a 
                href="#contact" 
                className="button-secondary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(169, 204, 120, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div 
              className="aspect-square rounded-full bg-leaf-100 absolute top-0 right-0 w-4/5 -z-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div 
              className="aspect-square rounded-full bg-spice-100 absolute bottom-0 left-0 w-4/5 -z-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative z-10"
            >
              <motion.img 
                alt="Assorted Spices" 
                className="rounded-2xl shadow-xl object-cover aspect-square transform-gpu"
                src="/lovable-uploads/cee2d2e9-05ae-4469-879b-51f077498a2e.png" 
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  rotate: -1
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15 
                }}
              />
              
              {/* Floating spice elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center p-3 overflow-hidden"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img 
                  src="/lovable-uploads/9d2761be-f8ab-4f6b-8008-c85542e37153.png"
                  alt="Cardamom"
                  className="w-full h-full object-contain"
                  animate={{ 
                    rotateY: [0, 360],
                    rotateX: [5, -5, 5]
                  }}
                  transition={{ 
                    rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center p-2 overflow-hidden"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img 
                  src="/lovable-uploads/b0ca0c4e-10d9-4921-af00-53fde05d1cb4.png"
                  alt="Cinnamon"
                  className="w-full h-full object-contain"
                  animate={{ 
                    rotateY: [0, -360],
                    rotateX: [-5, 5, -5]
                  }}
                  transition={{ 
                    rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
