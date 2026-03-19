import { useEffect, useRef } from "react";

const PARTICLES = [
  { size: 5, color: "#d97706", opacity: 0.4, duration: 18, delay: 0,  left: "8%",  shape: "circle" },
  { size: 3, color: "#b45309", opacity: 0.3, duration: 22, delay: 3,  left: "18%", shape: "circle" },
  { size: 6, color: "#f59e0b", opacity: 0.25,duration: 16, delay: 6,  left: "28%", shape: "square" },
  { size: 4, color: "#78350f", opacity: 0.35,duration: 24, delay: 1,  left: "38%", shape: "circle" },
  { size: 5, color: "#d97706", opacity: 0.3, duration: 20, delay: 8,  left: "48%", shape: "diamond" },
  { size: 3, color: "#f59e0b", opacity: 0.4, duration: 19, delay: 4,  left: "58%", shape: "circle" },
  { size: 7, color: "#b45309", opacity: 0.2, duration: 26, delay: 2,  left: "68%", shape: "circle" },
  { size: 4, color: "#d97706", opacity: 0.35,duration: 21, delay: 9,  left: "78%", shape: "square" },
  { size: 5, color: "#f59e0b", opacity: 0.3, duration: 17, delay: 5,  left: "88%", shape: "circle" },
  { size: 3, color: "#78350f", opacity: 0.4, duration: 23, delay: 7,  left: "95%", shape: "circle" },
  { size: 4, color: "#d97706", opacity: 0.25,duration: 25, delay: 11, left: "13%", shape: "diamond" },
  { size: 6, color: "#f59e0b", opacity: 0.2, duration: 28, delay: 13, left: "73%", shape: "circle" },
];

const FloatingElements = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes llk-float {
          0%   { transform: translateY(105vh) rotate(0deg);   opacity: 0; }
          8%   { opacity: var(--op); }
          90%  { opacity: var(--op); }
          100% { transform: translateY(-10vh) rotate(var(--rot)); opacity: 0; }
        }
        .llk-particle {
          position: absolute;
          bottom: -20px;
          will-change: transform, opacity;
          animation: llk-float var(--dur) var(--delay) linear infinite;
          opacity: 0;
        }
      `}</style>

      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="llk-particle"
          style={{
            left: p.left,
            "--dur": `${p.duration}s`,
            "--delay": `${p.delay}s`,
            "--op": p.opacity,
            "--rot": `${120 + i * 30}deg`,
          } as React.CSSProperties}
        >
          {p.shape === "circle" && (
            <div style={{
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: p.color,
              opacity: p.opacity,
            }} />
          )}
          {p.shape === "square" && (
            <div style={{
              width: p.size,
              height: p.size,
              borderRadius: "1px",
              background: p.color,
              opacity: p.opacity,
            }} />
          )}
          {p.shape === "diamond" && (
            <div style={{
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: p.opacity,
              transform: "rotate(45deg)",
            }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
