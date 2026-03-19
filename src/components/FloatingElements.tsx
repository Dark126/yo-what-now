const SPICES = [
  // Cumin seed — elongated ridged oval like in your photo
  {
    svg: `
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#92400e"/>
          <stop offset="50%" stop-color="#6b2d06"/>
          <stop offset="100%" stop-color="#3d1a03"/>
        </linearGradient>
      </defs>
      <ellipse cx="16" cy="7" rx="14" ry="5" fill="url(#g1)" transform="rotate(-15 16 7)"/>
      <line x1="4" y1="8" x2="28" y2="6" stroke="#2d1200" stroke-width="0.6" opacity="0.5"/>
      <line x1="6" y1="10" x2="26" y2="8" stroke="#2d1200" stroke-width="0.4" opacity="0.4"/>
      <line x1="8" y1="6" x2="24" y2="4" stroke="#b45309" stroke-width="0.3" opacity="0.3"/>
      <ellipse cx="16" cy="7" rx="14" ry="5" fill="none" stroke="#7c3410" stroke-width="0.5" transform="rotate(-15 16 7)" opacity="0.5"/>
    `,
    w: 32, h: 16, duration: 22, delay: 0, left: "8%", opacity: 0.8,
  },
  // Star anise — accurate 8-petal star from your photo
  {
    svg: `
      <defs>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#92400e"/>
          <stop offset="100%" stop-color="#431407"/>
        </linearGradient>
      </defs>
      <path d="M20,2 C20,2 18,8 20,12 C20,12 14,10 10,12 C10,12 12,6 10,2 C10,2 16,4 20,2Z" fill="url(#g2)"/>
      <path d="M28,10 C28,10 22,12 20,16 C20,16 16,10 12,10 C12,10 18,8 20,4 C20,4 24,8 28,10Z" fill="url(#g2)" opacity="0.9"/>
      <path d="M20,28 C20,28 18,22 16,20 C16,20 22,18 26,20 C26,20 22,24 20,28Z" fill="url(#g2)"/>
      <path d="M4,20 C4,20 10,18 12,14 C12,14 14,20 18,22 C18,22 12,24 4,20Z" fill="url(#g2)" opacity="0.9"/>
      <path d="M6,8 C6,8 12,10 16,8 C16,8 12,14 10,16 C10,16 6,12 6,8Z" fill="url(#g2)"/>
      <path d="M26,22 C26,22 20,20 18,22 C18,22 20,16 22,14 C22,14 26,18 26,22Z" fill="url(#g2)" opacity="0.9"/>
      <path d="M8,24 C8,24 14,22 16,26 C16,26 10,28 8,24Z" fill="url(#g2)"/>
      <path d="M26,6 C26,6 22,10 20,10 C20,10 22,4 26,6Z" fill="url(#g2)" opacity="0.9"/>
      <circle cx="16" cy="15" r="3.5" fill="#b45309"/>
      <circle cx="16" cy="15" r="2" fill="#d97706"/>
      <circle cx="16" cy="15" r="1" fill="#fbbf24" opacity="0.6"/>
    `,
    w: 32, h: 30, duration: 30, delay: 3, left: "22%", opacity: 0.75,
  },
  // Clove — from your photo: long stem with round bud on top
  {
    svg: `
      <defs>
        <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#57180b"/>
          <stop offset="100%" stop-color="#2d0a05"/>
        </linearGradient>
        <linearGradient id="g3b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c2d12"/>
          <stop offset="100%" stop-color="#431407"/>
        </linearGradient>
      </defs>
      <ellipse cx="8" cy="22" rx="3.5" ry="14" fill="url(#g3)" transform="rotate(5 8 22)"/>
      <line x1="7" y1="10" x2="9" y2="36" stroke="#3d0e04" stroke-width="0.8" opacity="0.5"/>
      <ellipse cx="8" cy="7" rx="5.5" ry="6" fill="url(#g3b)"/>
      <ellipse cx="8" cy="5" rx="3" ry="2.5" fill="#9a3412" opacity="0.7"/>
      <ellipse cx="8" cy="22" rx="3.5" ry="14" fill="none" stroke="#7c2d12" stroke-width="0.5" transform="rotate(5 8 22)" opacity="0.4"/>
    `,
    w: 16, h: 36, duration: 24, delay: 6, left: "38%", opacity: 0.75,
  },
  // Fennel seed — small greenish oval with ridges
  {
    svg: `
      <defs>
        <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4d7c0f"/>
          <stop offset="100%" stop-color="#254d07"/>
        </linearGradient>
      </defs>
      <ellipse cx="12" cy="6" rx="10" ry="4.5" fill="url(#g4)" transform="rotate(10 12 6)"/>
      <line x1="3" y1="7" x2="21" y2="5" stroke="#1a3a05" stroke-width="0.6" opacity="0.5"/>
      <line x1="5" y1="9" x2="19" y2="7" stroke="#1a3a05" stroke-width="0.4" opacity="0.35"/>
      <line x1="5" y1="5" x2="19" y2="3" stroke="#6aad15" stroke-width="0.3" opacity="0.3"/>
      <ellipse cx="12" cy="6" rx="10" ry="4.5" fill="none" stroke="#365314" stroke-width="0.5" transform="rotate(10 12 6)" opacity="0.4"/>
    `,
    w: 26, h: 14, duration: 20, delay: 1, left: "52%", opacity: 0.7,
  },
  // Cinnamon stick — rolled bark from your photo
  {
    svg: `
      <defs>
        <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#92400e"/>
          <stop offset="30%" stop-color="#7c3410"/>
          <stop offset="60%" stop-color="#6b2d06"/>
          <stop offset="100%" stop-color="#431407"/>
        </linearGradient>
      </defs>
      <rect x="2" y="4" width="34" height="10" rx="5" ry="5" fill="url(#g5)"/>
      <ellipse cx="36" cy="9" rx="5" ry="5" fill="#5a1e08"/>
      <ellipse cx="36" cy="9" rx="3" ry="3" fill="#3d1203" opacity="0.8"/>
      <line x1="4" y1="7" x2="35" y2="7" stroke="#b45309" stroke-width="0.5" opacity="0.35"/>
      <line x1="4" y1="9" x2="35" y2="9" stroke="#3d1203" stroke-width="0.6" opacity="0.4"/>
      <line x1="4" y1="11" x2="35" y2="11" stroke="#b45309" stroke-width="0.4" opacity="0.3"/>
      <line x1="8" y1="5" x2="8" y2="13" stroke="#3d1203" stroke-width="0.5" opacity="0.25"/>
      <line x1="16" y1="5" x2="16" y2="13" stroke="#3d1203" stroke-width="0.5" opacity="0.25"/>
      <line x1="24" y1="5" x2="24" y2="13" stroke="#3d1203" stroke-width="0.5" opacity="0.25"/>
    `,
    w: 42, h: 18, duration: 26, delay: 8, left: "65%", opacity: 0.7,
  },
  // Peppercorn — round with surface texture
  {
    svg: `
      <defs>
        <radialGradient id="g6" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#3d2b1f"/>
          <stop offset="60%" stop-color="#1c1208"/>
          <stop offset="100%" stop-color="#0d0803"/>
        </radialGradient>
      </defs>
      <circle cx="10" cy="10" r="9" fill="url(#g6)"/>
      <circle cx="7" cy="7" r="2" fill="#2d1f14" opacity="0.5"/>
      <circle cx="13" cy="8" r="1.5" fill="#2d1f14" opacity="0.4"/>
      <circle cx="9" cy="13" r="1.2" fill="#2d1f14" opacity="0.35"/>
      <circle cx="14" cy="13" r="1" fill="#2d1f14" opacity="0.3"/>
      <circle cx="6" cy="12" r="0.8" fill="#2d1f14" opacity="0.3"/>
      <circle cx="10" cy="10" r="9" fill="none" stroke="#4a3525" stroke-width="0.5" opacity="0.4"/>
    `,
    w: 20, h: 20, duration: 18, delay: 11, left: "78%", opacity: 0.75,
  },
  // Cumin seed variant — slightly different angle
  {
    svg: `
      <defs>
        <linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a16207"/>
          <stop offset="50%" stop-color="#78350f"/>
          <stop offset="100%" stop-color="#431407"/>
        </linearGradient>
      </defs>
      <ellipse cx="14" cy="6" rx="12" ry="4.5" fill="url(#g7)" transform="rotate(20 14 6)"/>
      <line x1="3" y1="7" x2="25" y2="5" stroke="#2d1200" stroke-width="0.6" opacity="0.45"/>
      <line x1="5" y1="9" x2="23" y2="7" stroke="#2d1200" stroke-width="0.4" opacity="0.35"/>
      <line x1="5" y1="5" x2="23" y2="3" stroke="#d97706" stroke-width="0.3" opacity="0.25"/>
    `,
    w: 28, h: 14, duration: 23, delay: 15, left: "88%", opacity: 0.7,
  },
  // Small star anise
  {
    svg: `
      <defs>
        <linearGradient id="g8" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#9a3412"/>
          <stop offset="100%" stop-color="#431407"/>
        </linearGradient>
      </defs>
      <path d="M14,1 C14,1 12,6 14,9 C14,9 9,7 6,9 C6,9 8,4 6,1 C6,1 11,3 14,1Z" fill="url(#g8)"/>
      <path d="M21,7 C21,7 16,8 14,12 C14,12 11,7 8,7 C8,7 13,6 14,2 C14,2 18,5 21,7Z" fill="url(#g8)" opacity="0.9"/>
      <path d="M14,21 C14,21 12,16 11,14 C11,14 16,13 19,15 C19,15 16,18 14,21Z" fill="url(#g8)"/>
      <path d="M2,14 C2,14 7,13 9,10 C9,10 11,15 13,16 C13,16 8,17 2,14Z" fill="url(#g8)" opacity="0.9"/>
      <path d="M4,5 C4,5 9,7 11,5 C11,5 9,10 7,11 C7,11 4,8 4,5Z" fill="url(#g8)"/>
      <path d="M20,16 C20,16 15,14 13,16 C13,16 15,11 17,10 C17,10 20,13 20,16Z" fill="url(#g8)" opacity="0.9"/>
      <circle cx="11" cy="11" r="2.5" fill="#b45309"/>
      <circle cx="11" cy="11" r="1.2" fill="#d97706"/>
    `,
    w: 22, h: 22, duration: 27, delay: 5, left: "33%", opacity: 0.65,
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
          0%   { transform: translateY(-8vh) rotate(0deg) translateX(0px); opacity: 0; }
          8%   { opacity: var(--op); }
          50%  { transform: translateY(50vh) rotate(180deg) translateX(var(--drift)); opacity: var(--op); }
          92%  { opacity: var(--op); }
          100% { transform: translateY(108vh) rotate(var(--rot)) translateX(var(--drift)); opacity: 0; }
        }

        .llk-spice {
          position: absolute;
          top: -40px;
          will-change: transform;
          animation: llk-spice-fall var(--dur) var(--delay) linear infinite;
          opacity: 0;
          filter: drop-shadow(0 0 3px rgba(180, 83, 9, 0.4));
          contain: layout style;
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
            "--rot":   `${120 + i * 30}deg`,
            "--drift": `${(i % 2 === 0 ? 1 : -1) * (8 + i * 4)}px`,
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
