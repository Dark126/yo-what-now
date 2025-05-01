
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { create3DCardEffect } from "@/utils/optimizedAnimation";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  color?: string;
}

const OptimizedProductCard = ({
  id,
  name,
  description,
  image,
  color = "from-spice-400 to-leaf-400" // Default gradient
}: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    
    // Apply 3D effect
    const cleanup = create3DCardEffect(cardRef.current);
    
    return cleanup;
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: id * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        ref={cardRef}
        className="bg-white rounded-xl overflow-hidden shadow-lg transform-gpu will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          transformOrigin: "center center"
        }}
      >
        <div className="h-60 overflow-hidden relative">
          <motion.img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full transition-transform duration-700"
            whileHover={{ scale: 1.05 }}
          />
          <div className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${color} opacity-20`}></div>
        </div>
        
        <div className="p-6 border-t-2 border-opacity-20" style={{ borderColor: `var(--tw-gradient-stops)` }}>
          <h3 className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>{name}</h3>
          <p className="text-gray-600">{description}</p>
          
          <div className="mt-4 overflow-hidden">
            <motion.a 
              href="#packaging" 
              className={`inline-flex items-center gap-1 text-gradient bg-gradient-to-r ${color} bg-clip-text text-transparent font-medium`}
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              View Packaging Options
              <span>→</span>
            </motion.a>
          </div>
        </div>
        
        {/* 3D effect highlight */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%)",
            transformStyle: "preserve-3d",
            transform: "translateZ(1px)"
          }}
        />
      </div>
    </motion.div>
  );
};

export default OptimizedProductCard;
