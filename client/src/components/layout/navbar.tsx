import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "#", isDropdown: true },
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Incubation", href: "/incubation" },
    { name: "Demo Process", href: "/demo-delivery" },
    { name: "Get Quote", href: "/quotation" },
    { name: "Portfolio", href: "https://portfolios.cehpoint.co.in/", external: true },
    { name: "Careers", href: "/careers" },
  ];

  const serviceLinks = [
    { name: "E-commerce", href: "/services/ecommerce" },
    { name: "Edutech", href: "/services/edutech" },
    { name: "Fintech", href: "/services/fintech" },
  ];

  return (
    <nav className="fixed top-10 w-full z-40 glass"  data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" data-testid="logo-link">
              <div className="font-display font-bold text-2xl text-gradient hover:scale-105 transition-transform cursor-pointer">
                Cehpoint
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.isDropdown ? (
                  <>
                    <button 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="services-dropdown"
                    >
                      Services
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 glass rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                          data-testid={`service-link-${service.name.toLowerCase()}`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </a>
                ) : item.href.startsWith('#') ? (
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/quotation">
              <Button className="btn-primary hover-glow magnetic-hover px-6 py-3 rounded-xl text-primary-foreground font-bold" data-testid="cta-get-quote">
                🚀 Get AI Quote
              </Button>
            </Link>
            
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass rounded-lg mt-2 p-4" data-testid="mobile-menu">
            <div className="space-y-4">
              {serviceLinks.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`mobile-service-link-${service.name.toLowerCase()}`}
                >
                  {service.name}
                </Link>
              ))}
              {navigation.filter(item => !item.isDropdown).map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </a>
                ) : item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}