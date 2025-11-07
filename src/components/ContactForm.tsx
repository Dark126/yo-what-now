
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { products } from "./Products";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Convert selected product IDs to readable spice names
const mapSpiceIdsToNames = (ids: number[]) =>
  ids
    .map((id) => products.find((p) => p.id === id)?.name || "")
    .filter(Boolean);

const ContactForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    spiceTypes: [] as number[],
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ---- validation ----
  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

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

  // ---- handlers ----
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (productId: number, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      spiceTypes: checked
        ? [...prev.spiceTypes, productId]
        : prev.spiceTypes.filter((id) => id !== productId),
    }));
  };

  // ---- submit via Netlify function proxy ----
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const spices = mapSpiceIdsToNames(formData.spiceTypes); // array of names

      const res = await fetch("/.netlify/functions/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          spiceTypes: spices, // array (Apps Script handles array or string)
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Failed to submit lead");
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        spiceTypes: [],
      });
      setErrors({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast({
        title: "Submission Failed",
        description: err?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
      className="section bg-gradient-to-br from-[#F5E6D3] to-[#B8D4A8]"
    >
      <div className="spice-container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-600 mb-8">
              Interested in our products? Fill out the form below and we'll get
              back to you as soon as possible with pricing and availability.
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

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-spice-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-spice-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-spice-700">Address</h3>
                  <p className="text-gray-600">
                    42 - Tirupati Complex, Sardar Chowk, Unjha-384170 Gujarat,
                    India
                  </p>
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
                  className={`input-field ${errors.name ? "border-red-500" : ""}`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
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
                  className={`input-field ${errors.email ? "border-red-500" : ""}`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
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
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`spice-${product.id}`}
                        checked={formData.spiceTypes.includes(product.id)}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(product.id, checked === true)
                        }
                      />
                      <Label htmlFor={`spice-${product.id}`} className="text-gray-700">
                        {product.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

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
                  className={`input-field resize-none ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full button-primary flex items-center justify-center gap-2 py-3"
              >
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

