import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderHome = () => {
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/">
            <img
              src={isScrolled ? "/img/neo.png" : "/img/neo.png"}
              alt="NewsMakerIndia Logo"
              className="h-14 w-auto transition-all duration-300"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            onClick={() => handleNavClick("about")}
            className="cursor-pointer text-lg text-white hover:text-[#84D14A] transition-colors duration-300"
          >
            About us
          </a>
          <a
            onClick={() => handleNavClick("products")}
            className="cursor-pointer text-lg text-white hover:text-[#84D14A] transition-colors duration-300"
          >
            Products
          </a>
          <a
            onClick={() => handleNavClick("services")}
            className="cursor-pointer text-lg text-white hover:text-[#84D14A] transition-colors duration-300"
          >
            Services
          </a>
          <a
            onClick={() => handleNavClick("consultancy")}
            className="cursor-pointer text-lg text-white hover:text-[#84D14A] transition-colors duration-300"
          >
            Consultancy
          </a>
          <a
            onClick={() => handleNavClick("trainings")}
            className="cursor-pointer text-lg text-white hover:text-[#84D14A] transition-colors duration-300"
          >
            Trainings
          </a>
        </motion.nav>

        <motion.div
          className="flex items-center gap-4"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="default"
            className="hidden sm:flex bg-[#84D14A] hover:bg-[#84D14A] text-white font-medium px-6 rounded-full"
            onClick={() => handleNavClick("contact")} // Changed to scroll
          >
            Contact us
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-white transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
          <nav className="container mx-auto px-6 py-4 space-y-4">
            <a
              onClick={() => handleNavClick("about")}
              className="block py-2 text-white hover:text-[#84D14A] transition-colors cursor-pointer"
            >
              About us
            </a>
            <a
              onClick={() => handleNavClick("products")}
              className="block py-2 text-white hover:text-[#84D14A] transition-colors cursor-pointer"
            >
              Products
            </a>
            <a
              onClick={() => handleNavClick("services")}
              className="block py-2 text-white hover:text-[#84D14A] transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              onClick={() => handleNavClick("consultancy")}
              className="block py-2 text-white hover:text-[#84D14A] transition-colors cursor-pointer"
            >
              Consultancy
            </a>
            <a
              onClick={() => handleNavClick("trainings")}
              className="block py-2 text-white hover:text-[#84D14A] transition-colors cursor-pointer"
            >
            Trainings
            </a>
            <Button
              variant="default"
              className="w-full bg-[#84D14A] hover:bg-[#73C038] text-black font-medium rounded-full mt-4"
              onClick={() => handleNavClick("contact")}
            >
              Contact us
            </Button>
          </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HeaderHome;