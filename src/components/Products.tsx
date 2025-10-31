
import OptimizedProductCard from "./OptimizedProductCard";
import { motion } from "framer-motion";

export const products = [
  {
    id: 1,
    name: "Cardamom (Elaichi)",
    description: "Premium green cardamom pods with intense aroma and flavor. Our cardamom is carefully harvested at peak ripeness to ensure maximum essential oil content. Known as the 'Queen of Spices', it adds a distinctive sweet and aromatic flavor to both sweet and savory dishes.",
    image: "/lovable-uploads/9d2761be-f8ab-4f6b-8008-c85542e37153.png",
    color: "from-green-400 to-green-600",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" }
    ],
    healthBenefits: [
      "Aids digestion and helps reduce bloating",
      "Contains powerful antioxidants that fight inflammation",
      "May help lower blood pressure and improve breathing",
      "Supports oral health with antibacterial properties"
    ]
  },
  {
    id: 2,
    name: "Cinnamon (Dal Chini)",
    description: "Aromatic cinnamon sticks with sweet, woody flavor harvested from the inner bark of Cinnamomum trees. Our premium quality cinnamon has a rich, complex flavor profile with notes of citrus, clove, and sweet warmth that enhances both sweet and savory dishes from around the world.",
    image: "/lovable-uploads/b0ca0c4e-10d9-4921-af00-53fde05d1cb4.png",
    color: "from-spice-400 to-spice-600",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" }
    ],
    healthBenefits: [
      "Rich in antioxidants that protect cells from oxidative damage",
      "May help regulate blood sugar levels",
      "Contains anti-inflammatory compounds that reduce swelling",
      "Supports heart health by improving cholesterol levels"
    ]
  },
  {
    id: 3,
    name: "Cumin Seeds (Jeera)",
    description: "Earthy, aromatic cumin seeds carefully selected for their robust flavor profile. Our cumin seeds are sun-dried to preserve their natural oils and distinctive nutty, peppery flavor. Each batch is meticulously cleaned and sorted to ensure only the highest quality seeds reach your kitchen.",
    image: "/lovable-uploads/a53e27ab-7016-4605-8ba1-31e98cc3468e.png",
    color: "from-amber-400 to-amber-600",
    packagingOptions: [
      { id: "50g", label: "50 Grams Packaging" },
      { id: "100g", label: "100 Grams Packaging" },
      { id: "250g", label: "250 Grams Packaging" },
      { id: "500g", label: "500 Grams Packaging" },
      { id: "1kg", label: "1 Kg Packaging" },
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" }
    ],
    healthBenefits: [
      "Supports digestive health by stimulating enzyme production",
      "Contains iron and promotes healthy immune function",
      "Rich in antioxidants that help fight free radicals",
      "May help improve cholesterol levels and aid weight management"
    ]
  },
  {
    id: 4,
    name: "Fennel Seeds (Saunf)",
    description: "Sweet, anise-flavored fennel seeds with a distinctive licorice aroma. Our premium fennel seeds are carefully harvested at optimal maturity to ensure maximum flavor and essential oil content. They add a refreshing, slightly sweet flavor to dishes and can be used whole or ground.",
    image: "/lovable-uploads/8784e45d-f253-4c02-95d5-d998afffddab.png",
    color: "from-yellow-300 to-yellow-500",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" }
    ],
    healthBenefits: [
      "Promotes digestive health and reduces bloating",
      "Contains anethole which helps reduce inflammation",
      "Supports respiratory health and may reduce coughing",
      "Rich in minerals including copper, potassium, calcium, and zinc"
    ]
  },
  {
    id: 5,
    name: "Psyllium Husk (Isabgol)",
    description: "Ultra-fine psyllium husk powder with exceptional water absorption properties. Our psyllium husk is carefully processed to remove impurities while maintaining its natural fiber content. This versatile dietary supplement easily integrates into your daily wellness routine.",
    image: "/lovable-uploads/67a4ca57-e5ba-410a-85ba-ceba767d0cb3.png",
    color: "from-orange-300 to-orange-500",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" }
    ],
    healthBenefits: [
      "Promotes digestive regularity and gut health",
      "Helps maintain healthy cholesterol levels",
      "Supports weight management by providing feeling of fullness",
      "May help regulate blood sugar levels as part of a healthy diet"
    ]
  },
  {
    id: 6,
    name: "Black Pepper (Kali Mirch)",
    description: "Premium black peppercorns with intense heat and complex flavor. Our black pepper is harvested at peak ripeness and carefully dried to preserve its pungent aroma and distinctive bite. Each peppercorn contains a perfect balance of heat, citrus notes, and woody undertones.",
    image: "/lovable-uploads/052df019-b2c2-4556-a072-fff72d706bb0.png",
    color: "from-gray-700 to-gray-900",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" }
    ],
    healthBenefits: [
      "Contains piperine which enhances nutrient absorption",
      "Rich in antioxidants that protect cells from damage",
      "Has anti-inflammatory properties that may reduce joint pain",
      "Supports digestive health and improves metabolism"
    ]
  },
  {
    id: 7,
    name: "Cloves (Laung)",
    description: "Aromatic dried flower buds with intense warming flavor and aroma. Our cloves are hand-picked at the perfect stage of development to ensure maximum essential oil content. These premium quality cloves deliver a powerful punch of sweet, bitter, and astringent notes.",
    image: "/lovable-uploads/1d0cded0-6bdc-48dc-aa5a-1e9473250fe1.png",
    color: "from-spice-600 to-spice-800",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" }
    ],
    healthBenefits: [
      "Contains eugenol, a powerful antioxidant and antibacterial compound",
      "Supports oral health with natural pain-relieving properties",
      "May help regulate blood sugar levels",
      "Improves digestive health by stimulating enzyme production"
    ]
  },
  {
    id: 8,
    name: "Sesame Seeds (Til)",
    description: "Premium quality sesame seeds with a rich, nutty flavor and delicate crunch. Our sesame seeds are carefully cleaned and sorted to ensure consistent quality. These tiny seeds pack a powerful nutritional punch and add a distinctive taste to both sweet and savory dishes.",
    image: "/lovable-uploads/sesame-seeds.png",
    color: "from-amber-200 to-amber-400",
    packagingOptions: [
      { id: "30kg", label: "30 Kg Plastic Packaging" },
      { id: "50kg", label: "50 Kg Plastic Packaging" }
    ],
    healthBenefits: [
      "Rich in healthy fats, protein, and essential minerals",
      "Contains powerful antioxidants that support heart health",
      "High in calcium which supports bone health",
      "May help lower cholesterol and blood pressure levels"
    ]
  }
];

const Products = () => {
  return (
    <motion.section 
      id="products" 
      className="section bg-gradient-to-b from-leaf-50 to-spice-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background 3D elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div 
          className="absolute top-[10%] right-[15%] w-40 h-40 rounded-full bg-spice-200 opacity-50 blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[10%] w-60 h-60 rounded-full bg-leaf-200 opacity-50 blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="spice-container relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient bg-gradient-to-r from-spice-600 to-leaf-600 bg-clip-text">
            LA UNJHA Premium Spices
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Each of LA UNJHA's spices is carefully sourced from sustainable farms and processed to preserve their natural flavors and aromatic properties.
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
