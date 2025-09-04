export default function DemoProcess() {
  const steps = [
    {
      number: "1",
      title: "Requirements Capture",
      description: "Tell us your vision through our smart quotation system. Within minutes, our AI provides detailed cost estimates, technical recommendations, and project roadmaps tailored to your needs."
    },
    {
      number: "2", 
      title: "Rapid Development",
      description: "Watch your idea transform into reality. Our expert developers create a fully functional prototype with real features, databases, and user interfaces - all within 24 hours."
    },
    {
      number: "3",
      title: "Demo Handoff",
      description: "Experience your working prototype firsthand. Get complete source code, comprehensive documentation, and a clear roadmap to scale your demo into a full production application."
    }
  ];

  return (
    <section className="py-24 bg-secondary/50" data-testid="demo-process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6" data-testid="demo-process-title">
            How 24-Hour <span className="text-gradient">Demo Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="demo-process-subtitle">
            Experience your idea as a working application in just 24 hours. See it, test it, love it - then decide to proceed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center group" data-testid={`demo-step-${step.number}`}>
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white" data-testid={`step-number-${step.number}`}>
                  {step.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl mb-4" data-testid={`step-title-${step.number}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`step-description-${step.number}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
