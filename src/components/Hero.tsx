import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

function Hero({ setNavbarTransparent }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setNavbarTransparent(true);
        } else {
          setNavbarTransparent(false);
        }
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '-80px 0px 0px 0px'
      }
    );

    const currentRef = heroRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [setNavbarTransparent]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-mob md:grid-overlay opacity-40"></div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#84D14A] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#84D14A] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#84D14A]" />
            <span className="text-sm text-gray-300">Innovative Financial Solutions</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Empowering Financial
            <br />
            <span className="bg-gradient-to-r from-[#84D14A] via-[#A3E56B] to-[#84D14A] bg-clip-text text-transparent">
              Institutions
            </span>
            {" "}with Innovation
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A product-led services company providing innovative, futuristic, and credible digital solutions
            specifically designed to meet the unique needs of financial institutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <button
              onClick={() => scrollToSection('about')}
              className="group px-8 py-4 bg-[#84D14A] text-black rounded-lg font-semibold hover:bg-[#73C038] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#84D14A]/30 hover:shadow-[#84D14A]/50 hover:scale-105"
            >
              Explore Our Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 border border-white/20 backdrop-blur-sm hover:scale-105"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Stats or features */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { label: 'Products', desc: 'Bespoke Solutions', link: 'products' },
              { label: 'Services', desc: 'Expert Guidance', link: 'services' },
              { label: 'Training', desc: 'Skill Development', link: 'trainings' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.link)}
                className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-[#84D14A]/50 group text-left"
              >
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#84D14A] transition-colors duration-300">{item.label}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#84D14A] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
