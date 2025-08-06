import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Globe, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Global Clients",
    description: "Businesses trust our platform"
  },
  {
    icon: Globe,
    value: "190+",
    label: "Countries",
    description: "Worldwide coverage"
  },
  {
    icon: TrendingUp,
    value: "60%",
    label: "Cost Reduction",
    description: "Average savings achieved"
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Guaranteed reliability"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our iGCT platform delivers measurable results for companies of all sizes, 
            from startups to Fortune 500 enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-primary-light mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;