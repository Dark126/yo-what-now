import { useEffect, useRef } from "react";

const stats = [
  { value: "28+", label: "Years of Excellence" },
  { value: "8+", label: "Premium Spices" },
  { value: "100%", label: "Export Quality" },
  { value: "Unjha", label: "Spice Capital" },
];

const spices = [
  "Cumin Seeds", "Fennel Seeds", "Sesame Seeds",
  "Cardamom", "Black Pepper", "Psyllium Husk",
  "Cinnamon", "Cloves",
];

const Hero = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("llk-animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".llk-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');

        .llk-hero {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Full bleed background image */
        .llk-hero-bg {
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=1600&q=85') center/cover no-repeat;
          z-index: 0;
          transform: scale(1.04);
          animation: llk-slow-zoom 18s ease-in-out infinite alternate;
        }

        @keyframes llk-slow-zoom {
          from { transform: scale(1.04); }
          to   { transform: scale(1.12); }
        }

        /* Dark earthy overlay */
        .llk-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(105deg, rgba(20,10,5,0.93) 0%, rgba(30,15,5,0.82) 45%, rgba(10,5,2,0.55) 100%);
          z-index: 1;
        }

        /* Decorative pattern */
        .llk-hero-pattern {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.04;
          background-image: radial-gradient(circle, #f59e0b 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* Warm side glow */
        .llk-hero-glow {
          position: absolute;
          top: 0; right: 0;
          width: 55%;
          height: 100%;
          background: radial-gradient(ellipse at 80% 40%, rgba(180,83,9,0.18) 0%, transparent 65%);
          z-index: 2;
        }

        .llk-hero-inner {
          position: relative;
          z-index: 3;
          flex: 1;
          display: flex;
          align-items: center;
          padding: 130px 7vw 90px;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
        }

        .llk-left {
          max-width: 700px;
          width: 100%;
        }

        /* Decorative top label */
        .llk-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(180, 83, 9, 0.18);
          border: 1px solid rgba(245, 158, 11, 0.35);
          padding: 7px 20px;
          border-radius: 2px;
          margin-bottom: 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #fbbf24;
          opacity: 0;
          transform: translateY(20px);
        }

        .llk-tag-line {
          width: 24px;
          height: 1px;
          background: #f59e0b;
        }

        /* Main heading — big & dramatic */
        .llk-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.4rem, 7vw, 6.5rem);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.01em;
          color: #fafaf0;
          margin: 0 0 8px;
          opacity: 0;
          transform: translateY(30px);
        }

        .llk-h1-accent {
          display: block;
          font-style: italic;
          color: #f59e0b;
          text-shadow: 0 0 60px rgba(245,158,11,0.3);
        }

        .llk-h1-sub {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-style: normal;
          font-size: 0.28em;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(250,240,220,0.45);
          margin-top: 16px;
        }

        /* Description */
        .llk-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(1rem, 1.4vw, 1.1rem);
          font-weight: 300;
          color: rgba(250, 240, 210, 0.6);
          line-height: 1.9;
          max-width: 520px;
          margin: 28px 0 44px;
          opacity: 0;
          transform: translateY(20px);
        }

        .llk-sub strong {
          color: rgba(250, 240, 210, 0.9);
          font-weight: 500;
        }

        /* CTA buttons */
        .llk-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
        }

        .llk-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #d97706, #92400e);
          color: #fff8e7;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          padding: 15px 34px;
          border-radius: 2px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.35s ease;
          box-shadow: 0 6px 28px rgba(146, 64, 14, 0.45);
          text-transform: uppercase;
        }

        .llk-btn-primary:hover {
          background: linear-gradient(135deg, #f59e0b, #b45309);
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(146, 64, 14, 0.55);
        }

        .llk-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: rgba(250, 240, 210, 0.75);
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          padding: 15px 34px;
          border-radius: 2px;
          border: 1px solid rgba(245, 158, 11, 0.3);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.35s ease;
          text-transform: uppercase;
        }

        .llk-btn-secondary:hover {
          background: rgba(245, 158, 11, 0.08);
          border-color: rgba(245, 158, 11, 0.6);
          color: #fbbf24;
          transform: translateY(-3px);
        }

        /* Stats row */
        .llk-stats {
          display: flex;
          gap: 0;
          margin-top: 70px;
          padding-top: 40px;
          border-top: 1px solid rgba(245,158,11,0.15);
          opacity: 0;
          transform: translateY(20px);
          flex-wrap: wrap;
        }

        .llk-stat {
          flex: 1;
          min-width: 100px;
          padding-right: 32px;
          position: relative;
        }

        .llk-stat:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 16px;
          top: 4px;
          height: 40px;
          width: 1px;
          background: rgba(245,158,11,0.15);
        }

        .llk-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #f59e0b;
          line-height: 1;
        }

        .llk-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,240,200,0.35);
          margin-top: 6px;
        }

        /* Ticker */
        .llk-ticker {
          position: relative;
          z-index: 3;
          background: rgba(146, 64, 14, 0.85);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(245,158,11,0.2);
          padding: 13px 0;
          overflow: hidden;
          white-space: nowrap;
        }

        .llk-ticker-track {
          display: inline-flex;
          gap: 3.5rem;
          animation: llk-ticker 28s linear infinite;
        }

        .llk-ticker-track:hover { animation-play-state: paused; }

        @keyframes llk-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .llk-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 240, 200, 0.8);
          font-weight: 500;
        }

        .llk-ticker-item::before {
          content: '✦';
          font-size: 7px;
          color: #fbbf24;
        }

        /* Scroll cue */
        .llk-scroll-cue {
          position: absolute;
          bottom: 36px;
          left: 7vw;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: llk-fadeup 0.6s 1.3s forwards;
          opacity: 0;
        }

        .llk-scroll-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #f59e0b;
          animation: llk-blink 2s ease infinite;
        }

        @keyframes llk-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        .llk-scroll-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,240,200,0.3);
        }

        /* Entrance animations */
        .llk-hero-inner .llk-tag     { animation: llk-fadeup 0.6s 0.2s forwards; }
        .llk-hero-inner .llk-h1      { animation: llk-fadeup 0.8s 0.35s forwards; }
        .llk-hero-inner .llk-sub     { animation: llk-fadeup 0.7s 0.55s forwards; }
        .llk-hero-inner .llk-actions { animation: llk-fadeup 0.7s 0.72s forwards; }
        .llk-hero-inner .llk-stats   { animation: llk-fadeup 0.7s 0.9s forwards; }

        @keyframes llk-fadeup {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Decorative right side image frame */
        .llk-frame {
          position: absolute;
          right: 6vw;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          width: clamp(220px, 28vw, 420px);
          animation: llk-fadeup 1s 0.6s forwards;
          opacity: 0;
        }

        .llk-frame-inner {
          position: relative;
          border: 1px solid rgba(245,158,11,0.25);
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 3/4;
        }

        .llk-frame-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: sepia(0.25) saturate(1.2);
          transition: transform 0.8s ease;
        }

        .llk-frame-inner:hover img { transform: scale(1.05); }

        .llk-frame-inner::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20,10,5,0.6) 0%, transparent 50%);
        }

        .llk-frame-corner {
          position: absolute;
          width: 20px; height: 20px;
          border-color: #f59e0b;
          border-style: solid;
          z-index: 2;
        }
        .llk-frame-corner.tl { top: -6px; left: -6px; border-width: 2px 0 0 2px; }
        .llk-frame-corner.tr { top: -6px; right: -6px; border-width: 2px 2px 0 0; }
        .llk-frame-corner.bl { bottom: -6px; left: -6px; border-width: 0 0 2px 2px; }
        .llk-frame-corner.br { bottom: -6px; right: -6px; border-width: 0 2px 2px 0; }

        @media (max-width: 1024px) {
          .llk-frame { display: none; }
          .llk-hero-inner { padding: 110px 6vw 70px; }
        }

        @media (max-width: 768px) {
          .llk-stats { gap: 20px; margin-top: 44px; }
          .llk-actions { flex-direction: column; }
          .llk-btn-primary, .llk-btn-secondary { text-align: center; justify-content: center; }
        }
      `}</style>

      <section className="llk-hero" id="home">

        {/* Layered background */}
        <div className="llk-hero-bg" />
        <div className="llk-hero-overlay" />
        <div className="llk-hero-pattern" />
        <div className="llk-hero-glow" />

        <div className="llk-hero-inner">
          <div className="llk-left">

            <div className="llk-tag">
              <span className="llk-tag-line" />
              Unjha, Gujarat · Est. 1996
              <span className="llk-tag-line" />
            </div>

            <h1 className="llk-h1">
              <span className="llk-h1-accent">Premium Spices</span>
              From India's
              <span className="llk-h1-sub">— Spice Capital to the World —</span>
            </h1>

            <p className="llk-sub">
              LLK International sources the finest spices directly from{" "}
              <strong>trusted farms in Unjha</strong> — the spice capital of India.
              Every batch is export-quality, packed with purity and aroma.
            </p>

            <div className="llk-actions">
              <a href="#products" className="llk-btn-primary">
                Explore Products →
              </a>
              <a href="#contact" className="llk-btn-secondary">
                Request a Quote
              </a>
            </div>

            <div className="llk-stats">
              {stats.map((s) => (
                <div className="llk-stat" key={s.label}>
                  <div className="llk-stat-val">{s.value}</div>
                  <div className="llk-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative right frame */}
        <div className="llk-frame">
          <div className="llk-frame-inner">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
              alt="Spices from Unjha"
            />
          </div>
          <span className="llk-frame-corner tl" />
          <span className="llk-frame-corner tr" />
          <span className="llk-frame-corner bl" />
          <span className="llk-frame-corner br" />
        </div>

        <div className="llk-scroll-cue">
          <span className="llk-scroll-dot" />
          <span className="llk-scroll-text">Scroll to explore</span>
        </div>
      </section>

      <div className="llk-ticker">
        <div className="llk-ticker-track" ref={tickerRef}>
          {[...spices, ...spices].map((s, i) => (
            <span className="llk-ticker-item" key={i}>{s}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
