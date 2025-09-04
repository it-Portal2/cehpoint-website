import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Zap, Brain, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function AISolutions() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Solutions", icon: Sparkles },
    { id: "automation", name: "Automation", icon: Zap },
    { id: "analytics", name: "Analytics", icon: Brain },
    { id: "optimization", name: "Optimization", icon: CheckCircle },
  ];

  const aiProjects = [
    {
      id: 1,
      title: "AI Customer Support Chatbot",
      category: "automation",
      description: "Intelligent chatbot that handles customer inquiries, reduces support tickets by 70%, and provides 24/7 assistance.",
      industry: ["E-commerce", "SaaS", "Healthcare"],
      features: [
        "Natural language processing",
        "Multi-language support", 
        "Integration with existing systems",
        "Analytics dashboard",
        "Escalation to human agents"
      ],
      deliveryTime: "7 days",
      complexity: "Medium",
      estimatedCost: "₹2.8L - ₹6L",
      demoIncluded: true
    },
    {
      id: 2,
      title: "Smart Document Processing",
      category: "automation",
      description: "AI-powered system that extracts, processes, and organizes data from documents, invoices, and forms automatically.",
      industry: ["Finance", "Legal", "Healthcare"],
      features: [
        "OCR text extraction",
        "Data validation",
        "Automated workflow routing",
        "Integration APIs",
        "Audit trail tracking"
      ],
      deliveryTime: "7 days",
      complexity: "High",
      estimatedCost: "₹4.4L - ₹9.6L",
      demoIncluded: true
    },
    {
      id: 3,
      title: "Predictive Sales Analytics",
      category: "analytics",
      description: "Machine learning model that predicts sales trends, identifies high-value prospects, and optimizes pricing strategies.",
      industry: ["Sales", "E-commerce", "Real Estate"],
      features: [
        "Sales forecasting",
        "Lead scoring",
        "Customer lifetime value",
        "Price optimization",
        "Interactive dashboards"
      ],
      deliveryTime: "7 days",
      complexity: "High",
      estimatedCost: "₹4.8L - ₹12L",
      demoIncluded: true
    },
    {
      id: 4,
      title: "AI Content Generator",
      category: "automation", 
      description: "Automated content creation system for blogs, social media, product descriptions, and marketing materials.",
      industry: ["Marketing", "E-commerce", "Media"],
      features: [
        "Multi-format content generation",
        "Brand voice customization",
        "SEO optimization",
        "Content scheduling",
        "Performance tracking"
      ],
      deliveryTime: "7 days",
      complexity: "Medium",
      estimatedCost: "₹3.2L - ₹7.2L",
      demoIncluded: true
    },
    {
      id: 5,
      title: "Smart Inventory Management",
      category: "optimization",
      description: "AI system that optimizes inventory levels, predicts demand, and automates reordering to reduce costs and stockouts.",
      industry: ["Retail", "Manufacturing", "E-commerce"],
      features: [
        "Demand forecasting",
        "Automated reordering",
        "Supplier optimization",
        "Cost analysis",
        "Real-time alerts"
      ],
      deliveryTime: "7 days",
      complexity: "High",
      estimatedCost: "₹4L - ₹10L",
      demoIncluded: true
    },
    {
      id: 6,
      title: "AI-Powered Recommendation Engine",
      category: "analytics",
      description: "Personalized recommendation system that increases user engagement and sales through intelligent product/content suggestions.",
      industry: ["E-commerce", "Streaming", "Education"],
      features: [
        "Collaborative filtering",
        "Content-based recommendations",
        "A/B testing framework",
        "Real-time personalization",
        "Performance analytics"
      ],
      deliveryTime: "7 days",
      complexity: "Medium",
      estimatedCost: "₹3.6L - ₹8L",
      demoIncluded: true
    },
    {
      id: 7,
      title: "Automated Quality Assurance",
      category: "automation",
      description: "AI system that automatically detects defects, monitors quality metrics, and ensures compliance standards.",
      industry: ["Manufacturing", "Healthcare", "Food"],
      features: [
        "Computer vision inspection",
        "Automated reporting",
        "Compliance tracking",
        "Alert systems",
        "Historical analysis"
      ],
      deliveryTime: "7 days",
      complexity: "High",
      estimatedCost: "₹5.2L - ₹11.2L",
      demoIncluded: true
    },
    {
      id: 8,
      title: "Smart Fraud Detection",
      category: "optimization",
      description: "Real-time fraud detection system that protects transactions, identifies suspicious patterns, and reduces financial losses.",
      industry: ["Finance", "E-commerce", "Insurance"],
      features: [
        "Real-time monitoring",
        "Machine learning models",
        "Risk scoring",
        "Alert management",
        "Integration capabilities"
      ],
      deliveryTime: "7 days",
      complexity: "High",
      estimatedCost: "₹5.6L - ₹12.8L",
      demoIncluded: true
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? aiProjects 
    : aiProjects.filter(project => project.category === selectedCategory);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Medium": return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300";
      case "High": return "bg-red-500/20 text-red-700 dark:text-red-300";
      default: return "bg-green-500/20 text-green-700 dark:text-green-300";
    }
  };

  return (
    <div className="pt-24 min-h-screen" data-testid="ai-solutions-page">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">🤖 AI-Powered Solutions</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              Transform Your Business with
              <br className="hidden sm:block" />
              <span className="text-gradient">AI Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed" data-testid="page-subtitle">
              Ready-to-deploy AI solutions that reduce work effort, save time, and boost efficiency across different industries with our exclusive 7-day delivery guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
              <Link href="/quotation">
                <Button 
                  className="btn-primary hover-glow px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold text-primary-foreground w-full sm:w-auto sm:min-w-[200px]" 
                  data-testid="hero-cta-primary"
                >
                  Get AI Solution Quote
                </Button>
              </Link>
              <Link href="/demo-delivery">
                <Button 
                  variant="outline"
                  className="glass hover-lift px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold w-full sm:w-auto sm:min-w-[200px]" 
                  data-testid="hero-cta-secondary"
                >
                  7-Day Demo Process →
                </Button>
              </Link>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="glass-intense rounded-2xl p-6 hover-lift group">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">7-Day Guarantee</h3>
                <p className="text-muted-foreground text-sm">Working AI solution delivered in exactly 7 days or full refund</p>
              </div>
              <div className="glass-intense rounded-2xl p-6 hover-lift group">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Pay After Demo</h3>
                <p className="text-muted-foreground text-sm">See the working solution first, pay only when satisfied</p>
              </div>
              <div className="glass-intense rounded-2xl p-6 hover-lift group">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Industry-Specific</h3>
                <p className="text-muted-foreground text-sm">Tailored AI solutions for your specific industry needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "glass hover:bg-primary/10"
                  }`}
                  data-testid={`category-${category.id}`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6" data-testid="solutions-title">
              AI Solutions <span className="text-gradient">Catalog</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our curated collection of AI solutions designed to solve real business challenges across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="glass hover-lift group transition-all duration-300" data-testid={`project-${project.id}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge className={getComplexityColor(project.complexity)}>
                      {project.complexity}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Industry Tags */}
                  <div>
                    <p className="font-semibold text-sm mb-2">Industries:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.industry.map((ind, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {ind}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <p className="font-semibold text-sm mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <ArrowRight className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Delivery Info */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">
                          {project.deliveryTime} delivery
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{project.estimatedCost}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-700 dark:text-green-400 font-medium">
                        Demo included - Pay after satisfaction
                      </span>
                    </div>

                    <Link href="/quotation">
                      <Button className="w-full btn-primary hover-glow" data-testid={`order-${project.id}`}>
                        Get This Solution →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="cta-title">
              Ready to Transform Your Business with <span className="text-gradient">AI?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="cta-description">
              Get your custom AI solution delivered in 7 days. Pay only after you see the working demo and are completely satisfied.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quotation">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground" data-testid="cta-quote">
                  Get AI Solution Quote
                </Button>
              </Link>
              <Link href="/demo-delivery">
                <Button variant="outline" className="glass px-8 py-4 rounded-xl text-lg font-semibold" data-testid="cta-process">
                  Learn About Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}