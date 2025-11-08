
import { useState, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

interface OrderFormProps {
  productName: string;
  packagingId: string;
  productId: number;
}

const ProductOrderForm = ({ productName, packagingId }: OrderFormProps) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Validation
  const validate = () => {
    const newErrors = { name: "", email: "", phone: "" };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    }

    setErrors(newErrors);

    // ✅ Scroll to first error
    if (!valid && formRef.current) {
      const firstErrorField = formRef.current.querySelector(".error-field");
      firstErrorField?.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
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

      setFormData({ name: "", email: "", phone: "", notes: "" });
    } catch (err: any) {
      toast({
        title: "Order Failed",
        description: err?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="bg-white p-8 rounded-xl shadow-md"
    >
      <div className="space-y-4">

        {/* ✅ Auto-filled product & packaging */}
        <div className="bg-gray-50 p-4 rounded-lg border text-sm text-gray-700">
          <p><strong>Product:</strong> {productName}</p>
          <p><strong>Packaging:</strong> {packagingId}</p>
        </div>

        {/* ✅ Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input-field ${errors.name ? "border-red-500 error-field" : ""}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* ✅ Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-field ${errors.email ? "border-red-500 error-field" : ""}`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* ✅ Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`input-field ${errors.phone ? "border-red-500 error-field" : ""}`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* ✅ Notes (optional) */}
        <div>
          <label className="block text-sm font-medium mb-1">Additional Notes (Optional)</label>
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
          disabled={isSubmitting}
          className="w-full button-primary flex items-center justify-center gap-2 py-3 disabled:opacity-60"
        >
          <Send size={16} />
          {isSubmitting ? "Sending order..." : "Submit Order"}
        </button>
      </div>
    </form>
  );
};

export default ProductOrderForm;
