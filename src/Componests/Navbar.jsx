import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "ABOUT & SKILLS", path: "/about" },
    { name: "EXPERIENCE & PROJECTS", path: "/experience" },
    { name: "CONTACT ME", path: "/contact" },
  ];

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 text-white font-sans"
      style={{ background: "#0f0f14" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-[52px] md:h-[58px]">
        
        {/* Logo — GS. in pink/purple */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <span
            className="text-2xl md:text-[28px] font-black tracking-tighter"
            style={{ color: "#c44df0" }}
          >
            GS.
          </span>
        </Link>

        {/* Desktop Nav links — right side */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[12px] font-medium tracking-[0.15em]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="transition-colors duration-200"
                style={{
                  color: isActive ? "#ffffff" : "#7a7a88",
                  fontWeight: isActive ? "700" : "500",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.target.style.color = isActive ? "#ffffff" : "#7a7a88")
                }
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full flex flex-col"
          style={{ background: "#0f0f14", borderTop: "1px solid #1e1e2a" }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="px-8 py-4 text-[12px] tracking-[0.15em] font-medium transition-colors border-b"
                style={{
                  color: isActive ? "#ffffff" : "#7a7a88",
                  fontWeight: isActive ? "700" : "500",
                  borderColor: "#1e1e2a",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
