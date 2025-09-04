import { Check } from "lucide-react";

export default function EngagementModel() {
  const benefits = [
    {
      title: "Pay After Demo",
      description: "Experience the working solution first, pay only when completely satisfied with the demo results."
    },
    {
      title: "Transparent Scope", 
      description: "Fixed deliverables, clear timelines, and no hidden costs or scope creep."
    },
    {
      title: "Rapid MVP Plan",
      description: "Accelerated development with milestone-based delivery and continuous feedback loops."
    }
  ];

  return (
    <section className="py-24" data-testid="engagement-model-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="engagement-model-title">
                Our <span className="text-gradient">Engagement Model</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8" data-testid="engagement-model-subtitle">
                Pay after demo, transparent scope, and rapid MVP delivery that sets us apart from traditional development agencies.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4" data-testid={`benefit-${index}`}>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1" data-testid={`benefit-title-${index}`}>
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground" data-testid={`benefit-description-${index}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square gradient-primary rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-center text-center text-white">
                  <div className="text-6xl font-bold mb-4" data-testid="demo-time-highlight">24h</div>
                  <div className="text-xl font-medium mb-2" data-testid="demo-delivery-text">Demo Delivery</div>
                  <div className="text-sm opacity-90" data-testid="demo-description">From concept to working prototype</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
