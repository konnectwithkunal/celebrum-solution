import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import newsItems from "@/data/newsItems";
import { fadeInUp, staggerContainer } from "../animation/variants";
import { motion } from "framer-motion";


const News = () => {


    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-20 bg-[#EF4343] grid-overlay-light">
                    <motion.div variants={fadeInUp} initial="hidden"
                        animate="visible" className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <motion.h1 variants={fadeInUp} initial="hidden"
                                animate="visible" className="text-6xl md:text-8xl font-bold mb-8 text-foreground">
                                Client Showcase
                            </motion.h1>
                            <motion.p variants={fadeInUp} initial="hidden"
                                animate="visible" className="text-xl md:text-2xl text-foreground max-w-2xl leading-relaxed">
                                Stay updated with our latest projects, industry insights, awards, and company developments.
                            </motion.p>
                        </div>
                    </motion.div>
                </section>

                {/* News Grid */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {newsItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group cursor-pointer block"
                                >
                                    <article>
                                        <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors duration-300"></div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="text-sm text-black">{item.date}</div>
                                            <h3 className="text-xl font-bold leading-tight text-black group-hover:text-primary transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.map((tag, tagIndex) => (
                                                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default News;