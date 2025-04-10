
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Cardamom",
      description: "Premium green cardamom pods with intense aroma, perfect for desserts and beverages.",
      image: "/lovable-uploads/9d2761be-f8ab-4f6b-8008-c85542e37153.png"
    },
    {
      id: 2,
      name: "Cinnamon",
      description: "Aromatic cinnamon sticks with sweet, woody flavor for desserts, beverages, and savory dishes.",
      image: "/lovable-uploads/b0ca0c4e-10d9-4921-af00-53fde05d1cb4.png"
    },
    {
      id: 3,
      name: "Cumin Seeds",
      description: "Earthy, aromatic cumin seeds for authentic flavor in traditional dishes.",
      image: "https://images.unsplash.com/photo-1550133730-695db5f53c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Fennel Seeds",
      description: "Sweet, anise-flavored fennel seeds for desserts, breads, and savory dishes.",
      image: "https://images.unsplash.com/photo-1620638306111-77ad269a2a97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="products" className="section bg-leaf-50">
      <div className="spice-container">
        <h2 className="section-title">LA UNJHA Premium Spices</h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          Each of LA UNJHA's spices is carefully sourced from sustainable farms and processed to preserve their natural flavors and aromatic properties.
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
