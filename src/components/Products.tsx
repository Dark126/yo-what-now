import OptimizedProductCard from "./OptimizedProductCard";
import { motion } from "framer-motion";

export const products = [
  {
    id: 1,
    name: "Cardamom (Elaichi)",
    description:
      "Premium green cardamom pods with intense aroma and flavor. Our cardamom is carefully harvested at peak ripeness to ensure maximum essential oil content.",
    image: "/images/products/Cardamom.webp",
    color: "from-green-400 to-green-600",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" },
    ],
    healthBenefits: [
      "Aids digestion and helps reduce bloating",
      "Rich in antioxidants",
      "May help lower blood pressure",
      "Supports oral health with antibacterial properties",
    ],
  },

  {
    id: 2,
    name: "Cinnamon (Dal Chini)",
    description:
      "Aromatic cinnamon sticks with sweet, woody flavor harvested from the inner bark of Cinnamomum trees.",
    image: "/images/products/Cinnamon.webp",
    color: "from-spice-400 to-spice-600",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" },
    ],
    healthBenefits: [
      "Rich in antioxidants",
      "May help regulate blood sugar",
      "Anti-inflammatory properties",
      "Supports heart health",
    ],
  },

  {
    id: 3,
    name: "Cumin Seeds (Jeera)",
    description:
      "Earthy, aromatic cumin seeds carefully selected for their robust flavor. Sun-dried to preserve their natural oils.",
    image: "/images/products/Cumin Seeds.webp",
    color: "from-amber-400 to-amber-600",
    packagingOptions: [
      { id: "50g", label: "50 Grams Packaging" },
      { id: "100g", label: "100 Grams Packaging" },
      { id: "250g", label: "250 Grams Packaging" },
      { id: "500g", label: "500 Grams Packaging" },
      { id: "1kg", label: "1 Kg Packaging" },
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" },
    ],
    healthBenefits: [
      "Supports digestive health",
      "Rich in antioxidants",
      "Contains iron and supports immunity",
      "May aid weight management",
    ],
  },

  {
    id: 4,
    name: "Fennel Seeds (Saunf)",
    description:
      "Sweet, anise-flavored fennel seeds with a distinctive licorice aroma.",
    image: "/images/products/Fennel Seeds.webp",
    color: "from-yellow-300 to-yellow-500",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" },
    ],
    healthBenefits: [
      "Promotes digestive health",
      "Anti-inflammatory properties",
      "Supports respiratory health",
      "Rich in essential minerals",
    ],
  },

  {
    id: 5,
    name: "Psyllium Husk (Isabgol)",
    description:
      "Ultra-fine psyllium husk powder with exceptional water absorption properties.",
    image: "/images/products/Psyllium Husk.webp",
    color: "from-orange-300 to-orange-500",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" },
    ],
    healthBenefits: [
      "Promotes digestive regularity",
      "Helps maintain cholesterol levels",
      "Supports weight management",
      "Helps regulate blood sugar",
    ],
  },

  {
    id: 6,
    name: "Black Pepper (Kali Mirch)",
    description:
      "Premium black peppercorns with intense heat and complex flavor.",
    image: "/images/products/Black Pepper.webp",
    color: "from-gray-700 to-gray-900",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" },
    ],
    healthBenefits: [
      "Enhances nutrient absorption",
      "Rich in antioxidants",
      "Anti-inflammatory",
      "Supports digestive health",
    ],
  },

  {
    id: 7,
    name: "Cloves (Laung)",
    description:
      "Aromatic dried flower buds with intense warming flavor.",
    image: "/images/products/Clove.webp",
    color: "from-spice-600 to-spice-800",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" },
    ],
    healthBenefits: [
      "Rich in eugenol (strong antioxidant)",
      "Supports oral health",
      "May regulate blood sugar",
      "Improves digestion",
    ],
  },

  {
    id: 8,
    name: "Sesame Seeds (Til)",
    description:
      "Premium sesame seeds with a rich, nutty flavor and delicate crunch.",
    image: "/images/products/sesame-seeds.webp",
    color: "from-amber-200 to-amber-400",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" },
    ],
    healthBenefits: [
      "Rich in healthy fats & protein",
      "High in antioxidants",
      "Supports bone health",
      "Lowers cholesterol",
    ],
  },
];

const Products = () => {
  return (
    <motion.section
      id="products"
      className="section bg-gradient-to-b from-leaf-50 to-spice-50 relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="spice-container relative z-10">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient bg-gradient-to-r from-spice-600 to-leaf-600 bg-clip-text">
            LLK International Premium Spices
          </span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Click on any product to see detailed information and packaging options.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <OptimizedProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Products;


