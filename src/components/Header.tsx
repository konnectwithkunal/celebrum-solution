import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id) => {
    setActiveMenu(id);
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { label: "About us", id: "about", icon: "info" },
    { label: "Products", id: "products", icon: "shopping_bag" },
    { label: "Services", id: "services", icon: "design_services" },
    { label: "Consultancy", id: "consultancy", icon: "groups" },
    { label: "Trainings", id: "trainings", icon: "school" },
    { label: "Contact", id: "contact", icon: "call" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#65C765] rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">
                account_balance
              </span>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>
              FinSolution
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => handleNavClick("about")}
              className={`cursor-pointer text-lg transition-colors duration-300 ${
                isScrolled ? "text-black hover:text-[#65C765]" : "text-white hover:text-[#65C765]"
              }`}
            >
              About us
            </a>
            <a
              onClick={() => handleNavClick("products")}
              className={`cursor-pointer text-lg transition-colors duration-300 ${
                isScrolled ? "text-black hover:text-[#65C765]" : "text-white hover:text-[#65C765]"
              }`}
            >
              Products
            </a>
            <a
              onClick={() => handleNavClick("services")}
              className={`cursor-pointer text-lg transition-colors duration-300 ${
                isScrolled ? "text-black hover:text-[#65C765]" : "text-white hover:text-[#65C765]"
              }`}
            >
              Services
            </a>
            <a
              onClick={() => handleNavClick("consultancy")}
              className={`cursor-pointer text-lg transition-colors duration-300 ${
                isScrolled ? "text-black hover:text-[#65C765]" : "text-white hover:text-[#65C765]"
              }`}
            >
              Consultancy
            </a>
            <a
              onClick={() => handleNavClick("trainings")}
              className={`cursor-pointer text-lg transition-colors duration-300 ${
                isScrolled ? "text-black hover:text-[#65C765]" : "text-white hover:text-[#65C765]"
              }`}
            >
              Trainings
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="hidden sm:flex bg-[#65C765] hover:bg-[#55b755] text-white font-medium px-6 py-2 rounded-full transition-colors duration-300"
              onClick={() => handleNavClick("contact")}
            >
              Contact us
            </button>

            {/* Mobile menu toggle */}
            <button
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-64 bg-gradient-to-b from-[#0d3b2b] to-[#0a2318] transform transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo Section */}
          <div className="p-6 pb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#65C765] rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">
                  account_balance
                </span>
              </div>
              <span className="text-xl font-bold text-white">FinSolution</span>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 mb-1 rounded-lg transition-all duration-200 ${
                  activeMenu === item.id
                    ? 'bg-[#1a5040]'
                    : 'hover:bg-[#1a3d2e]/50'
                }`}
              >
                <span 
                  className="material-symbols-outlined text-white text-xl"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
                >
                  {item.icon}
                </span>
                <span className="text-white text-sm font-light">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="p-6 border-t border-[#1a3d2e]">
            {/* Log Out */}
            <button className="w-full flex items-center gap-3 px-3 py-3 text-[#ff6b6b] hover:bg-[#1a3d2e]/50 rounded-lg transition-colors duration-200 mb-4">
              <span 
                className="material-symbols-outlined text-[#ff6b6b] text-xl"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
              >
                logout
              </span>
              <span className="text-sm font-light">Log Out</span>
            </button>

            {/* Social Icons and Version */}
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 border border-[#65C765]/50 rounded flex items-center justify-center hover:bg-[#65C765]/20 transition-colors duration-300">
                <svg className="w-4 h-4 fill-[#65C765]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
              <button className="w-9 h-9 border border-[#65C765]/50 rounded flex items-center justify-center hover:bg-[#65C765]/20 transition-colors duration-300">
                <svg className="w-4 h-4 fill-[#65C765]" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <div className="text-gray-600 text-xs ml-auto">v1.0.0</div>
            </div>
          </div>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
    </>
  );
};

export default Header;