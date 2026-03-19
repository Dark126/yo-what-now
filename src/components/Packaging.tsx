import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "./Products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";

const Packaging = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [selectedPackaging, setSelectedPackaging] = useState<string>(
    products[0].packagingOptions[0].id
  );

  const currentProduct =
    products.find((product) => product.id === selectedProduct) || products[0];

  const packagingImages = {
    small:
      "https://images.unsplash.com/photo-1584473457493-17c4c40bbf8c?w=800&q=80",
    large:
      "https://images.unsplash.com/photo-1623627484632-f041d1fb366d?w=800&q=80",
  };

  const displayImage = selectedPackaging.includes("kg")
    ? packagingImages.large
    : packagingImages.small;

  const handleProductChange = (value: string) => {
    const productId = Number(value);
    setSelectedProduct(productId);
    const newProduct = products.find((p) => p.id === productId);
    if (newProduct && newProduct.packagingOptions.length > 0) {
      setSelectedPackaging(newProduct.packagingOptions[0].id);
    }
  };

  return (
    <section
      id="packaging"
      style={{ background: "#120600", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        .pkg-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: radial-gradient(circle, #f59e0b 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .pkg-glow {
          position: absolute;
          top: 0; right: 0;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(180,83,9,0.1) 0%, transparent 65%);
          pointer-events: none;
        }

        .pkg-label {
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

        /* Main card */
        .pkg-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(245,158,11,0.1);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 12px 60px rgba(0,0,0,0.35);
        }

        .pkg-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
        }

        /* Left — image side */
        .pkg-img-side {
          position: relative;
          overflow: hidden;
        }

        .pkg-img-side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: sepia(0.2) saturate(1.15);
          transition: transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }

        .pkg-img-side:hover img {
          transform: scale(1.04);
        }

        .pkg-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(18, 6, 0, 0.55) 0%,
            transparent 60%
          );
          z-index: 1;
        }

        /* Floating label on image */
        .pkg-img-badge {
          position: absolute;
          bottom: 28px;
          left: 28px;
          z-index: 2;
          background: rgba(18,6,0,0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 2px;
          padding: 12px 18px;
        }

        .pkg-img-badge-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fafaf0;
          display: block;
          line-height: 1.2;
        }

        .pkg-img-badge-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(245,158,11,0.6);
          display: block;
          margin-top: 4px;
        }

        /* Right — controls side */
        .pkg-controls-side {
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 28px;
        }

        .pkg-field-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245,158,11,0.55);
          margin-bottom: 8px;
          display: block;
        }

        /* Features list */
        .pkg-features {
          padding-top: 20px;
          border-top: 1px solid rgba(245,158,11,0.08);
        }

        .pkg-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(245,158,11,0.05);
        }

        .pkg-feature-item:last-child {
          border-bottom: none;
        }

        .pkg-check {
          width: 20px; height: 20px;
          border-radius: 2px;
          background: rgba(217,119,6,0.12);
          border: 1px solid rgba(217,119,6,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .pkg-feature-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(255,240,210,0.55);
          line-height: 1.5;
        }

        /* CTA button */
        .pkg-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px 28px;
          background: linear-gradient(135deg, #d97706, #92400e);
          color: #fff8e7;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.35s ease;
          box-shadow: 0 6px 24px rgba(146,64,14,0.35);
          margin-top: 8px;
        }

        .pkg-cta:hover {
          background: linear-gradient(135deg, #f59e0b, #b45309);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(146,64,14,0.5);
        }

        /* Override select to match dark theme */
        .pkg-controls-side [data-radix-select-trigger] {
          background: rgba(255,255,255,0.04) !important;
          border: 1px solid rgba(245,158,11,0.15) !important;
          color: #fafaf0 !important;
          border-radius: 2px !important;
          font-family: 'DM Sans', sans-serif !important;
        }

        @media (max-width: 860px) {
          .pkg-grid { grid-template-columns: 1fr; }
          .pkg-img-side { min-height: 260px; }
          .pkg-controls-side { padding: 32px 24px; }
        }
      `}</style>

      <div className="pkg-pattern" />
      <div className="pkg-glow" />

      <div className="spice-container section" style={{ position: "relative", zIndex: 2 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <div className="pkg-label">
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
            Packaging
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "#fafaf0",
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Packaging{" "}
            <span style={{ color: "#d97706", fontStyle: "italic" }}>Options</span>
          </h2>
          <p style={{
            maxWidth: "480px", margin: "16px auto 0",
            color: "rgba(255,240,210,0.4)", lineHeight: 1.85,
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 300,
          }}>
            Choose the product and packaging that best suits your requirements.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          className="pkg-card"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="pkg-grid">

            {/* Image side */}
            <div className="pkg-img-side">
              <motion.img
                key={displayImage}
                src={displayImage}
                alt="Packaging"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55 }}
              />
              <div className="pkg-img-overlay" />
              <div className="pkg-img-badge">
                <span className="pkg-img-badge-title">
                  {currentProduct.name}
                </span>
                <span className="pkg-img-badge-sub">
                  {selectedPackaging.includes("kg") ? "Bulk Packaging" : "Retail Packaging"}
                </span>
              </div>
            </div>

            {/* Controls side */}
            <div className="pkg-controls-side">

              {/* Product select */}
              <div>
                <span className="pkg-field-label">Select Product</span>
                <Select
                  value={selectedProduct.toString()}
                  onValueChange={handleProductChange}
                >
                  <SelectTrigger className="w-full" style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(245,158,11,0.15)",
                    color: "#fafaf0",
                    borderRadius: "2px",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id.toString()}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Packaging select */}
              <div>
                <span className="pkg-field-label">Select Packaging Size</span>
                <Select
                  value={selectedPackaging}
                  onValueChange={setSelectedPackaging}
                >
                  <SelectTrigger className="w-full" style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(245,158,11,0.15)",
                    color: "#fafaf0",
                    borderRadius: "2px",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <SelectValue placeholder="Select packaging" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentProduct.packagingOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Features */}
              <div className="pkg-features">
                <span className="pkg-field-label" style={{ marginBottom: "4px" }}>
                  Features
                </span>
                {selectedPackaging.includes("kg") ? (
                  <>
                    {[
                      "Heavy-duty plastic material",
                      "UV-protected to prevent degradation",
                      "Double-sealed for freshness",
                      "Ideal for bulk requirements",
                    ].map((f) => (
                      <div className="pkg-feature-item" key={f}>
                        <div className="pkg-check">
                          <Check size={12} color="#d97706" />
                        </div>
                        <span className="pkg-feature-text">{f}</span>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {[
                      "Airtight seal for freshness",
                      "UV-protected material",
                      "Resealable zip lock",
                      "Easy to store and handle",
                    ].map((f) => (
                      <div className="pkg-feature-item" key={f}>
                        <div className="pkg-check">
                          <Check size={12} color="#d97706" />
                        </div>
                        <span className="pkg-feature-text">{f}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* CTA */}
              <button className="pkg-cta">
                Request a Quote →
              </button>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packaging;
