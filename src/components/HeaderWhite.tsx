import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const HeaderWhite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src={isScrolled ? "/img/colorblack.png" : "/img/colorblack.png"}
            alt="NewsMakerIndia Logo"
            className="h-14 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            onClick={() => handleNavClick("about")}
            className={`cursor-pointer text-lg transition-colors duration-300 ${
              isScrolled ? "text-black hover:text-primary" : "text-black hover:text-primary"
            }`}
          >
            About us
          </a>
          <a
            onClick={() => navigate("/services")}
            className={`cursor-pointer text-lg transition-colors duration-300 ${isScrolled ? "text-black hover:text-primary" : "text-black hover:text-primary"
              }`}
          >
            Services
          </a>


          <a onClick={() => navigate("/people")} className={`cursor-pointer text-lg transition-colors duration-300 ${isScrolled ? "text-black hover:text-primary" : "text-black hover:text-primary"}`}>
            People
          </a>
          <a
            onClick={() => navigate("/news")}
            className={`cursor-pointer text-lg transition-colors duration-300 ${
              isScrolled ? "text-black hover:text-primary" : "text-black hover:text-primary"
            }`}
          >
            In the Spotlight
          </a>
          <a
            onClick={() => navigate("/blogs")}
            className={`cursor-pointer text-lg transition-colors duration-300 ${
              isScrolled ? "text-black hover:text-primary" : "text-black hover:text-primary"
            }`}
          >
            Blog
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className="hidden sm:flex bg-primary hover:bg-primary/90 text-white font-medium px-6 rounded-full"
            onClick={() => navigate("/contact")} // Replaced window.location.href
          >
            Contact us
          </Button>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-black"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            <a
              onClick={() => handleNavClick("about")}
              className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About us
            </a>
            <a
              onClick={() =>{setIsMobileMenuOpen(false); navigate("services");}}
              className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/people");
              }}
              className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              People
            </a>
            <a
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/news");
              }}
              className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              In the Spotlight
            </a>
            <a
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/blogs");
              }}
              className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Blogs
            </a>
            <Button
              variant="default"
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-full mt-4"
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/contact"); // Replaced window.location.href
              }}
            >
              Contact us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderWhite;