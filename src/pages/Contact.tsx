import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Calendar,
  ExternalLink,
  Send
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our experts",
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri 9AM-6PM EST",
    link: "tel:+15551234567"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed assistance",
    contact: "support@skillandservice.com",
    availability: "24/7 Response",
    link: "mailto:support@skillandservice.com"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant help available",
    contact: "Chat with us now",
    availability: "Mon-Fri 9AM-6PM EST",
    link: "https://salescentri.com/contact/support-request/live-chat"
  },
  {
    icon: Calendar,
    title: "Schedule Demo",
    description: "Book a personalized demo",
    contact: "Choose your time",
    availability: "Available daily",
    link: "https://salescentri.com/get-started/calendly"
  }
];

const officeInfo = {
  address: "123 Business Park Drive",
  city: "Albany, NY 12084",
  phone: "+1 (555) 123-4567",
  email: "info@skillandservice.com",
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM EST",
    weekends: "Saturday - Sunday: Closed"
  }
};

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white mb-6">Contact Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch with 
              <span className="text-primary-light"> Our Experts</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to transform your business communications? Our team is here to help 
              you find the perfect iGCT solution for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the contact method that works best for you. Our team is ready to assist 
              with any questions about our iGCT platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-gradient hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <method.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <div className="font-medium text-foreground mb-2">{method.contact}</div>
                  <div className="text-xs text-muted-foreground mb-4">{method.availability}</div>
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full">
                      Contact Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your communication needs and how we can help..."
                    rows={4}
                  />
                </div>
                
                <a href="https://salescentri.com/contact/sales-inquiry" className="block">
                  <Button className="w-full btn-primary">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Albany Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium">{officeInfo.address}</div>
                    <div className="text-muted-foreground">{officeInfo.city}</div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${officeInfo.phone}`} className="hover:text-primary transition-colors">
                      {officeInfo.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${officeInfo.email}`} className="hover:text-primary transition-colors">
                      {officeInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-muted-foreground">{officeInfo.hours.weekdays}</div>
                    <div className="text-muted-foreground">{officeInfo.hours.weekends}</div>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <div className="font-medium text-primary">24/7 Support Available</div>
                    <div className="text-sm text-muted-foreground">
                      Emergency support and live chat available around the clock
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
                  <div className="space-y-3">
                    <a href="https://salescentri.com/get-started/book-demo" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule a Demo
                      </Button>
                    </a>
                    <a href="https://salescentri.com/contact/support-request/submit-ticket" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Submit Support Ticket
                      </Button>
                    </a>
                    <a href="https://salescentri.com/contact/partnerships/partner-inquiry" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Partner Inquiry
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Communications?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Don't wait. Start your journey with iGCT today and see the difference 
            our platform can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/get-started/free-trial">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
            </a>
            <a href="https://salescentri.com/contact/sales-inquiry/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Request Quote
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;