import { useState } from "react";
import QuotationForm from "@/components/quotation/quotation-form";
import QuotationResults from "@/components/quotation/quotation-results";
import { type QuotationResponse } from "@shared/schema";

export default function Quotation() {
  const [quotationResult, setQuotationResult] = useState<QuotationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'enterprise' | 'portal' | null>(null);

  return (
    <div className="pt-24 min-h-screen" data-testid="quotation-page">
      <section className="py-24 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm font-medium text-primary">🤖 Powered by Gemini AI</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-7xl mb-8 tracking-tight" data-testid="quotation-title">
              Get Instant 
              <span className="text-gradient"> AI Quotation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="quotation-subtitle">
              Choose your path to success: Enterprise outsourcing for established companies or our IT Portal for new entrepreneurs.
            </p>
            
            <div className="mt-8 flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Instant Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Technical Recommendations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>MVP Planning</span>
              </div>
            </div>
          </div>
          
          <div className="glass-intense rounded-3xl p-8 md:p-12">
            {!selectedOption ? (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="font-display font-bold text-3xl md:text-4xl mb-4" data-testid="options-title">
                    Choose Your <span className="text-gradient">Development Path</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Select the option that best fits your business needs and development requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Enterprise Option */}
                  <div 
                    className="glass rounded-2xl p-8 hover-lift cursor-pointer transition-all duration-300 hover:bg-primary/5 group"
                    onClick={() => setSelectedOption('enterprise')}
                    data-testid="enterprise-option"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <h3 className="font-display font-bold text-2xl mb-2">Enterprise Outsourcing</h3>
                      <p className="text-sm text-primary font-medium">For Established Companies</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-muted-foreground text-center">
                        Perfect for companies already in software development who need to outsource projects with professional expertise.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm">Professional project management</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm">Enterprise-grade architecture</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm">Dedicated development teams</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm">Custom compliance solutions</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <button className="btn-primary px-6 py-3 rounded-xl font-semibold w-full group-hover:shadow-lg transition-all">
                        Get Enterprise Quote
                      </button>
                    </div>
                  </div>

                  {/* IT Portal Option */}
                  <div 
                    className="glass rounded-2xl p-8 hover-lift cursor-pointer transition-all duration-300 hover:bg-accent/5 group"
                    onClick={() => window.open('https://projects.cehpoint.co.in/', '_blank')}
                    data-testid="portal-option"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h3 className="font-display font-bold text-2xl mb-2">IT Portal</h3>
                      <p className="text-sm text-accent font-medium">For New Entrepreneurs</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-muted-foreground text-center">
                        Designed for new entrepreneurs who want to launch their digital ventures with proven solutions and guidance.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-sm">Pre-built solution templates</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-sm">Entrepreneur-friendly pricing</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-sm">Business guidance included</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-sm">Rapid MVP development</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-xl font-semibold w-full group-hover:shadow-lg transition-all">
                        Visit IT Portal →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : !quotationResult ? (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={() => setSelectedOption(null)}
                    className="glass px-4 py-2 rounded-lg hover:bg-secondary/50 transition-all flex items-center gap-2"
                    data-testid="back-to-options"
                  >
                    ← Back to Options
                  </button>
                  <div className="text-sm text-muted-foreground">
                    Selected: <span className="text-primary font-medium">
                      {selectedOption === 'enterprise' ? 'Enterprise Outsourcing' : 'IT Portal'}
                    </span>
                  </div>
                </div>
                <QuotationForm 
                  onSubmit={setQuotationResult} 
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </div>
            ) : (
              <QuotationResults 
                quotation={quotationResult} 
                onStartOver={() => {
                  setQuotationResult(null);
                  setSelectedOption(null);
                }}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
