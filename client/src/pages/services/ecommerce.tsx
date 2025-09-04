import { ShoppingCart, CreditCard, BarChart3, Shield, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function EcommerceService() {
  const problemPatterns = [
    "Slow-loading product pages affecting conversion rates",
    "Complex checkout processes leading to cart abandonment",
    "Inadequate inventory management across multiple channels",
    "Poor mobile shopping experience",
    "Limited payment gateway options",
    "Lack of real-time analytics and insights"
  ];

  const architectureComponents = [
    {
      icon: ShoppingCart,
      title: "Product Catalog Management",
      description: "Scalable product information management with advanced search and filtering capabilities."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure, multi-gateway payment integration with support for global payment methods."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Real-time business intelligence with conversion tracking and customer insights."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "PCI-DSS compliant architecture with advanced fraud detection and prevention."
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description: "Progressive web apps and native mobile applications for seamless shopping."
    },
    {
      icon: Globe,
      title: "Multi-channel Integration",
      description: "Unified commerce platform connecting online stores, marketplaces, and physical retail."
    }
  ];

  const kpis = [
    { metric: "Conversion Rate", target: "3.5%+", description: "Industry-leading conversion optimization" },
    { metric: "Page Load Time", target: "<2s", description: "Fast-loading pages for better UX" },
    { metric: "Cart Abandonment", target: "<65%", description: "Reduced abandonment through UX optimization" },
    { metric: "Mobile Traffic", target: "70%+", description: "Mobile-first responsive design" },
    { metric: "Uptime", target: "99.9%", description: "High availability and reliability" },
    { metric: "Security Score", target: "A+", description: "Top-tier security implementation" }
  ];

  return (
    <div className="pt-24 min-h-screen" data-testid="ecommerce-service-page">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              E-commerce <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              Build scalable, conversion-optimized e-commerce platforms that drive revenue and customer satisfaction.
            </p>
            <Link href="/quotation">
              <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground" data-testid="cta-get-quote">
                Get E-commerce Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Patterns */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="problems-title">
              E-commerce <span className="text-gradient">Challenges We Solve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common pain points that prevent e-commerce businesses from reaching their full potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemPatterns.map((problem, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`problem-${index}`}>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <p className="text-muted-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Architecture */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="architecture-title">
              Reference <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade e-commerce architecture designed for scale, performance, and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureComponents.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <div key={index} className="glass rounded-3xl p-8 hover-lift" data-testid={`architecture-${index}`}>
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4" data-testid={`architecture-title-${index}`}>
                    {component.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`architecture-description-${index}`}>
                    {component.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="compliance-title">
                Security & <span className="text-gradient">Compliance</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Built-in security measures and compliance standards to protect your business and customers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>PCI-DSS Level 1 Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>GDPR & CCPA Privacy Protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>SOC 2 Type II Security Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Advanced Fraud Detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>SSL/TLS Encryption</span>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6 text-center" data-testid="security-features-title">
                Security Features
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Two-Factor Authentication</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Data Encryption at Rest</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Regular Security Audits</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>WAF Protection</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>DDoS Mitigation</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs & Deliverables */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="kpis-title">
              Target <span className="text-gradient">KPIs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable outcomes we deliver for e-commerce success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kpis.map((kpi, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`kpi-${index}`}>
                <div className="text-3xl font-bold text-primary mb-2" data-testid={`kpi-target-${index}`}>
                  {kpi.target}
                </div>
                <h3 className="font-bold text-lg mb-2" data-testid={`kpi-metric-${index}`}>
                  {kpi.metric}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`kpi-description-${index}`}>
                  {kpi.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="cta-title">
              Ready to Transform Your <span className="text-gradient">E-commerce Business?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="cta-description">
              Get a detailed quotation with AI-powered analysis and technical recommendations for your e-commerce project.
            </p>
            <Link href="/quotation">
              <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground" data-testid="cta-final">
                Get Your E-commerce Quotation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
