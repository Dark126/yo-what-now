import { motion } from "framer-motion";
import { MapPin, Award, TrendingUp, Shield } from "lucide-react";
import founderImage from "@/assets/founder-bw.jpg";

const About = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-white to-leaf-50 relative overflow-hidden">
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
            ease: "easeInOut"
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
            delay: 1
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
              About LLK International
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Based in Unjha, a major spice hub of India, LLK International was founded with a mission to bring the world closer to authentic Indian spices. Our network of farmers and processing partners ensures consistent purity, flavour, and export-grade quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every batch we ship meets international standards for safety, moisture, and packaging integrity. From cumin and fennel to sesame and psyllium, we deliver spices that global buyers trust.
            </p>
          </motion.div>

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
              <MapPin className="text-spice-600 mb-3" size={32} />
              <h3 className="font-serif font-bold text-lg mb-2 text-spice-700">Located in Unjha</h3>
              <p className="text-sm text-gray-600">India's premier spice trading hub</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-leaf-100"
            >
              <Award className="text-leaf-600 mb-3" size={32} />
              <h3 className="font-serif font-bold text-lg mb-2 text-leaf-700">Export Quality</h3>
              <p className="text-sm text-gray-600">International standards certified</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-spice-100"
            >
              <TrendingUp className="text-spice-600 mb-3" size={32} />
              <h3 className="font-serif font-bold text-lg mb-2 text-spice-700">Trusted Network</h3>
              <p className="text-sm text-gray-600">Direct farmer partnerships</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-leaf-100"
            >
              <Shield className="text-leaf-600 mb-3" size={32} />
              <h3 className="font-serif font-bold text-lg mb-2 text-leaf-700">Quality Assured</h3>
              <p className="text-sm text-gray-600">Rigorous safety testing</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Meet Our Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden border border-spice-100"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-[400px] md:h-auto overflow-hidden">
              <motion.img
                src={founderImage}
                alt="Anil Kumar Singhal - Founder of LLK International"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
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
                  Anil Kumar Singhal
                </h2>
                <p className="text-spice-600 font-medium mb-4">Founder & Managing Director</p>
                <div className="w-16 h-1 bg-gradient-to-r from-spice-600 to-leaf-600 mb-6" />
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With over 22 years of deep expertise in the spice industry, our founder has built LLK International on the pillars of quality, integrity, and customer trust. His vision has transformed our company into a leading exporter of premium Indian spices.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  His hands-on approach and commitment to maintaining the highest standards have established lasting relationships with farmers, processors, and international clients. Under his guidance, LLK International continues to set benchmarks in the spice export industry.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-spice-200 to-transparent" />
                  <p className="text-sm font-semibold text-spice-700">
                    22+ Years of Excellence
                  </p>
                  <div className="flex-1 h-px bg-gradient-to-l from-spice-200 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
