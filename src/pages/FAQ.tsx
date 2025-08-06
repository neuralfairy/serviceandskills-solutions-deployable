import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, Phone, Search } from "lucide-react";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What is iGCT (Global Cloud Telephony)?",
        answer: "iGCT is our flagship cloud-based telephony platform that enables businesses to make and receive calls globally through the internet. It eliminates the need for traditional phone systems and provides advanced features like call routing, analytics, and integration capabilities."
      },
      {
        question: "How does cloud telephony differ from traditional phone systems?",
        answer: "Cloud telephony operates entirely over the internet, eliminating the need for physical hardware, complex installations, or maintenance. It offers greater flexibility, scalability, cost-effectiveness, and advanced features compared to traditional PBX systems."
      },
      {
        question: "Which countries does your platform support?",
        answer: "Our iGCT platform provides coverage in 190+ countries worldwide, with local number availability in most major markets. We maintain premium voice quality through our global network of tier-1 carriers and data centers."
      }
    ]
  },
  {
    title: "Pricing & Plans",
    faqs: [
      {
        question: "Do you offer a free trial?",
        answer: "Yes! We offer a 14-day free trial that includes full access to Professional plan features with no restrictions. No credit card is required to start your trial."
      },
      {
        question: "Can I change my plan anytime?",
        answer: "Absolutely. You can upgrade or downgrade your plan at any time through your dashboard. Changes take effect immediately, and billing is prorated accordingly."
      },
      {
        question: "Are there any setup fees or hidden costs?",
        answer: "No setup fees or hidden costs. You only pay for your monthly subscription and any usage-based features you utilize, such as additional phone numbers or premium add-ons."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, and ACH payments for enterprise accounts. All transactions are processed securely through our encrypted payment system."
      }
    ]
  },
  {
    title: "Technical & Security",
    faqs: [
      {
        question: "How secure is your platform?",
        answer: "Security is our top priority. We use bank-grade encryption, maintain SOC 2 compliance, and are GDPR compliant. All communications are encrypted end-to-end, and we undergo regular security audits by third-party firms."
      },
      {
        question: "What is your uptime guarantee?",
        answer: "We provide a 99.9% uptime SLA backed by our global redundant infrastructure. Our platform is built across multiple data centers with automatic failover capabilities to ensure continuous service availability."
      },
      {
        question: "Can I integrate with my existing CRM or business tools?",
        answer: "Yes, our platform offers comprehensive API access and pre-built integrations with popular CRM systems like Salesforce, HubSpot, and Pipedrive. We also provide webhooks and custom integration support."
      },
      {
        question: "What happens to my data if I cancel my subscription?",
        answer: "You retain full access to your data for 30 days after cancellation. We provide data export tools and can assist with migration. After 30 days, data is securely deleted from our systems in compliance with data protection regulations."
      }
    ]
  },
  {
    title: "Features & Usage",
    faqs: [
      {
        question: "Can I port my existing phone numbers?",
        answer: "Yes, we support number porting from most carriers. The process typically takes 3-5 business days, and our support team will guide you through the entire process to ensure a smooth transition."
      },
      {
        question: "Do you provide mobile apps?",
        answer: "Yes, we offer native mobile apps for both iOS and Android devices. The apps provide full functionality including calling, messaging, call management, and access to analytics dashboards."
      },
      {
        question: "How does call recording work?",
        answer: "Call recording is available on all plans with configurable settings. You can enable automatic recording for all calls or specific numbers, with secure cloud storage and easy search and playback capabilities."
      },
      {
        question: "Can I use my existing internet connection?",
        answer: "Yes, our platform works with any standard internet connection. For optimal call quality, we recommend a minimum bandwidth of 100 kbps per concurrent call. We also provide network assessment tools to help optimize your setup."
      }
    ]
  },
  {
    title: "Support & Implementation",
    faqs: [
      {
        question: "How quickly can I get started?",
        answer: "You can be up and running within minutes of signing up. Our platform requires no hardware installation – simply create an account, configure your settings, and start making calls through our web app or mobile apps."
      },
      {
        question: "What kind of support do you provide?",
        answer: "We offer multiple support channels including 24/7 live chat, email support, phone support during business hours, and a comprehensive knowledge base. Enterprise customers receive dedicated account managers."
      },
      {
        question: "Do you provide training for new users?",
        answer: "Yes, we offer free onboarding sessions, comprehensive documentation, video tutorials, and live training webinars. Enterprise customers receive personalized training sessions for their teams."
      },
      {
        question: "Can you help with migration from our current system?",
        answer: "Absolutely. Our migration specialists provide end-to-end support including system assessment, data migration, number porting, and user training. We ensure minimal disruption to your business operations."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white mb-6">Frequently Asked Questions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Answers to Your 
              <span className="text-primary-light"> Questions</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Find quick answers to common questions about our iGCT platform, 
              pricing, features, and implementation process.
            </p>
            
            {/* Search Box */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search for answers..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg text-foreground bg-white/90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  {category.title}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help 
              with any questions about our iGCT platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-gradient text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <MessageSquare className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant help from our support team
                </p>
                <a href="https://salescentri.com/contact/support-request/live-chat">
                  <Button className="w-full">Start Chat</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                <p className="text-muted-foreground mb-4">
                  Speak with our experts directly
                </p>
                <a href="tel:+15551234567">
                  <Button className="w-full">Call Now</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <MessageSquare className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-4">
                  Send us a detailed message
                </p>
                <a href="https://salescentri.com/contact/support-request/submit-ticket">
                  <Button className="w-full">Send Email</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More Resources
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Discover additional resources to help you get the most out of our iGCT platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/docs/user-guide">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                User Documentation
              </Button>
            </a>
            <a href="https://salescentri.com/resources/tutorials-webinars">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Video Tutorials
              </Button>
            </a>
            <a href="https://salescentri.com/get-started/book-demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Demo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;