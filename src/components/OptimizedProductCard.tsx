import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

interface OptimizedProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
  width?: number;
  height?: number;
}

const OptimizedProductCard = ({
  id,
  name,
  description,
  image,
  width = 800,
  height = 600,
}: OptimizedProductCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .spice-card {
          position: relative;
          background: #fdf8f0;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 420px;
          border: 1px solid rgba(180, 83, 9, 0.1);
          box-shadow: 0 2px 16px rgba(120, 53, 15, 0.06);
          transition: box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1);
          text-decoration: none;
        }

        .spice-card:hover {
          box-shadow: 0 16px 48px rgba(120, 53, 15, 0.18);
          transform: translateY(-6px);
        }

        /* Image area */
        .spice-card-img {
          position: relative;
          height: 220px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .spice-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
          filter: saturate(1.1);
        }

        .spice-card:hover .spice-card-img img {
          transform: scale(1.08);
        }

        /* Warm overlay on image */
        .spice-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(30, 12, 2, 0.55) 100%
          );
          z-index: 1;
        }

        /* Number badge */
        .spice-card-num {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          font-family: 'Playfair Display', serif;
          font-size: 11px;
          font-weight: 600;
          color: #fbbf24;
          background: rgba(20, 8, 2, 0.6);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(245,158,11,0.25);
          padding: 4px 10px;
          border-radius: 2px;
          letter-spacing: 0.1em;
        }

        /* Tag on image bottom */
        .spice-card-tag {
          position: absolute;
          bottom: 14px;
          right: 14px;
          z-index: 2;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,240,200,0.9);
          background: rgba(146, 64, 14, 0.75);
          backdrop-filter: blur(6px);
          padding: 5px 12px;
          border-radius: 2px;
        }

        /* Card body */
        .spice-card-body {
          padding: 22px 22px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          background: #fdf8f0;
          position: relative;
        }

        /* Decorative top border line */
        .spice-card-body::before {
          content: '';
          position: absolute;
          top: 0; left: 22px; right: 22px;
          height: 1px;
          background: linear-gradient(90deg, #d97706, rgba(217,119,6,0.1));
        }

        .spice-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #1c0a00;
          margin: 0 0 10px;
          line-height: 1.3;
        }

        .spice-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          color: #6b4c2a;
          line-height: 1.75;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Bottom CTA strip */
        .spice-card-footer {
          margin-top: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid rgba(180,83,9,0.1);
        }

        .spice-card-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b45309;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.3s ease, color 0.3s ease;
        }

        .spice-card:hover .spice-card-cta {
          gap: 10px;
          color: #d97706;
        }

        .spice-card-cta-arrow {
          width: 22px; height: 22px;
          border-radius: 50%;
          border: 1.5px solid rgba(180,83,9,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .spice-card:hover .spice-card-cta-arrow {
          background: #d97706;
          border-color: #d97706;
          color: #fff;
        }

        .spice-card-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(180,83,9,0.2);
        }
      `}</style>

      <Link to={`/product/${id}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
        <motion.div
          className="spice-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.1 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {/* Image */}
          <div className="spice-card-img">
            {!loaded && (
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, #fde8c8, #f5d0a0)",
                animation: "pulse 1.5s ease infinite",
              }} />
            )}
            <picture>
              <source srcSet={image} type="image/webp" />
              <source srcSet={image.replace(".webp", ".jpg")} type="image/jpeg" />
              <img
                src={image}
                alt={name}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
              />
            </picture>
            <div className="spice-card-img-overlay" />
            <span className="spice-card-num">0{id}</span>
            <span className="spice-card-tag">Export Quality</span>
          </div>

          {/* Body */}
          <div className="spice-card-body">
            <h3 className="spice-card-name">{name}</h3>
            <p className="spice-card-desc">{description}</p>

            <div className="spice-card-footer">
              <span className="spice-card-cta">
                View Details
                <span className="spice-card-cta-arrow">→</span>
              </span>
              <span className="spice-card-dot" />
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default OptimizedProductCard;
