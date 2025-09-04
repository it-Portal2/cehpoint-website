import { Brain, Bot, TrendingUp, Zap, Eye, Cpu, Shield, Target, Sparkles, Workflow, Database, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AISolutions() {
  const aiSolutions = [
    {
      icon: Brain,
      title: "Generative AI Integration",
      description: "Custom GPT models, content generation, and AI-powered user experiences with cutting-edge language models.",
      features: ["Custom AI models", "Content generation", "AI chatbots", "Smart recommendations"],
      benefits: "40% increase in user engagement",
      complexity: "Advanced"
    },
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "End-to-end process automation with AI decision-making, workflow optimization, and smart task management.",
      features: ["Process automation", "Smart workflows", "Decision engines", "Task optimization"],
      benefits: "60% reduction in manual tasks",
      complexity: "Intermediate"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Machine learning models for business forecasting, trend analysis, and data-driven decision making.",
      features: ["ML pipelines", "Forecasting models", "Trend analysis", "Business intelligence"],
      benefits: "25% improvement in predictions",
      complexity: "Advanced"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image recognition, video analysis, and visual AI for quality control, security, and user experiences.",
      features: ["Image recognition", "Video analysis", "Quality control", "Visual search"],
      benefits: "90% accuracy in detection",
      complexity: "Advanced"
    },
    {
      icon: Cpu,
      title: "Real-time AI Processing",
      description: "Edge AI deployment, real-time inference, and low-latency AI applications for instant responses.",
      features: ["Edge deployment", "Real-time inference", "Low latency", "Instant responses"],
      benefits: "Sub-100ms response times",
      complexity: "Expert"
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "AI-powered security monitoring, fraud detection, and compliance automation for enterprise applications.",
      features: ["Fraud detection", "Security monitoring", "Compliance automation", "Risk assessment"],
      benefits: "99.5% threat detection rate",
      complexity: "Advanced"
    },
    {
      icon: Target,
      title: "Personalization Engine",
      description: "AI-driven user personalization, dynamic content delivery, and behavioral analysis for enhanced UX.",
      features: ["User personalization", "Dynamic content", "Behavioral analysis", "A/B testing"],
      benefits: "35% increase in conversions",
      complexity: "Intermediate"
    },
    {
      icon: Code,
      title: "AI Code Generation",
      description: "Automated code generation, smart refactoring, and AI-assisted development for faster delivery.",
      features: ["Code generation", "Smart refactoring", "Bug detection", "Performance optimization"],
      benefits: "3x faster development",
      complexity: "Advanced"
    }
  ];

  return (
    <section id="ai-solutions" className="py-24" data-testid="ai-solutions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-accent">🤖 Powered by Gemini AI</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-7xl mb-8 tracking-tight" data-testid="ai-solutions-title">
            AI-First 
            <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="ai-solutions-subtitle">
            From generative AI to predictive analytics, we integrate cutting-edge artificial intelligence to transform your business processes and drive exponential growth.
          </p>
          <div className="mt-8 flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Enterprise-Grade AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Custom Model Training</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Real-time Processing</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aiSolutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const complexityColor = {
              "Intermediate": "text-blue-400 bg-blue-400/10",
              "Advanced": "text-purple-400 bg-purple-400/10",
              "Expert": "text-red-400 bg-red-400/10"
            }[solution.complexity] || "text-green-400 bg-green-400/10";
            
            return (
              <div 
                key={solution.title} 
                className="glass-intense rounded-3xl p-8 hover-lift group relative overflow-hidden"
                data-testid={`ai-solution-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${complexityColor}`}>
                    {solution.complexity}
                  </span>
                </div>
                
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors" data-testid={`ai-title-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed" data-testid={`ai-description-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {solution.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {solution.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs">
                      <div className="w-1.5 h-1.5 gradient-accent rounded-full mr-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full inline-block">
                  {solution.benefits}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center space-y-8">
          <div className="glass-intense rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="font-display font-bold text-2xl mb-4">Experience AI-Powered Quotations</h3>
            <p className="text-muted-foreground mb-6">
              See our AI in action! Get intelligent project analysis, cost estimation, and technical recommendations powered by advanced machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quotation">
                <Button className="btn-primary hover-glow px-8 py-4 rounded-2xl text-lg font-bold text-primary-foreground" data-testid="ai-solutions-cta-primary">
                  Try AI Quotation System
                </Button>
              </Link>
              <Button variant="outline" className="glass hover-lift px-8 py-4 rounded-2xl text-lg font-semibold" data-testid="ai-solutions-cta-secondary">
                Talk to AI Solutions Architect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
