import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Globe, 
  Shield, 
  BarChart3, 
  Users, 
  Zap, 
  Clock, 
  Headphones,
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Advanced Call Management",
    description: "Intelligent call routing, queue management, and automated attendant systems.",
    link: "https://salescentri.com/solutions/psa-suite/features"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Reach 190+ countries with local numbers and premium voice quality.",
    link: "https://salescentri.com/solutions/by-industry/it"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, GDPR compliance, and SOC 2 certified infrastructure.",
    link: "https://salescentri.com/trust/security-privacy"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Comprehensive dashboards with call metrics, performance insights, and ROI tracking.",
    link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multi-agent support, call transfers, and integrated CRM functionality.",
    link: "https://salescentri.com/solutions/by-use-case/sdr-teams"
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Seamless integration with your existing tools and custom applications.",
    link: "https://salescentri.com/docs/api-reference"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service with 99.9% uptime SLA and global redundancy.",
    link: "https://salescentri.com/contact/support-request"
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated account managers and technical support for enterprise clients.",
    link: "https://salescentri.com/contact/support-request/live-chat"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for 
            <span className="text-primary"> Global Communications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our iGCT platform combines cutting-edge technology with intuitive design to deliver 
            the most comprehensive cloud telephony solution for modern businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="card-gradient hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mb-4 group-hover:bg-primary-hover transition-colors">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <a href={feature.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-hover">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Communications?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust our iGCT platform for their global communication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                <Button size="lg" className="btn-primary">
                  Try Interactive Demo
                </Button>
              </a>
              <a href="https://salescentri.com/get-started/contact">
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;