import { DollarSign, Shield, BarChart3, Smartphone, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FintechService() {
  const problemPatterns = [
    "Complex regulatory compliance across multiple jurisdictions",
    "Security vulnerabilities in payment processing systems",
    "Slow transaction processing and settlement times",
    "Limited integration with banking and financial institutions",
    "Poor user experience in mobile financial applications",
    "Lack of real-time fraud detection and risk management"
  ];

  const architectureComponents = [
    {
      icon: DollarSign,
      title: "Payment Processing",
      description: "High-performance payment engines with multi-currency support and instant settlements."
    },
    {
      icon: Shield,
      title: "Security & Fraud Detection",
      description: "Advanced AI-powered fraud detection with real-time risk assessment and prevention."
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Comprehensive financial reporting, analytics, and business intelligence platforms."
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Native mobile applications with biometric authentication and seamless UX."
    },
    {
      icon: Globe,
      title: "Blockchain Integration",
      description: "Cryptocurrency support, smart contracts, and distributed ledger technologies."
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Built-in compliance frameworks for KYC, AML, PCI-DSS, and regional regulations."
    }
  ];

  const kpis = [
    { metric: "Transaction Speed", target: "<100ms", description: "Ultra-fast payment processing" },
    { metric: "Uptime", target: "99.99%", description: "Mission-critical system reliability" },
    { metric: "Fraud Detection", target: "99.9%", description: "AI-powered fraud prevention accuracy" },
    { metric: "Compliance Score", target: "100%", description: "Full regulatory compliance adherence" },
    { metric: "Mobile Adoption", target: "80%+", description: "Mobile-first user engagement" },
    { metric: "API Response", target: "<50ms", description: "Lightning-fast API performance" }
  ];

  return (
    <div className="pt-24 min-h-screen" data-testid="fintech-service-page">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              Fintech <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              Build secure, compliant, and scalable financial technology platforms that power the future of finance.
            </p>
            <Link href="/quotation">
              <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground" data-testid="cta-get-quote">
                Get Fintech Quote
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
              Financial <span className="text-gradient">Challenges We Solve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complex financial technology challenges require specialized expertise and proven solutions
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
              Financial <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade fintech architecture designed for security, compliance, and scalability
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
                Regulatory <span className="text-gradient">Compliance</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Financial platforms built with comprehensive regulatory compliance and security frameworks.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>PCI-DSS Level 1 Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>SOX Financial Reporting Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>KYC/AML Compliance Frameworks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>GDPR & Privacy Protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>ISO 27001 Security Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Regional Banking Regulations</span>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6 text-center" data-testid="security-features-title">
                Security Features
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>End-to-End Encryption</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Multi-Factor Authentication</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Biometric Authentication</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Real-time Fraud Detection</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Blockchain Security</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Audit Trail & Logging</span>
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
              Performance <span className="text-gradient">Metrics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mission-critical performance standards for financial technology platforms
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
              Ready to Build the <span className="text-gradient">Future of Finance?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="cta-description">
              Get a detailed quotation with AI-powered analysis and compliance roadmap for your fintech project.
            </p>
            <Link href="/quotation">
              <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground" data-testid="cta-final">
                Get Your Fintech Quotation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
