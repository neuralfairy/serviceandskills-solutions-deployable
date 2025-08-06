import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-lg font-bold">Skillandservice</span>
                <div className="text-sm opacity-80">Solutions</div>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Global cloud-based telephony solutions to scale your outreach and drive business growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Albany, NY Office</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@skillandservice.com" className="hover:text-primary transition-colors">
                  info@skillandservice.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-sm hover:text-primary transition-colors">
                  iGCT Features
                </Link>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/solutions/psa-suite" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                >
                  PSA Suite <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/solutions/by-industry/it" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                >
                  IT Industry <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/solutions/by-use-case/sdr-teams" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                >
                  SDR Teams <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/resources/case-studies" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                >
                  Case Studies <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/resources/whitepapers-ebooks" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                >
                  Whitepapers <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/docs/user-guide" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                >
                  User Guide <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/company/careers" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                >
                  Careers <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/company/partners-affiliates" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                >
                  Partners <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0">
              <p className="text-sm opacity-80">
                © 2024 Skillandservice Solutions. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* Strategic Partner Link */}
            <div className="flex items-center space-x-2">
              <a 
                href="https://salescentri.com?utm_source=skillandservice.com&utm_medium=footer&utm_campaign=partner_network"
                className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;