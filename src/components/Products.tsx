
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Cardamom",
      description: "Premium green cardamom pods with intense aroma, perfect for desserts and beverages.",
      image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Coriander Seeds",
      description: "Hand-picked coriander seeds with a citrusy, nutty flavor for curries and marinades.",
      image: "https://images.unsplash.com/photo-1615887574135-0ee4594e5413?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Cumin Seeds",
      description: "Earthy, aromatic cumin seeds for authentic flavor in traditional dishes.",
      image: "https://images.unsplash.com/photo-1615887627923-41591442e212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Fennel Seeds",
      description: "Sweet, anise-flavored fennel seeds for desserts, breads, and savory dishes.",
      image: "https://images.unsplash.com/photo-1599909614808-bce7592e0a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="products" className="section bg-leaf-50">
      <div className="spice-container">
        <h2 className="section-title">Our Premium Spices</h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          Each of our spices is carefully sourced from sustainable farms and processed to preserve their natural flavors and aromatic properties.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
