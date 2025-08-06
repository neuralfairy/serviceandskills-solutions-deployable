import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "VP of Sales",
    company: "TechFlow Solutions",
    content: "Skillandservice's iGCT platform transformed our global outreach. We've seen a 45% increase in conversion rates and significant cost savings.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    title: "CTO",
    company: "Global Dynamics",
    content: "The reliability and call quality are exceptional. Their 99.9% uptime SLA isn't just a promise - they deliver on it consistently.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Elena Rodriguez",
    title: "Operations Director",
    company: "InnovateCorp",
    content: "Implementation was seamless, and the analytics dashboard gives us insights we never had before. Truly a game-changer for our business.",
    rating: 5,
    avatar: "ER"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            <span>Customer Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients 
            <span className="text-primary"> Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders are saying 
            about their experience with our iGCT platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-gradient hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by industry leaders and certified for security</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="h-12 w-24 bg-muted rounded flex items-center justify-center text-sm font-semibold">
              SOC 2
            </div>
            <div className="h-12 w-24 bg-muted rounded flex items-center justify-center text-sm font-semibold">
              GDPR
            </div>
            <div className="h-12 w-24 bg-muted rounded flex items-center justify-center text-sm font-semibold">
              ISO 27001
            </div>
            <div className="h-12 w-24 bg-muted rounded flex items-center justify-center text-sm font-semibold">
              HIPAA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;