const SPICES = [
  // Cumin seed — thin oval
  {
    svg: `<ellipse cx="10" cy="4" rx="9" ry="3.5" fill="#92400e" transform="rotate(-20 10 4)"/>
          <line x1="2" y1="5" x2="18" y2="3" stroke="#78350f" stroke-width="0.5" opacity="0.6"/>`,
    w: 22, h: 14, duration: 22, delay: 0, left: "7%", opacity: 0.7,
  },
  // Peppercorn
  {
    svg: `<circle cx="7" cy="7" r="6" fill="#1c0a00"/>
          <circle cx="5" cy="5" r="1.5" fill="#2d1200" opacity="0.6"/>
          <circle cx="9" cy="8" r="1" fill="#2d1200" opacity="0.4"/>`,
    w: 14, h: 14, duration: 18, delay: 4, left: "17%", opacity: 0.65,
  },
  // Star anise
  {
    svg: `<path d="M12,2 L13.5,9 L20,8 L14.5,12 L17,19 L12,15 L7,19 L9.5,12 L4,8 L10.5,9 Z" fill="#7c2d12"/>
          <circle cx="12" cy="12" r="2.5" fill="#92400e"/>`,
    w: 24, h: 24, duration: 26, delay: 1, left: "27%", opacity: 0.7,
  },
  // Fennel seed
  {
    svg: `<ellipse cx="8" cy="5" rx="7" ry="4" fill="#3f6212" transform="rotate(15 8 5)"/>
          <line x1="2" y1="6" x2="14" y2="4" stroke="#365314" stroke-width="0.6" opacity="0.5"/>`,
    w: 18, h: 14, duration: 20, delay: 7, left: "37%", opacity: 0.65,
  },
  // Clove
  {
    svg: `<ellipse cx="6" cy="12" rx="4.5" ry="8" fill="#431407"/>
          <circle cx="6" cy="4" r="3.5" fill="#7c2d12"/>`,
    w: 12, h: 22, duration: 24, delay: 2, left: "47%", opacity: 0.7,
  },
  // Cumin variant
  {
    svg: `<ellipse cx="10" cy="4" rx="9" ry="3" fill="#a16207" transform="rotate(10 10 4)"/>
          <line x1="2" y1="4.5" x2="18" y2="3.5" stroke="#854d0e" stroke-width="0.5" opacity="0.5"/>`,
    w: 22, h: 12, duration: 19, delay: 9, left: "57%", opacity: 0.65,
  },
  // Peppercorn variant
  {
    svg: `<circle cx="7" cy="7" r="6" fill="#292524"/>
          <circle cx="5" cy="5.5" r="1.2" fill="#44403c" opacity="0.5"/>`,
    w: 14, h: 14, duration: 23, delay: 5, left: "67%", opacity: 0.6,
  },
  // Star anise small
  {
    svg: `<path d="M9,1 L10.2,7 L16,6.5 L11.5,9.5 L13.5,15 L9,11.5 L4.5,15 L6.5,9.5 L2,6.5 L7.8,7 Z" fill="#9a3412"/>
          <circle cx="9" cy="9" r="2" fill="#c2410c"/>`,
    w: 18, h: 18, duration: 28, delay: 12, left: "77%", opacity: 0.65,
  },
  // Fennel variant
  {
    svg: `<ellipse cx="7" cy="4.5" rx="6.5" ry="3.5" fill="#4d7c0f" transform="rotate(-10 7 4.5)"/>`,
    w: 16, h: 12, duration: 21, delay: 3, left: "87%", opacity: 0.6,
  },
  // Clove variant
  {
    svg: `<ellipse cx="5" cy="11" rx="4" ry="7.5" fill="#57180b"/>
          <circle cx="5" cy="3.5" r="3" fill="#9a3412"/>`,
    w: 10, h: 20, duration: 25, delay: 15, left: "93%", opacity: 0.6,
  },
  // Extra cumin
  {
    svg: `<ellipse cx="10" cy="4" rx="9" ry="3" fill="#b45309" transform="rotate(-35 10 4)"/>`,
    w: 22, h: 14, duration: 17, delay: 10, left: "12%", opacity: 0.55,
  },
  // Extra peppercorn
  {
    svg: `<circle cx="6" cy="6" r="5.5" fill="#1c1917"/>
          <circle cx="4.5" cy="4.5" r="1" fill="#292524" opacity="0.5"/>`,
    w: 12, h: 12, duration: 30, delay: 17, left: "62%", opacity: 0.5,
  },
  // Extra star anise
  {
    svg: `<path d="M12,2 L13.5,9 L20,8 L14.5,12 L17,19 L12,15 L7,19 L9.5,12 L4,8 L10.5,9 Z" fill="#92400e"/>
          <circle cx="12" cy="12" r="2" fill="#b45309"/>`,
    w: 20, h: 20, duration: 22, delay: 6, left: "42%", opacity: 0.6,
  },
  // Extra fennel
  {
    svg: `<ellipse cx="8" cy="5" rx="7" ry="3.5" fill="#365314" transform="rotate(25 8 5)"/>`,
    w: 18, h: 14, duration: 27, delay: 13, left: "72%", opacity: 0.55,
  },
  // Extra clove
  {
    svg: `<ellipse cx="6" cy="12" rx="4" ry="7" fill="#7c2d12"/>
          <circle cx="6" cy="5" r="3" fill="#9a3412"/>`,
    w: 12, h: 22, duration: 20, delay: 8, left: "32%", opacity: 0.6,
  },
];

const FloatingElements = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 50,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes llk-spice-fall {
          0% {
            transform: translateY(-10vh) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          8% {
            opacity: var(--op);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(var(--drift));
            opacity: var(--op);
          }
          92% {
            opacity: var(--op);
          }
          100% {
            transform: translateY(108vh) rotate(var(--rot)) translateX(var(--drift));
            opacity: 0;
          }
        }

        .llk-spice {
          position: absolute;
          top: -30px;
          will-change: transform, opacity;
          animation: llk-spice-fall var(--dur) var(--delay) linear infinite;
          opacity: 0;
          filter: drop-shadow(0 0 3px rgba(245, 158, 11, 0.4)) blur(0.2px);
        }
      `}</style>

      {SPICES.map((s, i) => (
        <div
          key={i}
          className="llk-spice"
          style={{
            left: s.left,
            "--dur":   `${s.duration}s`,
            "--delay": `${s.delay}s`,
            "--op":    s.opacity,
            "--rot":   `${100 + i * 25}deg`,
            "--drift": `${(i % 2 === 0 ? 1 : -1) * (10 + i * 3)}px`,
          } as React.CSSProperties}
        >
          <svg
            width={s.w}
            height={s.h}
            viewBox={`0 0 ${s.w} ${s.h}`}
            xmlns="http://www.w3.org/2000/svg"
            dangerouslySetInnerHTML={{ __html: s.svg }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
