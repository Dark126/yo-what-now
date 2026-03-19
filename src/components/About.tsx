import { motion } from "framer-motion";
import { MapPin, Award, TrendingUp, Shield } from "lucide-react";

const features = [
  { icon: MapPin,    title: "Located in Unjha",  desc: "India's premier spice trading hub",     color: "#d97706" },
  { icon: Award,     title: "Export Quality",     desc: "Certified international standards",      color: "#b45309" },
  { icon: TrendingUp,title: "Trusted Network",    desc: "Direct farmer partnerships",             color: "#d97706" },
  { icon: Shield,    title: "Quality Assured",    desc: "Rigorous safety testing every batch",    color: "#b45309" },
];

const About = () => {
  return (
    <section id="about" className="section" style={{ background: "#fafaf8" }}>
      <div className="spice-container">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(217,119,6,0.08)", border: "1px solid rgba(217,119,6,0.2)",
            padding: "6px 18px", borderRadius: "100px", marginBottom: "16px"
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#d97706", display: "inline-block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#d97706", fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>
              Our Story
            </span>
          </div>
          <h2 className="section-title" style={{ color: "#111" }}>
            About <span style={{ color: "#d97706" }}>LLK International</span>
          </h2>
          <p style={{ maxWidth: "520px", margin: "16px auto 0", color: "#6b7280", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem" }}>
            Based in Unjha — India's spice capital — we bring authentic, farm-fresh spices to the world with uncompromising quality.
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            background: "#fff",
            borderRadius: "20px",
            border: "1px solid rgba(217,119,6,0.12)",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
            marginBottom: "64px",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {/* Image side */}
            <div style={{
              background: "linear-gradient(135deg, #fffbf0, #fef3c7)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "40px", minHeight: "400px"
            }}>
              <motion.img
                src="/founder-transparent.webp"
                alt="Anil Kumar Singhal — Founder, LLK International"
                style={{ width: "100%", maxWidth: "340px", objectFit: "contain" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                loading="eager"
              />
            </div>

            {/* Text side */}
            <div style={{ padding: "48px 52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#d97706", marginBottom: "10px", fontFamily: "'DM Sans', sans-serif" }}>
                Meet Our Founder
              </p>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111", marginBottom: "4px", letterSpacing: "-0.02em" }}>
                Mr. Anil Kumar Singhal
              </h2>
              <p style={{ color: "#d97706", fontWeight: 500, marginBottom: "20px", fontFamily: "'DM Sans', sans-serif" }}>Founder & Director</p>
              <div style={{ width: "48px", height: "3px", background: "linear-gradient(90deg, #d97706, #b45309)", borderRadius: "2px", marginBottom: "28px" }} />

              <p style={{ color: "#4b5563", lineHeight: 1.85, marginBottom: "16px", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem" }}>
                With over <strong style={{ color: "#111", fontWeight: 500 }}>28 years of experience</strong> in the Indian spice industry, Anil Kumar Singhal built LLK International on a foundation of trust, purity, and direct farmer relationships.
              </p>
              <p style={{ color: "#4b5563", lineHeight: 1.85, marginBottom: "28px", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", fontStyle: "italic" }}>
                "Deliver spices valued not just for price, but for purity, consistency, and integrity."
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(217,119,6,0.3), transparent)" }} />
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#d97706", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>28+ Years of Excellence</span>
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(270deg, rgba(217,119,6,0.3), transparent)" }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", maxWidth: "700px", margin: "0 auto" }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(217,119,6,0.15)" }}
              style={{
                background: "#fff",
                border: "1px solid rgba(217,119,6,0.1)",
                borderRadius: "14px",
                padding: "28px 24px",
                cursor: "default",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "10px",
                background: "rgba(217,119,6,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px"
              }}>
                <f.icon size={22} color={f.color} />
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#111", marginBottom: "6px" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          #about .grid-founder { grid-template-columns: 1fr !important; }
          #about .founder-img  { min-height: 280px !important; }
          #about .founder-text { padding: 32px 24px !important; }
          #about .feat-grid    { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
