import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses getting started with cloud telephony",
    features: [
      "Up to 5 concurrent calls",
      "1 local number included",
      "Basic call routing",
      "Email support",
      "Standard voice quality",
      "Call recording (50 hours)",
      "Basic analytics",
      "Mobile app access"
    ],
    popular: false,
    cta: "Start Free Trial",
    link: "https://salescentri.com/pricing/free-trial"
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Ideal for growing businesses with advanced communication needs",
    features: [
      "Up to 25 concurrent calls",
      "5 local numbers included",
      "Advanced call routing",
      "Priority support",
      "Premium voice quality",
      "Unlimited call recording",
      "Advanced analytics & reporting",
      "CRM integrations",
      "Team collaboration tools",
      "Custom hold music",
      "IVR system",
      "Call queuing"
    ],
    popular: true,
    cta: "Start Free Trial",
    link: "https://salescentri.com/pricing/free-trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex requirements",
    features: [
      "Unlimited concurrent calls",
      "Unlimited local numbers",
      "Custom call flows",
      "Dedicated account manager",
      "Enterprise-grade security",
      "Unlimited everything",
      "Custom integrations",
      "White-label options",
      "99.99% uptime SLA",
      "Custom reporting",
      "API access",
      "24/7 phone support"
    ],
    popular: false,
    cta: "Contact Sales",
    link: "https://salescentri.com/pricing/enterprise-custom"
  }
];

const addOns = [
  {
    name: "Additional Numbers",
    price: "$5/month",
    description: "Extra local or toll-free numbers"
  },
  {
    name: "SMS Messaging",
    price: "$0.02/message",
    description: "Send and receive text messages"
  },
  {
    name: "Advanced Analytics",
    price: "$25/month",
    description: "Enhanced reporting and insights"
  },
  {
    name: "Call Recording Storage",
    price: "$10/100 hours",
    description: "Additional recording storage"
  }
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white mb-6">Transparent Pricing</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent 
              <span className="text-primary-light"> Pricing</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. Start with our free trial 
              and scale as you grow. No hidden fees, no surprises.
            </p>
            <div className="flex justify-center">
              <a href="https://salescentri.com/pricing/free-trial">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start 14-Day Free Trial
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`card-gradient relative ${
                  plan.popular 
                    ? 'ring-2 ring-primary scale-105 shadow-xl' 
                    : 'hover:shadow-lg'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-2">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href={plan.link} className="block">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'btn-primary' 
                          : 'btn-secondary'
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Optional Add-ons
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your plan with additional features and capabilities as needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="card-gradient text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{addon.price}</div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate the billing accordingly.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
                <p className="text-muted-foreground">
                  No setup fees. You only pay for your monthly subscription and any usage-based features you utilize.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What's included in the free trial?</h3>
                <p className="text-muted-foreground">
                  The 14-day free trial includes full access to Professional plan features with no restrictions. 
                  No credit card required to start.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using our iGCT platform to scale their communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/pricing/free-trial">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
            </a>
            <a href="https://salescentri.com/contact/sales-inquiry">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;