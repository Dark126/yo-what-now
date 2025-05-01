
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Create more vibrant colorful elements representing spices
  const spiceColors = [
    'bg-red-500', 'bg-orange-500', 'bg-amber-500', 
    'bg-yellow-400', 'bg-green-500', 'bg-spice-400',
    'bg-red-400', 'bg-orange-400', 'bg-yellow-300'
  ];
  
  const elements = Array.from({ length: 10 }).map((_, i) => {
    const size = Math.floor(Math.random() * 100) + 50;
    const delay = Math.random() * 0.5;
    const duration = Math.random() * 10 + 10;
    const colorIndex = Math.floor(Math.random() * spiceColors.length);
    
    return {
      id: i,
      size,
      initialX: `${Math.random() * 100}%`,
      initialY: `${Math.random() * 100}%`,
      delay,
      duration,
      opacity: (Math.random() * 0.35 + 0.15).toFixed(2), // Slightly increased opacity
      color: spiceColors[colorIndex],
    };
  });

  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.color} rounded-full blur-xl`}
          style={{
            width: element.size,
            height: element.size,
            left: element.initialX,
            top: element.initialY,
            opacity: element.opacity,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0.9, 1],
            opacity: [0, parseFloat(element.opacity), parseFloat(element.opacity), 0]
          }}
          transition={{
            duration: element.duration,
            ease: "easeInOut",
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
