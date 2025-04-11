
import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ProductCard = ({
  id,
  name,
  description,
  image
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // 3D card effect
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  const brightness = useTransform(mouseY, [-300, 300], [1.2, 0.8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div 
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 20
      }} 
      whileInView={{
        opacity: 1,
        y: 0
      }} 
      transition={{
        duration: 0.5,
        delay: id * 0.1
      }} 
      viewport={{
        once: true
      }} 
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          filter: `brightness(${brightness})`,
          transition: "box-shadow 0.3s ease"
        }}
        whileHover={{
          scale: 1.02
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className={`h-full w-full ${isHovered ? 'shadow-xl' : 'shadow-md'} rounded-xl transition-all duration-300`}
      >
        <div className="h-60 overflow-hidden">
          <motion.img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-spice-700 mb-2">{name}</h3>
          <p className="text-gray-600">{description}</p>
          <motion.div 
            className="mt-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="#packaging" className="inline-flex items-center gap-1 text-leaf-600 hover:text-leaf-700 font-medium underline decoration-2 underline-offset-4 transition-colors">
              View Packaging Options
              <motion.span
                initial={{ x: 0 }}
                animate={isHovered ? { x: 5 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
