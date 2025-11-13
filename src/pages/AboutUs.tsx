import { motion } from "framer-motion";
import { MapPin, Award, TrendingUp, Shield } from "lucide-react";
import founderImage from "@/assets/founder-transparent.png";

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
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[15%] w-40 h-40 rounded-full bg-leaf-200 opacity-30 blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
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

        {/* Founder Section — DO NOT Lazy Load to avoid visible popping */}
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
                src={founderImage}
                alt="Anil Kumar Singhal - Founder of LLK International"
                className="h-full w-auto object-contain"
                width="500"
                height="600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold text-spice-500 uppercase tracking-wider mb-2">
                  Meet Our Founder
                </h3>
                <h2 className="font-serif font-bold text-3xl md:text-4xl mb-2 text-gray-900">
                  Mr. Anil Kumar Singhal
                </h2>
                <p className="text-spice-600 font-medium mb-4">Founder</p>
                <div className="w-16 h-1 bg-gradient-to-r from-spice-600 to-leaf-600 mb-6" />

                <p className="text-base text-gray-700 mb-6 leading-relaxed text-justify">
                  Anil Kumar Singhal, Founder of LLK International, brings over 28 years of experience in the Indian spice industry, supplying premium-quality spices to both domestic manufacturers, wholesalers, and private label brands as well as global importers across multiple countries.
                </p>

                <p className="text-base text-gray-600 leading-relaxed mb-6 text-justify">
                  Starting from Unjha, the spice capital of India, he built the company on strong sourcing networks, strict quality control, and long-term business trust. Under his leadership, LLK International has evolved from traditional trading into a reliable, process-driven supplier offering cleaned, graded, and export-standard spice solutions for bulk buyers.
                </p>

                <p className="text-base text-gray-600 leading-relaxed mb-8 italic text-justify">
                  His core philosophy remains simple: deliver spices that are valued not just for price, but for purity, consistency, and integrity.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-spice-200 to-transparent" />
                  <p className="text-sm font-semibold text-spice-700">
                    28+ Years of Excellence
                  </p>
                  <div className="flex-1 h-px bg-gradient-to-l from-spice-200 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* About LLK Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 text-gray-900">
              About LLK International
            </h3>
            <p className="text-base text-gray-700 mb-6 leading-relaxed text-justify">
              Based in Unjha, a major spice hub of India, LLK International was founded with a mission to bring the world closer to authentic Indian spices. Our network of farmers and processing partners ensures consistent purity, flavour, and export-grade quality.
            </p>
            <p className="text-base text-gray-700 leading-relaxed text-justify">
              Every batch we ship meets international standards for safety, moisture, and packaging integrity. From cumin and fennel to sesame and psyllium, we deliver spices that global buyers trust.
            </p>
          </motion.div>

          {/* Grid Items — Lazy Loaded */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-spice-100"
            >
              <MapPin className="text-spice-600 mb-3" size={32} loading="lazy" />
              <h3 className="font-serif font-bold text-lg mb-2 text-spice-700">
                Located in Unjha
              </h3>
              <p className="text-sm text-gray-600">
                India's premier spice trading hub
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-leaf-100"
            >
              <Award className="text-leaf-600 mb-3" size={32} loading="lazy" />
              <h3 className="font-serif font-bold text-lg mb-2 text-leaf-700">
                Export Quality
              </h3>
              <p className="text-sm text-gray-600">International standards certified</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-spice-100"
            >
              <TrendingUp className="text-spice-600 mb-3" size={32} loading="lazy" />
              <h3 className="font-serif font-bold text-lg mb-2 text-spice-700">
                Trusted Network
              </h3>
              <p className="text-sm text-gray-600">Direct farmer partnerships</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-leaf-100"
            >
              <Shield className="text-leaf-600 mb-3" size={32} loading="lazy" />
              <h3 className="font-serif font-bold text-lg mb-2 text-leaf-700">
                Quality Assured
              </h3>
              <p className="text-sm text-gray-600">Rigorous safety testing</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

