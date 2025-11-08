import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { products } from "./Products";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

// Convert selected spice IDs to readable names
const mapSpiceIdsToNames = (ids: number[]) =>
  ids
    .map((id) => products.find((p) => p.id === id)?.name || "")
    .filter(Boolean);

const ProductOrderForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    spiceTypes: [] as number[],
    packagingType: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // ✅ Form validation
  const validate = () => {
    let ok = true;
    const newErrors = { name: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      ok = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      ok = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      ok = false;
    }

    setErrors(newErrors);
    return ok;
  };

  // ✅ Input handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  // ✅ Submit (sends to Netlify → Apps Script → Google Sheet)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const spices = mapSpiceIdsToNames(formData.spiceTypes);

      const res = await fetch("/.netlify/functions/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "order",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          packagingType: formData.packagingType,
          spiceTypes: spices,
          notes: formData.notes,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Failed to submit order");
      }

      toast({
        title: "Order Submitted!",
        description: "We will reach out to you soon with pricing & details.",
        duration: 5000,
      });

      setFormData({
        spiceTypes: [],
        packagingType: "",
        name: "",
        email: "",
        phone: "",
        notes: "",
      });
      setErrors({ name: "", email: "" });
    } catch (err: any) {
      toast({
        title: "Order Failed",
        description: err?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="section bg-white">
      <div className="spice-container">
        <h2 className="section-title">Place an Order</h2>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
          <div className="space-y-4">

            {/* ✅ Select Products */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Spices
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
                    <Label htmlFor={`spice-${product.id}`}>{product.name}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Packaging dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Packaging Type
              </label>
              <select
                name="packagingType"
                value={formData.packagingType}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select packaging</option>
                <option value="25 kg bag">25 kg Bag</option>
                <option value="50 kg bag">50 kg Bag</option>
                <option value="Bulk">Bulk Packaging</option>
                <option value="Custom">Custom Packaging</option>
              </select>
            </div>

            {/* ✅ Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
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

            {/* ✅ Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
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

            {/* ✅ Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* ✅ Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="input-field resize-none"
                placeholder="Write any specific requirement..."
              />
            </div>

            {/* ✅ Submit Button */}
            <button
              type="submit"
              className="w-full button-primary flex items-center justify-center gap-2 py-3"
            >
              <Send size={16} />
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductOrderForm;

