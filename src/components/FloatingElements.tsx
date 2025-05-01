
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Reduced number of elements and simplified animations
  const elements = Array.from({ length: 6 }).map((_, i) => {
    const size = Math.floor(Math.random() * 100) + 50;
    const delay = Math.random() * 0.5;
    const duration = Math.random() * 10 + 10;
    
    return {
      id: i,
      size,
      initialX: `${Math.random() * 100}%`,
      initialY: `${Math.random() * 100}%`,
      delay,
      duration,
      opacity: (Math.random() * 0.2 + 0.05).toFixed(2),
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
          className="absolute bg-white/20 rounded-full blur-xl"
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
