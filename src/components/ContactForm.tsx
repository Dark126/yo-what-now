import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { products } from "./Products";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const spices = mapSpiceIdsToNames(formData.spiceTypes);

      const res = await fetch("/.netlify/functions/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          spiceTypes: spices,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Failed to submit");
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      setFormData({ name: "", email: "", phone: "", message: "", spiceTypes: [] });
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
      className="section relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div style={{
          position: "absolute", top: "10%", left: "5%",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: "300px", height: "300px",
          background: "radial-gradient(circle, rgba(180,83,9,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
      </div>

      <div className="spice-container relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(217,119,6,0.1)", border: "1px solid rgba(217,119,6,0.25)",
            padding: "6px 18px", borderRadius: "100px", marginBottom: "16px"
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#d97706", display: "inline-block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#d97706", fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>
              Contact Us
            </span>
          </div>
          <h2 className="section-title" style={{ color: "#fafafa" }}>
            Get in <span style={{ color: "#d97706" }}>Touch</span>
          </h2>
          <p style={{ maxWidth: "500px", margin: "16px auto 0", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}>
            Interested in our products? Fill out the form and we'll get back to you with pricing and availability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "launjha@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 84879 67505" },
                { icon: MapPin, label: "Address", value: "42 - Tirupati Complex, Sardar Chowk, Unjha-384170 Gujarat, India" },
              ].map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: "16px",
                    padding: "20px 24px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                  }}
                >
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "10px",
                    background: "rgba(217,119,6,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={20} color="#d97706" />
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#d97706", fontWeight: 600, marginBottom: "4px", fontFamily: "'DM Sans', sans-serif" }}>
                      {label}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "36px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">

                {/* Name */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "8px", fontFamily: "'DM Sans', sans-serif" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    style={{
                      width: "100%", padding: "12px 16px",
                      background: "rgba(255,255,255,0.05)",
                      border: errors.name ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px", color: "#fafafa",
                      fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
                      outline: "none", transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#d97706"}
                    onBlur={(e) => e.target.style.borderColor = errors.name ? "#ef4444" : "rgba(255,255,255,0.1)"}
                  />
                  {errors.name && <p style={{ marginTop: "4px", fontSize: "12px", color: "#ef4444" }}>{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "8px", fontFamily: "'DM Sans', sans-serif" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    style={{
                      width: "100%", padding: "12px 16px",
                      background: "rgba(255,255,255,0.05)",
                      border: errors.email ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px", color: "#fafafa",
                      fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
                      outline: "none",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#d97706"}
                    onBlur={(e) => e.target.style.borderColor = errors.email ? "#ef4444" : "rgba(255,255,255,0.1)"}
                  />
                  {errors.email && <p style={{ marginTop: "4px", fontSize: "12px", color: "#ef4444" }}>{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "8px", fontFamily: "'DM Sans', sans-serif" }}>
                    Phone Number <span style={{ color: "rgba(255,255,255,0.25)", textTransform: "none", letterSpacing: 0 }}>(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    style={{
                      width: "100%", padding: "12px 16px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px", color: "#fafafa",
                      fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
                      outline: "none",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#d97706"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>

                {/* Interested Spices */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "12px", fontFamily: "'DM Sans', sans-serif" }}>
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
                          style={{ borderColor: "rgba(255,255,255,0.2)" }}
                        />
                        <Label
                          htmlFor={`spice-${product.id}`}
                          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", cursor: "pointer" }}
                        >
                          {product.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "8px", fontFamily: "'DM Sans', sans-serif" }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    style={{
                      width: "100%", padding: "12px 16px",
                      background: "rgba(255,255,255,0.05)",
                      border: errors.message ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px", color: "#fafafa",
                      fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
                      outline: "none", resize: "none",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#d97706"}
                    onBlur={(e) => e.target.style.borderColor = errors.message ? "#ef4444" : "rgba(255,255,255,0.1)"}
                  />
                  {errors.message && <p style={{ marginTop: "4px", fontSize: "12px", color: "#ef4444" }}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%", padding: "14px",
                    background: "linear-gradient(135deg, #d97706, #b45309)",
                    color: "#fff", border: "none", borderRadius: "8px",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                    fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                    cursor: "pointer", display: "flex", alignItems: "center",
                    justifyContent: "center", gap: "8px",
                    boxShadow: "0 4px 20px rgba(217,119,6,0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(217,119,6,0.5)";
                    (e.target as HTMLButtonElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(217,119,6,0.3)";
                    (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  <Send size={15} />
                  Send Message
                </button>

              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
