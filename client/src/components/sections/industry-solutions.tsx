import { ShoppingCart, BookOpen, DollarSign, Heart, Building, Truck, Film, Gamepad2, Users, Zap, Blocks, Brain, Wifi, Shield, Factory, Plane, Utensils, GraduationCap, Car, Home, TreePine, Briefcase, Palette, Music } from "lucide-react";

export default function IndustrySolutions() {
  const industries = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Transform shopping experiences with intelligent recommendations that boost sales by 40% and seamless omnichannel integration that keeps customers coming back.",
      features: ["AI product recommendations", "Omnichannel integration", "Advanced analytics", "Global payment systems"],
      growth: "35% YoY",
      projects: "150+"
    },
    {
      icon: DollarSign,
      title: "Fintech",
      description: "Build trust with bulletproof security, lightning-fast transactions, and automated compliance that keeps you ahead of regulations while reducing costs by 60%.",
      features: ["Blockchain technology", "Automated compliance", "Real-time transactions", "Risk assessment AI"],
      growth: "42% YoY",
      projects: "120+"
    },
    {
      icon: BookOpen,
      title: "Edutech",
      description: "Revolutionize education with AI that adapts to every student's pace, virtual classrooms that feel real, and learning paths that guarantee better outcomes.",
      features: ["Adaptive learning AI", "Virtual reality classes", "Progress analytics", "Gamified content"],
      growth: "28% YoY",
      projects: "85+"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Save lives and reduce costs with AI-powered diagnostics, secure telemedicine platforms, and patient management systems that healthcare providers trust.",
      features: ["HIPAA compliance", "AI diagnostics", "Telemedicine", "Patient analytics"],
      growth: "31% YoY",
      projects: "95+"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 solutions with IoT integration, predictive maintenance, and supply chain optimization.",
      features: ["IoT monitoring", "Predictive maintenance", "Quality control", "Supply chain optimization"],
      growth: "24% YoY",
      projects: "70+"
    },
    {
      icon: Building,
      title: "Real Estate",
      description: "PropTech innovations with virtual tours, smart contracts, and automated property management.",
      features: ["Virtual reality tours", "Smart contracts", "Property analytics", "Automated management"],
      growth: "29% YoY",
      projects: "65+"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Smart logistics with route optimization, fleet management, and real-time tracking technologies.",
      features: ["Route optimization", "Fleet management", "Real-time tracking", "Predictive delivery"],
      growth: "26% YoY",
      projects: "80+"
    },
    {
      icon: Plane,
      title: "Travel & Tourism",
      description: "Comprehensive travel platforms with booking systems, itinerary planning, and experience management.",
      features: ["Smart booking", "Itinerary AI", "Experience curation", "Travel analytics"],
      growth: "33% YoY",
      projects: "45+"
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      description: "Restaurant tech with ordering systems, inventory management, and customer experience optimization.",
      features: ["Online ordering", "Inventory management", "Customer insights", "Delivery integration"],
      growth: "27% YoY",
      projects: "60+"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Connected vehicle platforms with fleet management, maintenance tracking, and smart mobility solutions.",
      features: ["Fleet management", "Maintenance tracking", "Connected vehicles", "Mobility analytics"],
      growth: "22% YoY",
      projects: "40+"
    },
    {
      icon: TreePine,
      title: "Agriculture",
      description: "Precision agriculture with IoT sensors, crop monitoring, and yield optimization technologies.",
      features: ["IoT crop monitoring", "Yield optimization", "Weather integration", "Farm analytics"],
      growth: "30% YoY",
      projects: "35+"
    },
    {
      icon: Home,
      title: "Smart Home",
      description: "IoT-enabled home automation with security systems, energy management, and intelligent controls.",
      features: ["Home automation", "Security systems", "Energy management", "Smart controls"],
      growth: "38% YoY",
      projects: "55+"
    },
    {
      icon: GraduationCap,
      title: "Professional Services",
      description: "Business automation with CRM systems, project management, and client communication platforms.",
      features: ["CRM integration", "Project management", "Client portals", "Automation tools"],
      growth: "25% YoY",
      projects: "90+"
    },
    {
      icon: Briefcase,
      title: "Enterprise SaaS",
      description: "Scalable business solutions with multi-tenancy, enterprise integrations, and advanced analytics.",
      features: ["Multi-tenant architecture", "Enterprise integrations", "Advanced analytics", "Auto-scaling"],
      growth: "41% YoY",
      projects: "110+"
    },
    {
      icon: Film,
      title: "Media & Entertainment",
      description: "Content platforms with streaming technology, content management, and audience engagement tools.",
      features: ["Streaming technology", "Content management", "Audience analytics", "Monetization tools"],
      growth: "34% YoY",
      projects: "50+"
    },
    {
      icon: Music,
      title: "Creative Industries",
      description: "Digital platforms for artists, creators, and agencies with portfolio management and collaboration tools.",
      features: ["Portfolio management", "Collaboration tools", "Creative workflows", "Client management"],
      growth: "32% YoY",
      projects: "40+"
    },
    {
      icon: Users,
      title: "Social Platforms",
      description: "Community-driven platforms with social features, content moderation, and engagement analytics.",
      features: ["Community features", "Content moderation", "Engagement analytics", "Social commerce"],
      growth: "36% YoY",
      projects: "75+"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent systems with ML pipelines, data processing, and automated decision-making capabilities.",
      features: ["ML pipelines", "Data processing", "Model deployment", "Automated insights"],
      growth: "45% YoY",
      projects: "65+"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/50" data-testid="industry-solutions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-accent">🌍 Global Industry Coverage</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-7xl mb-8 tracking-tight" data-testid="industry-solutions-title">
            Transforming Every 
            <span className="text-gradient"> Industry</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="industry-solutions-subtitle">
            From startups to Fortune 500 companies, we deliver enterprise-grade solutions across every business vertical with cutting-edge technology and measurable outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div 
                key={industry.title} 
                className="glass-intense rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift group relative overflow-hidden"
                data-testid={`industry-card-${industry.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                role="article"
                aria-labelledby={`industry-title-${industry.title.toLowerCase()}`}
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {industry.growth}
                  </span>
                  <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                    {industry.projects}
                  </span>
                </div>
                
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-primary transition-colors" data-testid={`industry-title-${industry.title.toLowerCase()}`}>
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`industry-description-${industry.title.toLowerCase()}`}>
                  {industry.description}
                </p>
                
                <div className="space-y-3">
                  {industry.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center text-sm"
                      data-testid={`industry-feature-${industry.title.toLowerCase()}-${featureIndex}`}
                    >
                      <div className="w-2 h-2 gradient-accent rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
