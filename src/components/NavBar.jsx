import { useState, useEffect } from "react";
import { Scissors, Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    console.log(`Navegando para ${href}`);
    setMenuOpen(false);
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Scissors
            className={`w-5 h-5 ${scrolled ? "text-amber-600" : "text-white"}`}
          />
          <span
            className={`text-xl tracking-wide ${scrolled ? "text-amber-900" : "text-white"}`}
          >
            BelleHair
          </span>
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm tracking-wide hover:text-amber-500 transition-colors ${
                  scrolled ? "text-amber-900" : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className={scrolled ? "text-amber-900" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-amber-900" : "text-white"} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-amber-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-amber-900 hover:text-amber-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
