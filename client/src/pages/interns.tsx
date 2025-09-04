import { ExternalLink, Users, Code, Award, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Interns() {
  const benefits = [
    {
      icon: Code,
      title: "Real Project Experience",
      description: "Work on actual client projects using cutting-edge technologies and frameworks."
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Learn from experienced developers with personalized guidance and code reviews."
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Comprehensive training in modern development practices and industry standards."
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Fast-track your career with performance-based advancement opportunities."
    }
  ];

  const techStack = [
    "React & Next.js",
    "Node.js & Express",
    "TypeScript",
    "PostgreSQL & MongoDB",
    "AWS & Cloud Services",
    "Docker & Kubernetes",
    "AI/ML Technologies",
    "Blockchain Development"
  ];

  return (
    <div className="pt-24 min-h-screen" data-testid="interns-page">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              Join Our <span className="text-gradient">Internship Program</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              Launch your career in software development with hands-on experience in e-commerce, edutech, and fintech projects.
            </p>
            <a 
              href="https://internlink.cehpoint.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="cta-apply-now"
            >
              <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground inline-flex items-center">
                Apply Now
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6" data-testid="benefits-title">
              Why Choose <span className="text-gradient">Cehpoint</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our internship program is designed to accelerate your growth as a software developer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="glass rounded-3xl p-8 hover-lift text-center" data-testid={`benefit-${index}`}>
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4" data-testid={`benefit-title-${index}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`benefit-description-${index}`}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6" data-testid="tech-stack-title">
              Technologies <span className="text-gradient">You'll Master</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gain hands-on experience with industry-leading technologies and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-4 text-center hover-lift"
                data-testid={`tech-${index}`}
              >
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="program-details-title">
                Program <span className="text-gradient">Details</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                A comprehensive internship experience designed to prepare you for a successful career in software development.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Duration</h3>
                    <p className="text-muted-foreground">3-6 months with flexible scheduling options</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Training</h3>
                    <p className="text-muted-foreground">Structured learning with real project assignments</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Mentorship</h3>
                    <p className="text-muted-foreground">One-on-one guidance from senior developers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Certification</h3>
                    <p className="text-muted-foreground">Industry-recognized completion certificate</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6 text-center" data-testid="requirements-title">
                Requirements
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Programming Knowledge</span>
                  <span className="text-primary font-semibold">Basic to Intermediate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Education Level</span>
                  <span className="text-primary font-semibold">Computer Science Student</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Commitment</span>
                  <span className="text-primary font-semibold">20-40 hours/week</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>English Proficiency</span>
                  <span className="text-primary font-semibold">Good Communication</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Learning Attitude</span>
                  <span className="text-primary font-semibold">Growth Mindset</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-xl">
                <p className="text-center text-sm text-muted-foreground">
                  <strong>Note:</strong> Selected interns may receive offers for full-time positions based on performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6" data-testid="application-process-title">
              Application <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple and straightforward application process to join our internship program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Apply Online</h3>
              <p className="text-muted-foreground text-sm">Submit your application through our portal</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Initial Screening</h3>
              <p className="text-muted-foreground text-sm">Review of qualifications and background</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Technical Assessment</h3>
              <p className="text-muted-foreground text-sm">Coding challenge and technical interview</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Final Interview</h3>
              <p className="text-muted-foreground text-sm">Meet the team and discuss goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="cta-title">
              Ready to Start Your <span className="text-gradient">Tech Career?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="cta-description">
              Join our internship program and gain valuable experience working on real-world projects with cutting-edge technologies.
            </p>
            <a 
              href="https://internlink.cehpoint.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="cta-final"
            >
              <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground inline-flex items-center">
                Apply for Internship
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
