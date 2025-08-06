import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white mb-6">About Skillandservice Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connecting Businesses 
              <span className="text-primary-light"> Worldwide</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We're passionate about transforming global communications through innovative 
              cloud telephony solutions that drive business growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower businesses of all sizes with cutting-edge cloud telephony solutions 
                that break down communication barriers and enable global growth. We believe 
                that every conversation matters, and our iGCT platform ensures that those 
                conversations happen seamlessly, regardless of location or scale.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="card-gradient">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">190+</div>
                    <div className="text-sm text-muted-foreground">Countries Served</div>
                  </CardContent>
                </Card>
                <Card className="card-gradient">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-8">
              <Card className="card-gradient">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the global leader in cloud telephony solutions, setting the standard 
                    for reliability, innovation, and customer success in business communications.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-gradient">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <p className="text-muted-foreground">
                    Innovation, reliability, and customer-centricity drive everything we do. 
                    We're committed to delivering solutions that exceed expectations and 
                    support our clients' growth objectives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership team brings decades of expertise in telecommunications, 
              technology, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gradient text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  JS
                </div>
                <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                <p className="text-primary mb-2">CEO & Founder</p>
                <p className="text-sm text-muted-foreground">
                  Former VP of Engineering at a leading telecom company with 15+ years 
                  of experience in cloud infrastructure and business communications.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  MW
                </div>
                <h3 className="text-xl font-semibold mb-2">Maria Williams</h3>
                <p className="text-primary mb-2">CTO</p>
                <p className="text-sm text-muted-foreground">
                  Technology visionary with expertise in scalable cloud architectures 
                  and AI-driven communication solutions. PhD in Computer Science.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  DB
                </div>
                <h3 className="text-xl font-semibold mb-2">David Brown</h3>
                <p className="text-primary mb-2">VP of Sales</p>
                <p className="text-sm text-muted-foreground">
                  Strategic sales leader with a proven track record of scaling B2B SaaS 
                  companies from startup to industry leaders in global markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a global leader in cloud telephony solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
                  <p className="text-muted-foreground">
                    Skillandservice Solutions was founded in Albany, NY with a vision to 
                    revolutionize business communications through cloud technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2021
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">First 100 Customers</h3>
                  <p className="text-muted-foreground">
                    Reached our first major milestone with 100 satisfied customers and 
                    expanded our coverage to 50 countries worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2023
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
                  <p className="text-muted-foreground">
                    Expanded to 190+ countries and achieved SOC 2 compliance, establishing 
                    ourselves as a trusted enterprise solution provider.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Leadership</h3>
                  <p className="text-muted-foreground">
                    Launched advanced AI-powered features and achieved 500+ customer milestone, 
                    solidifying our position as an industry leader.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Become part of the Skillandservice family and experience the future of 
            global business communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/get-started/book-demo">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule a Meeting
              </Button>
            </a>
            <a href="https://salescentri.com/company/careers">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Careers
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;