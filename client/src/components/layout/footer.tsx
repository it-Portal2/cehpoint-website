import { Link } from "wouter";
import { Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const serviceLinks = [
    { name: "E-commerce Development", href: "/services/ecommerce" },
    { name: "Edutech Solutions", href: "/services/edutech" },
    { name: "Fintech Applications", href: "/services/fintech" },
    { name: "AI Solutions", href: "/ai-solutions" },
  ];

  const companyLinks = [
    { name: "Portfolio", href: "https://portfolios.cehpoint.co.in/", external: true },
    { name: "24-Hour Demo", href: "/demo-delivery" },
    { name: "Careers", href: "/careers" },
    { name: "Get Quote", href: "/quotation" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-display font-bold text-2xl text-gradient mb-4" data-testid="footer-logo">
              Cehpoint
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
              Transforming businesses worldwide with AI-powered solutions. Experience our 24-hour demo delivery, pay only when satisfied.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/cehpoint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer"
                data-testid="social-twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://linkedin.com/company/cehpoint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4" data-testid="footer-services-title">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="hover:text-foreground transition-colors"
                      data-testid={`footer-service-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-foreground transition-colors"
                      data-testid={`footer-service-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4" data-testid="footer-company-title">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                      data-testid={`footer-company-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-foreground transition-colors"
                      data-testid={`footer-company-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p data-testid="footer-copyright">
            &copy; {new Date().getFullYear()} Cehpoint. All rights reserved. Built with enterprise-grade engineering.
          </p>
        </div>
      </div>
    </footer>
  );
}
