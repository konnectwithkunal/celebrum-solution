import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderHome from "@/components/HeaderHome";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";


import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Servicecomp from "@/components/Servicecomp"
import Ncs from "@/components/Ncs"
import Consultancy from "@/components/Consultancy";
import Contact from "@/components/Contact";


const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const el = document.getElementById(location.state.scrollToId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to ensure DOM is rendered
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <HeaderHome />
      <Hero />
      <About />
      <Services />
      <Products />
      <Servicecomp/>
      <Consultancy/>
      <Ncs/>
      <Contact/>
      {/*<Clients />*/}
     {/*<EventsLaunches />*/} 
      {/*<WhyChoose />*/}
      {/* <Process /> */}
      {/*<HowWeHelp />*/}
      {/*<Testimonials />*/}
      {/*<News />*/}
        {/* <Work /> */}
      
      <Footer />
    </div>
  );
};

export default Index;
