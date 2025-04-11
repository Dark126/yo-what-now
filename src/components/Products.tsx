
import OptimizedProductCard from "./OptimizedProductCard";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Cardamom",
      description: "Premium green cardamom pods with intense aroma, perfect for desserts and beverages.",
      image: "/lovable-uploads/9d2761be-f8ab-4f6b-8008-c85542e37153.png"
    },
    {
      id: 2,
      name: "Cinnamon",
      description: "Aromatic cinnamon sticks with sweet, woody flavor for desserts, beverages, and savory dishes.",
      image: "/lovable-uploads/b0ca0c4e-10d9-4921-af00-53fde05d1cb4.png"
    },
    {
      id: 3,
      name: "Cumin Seeds",
      description: "Earthy, aromatic cumin seeds for authentic flavor in traditional dishes.",
      image: "https://images.unsplash.com/photo-1550133730-695db5f53c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Fennel Seeds",
      description: "Sweet, anise-flavored fennel seeds for desserts, breads, and savory dishes.",
      image: "https://images.unsplash.com/photo-1620638306111-77ad269a2a97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <motion.section 
      id="products" 
      className="section bg-leaf-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background 3D elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div 
          className="absolute top-[10%] right-[15%] w-40 h-40 rounded-full bg-spice-100 opacity-50 blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[10%] w-60 h-60 rounded-full bg-leaf-100 opacity-50 blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="spice-container relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          LA UNJHA Premium Spices
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Each of LA UNJHA's spices is carefully sourced from sustainable farms and processed to preserve their natural flavors and aromatic properties.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <OptimizedProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
