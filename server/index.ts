import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

// Import with fallback for Vercel deployment
let quotationRequestSchema: any, quotationResponseSchema: any;
try {
  const schema = require("../shared/schema.js");
  quotationRequestSchema = schema.quotationRequestSchema;
  quotationResponseSchema = schema.quotationResponseSchema;
} catch (error) {
  console.warn("Could not load schema, using basic validation");
  // Basic fallback validation
  quotationRequestSchema = {
    parse: (data: any) => {
      if (!data.industry) throw new Error("Industry is required");
      if (!data.projectSummary) throw new Error("Project summary is required");
      return data;
    }
  };
  quotationResponseSchema = {
    parse: (data: any) => data
  };
}

// Type definitions
interface QuotationRequest {
  industry: string;
  projectSummary: string;
  expectedUsers: string;
  timeline: string;
  budgetRange: string;
  features: string[];
  techPreferences?: string;
  complianceNeeds?: string;
  additionalContext?: string;
}

interface QuotationAnalysis {
  estimatedCost: number;
  timeline: string;
  teamSize: number;
  suggestedStack: string[];
  dependencies: string[];
  risks: string[];
  mvpPlan: {
    milestone: string;
    duration: string;
    deliverables: string[];
  }[];
  aiAnalysis: string;
  costBreakdown?: {
    development: number;
    design: number;
    testing: number;
    deployment: number;
    projectManagement: number;
  };
  recommendations: string[];
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Parse JSON and URL encoded bodies
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

// In your server/index.ts - update the CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Logging middleware (only in development)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
      if (req.path.startsWith("/api")) {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
      }
    });
    next();
  });
}

// Initialize AI
const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || "" 
});

