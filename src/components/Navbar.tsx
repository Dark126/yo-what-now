import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashNavigation = (hash: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <style>{`
        .llk-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          padding: 20px 0;
        }
        .llk-nav.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.06);
          padding: 12px 0;
        }
        .llk-nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          text-decoration: none;
          transition: color 0.3s;
        }
        .llk-nav.scrolled .llk-nav-logo { color: #1a1a1a; }
        .llk-nav:not(.scrolled) .llk-nav-logo { color: #fff; }
        .llk-nav-logo span { color: #d97706; }

        .llk-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0;
        }
        .llk-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: #d97706;
          transition: width 0.3s ease;
        }
        .llk-nav-link:hover::after { width: 100%; }

        .llk-nav.scrolled .llk-nav-link { color: #374151; }
        .llk-nav.scrolled .llk-nav-link:hover { color: #d97706; }
        .llk-nav:not(.scrolled) .llk-nav-link { color: rgba(255,255,255,0.75); }
        .llk-nav:not(.scrolled) .llk-nav-link:hover { color: #fff; }

        .llk-nav-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 9px 22px;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          background: linear-gradient(135deg, #d97706, #b45309);
          color: #fff !important;
          border: none;
          box-shadow: 0 3px 14px rgba(217, 119, 6, 0.35);
        }
        .llk-nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(217, 119, 6, 0.5);
        }
        .llk-nav-cta::after { display: none !important; }

        .llk-burger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          transition: color 0.3s;
        }
        .llk-nav.scrolled .llk-burger { color: #374151; }
        .llk-nav:not(.scrolled) .llk-burger { color: #fff; }

        .llk-mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(10,10,10,0.97);
          z-index: 99;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }
        .llk-mobile-menu.open { display: flex; }
        .llk-mobile-link {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s;
        }
        .llk-mobile-link:hover { color: #f59e0b; }
      `}</style>

      <nav className={`llk-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="spice-container flex justify-between items-center">
          <Link to="/" className="llk-nav-logo">
            LLK <span>International</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" onClick={() => window.scrollTo(0,0)} className="llk-nav-link">Home</Link>
            <Link to="/about" onClick={() => window.scrollTo(0,0)} className="llk-nav-link">About</Link>
            <button onClick={() => handleHashNavigation("#products")} className="llk-nav-link">Products</button>
            <button onClick={() => handleHashNavigation("#contact")} className="llk-nav-cta">Get a Quote</button>
          </div>

          <button className="llk-burger md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`llk-mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="llk-mobile-link" onClick={() => { window.scrollTo(0,0); setIsOpen(false); }}>Home</Link>
        <Link to="/about" className="llk-mobile-link" onClick={() => { window.scrollTo(0,0); setIsOpen(false); }}>About</Link>
        <button onClick={() => handleHashNavigation("#products")} className="llk-mobile-link">Products</button>
        <button onClick={() => handleHashNavigation("#contact")} className="llk-mobile-link">Contact</button>
      </div>
    </>
  );
};

export default Navbar;
