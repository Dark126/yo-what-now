
import { useState } from "react";
import PackagingOption from "./PackagingOption";

const Packaging = () => {
  const [selectedPackaging, setSelectedPackaging] = useState<string>("small");

  const packagingOptions = [
    {
      id: "small",
      title: "1 Kg Plastic Packaging",
      description: "Perfect for home use and small businesses",
      image: "https://images.unsplash.com/photo-1584473457493-17c4c40bbf8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Airtight seal for freshness",
        "UV-protected material",
        "Resealable zip lock",
        "Easy to store and handle"
      ]
    },
    {
      id: "large",
      title: "50 Kg Jute Bags",
      description: "Ideal for restaurants, wholesalers, and large-scale businesses",
      image: "https://images.unsplash.com/photo-1623627484632-f041d1fb366d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Eco-friendly natural jute",
        "Breathable material preserves quality",
        "Double-stitched for extra strength",
        "Includes inner moisture barrier"
      ]
    }
  ];

  return (
    <section id="packaging" className="section">
      <div className="spice-container">
        <h2 className="section-title">Packaging Options</h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          Choose the packaging that best suits your needs. We offer both small-scale and bulk options to accommodate different requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packagingOptions.map((option) => (
            <PackagingOption
              key={option.id}
              {...option}
              selected={selectedPackaging === option.id}
              onClick={() => setSelectedPackaging(option.id)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="button-primary">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
