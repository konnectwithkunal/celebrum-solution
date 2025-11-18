import React, { useState } from "react";
import { motion, useInView } from "framer-motion";

const TrainingPrograms = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const programs = [
    {
      id: "ignite",
      name: "NCS IGNITE",
      icon: "local_fire_department",
      tagline: "Ignite your passion for Technical Advancements",
      features: [
        "Focused Internship for 6-8 weeks",
        "Understand the Application of Technologies like JAVA, Spring, Boot, Rest APIs",
        "Get a hands-on Real life Project",
        "Ready for Technical Career"
      ],
      cta: "Apply to NCS IGNITE"
    },
    {
      id: "core",
      name: "NCS CORE",
      icon: "settings",
      tagline: "Make your Technical Foundation",
      features: [
        "Focused Training for 3 months",
        "Apply Technologies like JAVA, Spring, Boot, Rest APIs in real Software's",
        "Understand Corporate Culture",
        "READY FOR PRE-PLACEMENT OFFERS"
      ],
      cta: "Apply to NCS CORE"
    },
    {
      id: "pro",
      name: "NCS PRO",
      icon: "rocket_launch",
      tagline: "Support & Build Software's",
      features: [
        "Focused Training for 6 months",
        "Manage & Interact with Clients",
        "Ready for Technical Career",
        "BE A PRO"
      ],
      cta: "Apply to NCS PRO"
    }
  ];

  return (
    <section id="trainings" ref={ref} className="py-20 bg-[#0a1f1a] relative overflow-hidden">
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
        <div className="max-w-5xl mx-auto">
          {/* Card Container */}
          <motion.div
            className="bg-[#152d24] rounded-2xl border border-[#1a3d2e] p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Heading */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Develop Your Expertise
            </motion.h2>

            {/* Tabs */}
            <div className="flex justify-center mb-8 border-b border-[#1a3d2e] -mx-4 px-4 overflow-x-auto scrollbar-hide">
              <motion.div
                className="flex justify-center min-w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {programs.map((program, index) => (
                  <motion.button
                    key={program.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex flex-col items-center px-3 sm:px-6 md:px-8 py-4 transition-all duration-300 relative flex-1 min-w-0 ${
                      activeTab === index
                        ? 'text-[#65C765]'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <span
                      className="material-symbols-outlined text-2xl md:text-3xl mb-2"
                      style={{
                        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                      }}
                    >
                      {program.icon}
                    </span>
                    <span className="text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                      {program.name}
                    </span>
                    {activeTab === index && (
                      <motion.div
                        className="absolute bottom-0 left-2 right-2 md:left-0 md:right-0 h-1 bg-[#65C765]"
                        layoutId="activeTab"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {programs[activeTab].tagline}
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-10 max-w-2xl mx-auto">
                {programs[activeTab].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-gray-300 text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span
                      className="material-symbols-outlined text-[#65C765] mt-0.5 flex-shrink-0"
                      style={{
                        fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                      }}
                    >
                      check_circle
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className="bg-[#65C765] hover:bg-[#55b755] text-[#0a1f1a] font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#65C765]/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {programs[activeTab].cta}
              </motion.button>
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

export default TrainingPrograms;
