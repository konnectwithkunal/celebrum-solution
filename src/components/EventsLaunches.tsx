const EventsLaunches = () => {
  const events = [
    {
      title: "Brand Identity Launch",
      date: "March 2024",
      description: "Comprehensive rebranding for Fortune 500 company",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
    },
    {
      title: "Digital Campaign Launch",
      date: "February 2024", 
      description: "Multi-platform campaign reaching 10M+ users",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      title: "Product Design Event",
      date: "January 2024",
      description: "Revolutionary UX design showcase",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-background grid-mob  md:grid-overlay">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Our Events & Launches
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-video bg-card rounded-lg overflow-hidden mb-4">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <p className="text-primary text-sm font-medium">{event.date}</p>
                <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsLaunches;