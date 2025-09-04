import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioCareers() {
  return (
    <section className="py-24" data-testid="portfolio-careers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Portfolio */}
          <div className="glass rounded-3xl p-8 hover-lift" data-testid="portfolio-card">
            <h3 className="font-display font-bold text-3xl mb-4" data-testid="portfolio-title">
              Explore Our <span className="text-gradient">Portfolio</span>
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="portfolio-description">
              Discover how we've transformed businesses with cutting-edge solutions. From startup MVPs to enterprise platforms, see the results that speak for themselves.
            </p>
            <a 
              href="https://portfolios.cehpoint.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="portfolio-cta"
            >
              <Button className="btn-primary inline-flex items-center px-6 py-3 rounded-xl font-semibold text-primary-foreground">
                View Portfolio
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
          
          {/* Careers */}
          <div className="glass rounded-3xl p-8 hover-lift" data-testid="careers-card">
            <h3 className="font-display font-bold text-3xl mb-4" data-testid="careers-title">
              Join Our <span className="text-gradient">Team</span>
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="careers-description">
              Ready to build the future? Join our team of innovators and work on challenging projects that push the boundaries of technology. Grow your skills, make an impact.
            </p>
            <a 
              href="https://internlink.cehpoint.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="careers-cta"
            >
              <Button className="btn-primary inline-flex items-center px-6 py-3 rounded-xl font-semibold text-primary-foreground">
                Apply for Internship
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
