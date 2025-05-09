
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/components/Products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Package } from "lucide-react";
import PackagingSelectionModal from "@/components/PackagingSelectionModal";
import ProductOrderForm from "@/components/ProductOrderForm";
import { useToast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPackaging, setSelectedPackaging] = useState<string | null>(null);
  const [isPackagingModalOpen, setIsPackagingModalOpen] = useState(false);
  const [selectedPackagingForModal, setSelectedPackagingForModal] = useState<string | null>(null);

  // Find the product based on the ID from the URL
  const productId = parseInt(id || "1", 10);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Button 
          variant="default" 
          className="mt-4"
          onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    );
  }

  const handlePackagingClick = (packagingId: string) => {
    setSelectedPackagingForModal(packagingId);
    setIsPackagingModalOpen(true);
  };

  const handleConfirmPackaging = () => {
    setSelectedPackaging(selectedPackagingForModal);
    setIsPackagingModalOpen(false);
    
    toast({
      title: "Packaging selected",
      description: `You selected ${product.packagingOptions.find(p => p.id === selectedPackagingForModal)?.label}`,
    });

    // Scroll to the form
    setTimeout(() => {
      document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const packagingImages = {
    small: "https://images.unsplash.com/photo-1584473457493-17c4c40bbf8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    large: "https://images.unsplash.com/photo-1623627484632-f041d1fb366d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16 min-h-screen">
        {/* Hero section with product image and title */}
        <section className="bg-gradient-to-b from-spice-50 to-white">
          <div className="container mx-auto px-4 py-12 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-[400px] object-cover object-center"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="w-full md:w-1/2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-4xl font-bold text-spice-800 mb-4">{product.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-spice-700 mb-4">Health Benefits</h2>
                  <ul className="space-y-2">
                    {product.healthBenefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check size={20} className="text-leaf-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Packaging options section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-gradient bg-gradient-to-r from-amber-600 to-spice-600 bg-clip-text">
                  Select Packaging
                </span>
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Choose the packaging option that best suits your needs. 
                Click on a packaging type to view details and confirm your selection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {product.packagingOptions.map((option) => (
                  <motion.div
                    key={option.id}
                    className={`bg-white border rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      selectedPackaging === option.id ? 'border-2 border-spice-500 shadow-md' : 'border-gray-200'
                    }`}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    onClick={() => handlePackagingClick(option.id)}
                  >
                    <div className="h-12 flex items-center justify-center mb-4">
                      <Package size={32} className="text-spice-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-center">{option.label}</h3>
                    {selectedPackaging === option.id && (
                      <div className="mt-3 flex justify-center">
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          <Check size={12} className="mr-1" /> Selected
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Order form section */}
        <section id="order-form" className="py-12 bg-gradient-to-b from-white to-spice-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-2">Place Your Order</h2>
              <p className="text-center text-gray-600 mb-8">
                Complete the form below to request a quote or place an order
              </p>
              
              {selectedPackaging ? (
                <ProductOrderForm 
                  productId={product.id} 
                  productName={product.name} 
                  packagingId={selectedPackaging}
                />
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-xl border border-gray-100">
                  <Package size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Please select a packaging option above to continue</p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </div>

      <PackagingSelectionModal
        isOpen={isPackagingModalOpen}
        onClose={() => setIsPackagingModalOpen(false)}
        onConfirm={handleConfirmPackaging}
        packagingOption={product.packagingOptions.find(p => p.id === selectedPackagingForModal)}
        isLargePackaging={selectedPackagingForModal?.includes('kg') || false}
      />
      
      <Footer />
    </>
  );
};

export default ProductDetail;
