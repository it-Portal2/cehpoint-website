import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { type QuotationResponse } from "@shared/schema";

const quotationSchema = z.object({
  projectSummary: z
    .string()
    .min(10, "Please provide a detailed project summary"),
  industry: z.string().min(1, "Please select an industry"),
  expectedUsers: z.string().min(1, "Please select expected users"),
  timeline: z.string().min(1, "Please select timeline"),
  budgetRange: z.string().min(1, "Please select budget range"),
  features: z.array(z.string()).min(1, "Please select at least one feature"),
  techPreferences: z.string().optional(),
  complianceNeeds: z.string().optional(),
  contactEmail: z.string().email("Please enter a valid email"),
  contactName: z.string().min(2, "Please enter your name"),
});

type QuotationFormData = z.infer<typeof quotationSchema>;

interface QuotationFormProps {
  onSubmit: (quotation: QuotationResponse) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export default function QuotationForm({
  onSubmit,
  isLoading,
  setIsLoading,
}: QuotationFormProps) {
  const { toast } = useToast();

  const form = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      projectSummary: "",
      industry: "",
      expectedUsers: "",
      timeline: "",
      budgetRange: "",
      features: [],
      techPreferences: "",
      complianceNeeds: "",
      contactEmail: "",
      contactName: "",
    },
  });

  const availableFeatures = [
    "User Authentication & Authorization",
    "Payment Integration & Billing",
    "Real-time Chat & Messaging",
    "Analytics Dashboard & Reporting",
    "Third-party API Integration",
    "Mobile App (iOS/Android)",
    "Admin Panel & Management",
    "Content Management System",
    "File Upload & Media Storage",
    "Email & Push Notifications",
    "Social Login & OAuth",
    "Multi-language Support",
    "Search & Filtering",
    "Data Export & Import",
    "Role-based Access Control",
    "Two-factor Authentication",
    "AI/ML Integration",
    "Blockchain Features",
    "Video Streaming",
    "Geolocation Services",
    "Calendar Integration",
    "Advanced Security",
    "Custom Workflows",
    "Integration APIs",
  ];

  // Fixed URL handling
  function getBaseUrl(): string {
    if (typeof window !== "undefined") {
      if (
        window.location.hostname.includes("vercel.app") ||
        window.location.hostname !== "localhost"
      ) {
        return ""; // Production: same origin
      }
      // For development - let the client make requests to the backend server
      return "http://localhost:3000";
    }
    return process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";
  }

  const handleSubmit = async (data: QuotationFormData) => {
    const baseUrl = getBaseUrl();
    const fullUrl = `${baseUrl}/api/quotation`;

    setIsLoading(true);
    try {
      console.log("Making request to:", fullUrl);
      console.log("Request data:", data);

      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Remove credentials: 'include' if not needed
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const result = await response.json();

      toast({
        title: "Quotation Generated",
        description:
          "Your AI-powered quotation has been generated successfully!",
      });

      onSubmit({
        ...result,
        contactEmail: data.contactEmail,
        contactName: data.contactName,
      });
    } catch (error) {
      console.error("Error generating quotation:", error);
      toast({
        title: "Error",
        description: "Failed to generate quotation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6"
        data-testid="quotation-form"
      >
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full name"
                    {...field}
                    data-testid="input-contact-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    {...field}
                    data-testid="input-contact-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Project Summary */}
        <FormField
          control={form.control}
          name="projectSummary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your project idea and core requirements..."
                  className="resize-none h-32"
                  {...field}
                  data-testid="textarea-project-summary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Industry */}
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger data-testid="select-industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ecommerce">
                      E-commerce & Retail
                    </SelectItem>
                    <SelectItem value="fintech">Fintech & Banking</SelectItem>
                    <SelectItem value="edutech">Edutech & Learning</SelectItem>
                    <SelectItem value="healthcare">
                      Healthcare & Medical
                    </SelectItem>
                    <SelectItem value="manufacturing">
                      Manufacturing & Industry 4.0
                    </SelectItem>
                    <SelectItem value="realestate">
                      Real Estate & PropTech
                    </SelectItem>
                    <SelectItem value="logistics">
                      Logistics & Supply Chain
                    </SelectItem>
                    <SelectItem value="travel">Travel & Tourism</SelectItem>
                    <SelectItem value="food">Food & Beverage</SelectItem>
                    <SelectItem value="automotive">
                      Automotive & Mobility
                    </SelectItem>
                    <SelectItem value="agriculture">
                      Agriculture & AgTech
                    </SelectItem>
                    <SelectItem value="smarthome">Smart Home & IoT</SelectItem>
                    <SelectItem value="professional">
                      Professional Services
                    </SelectItem>
                    <SelectItem value="saas">Enterprise SaaS</SelectItem>
                    <SelectItem value="entertainment">
                      Media & Entertainment
                    </SelectItem>
                    <SelectItem value="creative">
                      Creative Industries
                    </SelectItem>
                    <SelectItem value="social">Social Platforms</SelectItem>
                    <SelectItem value="ai">AI & Machine Learning</SelectItem>
                    <SelectItem value="other">Other Industries</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Expected Users */}
          <FormField
            control={form.control}
            name="expectedUsers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Users</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger data-testid="select-expected-users">
                      <SelectValue placeholder="Select user range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="0-1000">0-1,000</SelectItem>
                    <SelectItem value="1000-10000">1,000-10,000</SelectItem>
                    <SelectItem value="10000-100000">10,000-100,000</SelectItem>
                    <SelectItem value="100000+">100,000+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Timeline */}
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timeline</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger data-testid="select-timeline">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-2 months">1-2 months</SelectItem>
                    <SelectItem value="3-6 months">3-6 months</SelectItem>
                    <SelectItem value="6-12 months">6-12 months</SelectItem>
                    <SelectItem value="12+ months">12+ months</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Budget Range */}
          <FormField
            control={form.control}
            name="budgetRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget Range</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger data-testid="select-budget-range">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="₹8L-₹20L">₹8L - ₹20L</SelectItem>
                    <SelectItem value="₹20L-₹40L">₹20L - ₹40L</SelectItem>
                    <SelectItem value="₹40L-₹80L">₹40L - ₹80L</SelectItem>
                    <SelectItem value="₹80L+">₹80L+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Features */}
        <FormField
          control={form.control}
          name="features"
          render={() => (
            <FormItem>
              <FormLabel>Key Features</FormLabel>
              <div
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
                data-testid="features-grid"
              >
                {availableFeatures.map((feature) => (
                  <FormField
                    key={feature}
                    control={form.control}
                    name="features"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={feature}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(feature)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, feature])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== feature
                                      )
                                    );
                              }}
                              data-testid={`checkbox-feature-${feature
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            {feature}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tech Preferences */}
        <FormField
          control={form.control}
          name="techPreferences"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technology Preferences (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Preferred technologies, frameworks, or platforms..."
                  className="resize-none h-20"
                  {...field}
                  data-testid="textarea-tech-preferences"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Compliance Needs */}
        <FormField
          control={form.control}
          name="complianceNeeds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Compliance Requirements (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="GDPR, HIPAA, PCI-DSS, or other compliance requirements..."
                  className="resize-none h-20"
                  {...field}
                  data-testid="textarea-compliance-needs"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary hover-glow py-6 rounded-2xl text-lg font-bold text-primary-foreground relative overflow-hidden"
          data-testid="submit-quotation"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <div className="loading-dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>AI is analyzing your requirements...</span>
            </div>
          ) : (
            "🚀 Generate AI-Powered Quotation"
          )}
        </Button>
      </form>
    </Form>
  );
}
