import { useState } from "react";

const ServicesDetailed = () => {
  const [selectedService, setSelectedService] = useState(0);

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
    <section className="py-20 bg-[#0a1f1a] relative overflow-hidden">
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
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#65C765] mb-8">SERVICES</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Service Tabs */}
          <div className="lg:col-span-3 space-y-2">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(index)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                  selectedService === index
                    ? 'bg-[#1a3d2e] border-l-4 border-[#65C765]'
                    : 'bg-transparent hover:bg-[#0f2820]'
                }`}
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
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-9">
            <div className="bg-[#0f2820] rounded-lg p-8 border border-[#1a3d2e]">
              <h3 className="text-2xl font-bold text-[#65C765] mb-4 uppercase">
                {services[selectedService].title}
              </h3>
              
              <p className="text-white text-lg mb-6 leading-relaxed">
                {services[selectedService].description}
              </p>

              <ul className="space-y-3">
                {services[selectedService].points.map((point, index) => (
                  <li 
                    key={index}
                    className="text-gray-300 flex items-start gap-3"
                  >
                    <span className="text-[#65C765] mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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