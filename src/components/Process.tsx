import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Process = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation<HTMLDivElement>();

  const steps = [
    {
      step: "01",
      title: "Discovery & Briefing",
      description: "We begin by immersing ourselves in your brand. Understanding your goals, audience, and key messages. Conducting brand audits and competitive analysis. Identifying strengths, challenges, and unique story angles.",
      outcome: "A clear, aligned PR brief and objective roadmap."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Once the foundation is clear, we craft a strategic communication plan that outlines key messaging and brand positioning, target media, influencers, and audience segments, tactics across traditional and digital PR channels, timeline and milestones for implementation.",
      outcome: "A customized PR strategy aligned to your business goals."
    },
    {
      step: "03", 
      title: "Storytelling & Content Creation",
      description: "Great PR is powered by great stories. We shape your narrative into engaging formats: Press releases, media pitches, talking points, founder/leadership profiles and brand storytelling, multimedia content for digital and social use.",
      outcome: "Powerful, media-ready content tailored to key platforms."
    },
    {
      step: "04",
      title: "Media Relations & Outreach",
      description: "This is where the magic happens. We leverage our media network to pitch stories to targeted journalists, editors, and producers, secure interviews, features, guest columns, and more, arrange media roundtables, press meets, or digital launches.",
      outcome: "Valuable earned media coverage that builds trust and authority."
    },
    {
      step: "05",
      title: "Execution & Monitoring",
      description: "We ensure your story is told consistently across all channels, while closely tracking media placements and pick-up, audience engagement and sentiment, social media amplification and influencer mentions.",
      outcome: "Timely execution with measurable results."
    },
    {
      step: "06",
      title: "Reporting & Analysis",
      description: "Transparency is key. We share regular updates and final campaign reports covering media coverage reports and ROI, sentiment and visibility analysis, learnings and insights for future planning.",
      outcome: "Clear visibility on impact, performance, and next steps."
    }
  ];

  return (
    <section className="py-20 bg-background grid-overlay">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[20px]'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Product Marketing Process: Step-by-Step
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're launching a new product, growing your brand, or driving sales—our marketing process is strategic, creative, and results-driven.
          </p>
        </div>
        
        <div 
          ref={stepsRef}
          className={`space-y-12 max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            stepsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[20px]'
          }`}
        >
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex gap-8 items-start group hover:scale-[1.02] transition-all duration-500 cursor-pointer p-6 rounded-lg hover:bg-background/50 hover:shadow-xl animate-fade-in-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 border-2 border-primary rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                  <span className="text-primary font-bold text-lg group-hover:scale-110 transition-transform duration-300">{step.step}</span>
                </div>
              </div>
              <div className="flex-1 pt-4">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300">{step.description}</p>
                <div className="bg-primary/5 border-l-4 border-primary pl-4 py-2 group-hover:bg-primary/10 group-hover:border-l-8 transition-all duration-300">
                  <p className="text-sm font-medium text-primary">Outcome: {step.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;