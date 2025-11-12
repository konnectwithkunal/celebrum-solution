// ----------------------------------------------
// File: src/pages/Index.tsx (updated visibility rules)
// ----------------------------------------------
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DrawerProvider } from "@/components/DrawerContext";
import { useDrawer } from "@/components/DrawerContext";
import FinancialDrawer from "../components/FinancialDrawer";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Servicecomp from "../components/Servicecomp";
import Ncs from "../components/Ncs";
import Consultancy from "../components/Consultancy";
import Contact from "../components/Contact";

const PageContent: React.FC = () => {
  const location = useLocation();
  const { isDrawerOpen, closeDrawer } = useDrawer();

  useEffect(() => {
    if ((location.state as any)?.scrollToId) {
      const el = document.getElementById((location.state as any).scrollToId);
      if (el) {
        const t = window.setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => window.clearTimeout(t);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Hide HeaderHome on mobile, show on md and up */}
      <div className="hidden md:block">
        <HeaderHome />
      </div>

      {/* Show MobileHeader on mobile only */}
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      <Hero />
      <About />
      <Services />
      <Products />
      <Servicecomp />
      <Consultancy />
      <Ncs />
      <Contact />
      <Footer />

      {isDrawerOpen && <FinancialDrawer onClose={closeDrawer} />}
    </div>
  );
};

const Index: React.FC = () => (
  <DrawerProvider>
    <PageContent />
  </DrawerProvider>
);

export default Index;