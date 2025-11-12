import { useState } from "react";

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      title: "INCENTIVE MANAGEMENT",
      description: "Automate and optimize rewards",
      icon: "emoji_events"
    },
    {
      title: "VENDOR ONBOARDING",
      description: "Streamline partner integration",
      icon: "handshake"
    },
    {
      title: "UNIVERSAL LENDING",
      description: "Flexible and accessible credit solutions",
      icon: "account_balance_wallet"
    },
    {
      title: "COLLECTION MANAGEMENT",
      description: "Intelligent and efficient debt recovery",
      icon: "receipt_long"
    }
  ];

  return (
    <section id="products" className="py-20 bg-[#0a1f1a] relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Integrated Financial Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative rounded-xl p-8 transition-all duration-500 flex flex-col items-center text-center cursor-pointer ${
                hoveredProduct === index
                  ? 'bg-[#1a3d2e] shadow-2xl shadow-[#65C765]/20 scale-105'
                  : 'bg-[#0f2820] hover:bg-[#1a3d2e]'
              }`}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Icon Container */}
              <div 
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                  hoveredProduct === index
                    ? 'bg-[#65C765] shadow-lg shadow-[#65C765]/50'
                    : 'bg-[#1a3d2e] group-hover:bg-[#2a5040]'
                }`}
              >
                <span 
                  className={`material-symbols-outlined text-4xl transition-colors duration-300 ${
                    hoveredProduct === index
                      ? 'text-[#0a1f1a]'
                      : 'text-[#65C765]'
                  }`}
                  style={{
                    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                  }}
                >
                  {product.icon}
                </span>
              </div>
              
              {/* Title */}
              <h3 
                className={`text-base font-bold mb-3 uppercase tracking-wide transition-colors duration-300 ${
                  hoveredProduct === index
                    ? 'text-[#65C765]'
                    : 'text-white group-hover:text-[#65C765]'
                }`}
              >
                {product.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Subtle bottom accent line */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-500 ${
                  hoveredProduct === index
                    ? 'bg-[#65C765]'
                    : 'bg-transparent'
                }`}
              />
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

export default Products;