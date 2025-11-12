import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import blogPosts from "@/data/blogPosts";
import HeaderWhite from "@/components/HeaderWhite";
const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentPost = blogPosts.find((post) => post.id.toString() === id);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white">
        <HeaderWhite />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate("/blogs")} className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-white">
  <HeaderWhite />
  <main>
   {/* Hero Section */}
<section className="pt-32 pb-12 bg-white">
  <div className="container mx-auto px-6">
    <Button
      variant="ghost"
      onClick={() => navigate("/blogs")}
      className="mb-8 text-[#131A22] hover:text-primary"
    >
      <ArrowLeft className="mr-2 h-4 w-4 " />
      Back to Blogs
    </Button>

    <div className="flex flex-wrap gap-2 mb-6">
      {currentPost.tags.map((tag, tagIndex) => (
        <Badge key={tagIndex} variant="secondary" className="text-xs">
          {tag}
        </Badge>
      ))}
    </div>

    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black leading-tight">
      {currentPost.title}
    </h1>

    <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
      <div className="flex items-center gap-2 text-[#131A22]">
        <Calendar className="h-4 w-4 " />
        <span>{currentPost.date}</span>
      </div>
      <div className="flex items-center gap-2 text-[#131A22]">
        <Clock className="h-4 w-4" />
        <span>{currentPost.readTime}</span>
      </div>
      <span className="text-[#131A22]">by {currentPost.author}</span>
    </div>
  </div>
</section>

{/* Featured Image (Large but not full screen) */}
<section className="pb-12">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto">
      <div className="relative overflow-hidden aspect-[2/1] mb-12">
        <img
          src={currentPost.image}
          alt={currentPost.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 border border-border"></div>
      </div>
    </div>
  </div>
</section>

{/* Article Content */}
<section className="pb-20">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-3xl mx-auto">
      <div
        className="prose max-w-none text-black text-[24px] leading-relaxed [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>ul]:mb-4 [&>li]:mb-2"
        dangerouslySetInnerHTML={{ __html: currentPost.content }}
      />
    </div>
  </div>
</section>

  </main>
  <Footer />
</div>

  );
};

export default BlogPost;
