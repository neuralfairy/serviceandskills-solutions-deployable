import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Globe, Shield, TrendingUp, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-telecom.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Global Cloud Telephony Solutions" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-up">
                <Shield className="h-4 w-4" />
                <span>Trusted by 500+ Global Businesses</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-up">
                Scale Your Global 
                <span className="text-primary-light"> Outreach</span> with 
                <span className="text-primary-light"> iGCT</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl animate-fade-up">
                Transform your business communications with our cutting-edge Global Cloud Telephony platform. 
                Connect with customers worldwide through reliable, scalable voice solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up">
              <a href="https://salescentri.com/get-started/free-trial">
                <Button size="lg" className="btn-primary text-lg px-8 py-6 w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </a>
              <a href="https://salescentri.com/get-started/book-demo">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Book Demo
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start animate-fade-up">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white/90 ml-2">4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Users className="h-5 w-5" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-6 animate-fade-in">
            <Card className="card-gradient border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <Globe className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Global Reach</h3>
                    <p className="text-muted-foreground">
                      Connect to 190+ countries with premium voice quality and local presence numbers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cloud Telephony</h3>
                    <p className="text-muted-foreground">
                      Advanced VoIP technology with intelligent call routing and real-time analytics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">ROI Optimization</h3>
                    <p className="text-muted-foreground">
                      Reduce communication costs by up to 60% while increasing conversion rates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;