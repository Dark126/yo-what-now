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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .llk-hero {
          min-height: 100vh;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .llk-hero::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 65vw;
          height: 120vh;
          background: linear-gradient(135deg, #b45309 0%, #92400e 40%, #78350f 100%);
          clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          opacity: 0.12;
          z-index: 0;
        }

        .llk-hero::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 50%;
          height: 100%;
          background:
            linear-gradient(to right, #0a0a0a 0%, transparent 30%),
            url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80') center/cover no-repeat;
          z-index: 0;
          opacity: 0.55;
        }

        .llk-hero-inner {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          align-items: center;
          padding: 120px 7vw 80px;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
        }

        .llk-left {
          max-width: 640px;
          width: 100%;
        }

        .llk-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(180, 83, 9, 0.15);
          border: 1px solid rgba(180, 83, 9, 0.4);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f59e0b;
          opacity: 0;
          transform: translateY(20px);
        }

        .llk-tag-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #f59e0b;
          animation: llk-pulse 2s infinite;
        }

        @keyframes llk-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }

        .llk-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #fafafa;
          margin: 0 0 12px;
          opacity: 0;
          transform: translateY(30px);
        }

        .llk-h1-accent {
          display: block;
          background: linear-gradient(90deg, #f59e0b 0%, #ef4444 50%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .llk-h1-sub {
          display: block;
          color: rgba(250, 250, 250, 0.35);
          font-size: 0.55em;
          font-weight: 700;
          letter-spacing: 0.01em;
          margin-top: 4px;
        }

        .llk-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(1rem, 1.5vw, 1.1rem);
          font-weight: 300;
          color: rgba(250, 250, 250, 0.55);
          line-height: 1.8;
          max-width: 500px;
          margin: 24px 0 40px;
          opacity: 0;
          transform: translateY(20px);
        }

        .llk-sub strong {
          color: rgba(250, 250, 250, 0.85);
          font-weight: 500;
        }

        .llk-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
        }

        .llk-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #d97706, #b45309);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.06em;
          padding: 14px 30px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(217, 119, 6, 0.35);
          text-transform: uppercase;
        }

        .llk-btn-primary:hover {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(217, 119, 6, 0.5);
        }

        .llk-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: rgba(250, 250, 250, 0.8);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.06em;
          padding: 14px 30px;
          border-radius: 6px;
          border: 1px solid rgba(250, 250, 250, 0.2);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .llk-btn-secondary:hover {
          background: rgba(250, 250, 250, 0.07);
          border-color: rgba(250, 250, 250, 0.4);
          color: #fff;
        }

        .llk-stats {
          display: flex;
          gap: 40px;
          margin-top: 64px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.08);
          opacity: 0;
          transform: translateY(20px);
          flex-wrap: wrap;
        }

        .llk-stat-val {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #f59e0b;
          line-height: 1;
        }

        .llk-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-top: 4px;
        }

        .llk-ticker {
          position: relative;
          z-index: 3;
          background: rgba(180, 83, 9, 0.1);
          border-top: 1px solid rgba(180, 83, 9, 0.25);
          border-bottom: 1px solid rgba(180, 83, 9, 0.25);
          padding: 12px 0;
          overflow: hidden;
          white-space: nowrap;
        }

        .llk-ticker-track {
          display: inline-flex;
          gap: 3rem;
          animation: llk-ticker 30s linear infinite;
        }

        .llk-ticker-track:hover { animation-play-state: paused; }

        @keyframes llk-ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .llk-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245, 158, 11, 0.7);
          font-weight: 500;
        }

        .llk-ticker-item::before {
          content: '✦';
          font-size: 8px;
          color: #f59e0b;
        }

        .llk-hero-inner .llk-tag     { animation: llk-fadeup 0.6s 0.2s forwards; }
        .llk-hero-inner .llk-h1      { animation: llk-fadeup 0.7s 0.35s forwards; }
        .llk-hero-inner .llk-sub     { animation: llk-fadeup 0.7s 0.5s forwards; }
        .llk-hero-inner .llk-actions { animation: llk-fadeup 0.7s 0.65s forwards; }
        .llk-hero-inner .llk-stats   { animation: llk-fadeup 0.7s 0.8s forwards; }

        @keyframes llk-fadeup {
          to { opacity: 1; transform: translateY(0); }
        }

        .llk-scroll-cue {
          position: absolute;
          bottom: 32px;
          left: 7vw;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: llk-fadeup 0.6s 1.2s forwards;
          opacity: 0;
        }

        .llk-scroll-line {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, #f59e0b, transparent);
        }

        .llk-scroll-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        @media (max-width: 768px) {
          .llk-hero::after { width: 100%; opacity: 0.15; }
          .llk-hero-inner { padding: 100px 6vw 60px; }
          .llk-stats { gap: 24px; margin-top: 40px; }
          .llk-actions { flex-direction: column; }
          .llk-btn-primary, .llk-btn-secondary { text-align: center; justify-content: center; }
        }
      `}</style>

      <section className="llk-hero" id="home">
        <div className="llk-hero-inner">
          <div className="llk-left">

            <div className="llk-tag">
              <span className="llk-tag-dot" />
              Unjha, Gujarat · Est. 1996
            </div>

            <h1 className="llk-h1">
              <span className="llk-h1-accent">Premium Spices</span>
              From India's
              <span className="llk-h1-sub">Spice Capital to the World</span>
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
                <div key={s.label}>
                  <div className="llk-stat-val">{s.value}</div>
                  <div className="llk-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="llk-scroll-cue">
          <div className="llk-scroll-line" />
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
