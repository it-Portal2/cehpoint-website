import { BookOpen, Users, Award, Monitor, Brain, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function EdutechService() {
  const problemPatterns = [
    "Low student engagement in online learning environments",
    "Difficulty tracking student progress and performance",
    "Limited interactive content and assessment tools",
    "Poor user experience on mobile devices",
    "Lack of personalized learning paths",
    "Inadequate collaboration tools for remote learning"
  ];

  const architectureComponents = [
    {
      icon: BookOpen,
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, content delivery, and assessment capabilities."
    },
    {
      icon: Users,
      title: "Virtual Classrooms",
      description: "Interactive online classrooms with video conferencing, screen sharing, and collaboration tools."
    },
    {
      icon: Award,
      title: "Assessment & Certification",
      description: "Advanced testing engine with automated grading, plagiarism detection, and certification management."
    },
    {
      icon: Monitor,
      title: "Content Management",
      description: "Multimedia content creation and delivery system with version control and accessibility features."
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Learning analytics and AI-driven insights for personalized education and performance optimization."
    },
    {
      icon: Globe,
      title: "Multi-tenant Platform",
      description: "Scalable platform supporting multiple institutions with customizable branding and features."
    }
  ];

  const kpis = [
    { metric: "Student Engagement", target: "85%+", description: "Active participation and course completion rates" },
    { metric: "Learning Outcomes", target: "25%", description: "Improvement in assessment scores" },
    { metric: "Platform Uptime", target: "99.9%", description: "Reliable access to educational content" },
    { metric: "Mobile Usage", target: "65%+", description: "Mobile-optimized learning experience" },
    { metric: "Content Accessibility", target: "WCAG 2.1 AA", description: "Inclusive design for all learners" },
    { metric: "Response Time", target: "<1.5s", description: "Fast-loading educational content" }
  ];

  return (
    <div className="pt-24 min-h-screen" data-testid="edutech-service-page">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              Edutech <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              Transform education with cutting-edge learning platforms that engage students and empower educators.
            </p>
            <Link href="/quotation">
              <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground" data-testid="cta-get-quote">
                Get Edutech Quote
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
              Educational <span className="text-gradient">Challenges We Solve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern education faces unique challenges that require innovative technology solutions
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
              Educational <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive platform architecture designed for modern educational institutions
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

      {/* Compliance & Standards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="compliance-title">
                Privacy & <span className="text-gradient">Compliance</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Educational platforms built with student privacy and regulatory compliance at their core.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>FERPA Compliance for Student Records</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>COPPA Protection for Minors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>GDPR Privacy Protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>WCAG 2.1 AA Accessibility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>ISO 27001 Security Standards</span>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6 text-center" data-testid="learning-features-title">
                Learning Features
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Adaptive Learning Paths</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Real-time Collaboration</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Advanced Analytics</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Mobile Learning Apps</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gamification Elements</span>
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
              Educational <span className="text-gradient">Outcomes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements in learning effectiveness and platform performance
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
              Ready to Revolutionize <span className="text-gradient">Education?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="cta-description">
              Get a comprehensive quotation with AI-powered analysis for your educational technology project.
            </p>
            <Link href="/quotation">
              <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground" data-testid="cta-final">
                Get Your Edutech Quotation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
