const Clients = () => {
  const clients = [
    { name: "Google", logo: "/icons/abbott.png" },
    { name: "Netflix", logo: "/icons/apollo.png" },
    { name: "Snapchat", logo: "/icons/bio.png" },
    { name: "Verily", logo: "/icons/cadila.png" },
    { name: "Samsung", logo: "/icons/eris.png" },
    { name: "YouTube", logo: "/icons/fortis.png" },
    { name: "Tinder", logo: "/icons/jh.png" },
    { name: "Gemini", logo: "/icons/lifewins.png" },
    { name: "Grab", logo: "/icons/medtronics.png" },
    { name: "Prime Video", logo: "/icons/merlin2.png" },
    { name: "Swiggy", logo: "/icons/park.png" },
    { name: "Robinhood", logo: "/icons/tac.png" },
    { name: "Google", logo: "/icons/aimil.png" },
    { name: "Netflix", logo: "/icons/bharat.png" },
    { name: "Snapchat", logo: "/icons/cor.png" },
    { name: "Verily", logo: "/icons/cyble.png" },
    { name: "Samsung", logo: "/icons/dava.png" },
    { name: "YouTube", logo: "/icons/dens2.png" },
    { name: "Tinder", logo: "/icons/h2s.png" },
    { name: "Gemini", logo: "/icons/iato.png" },
    { name: "Grab", logo: "/icons/know.png" },
    { name: "Prime Video", logo: "/icons/nation.png" },
    { name: "Swiggy", logo: "/icons/plutos.png" },
    { name: "Robinhood", logo: "/icons/smfg.png" },
    { name: "Snapchat", logo: "/icons/star.png" },
    { name: "TAC", logo: "/icons/fortis.jpeg" },
    { name: "Fortis Hospital", logo: "/icons/secure.jpeg" },
    { name: "Secure Claw", logo: "/icons/petals.jpeg" },
    { name: "Petals", logo: "/icons/arista.jpeg" },
    { name: "AFAI", logo: "/icons/afai.jpeg" },
    { name: "Spay India", logo: "/icons/spay.jpeg" },
    { name: "Talent Corner", logo: "/icons/talent.jpeg" },
    { name: "Eye 7", logo: "/icons/eye7.jpeg" },
    { name: "Sanskrit", logo: "/icons/sans.jpeg" },
    { name: "Resurgent India", logo: "/icons/resurgent.jpeg" },
  ];

  // split logos into 3 rows
  const row1 = clients.slice(0, 12);
  const row2 = clients.slice(12, 24);
  const row3 = clients.slice(24, 35);

  return (
    <section id="people" className="py-20 bg-[#fff] overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-black md:text-5xl font-bold mb-12 text-center">
          Clients
        </h2>

        {/* Row 1 */}
        <div className="relative w-full overflow-hidden mb-8">
          <div className="flex animate-scroll-fast-reverse md:animate-scroll-slow gap-2 md:gap-12">
            {[...row1, ...row1].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] p-2 md:p-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-16 w-auto hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (reverse direction, faster) */}
        <div className="relative w-full overflow-hidden mb-8">
          <div className="flex animate-scroll-fast-reverse md:animate-scroll-slow gap-2 md:gap-12">
            {[...row2, ...row2].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] p-2 md:p-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-16 w-auto hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-fast-reverse md:animate-scroll-slow gap-2 md:gap-12">
            {[...row3, ...row3].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] p-2 md:p-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-16 w-auto hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-scroll-slow {
          animation: scroll-left 50s linear infinite;
        }
        .animate-scroll-medium {
          animation: scroll-left 10s linear infinite;
        }
        .animate-scroll-fast-reverse {
          animation: scroll-right 30s linear infinite;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;
