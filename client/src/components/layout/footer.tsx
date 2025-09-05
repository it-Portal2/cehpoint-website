import { Link } from "wouter"
import { Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Sparkles } from "lucide-react"

export default function Footer() {
  const serviceLinks = [
    { name: "E-commerce Development", href: "/services/ecommerce" },
    { name: "Edutech Solutions", href: "/services/edutech" },
    { name: "Fintech Applications", href: "/services/fintech" },
    { name: "AI Solutions", href: "/ai-solutions" },
  ]

  const companyLinks = [
    { name: "Portfolio", href: "https://portfolios.cehpoint.co.in/", external: true },
    { name: "24-Hour Demo", href: "/demo-delivery" },
    { name: "Careers", href: "/careers" },
    { name: "Get Quote", href: "/quotation" },
  ]

  return (
    <footer className="relative bg-secondary/50 border-t border-border overflow-hidden" data-testid="footer">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-2 lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="font-display font-bold text-3xl text-gradient" data-testid="footer-logo">
                  Cehpoint
                </div>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed max-w-md" data-testid="footer-description">
                Cehpoint is a modern IT and cybersecurity company committed to delivering secure, scalable, and
                intelligent technology solutions. Founded by ethical hackers and seasoned IT professionals.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">Connect With Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/cehpoint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center hover:from-primary/30 hover:to-primary/20 transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                  data-testid="social-twitter"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                </a>
                <a
                  href="https://linkedin.com/company/cehpoint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center hover:from-primary/30 hover:to-primary/20 transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                  data-testid="social-linkedin"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-xl text-foreground" data-testid="footer-services-title">
                Services
              </h4>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </div>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <li key={link.name} className="group">
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 group-hover:translate-x-2"
                      data-testid={`footer-service-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 group-hover:translate-x-2"
                      data-testid={`footer-service-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-xl text-foreground" data-testid="footer-company-title">
                Company
              </h4>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </div>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={link.name} className="group">
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 group-hover:translate-x-2"
                      data-testid={`footer-company-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                      <span className="text-sm font-medium">{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 group-hover:translate-x-2"
                      data-testid={`footer-company-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-xl text-foreground" data-testid="footer-contact-title">
                Get in Touch
              </h4>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </div>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="group relative p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:contact@cehpoint.co.in"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 break-all"
                      data-testid="footer-email"
                    >
                      contact@cehpoint.co.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider">Phone</p>
                    <a
                      href="tel:+913369029331"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                      data-testid="footer-phone"
                    >
                      +91 33690 29331
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="group relative p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider">Address</p>
                    <address
                      className="not-italic text-sm text-foreground leading-relaxed"
                      data-testid="footer-address"
                    >
                      Cehpoint, Labpur
                      <br />
                      Sandipan Patsala Para
                      <br />
                      Birbhum, Bolpur
                      <br />
                      West Bengal - 731303
                      <br />
                      India
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-20 pt-8 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left space-y-2">
              <p className="text-muted-foreground text-sm font-medium" data-testid="footer-copyright">
                &copy; {new Date().getFullYear()} Cehpoint. All rights reserved.
              </p>
              <p className="text-muted-foreground/70 text-xs">
                The Point Where IT Innovation Meets Cybersecurity Excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-center sm:text-right">
                <p className="text-sm font-medium text-foreground mb-1">Ready to get started?</p>
                <p className="text-xs text-muted-foreground">Let's build something amazing together</p>
              </div>
              <div className="flex space-x-3">
                <a
                  href="mailto:contact@cehpoint.co.in"
                  className="group inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-xl hover:from-primary/30 hover:to-primary/20 transition-all duration-300 text-sm font-semibold border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
                  data-testid="footer-cta-email"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Email Us
                </a>
                <a
                  href="tel:+913369029331"
                  className="group inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-xl hover:from-primary/30 hover:to-primary/20 transition-all duration-300 text-sm font-semibold border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
                  data-testid="footer-cta-call"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
