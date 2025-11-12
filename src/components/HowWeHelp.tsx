const HowWeHelp = () => {
  const benefits = [
    {
      title: "Trendsetters, Not Followers",
      description: "We shape conversations and set trends in the media landscape.",
      icon: "📈"
    },
    {
      title: "Fresh & Dynamic Approach",
      description: "As a young agency, we bring bold ideas and innovative thinking to every campaign.",
      icon: "🎯"
    },
    {
      title: "Targeted Brand Amplification",
      description: "We ensure your message reaches the right people, in the right places, with maximum impact.",
      icon: "💰"
    },
    {
      title: "Creative + Strategic PR",
      description: "We combine traditional media relations with a digital-first mindset for powerful results.",
      icon: "❤️"
    },
    {
      title: "Diverse Media Expertise",
      description: "From top-tier editorial features to influencer collaborations, we know how to make your story matter.",
      icon: "⭐"
    },
    {
      title: "Consistent Brand Relevance",
      description: "We keep your brand authentic, visible, and ahead in a fast-changing environment.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-[#EF4343] grid-mob  md:grid-overlay-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            How We Help Your Business
          </h2>
         {/*
         <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              At Newsmaker Media and Communications, we don't just follow trends — we help set them.
            </p>
            <p>
              As a young and dynamic agency, we bring fresh thinking, bold ideas, and a deep understanding of today's evolving media landscape. Our strength lies in amplifying your brand's message — ensuring it reaches the right people, in the right places, with the right impact.
            </p>
            <p>
              We blend creativity with strategy, marrying traditional PR with the digital-first world. Whether it's securing editorial space in top-tier publications, navigating the shift toward digital journalism, or leveraging the power of influencer collaborations, we know how to make your message matter.
            </p>
            <p>
              What sets us apart isn't just our media relationships — it's our ability to keep your brand relevant, authentic, and consistently visible in a rapidly changing environment.
            </p>
            <p className="text-primary font-medium">
              Let's craft a PR strategy that grows with your business — and always stays a step ahead.
            </p>
          </div>*/} 
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 border bg-white border-border rounded-lg hover:border-primary transition-colors duration-300 group">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className=" text-lg text-black leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;