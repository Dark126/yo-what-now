import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LIGHT_BG_PAGES = ["/about"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isLightPage = LIGHT_BG_PAGES.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const smoothScrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleHashNavigation = (hash: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for page to mount then scroll
      setTimeout(() => smoothScrollTo(hash), 350);
    } else {
      smoothScrollTo(hash);
    }
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 350);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .llk-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          padding: 20px 0;
        }

        .llk-nav.scrolled, .llk-nav.light-page {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.06);
          padding: 12px 0;
        }

        .llk-nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .llk-nav.scrolled .llk-nav-logo,
        .llk-nav.light-page .llk-nav-logo { color: #1a1a1a; }
        .llk-nav:not(.scrolled):not(.light-page) .llk-nav-logo { color: #fff; }
        .llk-nav-logo span { color: #d97706; }

        .llk-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
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
          transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .llk-nav-link:hover::after { width: 100%; }

        .llk-nav.scrolled .llk-nav-link,
        .llk-nav.light-page .llk-nav-link { color: #374151; }

        .llk-nav.scrolled .llk-nav-link:hover,
        .llk-nav.light-page .llk-nav-link:hover { color: #d97706; }

        .llk-nav:not(.scrolled):not(.light-page) .llk-nav-link { color: rgba(255,255,255,0.75); }
        .llk-nav:not(.scrolled):not(.light-page) .llk-nav-link:hover { color: #fff; }

        .llk-nav-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 9px 22px;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.35s ease;
          text-decoration: none;
          background: linear-gradient(135deg, #d97706, #b45309);
          color: #fff !important;
          border: none;
          box-shadow: 0 3px 14px rgba(217, 119, 6, 0.35);
        }

        .llk-nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(217, 119, 6, 0.5);
        }

        .llk-nav-cta::after { display: none !important; }

        .llk-burger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          transition: color 0.3s ease;
        }

        .llk-nav.scrolled .llk-burger,
        .llk-nav.light-page .llk-burger { color: #374151; }
        .llk-nav:not(.scrolled):not(.light-page) .llk-burger { color: #fff; }

        /* Mobile overlay */
        .llk-mobile-menu {
          position: fixed;
          inset: 0;
          background: rgba(10,5,0,0.98);
          backdrop-filter: blur(16px);
          z-index: 99;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          transition: opacity 0.4s ease, visibility 0.4s ease;
          opacity: 0;
          visibility: hidden;
          display: flex;
        }

        .llk-mobile-menu.open {
          opacity: 1;
          visibility: visible;
        }

        .llk-mobile-link {
          font-family: 'Syne', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: rgba(255,245,220,0.7);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease, transform 0.3s ease;
          transform: translateY(0);
        }

        .llk-mobile-link:hover {
          color: #f59e0b;
          transform: translateY(-3px);
        }
      `}</style>

      <nav className={`llk-nav ${scrolled ? "scrolled" : ""} ${isLightPage ? "light-page" : ""}`}>
        <div className="spice-container flex justify-between items-center">
          <Link to="/" className="llk-nav-logo" onClick={handleHomeClick}>
            LLK <span>International</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={handleHomeClick} className="llk-nav-link">Home</button>
            <Link to="/about" className="llk-nav-link">About</Link>
            <button onClick={() => handleHashNavigation("#products")} className="llk-nav-link">Products</button>
            <button onClick={() => handleHashNavigation("#contact")} className="llk-nav-cta">Get a Quote</button>
          </div>

          <button className="llk-burger md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`llk-mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="llk-mobile-link" onClick={handleHomeClick}>Home</button>
        <Link to="/about" className="llk-mobile-link">About</Link>
        <button onClick={() => handleHashNavigation("#products")} className="llk-mobile-link">Products</button>
        <button onClick={() => handleHashNavigation("#contact")} className="llk-mobile-link">Contact</button>
      </div>
    </>
  );
};

export default Navbar;
