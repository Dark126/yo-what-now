import { motion } from "framer-motion";
import { MapPin, Award, TrendingUp, Shield } from "lucide-react";

const features = [
  { icon: MapPin,     title: "Located in Unjha",  desc: "India's premier spice trading hub",     color: "#d97706" },
  { icon: Award,      title: "Export Quality",     desc: "Certified international standards",      color: "#b45309" },
  { icon: TrendingUp, title: "Trusted Network",    desc: "Direct farmer partnerships",             color: "#d97706" },
  { icon: Shield,     title: "Quality Assured",    desc: "Rigorous safety testing every batch",    color: "#b45309" },
];

const About = () => {
  return (
    <section id="about" style={{ background: "#1a0a00", position: "relative", overflow: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* Dot grid pattern */
        .about-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          background-image: radial-gradient(circle, #f59e0b 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* Warm glow blobs */
        .about-glow-1 {
          position: absolute;
          top: -10%;
          right: -5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(180,83,9,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-glow-2 {
          position: absolute;
          bottom: -10%;
          left: -5%;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Section label pill */
        .about-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(217,119,6,0.1);
          border: 1px solid rgba(217,119,6,0.25);
          padding: 6px 18px;
          border-radius: 2px;
          margin-bottom: 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f59e0b;
        }

        /* Founder card */
        .about-founder-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(245,158,11,0.12);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 12px 60px rgba(0,0,0,0.4);
        }

        .about-founder-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* Image side */
        .about-founder-img-side {
          position: relative;
          background: linear-gradient(135deg, #2d1200, #1a0a00);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: 460px;
          overflow: hidden;
        }

        .about-founder-img-side::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 50% 100%, rgba(217,119,6,0.2) 0%, transparent 60%);
        }

        /* Decorative diagonal stripe */
        .about-founder-img-side::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #d97706, transparent);
        }

        .about-founder-img {
          position: relative;
          z-index: 2;
          width: 85%;
          max-width: 320px;
          object-fit: contain;
          filter: drop-shadow(0 -8px 32px rgba(217,119,6,0.15));
        }

        /* Floating years badge */
        .about-years-badge {
          position: absolute;
          top: 28px;
          left: 28px;
          z-index: 3;
          background: rgba(217,119,6,0.15);
          border: 1px solid rgba(217,119,6,0.3);
          border-radius: 2px;
          padding: 10px 16px;
          text-align: center;
        }

        .about-years-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #f59e0b;
          line-height: 1;
          display: block;
        }

        .about-years-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(245,158,11,0.6);
          display: block;
          margin-top: 4px;
        }

        /* Text side */
        .about-founder-text-side {
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-founder-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d97706;
          margin-bottom: 10px;
        }

        .about-founder-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #fafaf0;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .about-founder-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: rgba(245,158,11,0.6);
          margin-bottom: 28px;
        }

        .about-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #d97706, transparent);
          margin-bottom: 28px;
        }

        .about-founder-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(255,240,210,0.55);
          line-height: 1.9;
          margin-bottom: 20px;
        }

        .about-founder-bio strong {
          color: rgba(255,240,210,0.85);
          font-weight: 500;
        }

        .about-founder-quote {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1rem;
          color: rgba(245,158,11,0.55);
          line-height: 1.8;
          padding-left: 16px;
          border-left: 2px solid rgba(217,119,6,0.3);
          margin-top: 8px;
        }

        /* Feature cards */
        .about-features {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(245,158,11,0.08);
          border: 1px solid rgba(245,158,11,0.08);
          border-radius: 4px;
          overflow: hidden;
          margin-top: 64px;
        }

        .about-feature-card {
          background: rgba(255,255,255,0.02);
          padding: 32px 28px;
          transition: background 0.3s ease;
        }

        .about-feature-card:hover {
          background: rgba(217,119,6,0.06);
        }

        .about-feature-icon {
          width: 42px; height: 42px;
          border-radius: 3px;
          background: rgba(217,119,6,0.1);
          border: 1px solid rgba(217,119,6,0.15);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }

        .about-feature-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fafaf0;
          margin-bottom: 6px;
        }

        .about-feature-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 300;
          color: rgba(255,240,210,0.4);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .about-founder-grid { grid-template-columns: 1fr; }
          .about-founder-img-side { min-height: 300px; }
          .about-founder-text-side { padding: 36px 28px; }
          .about-features { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .about-features { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Background decorations */}
      <div className="about-pattern" />
      <div className="about-glow-1" />
      <div className="about-glow-2" />

      <div className="spice-container section" style={{ position: "relative", zIndex: 2 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <div className="about-label">
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
            Our Story
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize
