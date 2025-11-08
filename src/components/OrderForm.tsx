import { useState, useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";
import { products } from "./Products";
import { Send } from "lucide-react";

// helper: get product by id
const getProductById = (id: number) => products.find(p => p.id === id);

const OrderForm = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    productId: 0 as number,     // required
    packagingId: "",            // required
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [errors, setErrors] = useState({
    productId: "",
    packagingId: "",
    name: "",
    email: "",
  });

  const selectedProduct = useMemo(() => getProductById(form.productId), [form.productId]);
  const packagingOptions = selectedProduct?.packagingOptions || []; // [{id, label}]

  const validate = () => {
    const e = { productId: "", packagingId: "", name: "", email: "" };
    let ok = true;

    if (!form.productId) { e.productId = "Please select a product"; ok = false; }
    if (!form.packagingId) { e.packagingId = "Please select packaging"; ok = false; }
    if (!form.name.trim()) { e.name = "Name is required"; ok = false; }
    if (!form.email.trim()) { e.email = "Email is required"; ok = false; }
    else if (!/\S+@\S+\.\S+/.test(form.email)) { e.email = "Email is invalid"; ok = false; }

    setErrors(e);
    return ok;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const productName = selectedProduct?.name || "";
      const packagingLabel = packagingOptions.find(o => o.id === form.packagingId)?.label || "";

      const res = await fetch("/.netlify/functions/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "order",
          product: productName,
          packaging: packagingLabel,
          name: form.name,
          email: form.email,
          phone: form.phone,
          notes: form.notes,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Submission failed");

      toast({
        title: "Order Request Sent!",
        description: "We'll contact you shortly with pricing and availability.",
        duration: 5000,
      });

      // reset
      setForm({ productId: 0, packagingId: "", name: "", email: "", phone: "", notes: "" });
      setErrors({ productId: "", packagingId: "", name: "", email: "" });
    } catch (err: any) {
      toast({
        title: "Submission Failed",
        description: err?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="order" className="section bg-white">
      <div className="spice-container">
        <h2 className="section-title">Place an Order</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
          <div className="space-y-4">

            {/* Product */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
              <select
                className={`input-field ${errors.productId ? "border-red-500" : ""}`}
                value={form.productId || ""}
                onChange={(e) => setForm(f => ({ ...f, productId: Number(e.target.value), packagingId: "" }))}
              >
                <option value="" disabled>Select a product</option>
                {products.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
              {errors.productId && <p className="mt-1 text-sm text-red-500">{errors.productId}</p>}
            </div>

            {/* Packaging (depends on product) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Packaging</label>
              <select
                className={`input-field ${errors.packagingId ? "border-red-500" : ""}`}
                value={form.packagingId}
                onChange={(e) => setForm(f => ({ ...f, packagingId: e.target.value }))}
                disabled={!form.productId}
              >
                <option value="" disabled>{form.productId ? "Select packaging" : "Select product first"}</option>
                {packagingOptions.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
              {errors.packagingId && <p className="mt-1 text-sm text-red-500">{errors.packagingId}</p>}
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className={`input-field ${errors.name ? "border-red-500" : ""}`}
                value={form.name}
                onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Rahul Sharma"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className={`input-field ${errors.email ? "border-red-500" : ""}`}
                value={form.email}
                onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="rahul@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Phone (optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
              <input
                type="tel"
                className="input-field"
                value={form.phone}
                onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="+91 98xxxxxxx"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
              <textarea
                rows={4}
                className="input-field resize-none"
                value={form.notes}
                onChange={(e) => setForm(f => ({ ...f, notes: e.target.value }))}
                placeholder="Share quantity, delivery port, special requirements, etc."
              />
            </div>

            <button type="submit" className="w-full button-primary flex items-center justify-center gap-2 py-3">
              <Send size={16} />
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
