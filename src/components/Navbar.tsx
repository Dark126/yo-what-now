
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashNavigation = (hash: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="spice-container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif font-bold text-2xl text-black">
            LLK International
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-medium text-spice-700 hover:text-spice-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-medium text-spice-700 hover:text-spice-500 transition-colors"
          >
            About
          </Link>
          <button
            onClick={() => handleHashNavigation("#products")}
            className="font-medium text-spice-700 hover:text-spice-500 transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => handleHashNavigation("#contact")}
            className="font-medium text-spice-700 hover:text-spice-500 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-spice-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="flex flex-col py-4">
            <Link
              to="/"
              className="px-8 py-3 font-medium text-spice-700 hover:bg-spice-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 font-medium text-spice-700 hover:bg-spice-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button
              onClick={() => handleHashNavigation("#products")}
              className="px-8 py-3 font-medium text-spice-700 hover:bg-spice-50 w-full text-left"
            >
              Products
            </button>
            <button
              onClick={() => handleHashNavigation("#contact")}
              className="px-8 py-3 font-medium text-spice-700 hover:bg-spice-50 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
