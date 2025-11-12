import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyChoose = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  const reasons = [
    {
      number: "01",
      title: "Headline Creators, Not Just Chasers",
      description: `We don’t wait for news to happen; we craft stories that make headlines.`
    },
    {
      number: "02",
      title: "Unmatched Media Reach",
      description: "With connections across consumer, lifestyle, national, and business media—including TV, radio, podcasts, and print—we ensure your brand gets noticed where it matters."
    },
    {
      number: "03",
      title: "Strategic Storytelling",
      description: "From prime-time TV spots to front-page features, we position your story in front of the right audience, at the right time, in the right way."
    },
    {
      number: "04",
      title: "Collaborative, Authentic Campaigns",
      description: "We work closely with you to capture your brand’s voice and goals, turning them into authentic editorial opportunities that build trust and visibility."
    }
  ];

  return (
    <section className="py-20 bg-background ">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`max-w-6xl mx-auto text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[20px]'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Us?
          </h2>
          {/*
         <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              At Newsmaker Media and Communications, we don't just chase headlines—we build them.
            </p>
            <p>
              With an extensive network that spans leading consumer, lifestyle, national, and business media—including TV, radio, podcasts, and print—we specialize in delivering the kind of visibility that shapes perception and builds trust. From a prime-time TV appearance to a front-page feature in a national daily, our job is to get your story in front of the right people, at the right time, in the right way.
            </p>
            <p>
              Every campaign we run is crafted with intention. We collaborate closely with you to understand your brand's voice, its purpose, and its goals—then translate that into editorial opportunities that resonate. Because when the story is authentic, the coverage follows.
            </p>
          </div>
          */}
        </div>

        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-700 delay-300 ${gridVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[20px]'
            }`}
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="space-y-4 group p-3 rounded-lg hover:bg-background/50 hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-105 hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary text-6xl font-bold opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                {reason.number}
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-white text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;