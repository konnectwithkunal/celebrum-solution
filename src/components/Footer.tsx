const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Consultancy", href: "#consultancy" },
    { name: "Training", href: "#training" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-white">
      {/* CTA Section */}
      <div className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1d29] mb-8 px-6">
          Let us get your brand noticed
        </h2>
        <button className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
          Get in touch
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Footer Content */}
      <div className="bg-[#1a4d3a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <h3 className="text-xl font-bold">Financial Solutions</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pioneering the future of finance with innovative solutions
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-[#10b981] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>123 Future Ave, Metropolis, 90210</li>
                <li>
                  <a 
                    href="mailto:contact@financialsolutions.com"
                    className="hover:text-[#10b981] transition-colors duration-300"
                  >
                    contact@financialsolutions.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+15551234567"
                    className="hover:text-[#10b981] transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-10 h-10 bg-transparent border-2 border-white hover:bg-[#10b981] hover:border-[#10b981] rounded flex items-center justify-center transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="w-10 h-10 bg-transparent border-2 border-white hover:bg-[#10b981] hover:border-[#10b981] rounded flex items-center justify-center transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;