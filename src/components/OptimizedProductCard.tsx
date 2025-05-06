
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { optimizedAnimation } from "@/utils/optimizedAnimation";

interface OptimizedProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

const OptimizedProductCard = ({
  id,
  name,
  description,
  image,
  color,
}: OptimizedProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { cardVariants, imageVariants, contentVariants } = optimizedAnimation;

  return (
    <Link to={`/product/${id}`}>
      <motion.div
        ref={cardRef}
        className="group relative overflow-hidden bg-white rounded-xl shadow-md h-full min-h-[400px] transform transition-all"
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.25 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          y: -5,
          transition: { duration: 0.2 },
        }}
      >
        {/* Color overlay with gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        ></div>

        {/* Product image */}
        <motion.div
          className="h-48 overflow-hidden"
          variants={imageVariants}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="p-6 flex flex-col h-[calc(100%-12rem)]"
          variants={contentVariants}
        >
          <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm flex-grow">{description}</p>
          
          <div className="mt-4 inline-flex">
            <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-spice-600 text-white text-sm font-medium rounded-full">
              View Details
            </span>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default OptimizedProductCard;
