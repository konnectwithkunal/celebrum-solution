const Consultancy = () => {
  const services = [
    {
      icon: "psychology",
      title: "VIRTUAL CTO",
      description: "Service provided to handle the technology strategy, leadership & decision-making without the need for a full-time, in-house CTO."
    },
    {
      icon: "inventory_2",
      title: "PROJECT GOVERNANCE",
      description: "Involves framework, processes and practices that ensure a project is properly managed, executed & aligned with goals, resources and expectations."
    },
    {
      icon: "published_with_changes",
      title: "BPM OPTIMIZATION",
      description: "Ensures improving the efficiency & effectiveness of an organization's business processes using technology, best practices and systematic approaches."
    },
    {
      icon: "construction",
      title: "IMPLEMENTATION SERVICES",
      description: "Specific solution, system or technology into practice ensuring it works effectively within the client's environment."
    },
    {
      icon: "tune",
      title: "TAILORED SERVICES",
      description: "Designed to address the unique needs & challenges, adapted to a business's industry, size, infrastructure, goals and technological requirements, ensuring a personalized and effective approach."
    },
    {
      icon: "account_tree",
      title: "PROCESS GOVERNANCE",
      description: "Involves establishing frameworks and practices to manage, control and align goals focusing on overseeing, monitoring and continuously improving processes to ensure efficiency, regulatory compliance & alignment with the strategies."
    }
  ];

  return (
    <section id="consultancy" className="py-20 bg-white relative overflow-hidden">
      {/* Grid Background Effect */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            CONSULTANCY
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Expert guidance for strategic financial decision-making
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#65C765] hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span 
                    className="material-symbols-outlined text-[#65C765] text-5xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48"
                    }}
                  >
                    {service.icon}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-black text-lg font-bold text-center mb-4 uppercase tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm text-center leading-relaxed">
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

export default Consultancy;