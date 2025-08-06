import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Cloud Telephony: Trends to Watch in 2024",
    excerpt: "Explore the latest innovations in cloud telephony technology and how they're reshaping business communications worldwide.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    category: "Industry Trends",
    readTime: "5 min read",
    featured: true
  },
  {
    title: "ROI Maximization: How iGCT Reduces Communication Costs by 60%",
    excerpt: "Learn how businesses are achieving significant cost savings while improving communication quality with our iGCT platform.",
    author: "Michael Chen",
    date: "December 10, 2024",
    category: "Business Impact",
    readTime: "4 min read",
    featured: false
  },
  {
    title: "Global Expansion Made Easy: Scaling with Cloud Telephony",
    excerpt: "Discover how cloud telephony solutions enable seamless international business expansion without infrastructure investments.",
    author: "Elena Rodriguez",
    date: "December 5, 2024",
    category: "Growth Strategy",
    readTime: "6 min read",
    featured: false
  },
  {
    title: "Security in Cloud Communications: Best Practices for 2024",
    excerpt: "Essential security measures and compliance standards for protecting your business communications in the cloud.",
    author: "David Kim",
    date: "November 28, 2024",
    category: "Security",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "AI-Powered Call Analytics: Transforming Sales Performance",
    excerpt: "How artificial intelligence is revolutionizing call analytics and driving unprecedented sales performance improvements.",
    author: "Maria Williams",
    date: "November 20, 2024",
    category: "Technology",
    readTime: "5 min read",
    featured: false
  },
  {
    title: "Integration Success: Connecting iGCT with Your CRM",
    excerpt: "Step-by-step guide to seamlessly integrate cloud telephony with popular CRM platforms for enhanced productivity.",
    author: "John Smith",
    date: "November 15, 2024",
    category: "Integration",
    readTime: "4 min read",
    featured: false
  }
];

const categories = ["All", "Industry Trends", "Business Impact", "Growth Strategy", "Security", "Technology", "Integration"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white mb-6">Thought Leadership</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & 
              <span className="text-primary-light"> Best Practices</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on cloud telephony, 
              business communications, and industry trends from our team of specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Featured Article
            </h2>
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Card key={index} className="card-gradient overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {post.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                        </div>
                      </div>
                      <Button>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of articles covering everything from technical guides 
              to industry analysis and business strategy.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"} 
                size="sm"
                className={index === 0 ? "btn-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="card-gradient hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, industry trends, 
            and expert insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Resources
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gradient text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
                <p className="text-muted-foreground mb-6">
                  Real-world success stories from our clients and their achievements with iGCT.
                </p>
                <a href="https://salescentri.com/resources/case-studies">
                  <Button variant="outline" className="w-full">
                    View Case Studies
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Whitepapers</h3>
                <p className="text-muted-foreground mb-6">
                  In-depth research and analysis on cloud telephony trends and best practices.
                </p>
                <a href="https://salescentri.com/resources/whitepapers-ebooks">
                  <Button variant="outline" className="w-full">
                    Download Whitepapers
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Webinars</h3>
                <p className="text-muted-foreground mb-6">
                  Join our live sessions and on-demand tutorials from industry experts.
                </p>
                <a href="https://salescentri.com/resources/tutorials-webinars">
                  <Button variant="outline" className="w-full">
                    Join Webinars
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;