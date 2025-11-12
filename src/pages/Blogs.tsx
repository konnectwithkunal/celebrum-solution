import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { fadeInUp } from "../animation/variants";
import { motion } from "framer-motion";
import blogPosts from "@/data/blogPosts";

const Blogs = () => {
  const navigate = useNavigate();

  const handleBlogClick = (blogId: number | string) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="min-h-screen ">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#EF4343] grid-overlay-light">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-6"
          >
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-foreground">
                Blog
              </h1>
              <p className="text-xl md:text-2xl text-foreground max-w-2xl leading-relaxed">
                Insights, strategies, and perspectives from our team on the latest trends in creative marketing and product design.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleBlogClick(post.id)}
                  onKeyDown={(e) => e.key === "Enter" && handleBlogClick(post.id)}
                >
                  <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors duration-300"></div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-black">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight text-black group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-black text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
