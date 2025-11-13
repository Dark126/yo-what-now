import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

interface OptimizedProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
  width?: number;
  height?: number;
}

const OptimizedProductCard = ({
  id,
  name,
  description,
  image,
  color,
  width = 800,
  height = 600
}: OptimizedProductCardProps) => {

  const cardRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const imageVariants = {
    initial: { scale: 1.05 },
    animate: {
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  return (
    <Link to={`/product/${id}`}>
      <motion.div
        ref={cardRef}
        className="group relative overflow-hidden bg-white rounded-xl shadow-md h-full min-h-[400px]"
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        />

        {/* Image wrapper */}
        <motion.div className="h-48 overflow-hidden relative" variants={imageVariants}>

          {/* Blur placeholder before image loads */}
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}

          <img
            src={image}
            alt={name}
            width={width}
            height={height}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transform transition-transform duration-700 ${
              loaded ? "opacity-100" : "opacity-0"
            } group-hover:scale-110`}
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="p-6 flex flex-col h-[calc(100%-12rem)]"
          variants={contentVariants}
        >
          <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>

          <p className="text-gray-600 text-sm flex-grow line-clamp-3">
            {description}
          </p>

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

