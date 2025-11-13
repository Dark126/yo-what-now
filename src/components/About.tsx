import { motion } from "framer-motion";
import { MapPin, Award, TrendingUp, Shield } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="section bg-gradient-to-b from-[#FFFFF0] to-[#FAF9F6] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-spice-200 opacity-30 blur-3xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[15%] w-40 h-40 rounded-full bg-leaf-200 opacity-30 blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="spice-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="text-gradient bg-gradient-to-r from-spice-600 to-leaf-600 bg-clip-text">
              About Us
            </span>
          </h2>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#FFFEF9] rounded-2xl shadow-lg overflow-hidden border border-spice-100"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-[400px] md:h-auto overflow-hidden flex items-center justify-center bg-[#FFFEF9]">
              <motion.img
                src="/founder-transparent.webp"
                alt="Anil Kumar Singhal - Founder of LLK International"
                className="h-full w-auto object-contain"
                width="500"
                height="600"
                loading="eager"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* text section unchanged */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


