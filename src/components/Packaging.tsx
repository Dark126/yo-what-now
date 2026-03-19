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
import { Button } from "@/components/ui/button";
import { Check, Package } from "lucide-react";

const Packaging = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [selectedPackaging, setSelectedPackaging] = useState<string>(
    products[0].packagingOptions[0].id
  );

  const currentProduct =
    products.find((product) => product.id === selectedProduct) || products[0];

  const packagingImages = {
    small:
      "https://images.unsplash.com/photo-1584473457493-17c4c40bbf8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    large:
      "https://images.unsplash.com/photo-1623627484632-f041d1fb366d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      className="section relative overflow-hidden"
      style={{ background: "#fff" }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-[30%] left-[15%] w-40 h-40 rounded-full bg-amber-100 opacity-40 blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-60 h-60 rounded-full bg-orange-100 opacity-40 blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="spice-container relative z-10">
        <motion.h2
          className="section-title text-center mb-6"
          style={{ color: "#111" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Packaging <span style={{ color: "#d97706" }}>Options</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-3xl mb-10 text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Choose the product and packaging option that best suits your needs.
          Different products have different packaging options available.
        </motion.p>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8"
          style={{ border: "1px solid rgba(217,119,6,0.1)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Select Product
                </label>
                <Select
                  value={selectedProduct.toString()}
                  onValueChange={handleProductChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem
                        key={product.id}
                        value={product.id.toString()}
                      >
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Select Packaging
                </label>
                <Select
                  value={selectedPackaging}
                  onValueChange={setSelectedPackaging}
                >
                  <SelectTrigger className="w-full">
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

              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-semibold" style={{ color: "#b45309" }}>
                  Features:
                </h3>
                <ul className="space-y-2">
                  {selectedPackaging.includes("kg") ? (
                    <>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                        <span className="text-gray-700">Heavy-duty plastic material</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                        <span className="text-gray-700">UV-protected to prevent degradation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                        <span className="text-gray-700">Double-sealed for freshness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                        <span className="text-gray-700">Ideal for bulk requirements</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                        <span className="text-gray-700">Airtight seal for freshness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                        <span className="text-gray-700">UV-protected material</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                        <span className="text-gray-700">Resealable zip lock</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                        <span className="text-gray-700">Easy to store and handle</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div>
              <motion.div
                className="h-64 md:h-full rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                key={selectedPackaging}
              >
                <img
                  src={displayImage}
                  alt={`${selectedPackaging} packaging`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              style={{
                background: "linear-gradient(135deg, #d97706, #b45309)",
                color: "#fff",
                border: "none",
              }}
              className="hover:opacity-90 transition-opacity"
            >
              <Package className="mr-2 h-4 w-4" />
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
