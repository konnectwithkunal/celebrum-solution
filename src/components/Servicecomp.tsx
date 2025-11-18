import React, { useState } from "react";
import { motion, useInView } from "framer-motion";

const ServicesDetailed = () => {
  const [selectedService, setSelectedService] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      id: "partnership",
      title: "PARTNERSHIP",
      icon: "handshake",
      description: "Strategic partnerships to deliver values to the customers",
      points: [
        "Preferred partners in India – ACTICO,",
        "Partners – Experian (INPRG),",
        "Partners – Salesforce (INPRG),",
        "Platform implementation,",
        "Platform support,",
        "Upskilling customers,",
        "Cost-effective value driven support"
      ]
    },
    {
      id: "support",
      title: "SUPPORT",
      icon: "support_agent",
      description: "Comprehensive assistance for uninterrupted operations",
      points: [
        "Dedicated support on lending systems,",
        "Support on configuration,",
        "Process monitoring,",
        "Performance monitoring,",
        "Skill development,",
        "Ticketing system",
        "Downtime management"
      ]
    },
    {
      id: "data-migration",
      title: "DATA MIGRATION",
      icon: "cloud_sync",
      description: "Seamless transfer of vital Financial & Non-Financial data",
      points: [
        "Data Integration tools,",
        "Cost effective strategies,",
        "Data quality checks,",
        "Assist to enhance data quality,",
        "Post-migration assistance"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-[#0a1f1a] relative overflow-hidden">
      {/* Grid Background Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #65C765 1px, transparent 1px),
            linear-gradient(to bottom, #65C765 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#65C765] mb-8">SERVICES</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Service Tabs */}
          <motion.div
            className="lg:col-span-3 space-y-2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setSelectedService(index)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                  selectedService === index
                    ? 'bg-[#1a3d2e] border-l-4 border-[#65C765]'
                    : 'bg-transparent hover:bg-[#0f2820]'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <span
                  className={`material-symbols-outlined text-2xl transition-colors duration-300 ${
                    selectedService === index
                      ? 'text-[#65C765]'
                      : 'text-gray-400'
                  }`}
                  style={{
                    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                  }}
                >
                  {service.icon}
                </span>
                <span
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    selectedService === index
                      ? 'text-[#65C765]'
                      : 'text-white'
                  }`}
                >
                  {service.title}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Right Content Area */}
          <motion.div
            className="lg:col-span-9"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              key={selectedService}
              className="bg-[#0f2820] rounded-lg p-8 border border-[#1a3d2e]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-[#65C765] mb-4 uppercase">
                {services[selectedService].title}
              </h3>

              <p className="text-white text-lg mb-6 leading-relaxed">
                {services[selectedService].description}
              </p>

              <ul className="space-y-3">
                {services[selectedService].points.map((point, index) => (
                  <motion.li
                    key={index}
                    className="text-gray-300 flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="text-[#65C765] mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
    </section>
  );
};

export default ServicesDetailed;
