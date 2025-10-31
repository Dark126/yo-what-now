import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  phoneNumber: string; // Format: country code + number, e.g., "919876543210"
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Hi, I'm interested in your products!" }: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[100] group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Tooltip label */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        <span className="text-sm font-medium">Chat with us on WhatsApp</span>
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900"></div>
      </motion.div>

      {/* Pulsing ring effect */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full opacity-75"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.75, 0, 0.75],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 drop-shadow-lg" fill="white" />
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
