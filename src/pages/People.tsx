import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "../animation/variants";
import { motion } from "framer-motion";

const People = () => {
  const leadership = [
    {
      name: "Ekta Paliwal",
      position: "Founder",
      image: "/img/ekta.jpeg",
    },
    {
      name: "Simran Nagpal",
      position: "Head, Business Development",
      image:
        "/img/simrann.jpeg",
    },
    {
      name: "Romita Khurana Sahni",
      position: "Marketing Head",
      image:
        "/img/romita.jpeg",
    },
  ];

  const teamMembers = [
    {
      name: "Nayani Bajpai",
      position: "Account Manager",
      location: "GLOBAL",
      image: "/img/nayani.jpeg",
    },
    {
      name: "Mukesh Singh Budhwar",
      position: "Account Manager",
      location: "NEW YORK",
      image: "/img/mukesh.jpeg",
    },
    {
      name: "Aditi Chaurasia",
      position: "Senior Account Executive",
      location: "LOS ANGELES",
      image: "/img/aditi.jpeg",
    },
    
    {
      name: "Simran Upadhayay",
      position: "Account Executive",
      location: "SINGAPORE",
      image: "/img/simran.jpeg",
    },
    
    {
      name: "Diksha Gautam",
      position: "Account Executive",
      location: "HONG KONG",
      image:
        "/img/diksha.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 grid-overlay-light bg-[#EF4343]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-6"
          >
            <div className="max-w-4xl">
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-6xl md:text-8xl font-bold mb-8 text-foreground"
              >
                People
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-2xl text-foreground max-w-2xl leading-relaxed"
              >
                Our teams are made up of industry leading talent with diverse
                backgrounds, servicing clients in key markets around the world.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-black">Leadership</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {leadership.map((person, index) => (
                <div  
                  key={index}
                  className="relative group overflow-hidden  shadow-md hover:shadow-2xl transition-all duration-500 h-[500px]"
                >
                  {/* Glow Background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Image */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <h3 className="text-2xl font-bold text-yellow-400">
                      {person.name}
                    </h3>
                    <p className="text-white text-lg">{person.position}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
<section className="py-20 bg-muted/20">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold mb-12 text-foreground">Our Team</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((person, index) => (
        <div
          key={index}
          className="relative  group overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Image */}
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-xl font-bold text-yellow-400">
              {person.name}
            </h3>
            <p className="text-white text-sm">{person.position}</p>
            
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default People;
