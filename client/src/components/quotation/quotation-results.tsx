import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  ArrowLeft,
  MessageCircle,
  FileText,
  Clock,
  Users,
  Code,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { type QuotationResponse } from "@shared/schema";
import { useState } from "react";

interface QuotationResultsProps {
  quotation: QuotationResponse & {
    contactName?: string;
    contactEmail?: string;
  };
  onStartOver: () => void;
}

export default function QuotationResults({
  quotation,
  onStartOver,
}: QuotationResultsProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("INR");
  console.log(quotation);

  const formatCurrency = (amount: number, currency: string = "INR") => {
    const currencyConfig = {
      INR: { locale: "en-IN", currency: "INR" },
      USD: { locale: "en-US", currency: "USD" },
      THB: { locale: "th-TH", currency: "THB" },
    };

    const config =
      currencyConfig[currency as keyof typeof currencyConfig] ||
      currencyConfig.INR;

    return new Intl.NumberFormat(config.locale, {
      style: "currency",
      currency: config.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const convertCurrency = (amountINR: number, targetCurrency: string) => {
    const rates = {
      USD: 0.01134,
      THB: 0.3667,
      INR: 1,
    };

    return Math.round(
      amountINR * (rates[targetCurrency as keyof typeof rates] || 1)
    );
  };

  const generatePDFContent = () => {
    const convertedCost = convertCurrency(
      quotation.estimatedCost,
      selectedCurrency
    );
    const formattedCost = formatCurrency(convertedCost, selectedCurrency);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Quotation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: white;
            padding: 20px;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border: 1px solid #ddd;
        }
        
        .header {
            background: #2563eb;
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .header .subtitle {
            font-size: 16px;
        }
        
        .content {
            padding: 30px;
        }
        
        .section {
            margin-bottom: 30px;
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
        }
        
        .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        
        .section h2 {
            color: #333;
            font-size: 18px;
            margin-bottom: 15px;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 5px;
        }
        
        .client-info {
            background: #f8f9fa;
            padding: 20px;
            border-left: 4px solid #2563eb;
            margin-bottom: 30px;
        }
        
        .client-info p {
            margin-bottom: 8px;
        }
        
        .metrics {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .metric-box {
            text-align: center;
            padding: 20px;
            border: 2px solid #2563eb;
            background: #f8f9fa;
        }
        
        .metric-value {
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 5px;
        }
        
        .metric-label {
            font-size: 14px;
            color: #666;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
        }
        
        .tech-tag {
            background: #fbbf24;
            color: #333;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 14px;
        }
        
        .milestone {
            border: 1px solid #ddd;
            padding: 20px;
            margin: 15px 0;
            background: #f8f9fa;
        }
        
        .milestone h3 {
            color: #2563eb;
            margin-bottom: 10px;
            font-size: 16px;
        }
        
        .milestone-duration {
            color: #666;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .deliverables {
            list-style: none;
            padding: 0;
        }
        
        .deliverables li {
            padding: 3px 0;
            border-bottom: 1px dotted #ddd;
        }
        
        .deliverables li:last-child {
            border-bottom: none;
        }
        
        .simple-list {
            list-style: none;
            padding: 0;
        }
        
        .simple-list li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        
        .simple-list li:last-child {
            border-bottom: none;
        }
        
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #ddd;
            font-size: 14px;
            color: #666;
        }
        
        @media print {
            body {
                padding: 0;
            }
            
            .container {
                border: none;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Project Quotation</h1>
            <p class="subtitle">Development Estimate & Proposal</p>
        </div>
        
        <div class="content">
            ${
              quotation.contactName || quotation.contactEmail
                ? `
            <div class="client-info">
                <h2>Client Information</h2>
                ${
                  quotation.contactName
                    ? `<p><strong>Name:</strong> ${quotation.contactName}</p>`
                    : ""
                }
                ${
                  quotation.contactEmail
                    ? `<p><strong>Email:</strong> ${quotation.contactEmail}</p>`
                    : ""
                }
                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            `
                : ""
            }
            
            <div class="metrics">
                <div class="metric-box">
                    <div class="metric-value">${formattedCost}</div>
                    <div class="metric-label">Total Cost</div>
                </div>
                <div class="metric-box">
                    <div class="metric-value">${quotation.timeline}</div>
                    <div class="metric-label">Timeline</div>
                </div>
                <div class="metric-box">
                    <div class="metric-value">${quotation.teamSize}</div>
                    <div class="metric-label">Team Size</div>
                </div>
            </div>
            
            <div class="section">
                <h2>Project Analysis</h2>
                <p>${quotation.aiAnalysis}</p>
            </div>
            
            <div class="section">
                <h2>Technology Stack</h2>
                <div class="tech-stack">
                    ${quotation.suggestedStack
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
            </div>
            
            <div class="section">
                <h2>Development Milestones</h2>
                ${quotation.mvpPlan
                  .map(
                    (milestone) => `
                    <div class="milestone">
                        <h3>${milestone.milestone}</h3>
                        <p class="milestone-duration">Duration: ${
                          milestone.duration
                        }</p>
                        <ul class="deliverables">
                            ${milestone.deliverables
                              .map((deliverable) => `<li>${deliverable}</li>`)
                              .join("")}
                        </ul>
                    </div>
                `
                  )
                  .join("")}
            </div>
            
            <div class="section">
                <h2>Project Dependencies</h2>
                <ul class="simple-list">
                    ${quotation.dependencies
                      .map((dependency) => `<li>${dependency}</li>`)
                      .join("")}
                </ul>
            </div>
            
            <div class="section">
                <h2>Risks & Considerations</h2>
                <ul class="simple-list">
                    ${quotation.risks
                      .map((risk) => `<li>${risk}</li>`)
                      .join("")}
                </ul>
            </div>
        </div>
    </div>
</body>
</html>`;
  };

  const handleDownloadPDF = async () => {
    try {
      // Create the HTML content
      const htmlContent = generatePDFContent();

      // Create a new window for PDF generation
      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        alert("Please allow popups to download the PDF");
        return;
      }

      // Write the HTML content to the new window
      printWindow.document.write(htmlContent);
      printWindow.document.close();

      // Wait for content to load and then trigger print
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          // Close the window after printing (user can choose to save as PDF)
          setTimeout(() => {
            printWindow.close();
          }, 1000);
        }, 500);
      };
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  const handleStartProject = () => {
    const convertedCost = convertCurrency(
      quotation.estimatedCost,
      selectedCurrency
    );
    const formattedCost = formatCurrency(convertedCost, selectedCurrency);

    const message = ` Project Quotation

Client Details:
${quotation.contactName ? `Name: ${quotation.contactName}` : ""}
${quotation.contactEmail ? `Email: ${quotation.contactEmail}` : ""}

Project Overview:
• Estimated Cost: ${formattedCost}
• Timeline: ${quotation.timeline}
• Team Size: ${quotation.teamSize} developers

Analysis:
${quotation.aiAnalysis}

Technology Stack:
${quotation.suggestedStack.join(", ")}

MVP Milestones:
${quotation.mvpPlan
  .map(
    (milestone, index) => `
${index + 1}. ${milestone.milestone} (${milestone.duration})
   ${milestone.deliverables.map((d) => `• ${d}`).join("\n   ")}
`
  )
  .join("")}

Dependencies:
${quotation.dependencies.map((dep) => `• ${dep}`).join("\n")}

Risks & Considerations:
${quotation.risks.map((risk) => `• ${risk}`).join("\n")}

Ready to start this project!`;

    const whatsappNumber = "919091156095";
    const encodedMessage = encodeURIComponent(message);

    // This opens WhatsApp with message pre-filled - user just needs to click Send
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp with the message ready to send
    window.open(whatsappUrl, "_blank", "width=800,height=600");

    // Show user instructions
    setTimeout(() => {
      alert(
        "✅ WhatsApp is opening with your message ready!\n\nJust click the SEND button to deliver your quotation."
      );
    }, 1000);
  };

  return (
    <div className="space-y-8" data-testid="quotation-results">
      <div className="text-center">
        <h3
          className="font-display font-bold text-3xl mb-4"
          data-testid="results-title"
        >
          Your AI-Powered Quotation
        </h3>
        <p className="text-muted-foreground" data-testid="results-subtitle">
          Generated using advanced AI analysis of your requirements
        </p>
      </div>

      {/* Currency Selector */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Display currency:</span>
          <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="INR">₹ INR</SelectItem>
              <SelectItem value="USD">$ USD</SelectItem>
              <SelectItem value="THB">฿ THB</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center glass rounded-xl p-6">
          <div
            className="text-4xl font-bold text-primary mb-2"
            data-testid="estimated-cost"
          >
            {formatCurrency(
              convertCurrency(quotation.estimatedCost, selectedCurrency),
              selectedCurrency
            )}
          </div>
          <div className="text-muted-foreground flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" />
            Estimated Cost
          </div>
        </div>
        <div className="text-center glass rounded-xl p-6">
          <div
            className="text-4xl font-bold text-primary mb-2"
            data-testid="estimated-timeline"
          >
            {quotation.timeline}
          </div>
          <div className="text-muted-foreground flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            Development Time
          </div>
        </div>
        <div className="text-center glass rounded-xl p-6">
          <div
            className="text-4xl font-bold text-primary mb-2"
            data-testid="team-size"
          >
            {quotation.teamSize} devs
          </div>
          <div className="text-muted-foreground flex items-center justify-center gap-2">
            <Users className="w-4 h-4" />
            Team Size
          </div>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="glass rounded-xl p-6">
        <h4 className="font-bold text-xl mb-3" data-testid="ai-analysis-title">
          AI Analysis
        </h4>
        <p
          className="text-muted-foreground leading-relaxed"
          data-testid="ai-analysis-content"
        >
          {quotation.aiAnalysis}
        </p>
      </div>

      {/* Technical Stack */}
      <div className="glass rounded-xl p-6">
        <h4 className="font-bold text-xl mb-3" data-testid="tech-stack-title">
          Suggested Technology Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {quotation.suggestedStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
              data-testid={`tech-${index}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* MVP Plan */}
      <div className="glass rounded-xl p-6">
        <h4 className="font-bold text-xl mb-4" data-testid="mvp-plan-title">
          MVP Development Plan
        </h4>
        <div className="space-y-4">
          {quotation.mvpPlan.map((milestone, index) => (
            <div
              key={index}
              className="border-l-2 border-primary pl-4"
              data-testid={`milestone-${index}`}
            >
              <h5
                className="font-semibold text-lg"
                data-testid={`milestone-title-${index}`}
              >
                {milestone.milestone}
              </h5>
              <p
                className="text-sm text-primary mb-2"
                data-testid={`milestone-duration-${index}`}
              >
                Duration: {milestone.duration}
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {milestone.deliverables.map((deliverable, deliverableIndex) => (
                  <li
                    key={deliverableIndex}
                    data-testid={`deliverable-${index}-${deliverableIndex}`}
                  >
                    • {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Dependencies */}
      <div className="glass rounded-xl p-6">
        <h4 className="font-bold text-xl mb-3" data-testid="dependencies-title">
          Project Dependencies
        </h4>
        <ul className="space-y-2 text-muted-foreground">
          {quotation.dependencies.map((dependency, index) => (
            <li
              key={index}
              className="flex items-start"
              data-testid={`dependency-${index}`}
            >
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {dependency}
            </li>
          ))}
        </ul>
      </div>

      {/* Risks */}
      <div className="glass rounded-xl p-6">
        <h4 className="font-bold text-xl mb-3" data-testid="risks-title">
          Potential Risks & Mitigations
        </h4>
        <ul className="space-y-2 text-muted-foreground">
          {quotation.risks.map((risk, index) => (
            <li
              key={index}
              className="flex items-start"
              data-testid={`risk-${index}`}
            >
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {risk}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={handleStartProject}
          className="btn-primary px-8 py-4 rounded-xl font-semibold text-primary-foreground flex-1 flex items-center justify-center gap-2"
          data-testid="start-project-button"
        >
          <MessageCircle className="w-5 h-5" />
          Start Project Now
        </Button>
        <Button
          variant="outline"
          onClick={handleDownloadPDF}
          className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
          data-testid="download-pdf-button"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
        <Button
          variant="outline"
          onClick={onStartOver}
          className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
          data-testid="start-over-button"
        >
          <ArrowLeft className="w-4 h-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
