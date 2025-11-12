import { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

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
    <section id="services" className="py-20 bg-[#0a1f1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We deliver comprehensive solutions driven by a deep understanding of the fast-changing financial landscape and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-lg p-6 transition-all duration-300 flex flex-col items-start cursor-pointer ${
                selectedService === index
                  ? 'bg-[#1a3d2e]'
                  : 'bg-[#0f2820] hover:bg-[#1a3d2e]'
              }`}
              onMouseEnter={() => setSelectedService(index)}
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
            </div>
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