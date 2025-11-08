
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

interface OrderFormProps {
  productName: string;
  packagingId: string;
  productId: number;
}

const ProductOrderForm = ({ productName, packagingId }: OrderFormProps) => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // ✅ Validation
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

  // ✅ Input handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit handler → Netlify → Apps Script → Sheet
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("/.netlify/functions/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "order",
          product: productName,
          packaging: packagingId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
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
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
      <div className="space-y-4">

        {/* ✅ Auto-filled product & packaging (not editable) */}
        <div className="bg-gray-50 p-4 rounded-lg border text-sm text-gray-700">
          <p><strong>Product:</strong> {productName}</p>
          <p><strong>Packaging:</strong> {packagingId}</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input-field ${errors.name ? "border-red-500" : ""}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-field ${errors.email ? "border-red-500" : ""}`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone (Optional)</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Additional Notes</label>
          <textarea
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            className="input-field resize-none"
            placeholder="Write any specific requirement..."
          />
        </div>

        <button
          type="submit"
          className="w-full button-primary flex items-center justify-center gap-2 py-3"
        >
          <Send size={16} />
          Submit Order
        </button>
      </div>
    </form>
  );
};

export default ProductOrderForm;

