import { Button } from "@/components/ui/button";

const Work = () => {
  const workItems = [
    {
      client: "Google",
      title: "Reimagining print media into a mixed reality product launch experience",
      image: "https://images.ctfassets.net/8fjb1swihtib/1nM10G0u5jons5HAhpGmcS/3487fdc13670f863ee089d783d7c36c2/PIXPRINT25-TILE-2160x2160px.jpg?w=374"
    },
    {
      client: "Netflix",
      title: "Bridging the gap between product and marketing",
      image: "https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=374"
    },
    {
      client: "Gemini",
      title: "Inspiring users to unlock their dreams with Gemini",
      image: "https://images.ctfassets.net/8fjb1swihtib/5Hwvf7rWkpJNllDFHJU9Q9/799b4e49357a02ceb2e7f31efaad60fb/Tile_image.png?w=374"
    },
    {
      client: "Jio",
      title: "Fuelling creator ambition with the power of Jio & Youtube Shorts",
      image: "https://images.ctfassets.net/8fjb1swihtib/5nQkYg6K6eMzob4nmBD8xo/92450e7a2ca171c4471e089637045e89/Jio_GoogleTile.jpg?w=374"
    }
  ];

  return (
    <section id="work" className="py-20 bg-background grid-overlay">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">Work</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Selected projects that showcase our approach to product marketing and creative storytelling.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {workItems.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors duration-300"></div>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-primary uppercase tracking-wider">{item.client}</div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-left">
          <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8">
            See more work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;