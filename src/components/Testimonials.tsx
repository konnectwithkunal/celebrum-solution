import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Working with Newsmaker Media Group over the past one and a half years has been an incredibly positive experience. They truly understand the essence of the Marching Sheep brand and have consistently ensured that our voice and message are communicated with clarity and integrity.",
      author: "Sonica Aron",
      position: "Founder & Managing Partner, Marching Sheep",
      image:
        "/lovable-uploads/8627fc4e-bc55-434f-9cb2-1d389766d227.png",
    },
    {
      quote:
        "Its been nearly four years I have been associated with Newsmaker Media Group. The journey has been tumultuous and so rewarding. Ankit and his team are my go-to guys when I have any issues regarding media whether it is print, digital or screen.",
      author: "Dr. Ridhima Khamesra",
      position: "Dietician",
      image:
        "/lovable-uploads/10ca7487-f6ca-439e-8cbb-92550a9cd052.png",
    },
    {
      quote:
        "Newsmaker Media Group has been a valuable partner in amplifying IATO's voice across the industry. Their professionalism, creativity, and deep understanding of the tourism sector have consistently delivered impactful results. We truly appreciate their dedication and look forward to continued collaboration",
      author: "Ravi Gosain",
      position: "President, IATO",
      image:
        "/lovable-uploads/22ae4ec2-13b6-4e38-8321-7adb9d755bcf.png",
    },
    {
      quote:
        "Newsmaker Media Group has been a trusted partner for SMFG Credit India. Their expertise in media relations and storytelling has helped us build a strong brand presence. Professional, responsive, and results-driven - we've seen tangible benefits from their work. Highly recommended for any organization looking to elevate their media footprint.",
      author: "Mr. Kumar Gaurav",
      position: "Chief Marketing Officer, SMFG India Credit Pvt. Ltd",
      image:
        "/lovable-uploads/kumar.jpeg",
    },
    
    {
      quote:
        "Working with Newsmaker Media Group has been smooth, impactful, and genuinely enriching. They have an incredible talent for capturing and conveying our brand’s vision with precision and meaning. Positive attitude and strategic media planning with commitment to excellence have made them a trusted ally in our roadmap. It's nice to work with a team that really gets our objectives and keeps producing great work.",
      author: "Mr. Rohit Mahajan",
      position: "Founder and Managing Partner, plutosONE",
      image:
        "/lovable-uploads/rohit.jpeg",
    },
    {
      quote:
        "Newsmaker Media Group has been instrumental in amplifying Corover.ai's presence in the media landscape. Their expertise in crafting compelling narratives and securing coverage in top-tier publications has been invaluable. Their team's dedication and passion for delivering results-driven PR solutions have truly impressed me. I highly recommend Newsmaker Media Group to any organization looking to elevate their brand story.",
      author: "Mr. Ankush Sabharwal",
      position: "Founder, CoRover.ai and BharatGPT",
      image:
        "/lovable-uploads/ankush.jpeg",
    },
   
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (!pausedRef.current) api.scrollNext();
    }, 5000);
    return () => clearInterval(id);
  }, [api]);

  const handleMouseEnter = () => {
    pausedRef.current = true;
  };
  const handleMouseLeave = () => {
    pausedRef.current = false;
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our valued clients about their experience working
            with Newsmaker Media and Communications
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full">
                <Card className="bg-white border border-gray-200 shadow-xl rounded-2xl h-full">
                  <CardContent className="p-10 flex flex-col md:flex-row items-center gap-10 h-full">
                    {/* Profile Section - Left Side */}
                    <div className="flex flex-col items-center text-center md:w-1/3">
                      <div className="w-40 h-40 md:w-52 md:h-52 rounded-xl overflow-hidden shadow-2xl border-4 border-primary/40 transform hover:scale-105 transition-transform duration-500">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-6 bg-primary/5 px-4 py-3 rounded-xl shadow-sm">
                        <h4 className="font-bold text-black text-xl md:text-2xl">
                          {testimonial.author}
                        </h4>
                        <p className="text-primary font-medium text-base md:text-lg">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>

                    {/* Quote Section - Right Side */}
                    <div className="flex-1 md:w-2/3 text-center md:text-left">
                      <div className="text-6xl md:text-7xl text-primary/30 font-black mb-4 leading-none">
                        "
                      </div>
                      <p className="text-xl md:text-2xl leading-relaxed text-gray-800 italic">
                        {testimonial.quote}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <CarouselPrevious className="hidden md:flex -left-20" />
          <CarouselNext className="hidden md:flex -right-20" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
