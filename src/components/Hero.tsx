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
          background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
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
          margi
