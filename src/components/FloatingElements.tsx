
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Colors for our floating elements
  const colors = [
    'bg-spice-300/30',
    'bg-spice-400/20',
    'bg-leaf-300/30',
    'bg-leaf-400/20',
    'bg-spice-200/20',
    'bg-leaf-200/20'
  ];

  // Shapes for our floating elements
  const shapes = [
    'rounded-full',
    'rounded-3xl',
    'rounded-[30%_70%_70%_30%/30%_30%_70%_70%]', // Blob shape 1
    'rounded-[70%_30%_30%_70%/60%_40%_60%_40%]', // Blob shape 2
  ];

  // Generate random elements for our animation
  const elements = Array.from({ length: 12 }).map((_, i) => {
    const size = Math.floor(Math.random() * 150) + 50;
    const delay = Math.random() * 0.5;
    const duration = Math.random() * 15 + 15;
    
    return {
      id: i,
      size,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      initialX: `${Math.random() * 100}%`,
      initialY: `${Math.random() * 100}%`,
      delay,
      duration,
      blur: `blur-${Math.floor(Math.random() * 3) * 2 + 2}xl`,
      opacity: (Math.random() * 0.3 + 0.1).toFixed(2),
    };
  });

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.color} ${element.shape} ${element.blur}`}
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
            x: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
            rotate: [0, Math.random() * 180, Math.random() * -180, 0],
            opacity: [0, parseFloat(element.opacity), parseFloat(element.opacity), 0]
          }}
          transition={{
            duration: element.duration,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Add some larger, slower-moving elements at the back for depth */}
      {[1, 2, 3].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className={`absolute ${colors[i % colors.length]} rounded-full blur-3xl`}
          style={{
            width: 300 + i * 100,
            height: 300 + i * 100,
            left: `${(i * 30) + 10}%`,
            top: `${(i * 25) + 20}%`,
            opacity: 0.05,
            zIndex: -20,
          }}
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 1],
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 30 + i * 10,
            ease: "easeInOut",
            delay: i * 0.3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
      
      {/* Initial welcome animation elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 4, delay: 2 }}
      >
        <motion.div
          className="bg-spice-500/10 rounded-full blur-3xl"
          style={{ width: 500, height: 500 }}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 0] }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Horizontal line that sweeps across the screen */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-spice-400/50 to-transparent pointer-events-none"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      />
      
      {/* Vertical line that sweeps across the screen */}
      <motion.div
        className="absolute top-0 left-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-leaf-400/50 to-transparent pointer-events-none"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
      />
    </div>
  );
};

export default FloatingElements;
