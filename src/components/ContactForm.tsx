
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Send } from "lucide-react";
import { products } from "./Products";
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    packagingType: "",
    spiceTypes: [] as number[]
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [availablePackaging, setAvailablePackaging] = useState<string[]>([]);

  // Effect to update available packaging options based on selected spices
  useEffect(() => {
    if (formData.spiceTypes.length > 0) {
      // Get unique packaging options from all selected products
      const selectedProducts = products.filter(p => formData.spiceTypes.includes(p.id));
      
      let packagingOptions: string[] = [];
      selectedProducts.forEach(product => {
        product.packagingOptions.forEach(option => {
          if (!packagingOptions.includes(option.id)) {
            packagingOptions.push(option.id);
          }
        });
      });
      
      setAvailablePackaging(packagingOptions);
      
      // Reset packaging selection if current selection is not available
      if (!packagingOptions.includes(formData.packagingType)) {
        setFormData(prev => ({
          ...prev,
          packagingType: ""
        }));
      }
    } else {
      setAvailablePackaging([]);
      setFormData(prev => ({
        ...prev,
        packagingType: ""
      }));
    }
  }, [formData.spiceTypes]);

  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: ""
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (productId: number, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      spiceTypes: checked 
        ? [...prev.spiceTypes, productId] 
        : prev.spiceTypes.filter(id => id !== productId)
    }));
  };

  const handlePackagingChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      packagingType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real application, you would send this data to your server or email service
      console.log("Form submitted:", formData);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        packagingType: "",
        spiceTypes: []
      });
    }
  };

  return (
    <section id="contact" className="section bg-spice-50">
      <div className="spice-container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-600 mb-8">
              Interested in our products? Fill out the form below and we'll get back to you as soon as possible with pricing and availability.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-spice-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-spice-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-spice-700">Email</h3>
                  <p className="text-gray-600">Launjha@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-spice-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-spice-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-spice-700">Phone</h3>
                  <p className="text-gray-600 text-base">+91 84879 67505</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className={`input-field ${errors.name ? 'border-red-500' : ''}`} 
                  placeholder="John Doe" 
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`} 
                  placeholder="john@example.com" 
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="input-field" 
                  placeholder="+1 (123) 456-7890" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interested Spices
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {products.map(product => (
                    <div key={product.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`spice-${product.id}`}
                        checked={formData.spiceTypes.includes(product.id)} 
                        onCheckedChange={(checked) => handleCheckboxChange(product.id, checked === true)}
                      />
                      <Label htmlFor={`spice-${product.id}`} className="text-gray-700">
                        {product.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {formData.spiceTypes.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Packaging
                  </label>
                  <RadioGroup 
                    value={formData.packagingType}
                    onValueChange={handlePackagingChange}
                    className="space-y-2"
                  >
                    {availablePackaging.map((packId) => {
                      // Find a product that has this packaging option to get the label
                      const someProduct = products.find(p => 
                        p.packagingOptions.some(opt => opt.id === packId)
                      );
                      const packagingOption = someProduct?.packagingOptions.find(opt => opt.id === packId);
                      
                      return (
                        <div key={packId} className="flex items-center space-x-2">
                          <RadioGroupItem value={packId} id={`pack-${packId}`} />
                          <Label htmlFor={`pack-${packId}`}>{packagingOption?.label}</Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
              )}
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message} 
                  onChange={handleChange} 
                  className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`} 
                  placeholder="Tell us about your requirements..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              
              <button type="submit" className="w-full button-primary flex items-center justify-center gap-2 py-3">
                <Send size={16} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
