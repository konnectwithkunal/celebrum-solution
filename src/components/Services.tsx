import React, { useState } from "react";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Products",
      description: "Be-spoke products and solutions for Financial Institutions on No/Low code platform for faster GTM, with high operational efficiency.",
      icon: "widgets"
    },
    {
      title: "Services",
      description: "Boutique of services for Platforms like ACTICO, FICO, Salesforce, Out-systems, driven by industry experts and guides.",
      icon: "design_services"
    },
    {
      title: "Consultancy",
      description: "Expert guidance for strategic Financial decision-making through (a) \"CTO as a Service\", (b) Process Enhancements, (c) Data Migration, and more.",
      icon: "groups"
    },
    {
      title: "Training",
      description: "Unlock your potential and elevate your career through our (a) NCS IGNITE, (b) NCS CORE, and (c) NCS PRO tracks.",
      icon: "school"
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-[#0a1f1a]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We deliver comprehensive solutions driven by a deep understanding of the fast-changing financial landscape and emerging technologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative rounded-lg p-6 transition-all duration-300 flex flex-col items-start cursor-pointer ${
                selectedService === index
                  ? 'bg-[#1a3d2e]'
                  : 'bg-[#0f2820] hover:bg-[#1a3d2e]'
              }`}
              onMouseEnter={() => setSelectedService(index)}
              onClick={scrollToContact}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <span
                className={`material-symbols-outlined text-5xl mb-4 transition-colors duration-300 ${
                  selectedService === index
                    ? 'text-[#65C765]'
                    : 'text-gray-500 group-hover:text-[#65C765]'
                }`}
                style={{
                  fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                }}
              >
                {service.icon}
              </span>

              <h3
                className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  selectedService === index
                    ? 'text-[#65C765]'
                    : 'text-white group-hover:text-[#65C765]'
                }`}
              >
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
    </section>
  );
};

export default Services;
