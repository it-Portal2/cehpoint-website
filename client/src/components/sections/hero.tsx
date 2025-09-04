import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute top-60 right-20 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative max-w-7xl pt-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8">
            <span className="text-sm font-medium text-primary">
              🚀 Enterprise-Grade Development
            </span>
          </div>

          <h1
            className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-9xl mb-8 tracking-tight leading-none"
            data-testid="hero-title"
          >
            Transform Ideas Into
            <br className="hidden sm:block" />
            <span className="text-gradient">Digital Excellence</span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed font-light"
            data-testid="hero-subtitle"
          >
            Enterprise-grade software development across all industries with
            24-hour demo delivery and pay-after-demo engagement model.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
            From startup MVPs to enterprise platforms — we deliver proven
            solutions that multiply revenue, reduce costs, and accelerate growth
            across every industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
            <Link
              href="/quotation"
              className="w-full sm:w-auto sm:min-w-[200px]"
            >
              <Button
                className="btn-primary hover-glow rounded-2xl text-base sm:text-lg font-bold text-primary-foreground w-full min-h-[60px]"
                data-testid="hero-cta-primary"
                aria-label="Get AI-powered project quotation"
              >
                Get AI-Powered Quote
              </Button>
            </Link>

            <a
              href="https://portfolios.cehpoint.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass hover-lift rounded-2xl text-base sm:text-lg font-semibold hover:bg-secondary/50 transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] min-h-[60px] flex justify-center items-center text-center"
              data-testid="hero-cta-secondary"
              aria-label="View our portfolio of completed projects"
            >
              Explore Portfolio →
            </a>
          </div>

          {/* Enhanced Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
            data-testid="hero-stats"
          >
            <div className="glass-intense rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover-lift group">
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 sm:mb-3 group-hover:scale-110 transition-transform"
                data-testid="stat-demo-time"
              >
                24h
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">
                Demo Delivery
              </div>
              <div className="text-xs text-muted-foreground/60 mt-1">
                Record Time
              </div>
            </div>
            <div className="glass-intense rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover-lift group">
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 sm:mb-3 group-hover:scale-110 transition-transform"
                data-testid="stat-payment-model"
              >
                0%
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">
                Upfront Payment
              </div>
              <div className="text-xs text-muted-foreground/60 mt-1">
                Pay After Demo
              </div>
            </div>
            <div className="glass-intense rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover-lift group">
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 sm:mb-3 group-hover:scale-110 transition-transform"
                data-testid="stat-industries"
              >
                25+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">
                Industries
              </div>
              <div className="text-xs text-muted-foreground/60 mt-1">
                Expertise
              </div>
            </div>
            <div className="glass-intense rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover-lift group">
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 sm:mb-3 group-hover:scale-110 transition-transform"
                data-testid="stat-projects"
              >
                500+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">
                Projects
              </div>
              <div className="text-xs text-muted-foreground/60 mt-1">
                Delivered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
