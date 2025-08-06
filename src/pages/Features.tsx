import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Globe, 
  Shield, 
  BarChart3, 
  Users, 
  Zap, 
  Clock, 
  Headphones,
  CheckCircle,
  ArrowRight,
  Monitor,
  Smartphone,
  Mic
} from "lucide-react";

const coreFeatures = [
  {
    icon: Phone,
    title: "Advanced Call Management",
    description: "Intelligent call routing, queue management, and automated attendant systems with customizable workflows.",
    features: ["Smart Call Routing", "Queue Management", "Call Recording", "Voicemail to Email"]
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Reach 190+ countries with local numbers, premium voice quality, and regional compliance.",
    features: ["190+ Countries", "Local Numbers", "Premium Quality", "Regional Compliance"]
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Comprehensive dashboards with call metrics, performance insights, and detailed ROI tracking.",
    features: ["Live Dashboards", "Call Analytics", "Performance Metrics", "ROI Tracking"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, GDPR compliance, and SOC 2 certified infrastructure for maximum protection.",
    features: ["End-to-End Encryption", "GDPR Compliant", "SOC 2 Certified", "Data Protection"]
  }
];

const platformFeatures = [
  {
    icon: Monitor,
    title: "Web Dashboard",
    description: "Comprehensive web-based control panel for managing all aspects of your telephony system."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS and Android apps for on-the-go communication and management."
  },
  {
    icon: Mic,
    title: "Voice API",
    description: "RESTful APIs for seamless integration with your existing applications and workflows."
  }
];

const Features = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white mb-6">iGCT Platform Features</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Features for 
              <span className="text-primary-light"> Global Communications</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Discover the comprehensive suite of features that make our iGCT platform 
              the preferred choice for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Try Interactive Demo
                </Button>
              </a>
              <a href="https://salescentri.com/get-started/free-trial">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Start Free Trial
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core iGCT Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage and scale your global communication operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="card-gradient hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Multi-Platform Access
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access your iGCT platform from anywhere, on any device, with our comprehensive suite of applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="card-gradient text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience iGCT Features?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their communications with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/get-started/book-demo">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://salescentri.com/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Pricing
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;