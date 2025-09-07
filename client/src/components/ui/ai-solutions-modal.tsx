"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface CloudSolutionResponse {
  recommendation: string;
  awsSolution: string;
  gcpSolution: string;
  nextSteps: string[];
}

export function AISolutionsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<CloudSolutionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [answers, setAnswers] = useState({
    primaryGoal: [] as string[],
    workloadType: [] as string[],
    importantFactor: [] as string[],
    customQuestion: "",
  });

  const questions = [
    {
      id: "primaryGoal",
      title:
        "What are your primary goals for moving to or optimizing the cloud? (Select all that apply)",
      options: [
        { value: "cost-savings", label: "Cost savings" },
        { value: "scalability", label: "Scalability & performance" },
        { value: "security", label: "Security & compliance" },
        { value: "innovation", label: "Innovation (AI/ML, analytics, etc.)" },
        { value: "reliability", label: "Improved reliability & uptime" },
        { value: "flexibility", label: "Greater flexibility & agility" },
      ],
    },
    {
      id: "workloadType",
      title:
        "What kind of workloads or applications are you planning to run in the cloud? (Select all that apply)",
      options: [
        { value: "web-apps", label: "Web apps / SaaS platforms" },
        { value: "databases", label: "Databases / data warehouses" },
        { value: "ai-ml", label: "AI/ML workloads" },
        { value: "devops", label: "DevOps / CI-CD" },
        { value: "mobile-backends", label: "Mobile app backends" },
        { value: "analytics", label: "Data analytics & reporting" },
        { value: "iot", label: "IoT & edge computing" },
        { value: "other", label: "Other (custom use case)" },
      ],
    },
    {
      id: "importantFactor",
      title:
        "What are the most important factors for you when choosing a cloud solution? (Select all that apply)",
      options: [
        { value: "lower-cost", label: "Lower cost" },
        {
          value: "faster-deployment",
          label: "Faster deployment & scalability",
        },
        { value: "ai-analytics", label: "Advanced AI/analytics tools" },
        {
          value: "security-compliance",
          label: "Stronger security & compliance",
        },
        { value: "multi-cloud", label: "Multi-cloud / flexibility" },
        { value: "support", label: "24/7 support & documentation" },
        {
          value: "integration",
          label: "Easy integration with existing systems",
        },
        { value: "performance", label: "High performance & low latency" },
      ],
    },
  ];

  const handleAnswerChange = (
    questionId: string,
    value: string,
    checked: boolean
  ) => {
    setAnswers((prev) => {
      const currentAnswers = prev[questionId as keyof typeof prev] as string[];

      if (checked) {
        // Add the value if it's not already there
        if (!currentAnswers.includes(value)) {
          return {
            ...prev,
            [questionId]: [...currentAnswers, value],
          };
        }
      } else {
        // Remove the value
        return {
          ...prev,
          [questionId]: currentAnswers.filter((item) => item !== value),
        };
      }

      return prev;
    });
  };

  const handleTextChange = (value: string) => {
    setAnswers((prev) => ({ ...prev, customQuestion: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
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
  const handleSubmit = async () => {
    const baseUrl = getBaseUrl();
    const fullUrl = `${baseUrl}/api/ai-consultation`;
    setIsLoading(true);
    setError(null);

    try {
   //   console.log("Submitting answers:", answers);
   //   console.log("Current URL:", window.location.href);

      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });

    //  console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
   //   console.log("Success data:", data);
      setResponse(data);
      setCurrentStep(5);
    } catch (err) {
      console.error("Full error details:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const resetModal = () => {
    setCurrentStep(1);
    setAnswers({
      primaryGoal: [],
      workloadType: [],
      importantFactor: [],
      customQuestion: "",
    });
    setResponse(null);
    setError(null);
  };

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1:
        return answers.primaryGoal.length > 0;
      case 2:
        return answers.workloadType.length > 0;
      case 3:
        return answers.importantFactor.length > 0;
      case 4:
        return true; // Custom question is optional
      default:
        return false;
    }
  };

  const getSelectedCount = (questionId: string) => {
    const currentAnswers = answers[
      questionId as keyof typeof answers
    ] as string[];
    return currentAnswers.length;
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) resetModal();
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="glass hover-lift px-8 py-4 rounded-2xl text-lg font-semibold bg-transparent"
        >
          Talk to AI Solutions Architect
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            AI Solutions Architect Consultation
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress indicator */}
          <div className="flex justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-colors ${
                  step === currentStep
                    ? "bg-primary"
                    : step < currentStep || (step <= 4 && isStepComplete(step))
                    ? "bg-white/20"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Question Steps */}
          {currentStep <= 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Question {currentStep} of 3</span>
                  <span className="text-sm text-muted-foreground">
                    {getSelectedCount(questions[currentStep - 1].id)} selected
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    {questions[currentStep - 1].title}
                  </Label>
                  <div className="space-y-3">
                    {questions[currentStep - 1].options.map((option) => {
                      const isChecked = (
                        answers[
                          questions[currentStep - 1].id as keyof typeof answers
                        ] as string[]
                      ).includes(option.value);

                      return (
                        <div
                          key={option.value}
                          className="flex items-center space-x-3"
                        >
                          <Checkbox
                            id={option.value}
                            checked={isChecked}
                            onCheckedChange={(checked) =>
                              handleAnswerChange(
                                questions[currentStep - 1].id,
                                option.value,
                                checked as boolean
                              )
                            }
                          />
                          <Label
                            htmlFor={option.value}
                            className="cursor-pointer text-sm leading-relaxed"
                          >
                            {option.label}
                          </Label>
                        </div>
                      );
                    })}
                  </div>

                  {/* Selection summary */}
                  {/* {getSelectedCount(questions[currentStep - 1].id) > 0 && (
                    <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Selected:</strong>{" "}
                        {(answers[questions[currentStep - 1].id as keyof typeof answers] as string[])
                          .map(value => 
                            questions[currentStep - 1].options.find(opt => opt.value === value)?.label
                          )
                          .join(", ")}
                      </p>
                    </div>
                  )} */}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Custom Question Step */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Additional Information (Optional)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    Is there anything specific about your project or
                    requirements you'd like our AI architect to consider?
                  </Label>
                  <Textarea
                    placeholder="e.g., specific compliance requirements, existing infrastructure, budget constraints, timeline, team size, geographic requirements..."
                    value={answers.customQuestion}
                    onChange={(e) => handleTextChange(e.target.value)}
                    className="min-h-[120px]"
                  />

                  {/* Summary of previous selections */}
                  <div className="mt-4 p-4 bg-muted/20 rounded-lg space-y-2">
                    <h4 className="font-semibold text-sm">
                      Your Selections Summary:
                    </h4>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div>
                        <strong>Goals:</strong>{" "}
                        {answers.primaryGoal.join(", ") || "None selected"}
                      </div>
                      <div>
                        <strong>Workloads:</strong>{" "}
                        {answers.workloadType.join(", ") || "None selected"}
                      </div>
                      <div>
                        <strong>Important Factors:</strong>{" "}
                        {answers.importantFactor.join(", ") || "None selected"}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Results Step */}
          {currentStep === 5 && response && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  AI Architect Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Recommendation Summary</h4>
                  <p className="text-muted-foreground">
                    {response.recommendation}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">AWS Solution</h4>
                  <p className="text-muted-foreground">
                    {response.awsSolution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">GCP Alternative</h4>
                  <p className="text-muted-foreground">
                    {response.gcpSolution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Next Steps</h4>
                  <ul className="space-y-2">
                    {response.nextSteps.map((step, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary font-bold mt-1">
                          {index + 1}.
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Error State */}
          {error && (
            <Card className="border-destructive">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="w-5 h-5" />
                  <span>{error}</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1 || currentStep === 5}
            >
              Previous
            </Button>

            <div className="flex gap-2">
              {currentStep < 4 && (
                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete(currentStep)}
                >
                  Next
                </Button>
              )}

              {currentStep === 4 && (
                <Button
                  onClick={handleSubmit}
                  disabled={
                    isLoading ||
                    !isStepComplete(1) ||
                    !isStepComplete(2) ||
                    !isStepComplete(3)
                  }
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Get AI Recommendation
                    </>
                  )}
                </Button>
              )}

              {currentStep === 5 && (
                <Button onClick={() => setIsOpen(false)}>Close</Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
