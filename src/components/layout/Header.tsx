import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Menu, X, Phone, Shield, Users, BookOpen, HelpCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Phone className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">Skillandservice</span>
              <div className="text-xs text-muted-foreground">Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4">
                    <div className="grid gap-3">
                      <Link 
                        to="/features" 
                        className="flex items-center space-x-3 rounded-lg p-3 hover:bg-accent"
                      >
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">iGCT Features</div>
                          <div className="text-sm text-muted-foreground">Global Cloud Telephony capabilities</div>
                        </div>
                      </Link>
                      <a 
                        href="https://salescentri.com/solutions/psa-suite"
                        className="flex items-center space-x-3 rounded-lg p-3 hover:bg-accent"
                      >
                        <Shield className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">PSA Suite</div>
                          <div className="text-sm text-muted-foreground">Professional Services Automation</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/pricing" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-4">
                    <div className="grid gap-3">
                      <Link 
                        to="/about" 
                        className="flex items-center space-x-3 rounded-lg p-3 hover:bg-accent"
                      >
                        <Users className="h-5 w-5 text-primary" />
                        <div>About Us</div>
                      </Link>
                      <Link 
                        to="/blog" 
                        className="flex items-center space-x-3 rounded-lg p-3 hover:bg-accent"
                      >
                        <BookOpen className="h-5 w-5 text-primary" />
                        <div>Blog</div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/faq" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://salescentri.com/login/customer-portal">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </a>
            <a href="https://salescentri.com/get-started/book-demo">
              <Button size="sm" className="btn-primary">
                Book Demo
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link
                to="/features"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex space-x-2 px-3 pt-2">
                <a href="https://salescentri.com/login/customer-portal" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    Login
                  </Button>
                </a>
                <a href="https://salescentri.com/get-started/book-demo" className="flex-1">
                  <Button size="sm" className="w-full btn-primary">
                    Book Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;