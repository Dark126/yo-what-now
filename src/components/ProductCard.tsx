import { useState } from "react";
import { motion } from "framer-motion";
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
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: id * 0.1
  }} viewport={{
    once: true
  }} className="bg-white rounded-xl overflow-hidden shadow-md card-hover" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="h-60 overflow-hidden">
        <img src={image} alt={name} className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-spice-700 mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">
          <a href="#packaging" className="inline-block text-leaf-600 hover:text-leaf-700 font-medium underline decoration-2 underline-offset-4 transition-colors">
            View Packaging Options
          </a>
        </div>
      </div>
    </motion.div>;
};
export default ProductCard;