// Main quotation generation function
async function generateQuotation(request: QuotationRequest): Promise<QuotationAnalysis> {
  try {
    const systemPrompt = `You are an expert software development consultant and project estimator specializing in e-commerce, edutech, fintech, and various tech solutions. 

EXPERTISE AREAS:
- Full-stack web development cost analysis
- Mobile app development estimation
- Cloud infrastructure planning and costs
- Team structure and resource allocation
- Risk assessment and mitigation strategies
- Technology stack recommendations

COST ESTIMATION FACTORS:
- Project complexity based on features and industry requirements
- Expected user base and scalability requirements
- Timeline constraints and development urgency
- Technology stack complexity and integration needs
- Compliance and security requirements (GDPR, HIPAA, PCI-DSS, etc.)
- Third-party integrations and API costs
- Hosting and infrastructure expenses
- Ongoing maintenance and support

TIMELINE CALCULATION:
- Factor in planning, development, testing, and deployment phases
- Consider team size and parallel development workstreams
- Account for iterative feedback and refinement cycles
- Include buffer time for unexpected challenges
- Plan for user testing and feedback integration

TECHNOLOGY RECOMMENDATIONS:
- Choose modern, scalable technologies appropriate for the industry
- Consider performance, security, and maintenance requirements
- Factor in team expertise and development speed
- Prioritize proven technologies for mission-critical applications
- Suggest cost-effective alternatives when appropriate

MVP PLANNING:
- Break down development into logical milestones with clear deliverables
- Prioritize core functionality for initial release
- Plan progressive feature rollouts based on user feedback
- Ensure each milestone delivers tangible user value
- Include testing and quality assurance at each phase

RESPONSE FORMAT:
Provide detailed analysis with realistic estimates based on current market rates and industry standards. Include cost breakdowns, risk factors, and actionable recommendations.`;

    const userPrompt = `
PROJECT ANALYSIS REQUEST:
Industry: ${request.industry}
Project Summary: ${request.projectSummary}
Expected Users: ${request.expectedUsers}
Timeline: ${request.timeline}
Budget Range: ${request.budgetRange}
Key Features: ${request.features.join(', ')}
Technology Preferences: ${request.techPreferences || 'Open to recommendations'}
Compliance Needs: ${request.complianceNeeds || 'Standard web application requirements'}
Additional Context: ${request.additionalContext || 'None provided'}

Please provide a comprehensive quotation analysis in the specified JSON format with realistic cost estimates, timeline projections, and detailed recommendations.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            estimatedCost: { type: "number" },
            timeline: { type: "string" },
            teamSize: { type: "number" },
            suggestedStack: {
              type: "array",
              items: { type: "string" }
            },
            dependencies: {
              type: "array",
              items: { type: "string" }
            },
            risks: {
              type: "array",
              items: { type: "string" }
            },
            mvpPlan: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  milestone: { type: "string" },
                  duration: { type: "string" },
                  deliverables: {
                    type: "array",
                    items: { type: "string" }
                  }
                },
                required: ["milestone", "duration", "deliverables"]
              }
            },
            aiAnalysis: { type: "string" },
            costBreakdown: {
              type: "object",
              properties: {
                development: { type: "number" },
                design: { type: "number" },
                testing: { type: "number" },
                deployment: { type: "number" },
                projectManagement: { type: "number" }
              },
              required: ["development", "design", "testing", "deployment", "projectManagement"]
            },
            recommendations: {
              type: "array",
              items: { type: "string" }
            }
          },
          required: [
            "estimatedCost",
            "timeline", 
            "teamSize",
            "suggestedStack",
            "dependencies",
            "risks",
            "mvpPlan",
            "aiAnalysis",
            "costBreakdown",
            "recommendations"
          ]
        },
      },
      contents: userPrompt,
    });

    const rawJson = response.text;
    console.log(`Gemini Quotation Response: ${rawJson}`);

    if (rawJson) {
      const analysis: QuotationAnalysis = JSON.parse(rawJson);
      
      // Validate and adjust the response
      if (analysis.estimatedCost < 10000) {
        analysis.estimatedCost = Math.max(analysis.estimatedCost, 50000);
      }
      
      if (analysis.teamSize < 1) {
        analysis.teamSize = Math.max(analysis.teamSize, 2);
      }

      return analysis;
    } else {
      throw new Error("Empty response from Gemini AI");
    }
  } catch (error) {
    console.error("Error generating quotation with Gemini:", error);
    
    // Fallback quotation based on basic analysis
    return generateFallbackQuotation(request);
  }
}

// Fallback quotation generator
function generateFallbackQuotation(request: QuotationRequest): QuotationAnalysis {
  // Basic cost estimation based on budget range and features
  const budgetMap: Record<string, number> = {
    "₹8L-₹20L": 1200000,
    "₹20L-₹40L": 2800000,
    "₹40L-₹80L": 6000000,
    "₹80L+": 9600000,
  };

  const timelineMap: Record<string, string> = {
    "1-2 months": "8 weeks",
    "3-6 months": "16 weeks", 
    "6-12 months": "32 weeks",
    "12+ months": "48 weeks",
  };

  const industryStacks: Record<string, string[]> = {
    ecommerce: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis"],
    edutech: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "Socket.io"],
    fintech: ["React", "Node.js", "PostgreSQL", "Blockchain", "AWS", "Redis"],
    healthcare: ["React", "Node.js", "PostgreSQL", "HIPAA Compliance", "AWS", "Encryption"],
    default: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
  };

  const estimatedCost = budgetMap[request.budgetRange] || 500000;
  const timeline = timelineMap[request.timeline] || "16 weeks";
  const teamSize = request.features.length > 6 ? 5 : request.features.length > 3 ? 3 : 2;
  const suggestedStack = industryStacks[request.industry.toLowerCase()] || industryStacks.default;

  return {
    estimatedCost,
    timeline,
    teamSize,
    suggestedStack,
    dependencies: [
      "Client requirements finalization",
      "Design system approval",
      "Third-party API access credentials",
      "Production environment setup",
      "Domain and SSL certificate setup"
    ],
    risks: [
      "Scope creep during development",
      "Third-party integration delays", 
      "Performance optimization challenges",
      "Compliance requirement changes",
      "Resource availability constraints"
    ],
    mvpPlan: [
      {
        milestone: "Project Foundation",
        duration: "2 weeks",
        deliverables: ["Project setup", "Database design", "Authentication system", "Basic UI framework", "Development environment"]
      },
      {
        milestone: "Core Development",
        duration: "6-8 weeks", 
        deliverables: ["Main functionality implementation", "API development", "Frontend components", "Database integration", "Basic testing"]
      },
      {
        milestone: "Integration & Testing",
        duration: "3-4 weeks",
        deliverables: ["Third-party integrations", "Comprehensive testing", "Performance optimization", "Security audit", "Bug fixes"]
      },
      {
        milestone: "Deployment & Launch",
        duration: "2 weeks",
        deliverables: ["Production deployment", "Documentation", "User training", "Go-live support", "Post-launch monitoring"]
      }
    ],
    aiAnalysis: `Based on your ${request.industry} project requirements, this estimation considers the complexity of implementing ${request.features.length} key features for ${request.expectedUsers} expected users. The project scope includes modern web development practices, security considerations, and scalability planning. The timeline accounts for iterative development with regular client feedback and comprehensive testing phases.`,
    costBreakdown: {
      development: Math.round(estimatedCost * 0.6),
      design: Math.round(estimatedCost * 0.15),
      testing: Math.round(estimatedCost * 0.12),
      deployment: Math.round(estimatedCost * 0.08),
      projectManagement: Math.round(estimatedCost * 0.05)
    },
    recommendations: [
      "Start with MVP to validate core concepts",
      "Implement robust testing from the beginning",
      "Plan for scalability from day one",
      "Regular client feedback sessions recommended",
      "Consider phased rollout approach"
    ]
  };
}

// API Routes with proper method handling
app.route("/api/quotation")
  .post(async (req, res) => {
    try {
      console.log('POST /api/quotation - Received body:', req.body);

      const validatedRequest = quotationRequestSchema.parse(req.body);
      
      const quotationAnalysis = await generateQuotation(validatedRequest);
      const validatedResponse = quotationResponseSchema.parse(quotationAnalysis);
      
      console.log('Sending quotation response:', validatedResponse);
      res.json(validatedResponse);
    } catch (error) {
      console.error('Quotation generation error:', error);
      res.status(500).json({ 
        error: "Unable to generate quotation at the moment. Please try again.",
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  })
  .all((req, res) => {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  });

// Production: Serve React build files (only in non-serverless environments)
if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
  const distPath = path.resolve(__dirname, '..');
  
  console.log(`[Production] Serving static files from: ${distPath}`);
  
  // Serve static files (CSS, JS, images)
  app.use(express.static(distPath));
  
  // Catch-all handler: send back React's index.html file for client-side routing
  app.get('*', (req, res) => {
    const indexPath = path.resolve(distPath, 'index.html');
    console.log(`[Production] Serving index.html from: ${indexPath}`);
    res.sendFile(indexPath);
  });
}

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error('Server error:', err);
  res.status(status).json({ 
    message,
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Start server (only when not in Vercel environment)
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Quotation Server running on http://localhost:${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

// Export for Vercel
export default app;