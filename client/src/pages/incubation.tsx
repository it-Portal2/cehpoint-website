import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Rocket, DollarSign, Shield, Users, Lightbulb, TrendingUp, Award, Globe, Mail, FileText } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    founderName: '',
    founderEmail: '',
    founderPhone: '',
    companyName: '',
    startupIdea: '',
    industryFocus: '',
    teamSize: '',
    currentStage: '',
    fundingNeeds: '',
    timeline: '',
    previousExperience: '',
    uniqueValue: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateMailtoLink = () => {
    const subject = `Incubation Program Application - ${formData.companyName || 'New Startup'}`;
    const body = `Dear Cehpoint Incubation Team,

I am writing to apply for your startup incubation program. Below are the details of my startup:

FOUNDER INFORMATION:
Name: ${formData.founderName}
Email: ${formData.founderEmail}
Phone: ${formData.founderPhone}

STARTUP DETAILS:
Company Name: ${formData.companyName}
Industry Focus: ${formData.industryFocus}
Current Stage: ${formData.currentStage}
Team Size: ${formData.teamSize}

STARTUP IDEA:
${formData.startupIdea}

UNIQUE VALUE PROPOSITION:
${formData.uniqueValue}

FUNDING REQUIREMENTS:
Amount Needed: ${formData.fundingNeeds}
Timeline: ${formData.timeline}

FOUNDER EXPERIENCE:
${formData.previousExperience}

I believe my startup aligns with your incubation program goals and would benefit greatly from your support including lifetime hosting, maintenance, and funding assistance.

Thank you for considering my application. I look forward to hearing from you.

Best regards,
${formData.founderName}`;

    return `mailto:incubation@cehpoint.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const isFormValid = formData.founderName && formData.founderEmail && formData.companyName && formData.startupIdea;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <FileText className="w-6 h-6 mr-3 text-primary" />
          Startup Application Form
        </CardTitle>
        <CardDescription>
          Fill out this form to apply directly to our incubation program. We'll review your application and get back to you within 5 business days.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="founder-name">Founder Name *</Label>
            <Input 
              id="founder-name"
              value={formData.founderName}
              onChange={(e) => handleInputChange('founderName', e.target.value)}
              placeholder="Your full name"
            />
          </div>
          <div>
            <Label htmlFor="founder-email">Email Address *</Label>
            <Input 
              id="founder-email"
              type="email"
              value={formData.founderEmail}
              onChange={(e) => handleInputChange('founderEmail', e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <Label htmlFor="founder-phone">Phone Number</Label>
            <Input 
              id="founder-phone"
              value={formData.founderPhone}
              onChange={(e) => handleInputChange('founderPhone', e.target.value)}
              placeholder="+91 9876543210"
            />
          </div>
          <div>
            <Label htmlFor="company-name">Company/Startup Name *</Label>
            <Input 
              id="company-name"
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              placeholder="Your startup name"
            />
          </div>
          <div>
            <Label htmlFor="industry-focus">Industry Focus</Label>
            <Input 
              id="industry-focus"
              value={formData.industryFocus}
              onChange={(e) => handleInputChange('industryFocus', e.target.value)}
              placeholder="e.g., Fintech, Edutech, Healthcare"
            />
          </div>
          <div>
            <Label htmlFor="team-size">Current Team Size</Label>
            <Input 
              id="team-size"
              value={formData.teamSize}
              onChange={(e) => handleInputChange('teamSize', e.target.value)}
              placeholder="e.g., 2-3 members"
            />
          </div>
          <div>
            <Label htmlFor="current-stage">Current Stage</Label>
            <Input 
              id="current-stage"
              value={formData.currentStage}
              onChange={(e) => handleInputChange('currentStage', e.target.value)}
              placeholder="e.g., Idea, Prototype, MVP, Revenue"
            />
          </div>
          <div>
            <Label htmlFor="funding-needs">Funding Requirements</Label>
            <Input 
              id="funding-needs"
              value={formData.fundingNeeds}
              onChange={(e) => handleInputChange('fundingNeeds', e.target.value)}
              placeholder="e.g., ₹50L - ₹2Cr"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="startup-idea">Startup Idea & Business Model *</Label>
          <Textarea 
            id="startup-idea"
            value={formData.startupIdea}
            onChange={(e) => handleInputChange('startupIdea', e.target.value)}
            placeholder="Describe your startup idea, target market, and business model in detail..."
            rows={4}
          />
        </div>

        <div>
          <Label htmlFor="unique-value">Unique Value Proposition</Label>
          <Textarea 
            id="unique-value"
            value={formData.uniqueValue}
            onChange={(e) => handleInputChange('uniqueValue', e.target.value)}
            placeholder="What makes your startup unique? How do you solve the problem differently?"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="timeline">Expected Timeline</Label>
          <Input 
            id="timeline"
            value={formData.timeline}
            onChange={(e) => handleInputChange('timeline', e.target.value)}
            placeholder="e.g., 6 months to MVP, 12 months to revenue"
          />
        </div>

        <div>
          <Label htmlFor="previous-experience">Previous Experience & Background</Label>
          <Textarea 
            id="previous-experience"
            value={formData.previousExperience}
            onChange={(e) => handleInputChange('previousExperience', e.target.value)}
            placeholder="Tell us about your professional background, previous startups, relevant experience..."
            rows={3}
          />
        </div>

        <div className="pt-4">
          <Button 
            asChild 
            size="lg" 
            className="w-full"
            disabled={!isFormValid}
          >
            <a href={generateMailtoLink()}>
              <Mail className="w-4 h-4 mr-2" />
              Submit Application via Email
            </a>
          </Button>
          {!isFormValid && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Please fill in all required fields (marked with *)
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Incubation() {
  const benefits = [
    {
      icon: Globe,
      title: "Lifetime Hosting",
      description: "Free hosting for the lifetime of your startup with enterprise-grade infrastructure."
    },
    {
      icon: Shield,
      title: "Maintenance Support",
      description: "Ongoing technical maintenance and support to keep your platform running smoothly."
    },
    {
      icon: DollarSign,
      title: "Funding Support", 
      description: "Connect with investors and get help securing government grants and investment funding."
    },
    {
      icon: Award,
      title: "Government Grants",
      description: "Assistance in applying for and securing government startup grants and subsidies."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Access to industry experts and successful entrepreneurs for guidance and advice."
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Strategic planning and execution support to scale your startup effectively."
    }
  ];

  const eligibility = [
    "Revolutionary technology or business model",
    "Strong founding team with relevant experience", 
    "Clear market opportunity and target audience",
    "Scalable business concept with growth potential",
    "Commitment to innovation and social impact",
    "Willingness to participate in our mentorship program"
  ];

  const process = [
    {
      step: "01",
      title: "Application",
      description: "Submit your startup idea and business plan for initial review."
    },
    {
      step: "02", 
      title: "Evaluation",
      description: "Our expert panel evaluates your proposal based on innovation and market potential."
    },
    {
      step: "03",
      title: "Pitch Session",
      description: "Present your idea to our investment committee and technical advisors."
    },
    {
      step: "04",
      title: "Acceleration",
      description: "Get selected for our program with lifetime support and funding assistance."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              Startup Incubation Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Launch Your Revolutionary Idea
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Turn your innovative startup idea into reality with our comprehensive incubation program. 
              Get lifetime hosting, maintenance support, funding assistance, and expert mentorship 
              to build the next generation of technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('application-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Apply Directly
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/quotation">Business Quotation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support to help your startup succeed from day one to market leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Criteria</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're looking for exceptional startups with the potential to make a significant impact
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3 text-primary" />
                  Selection Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eligibility.map((criterion, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{criterion}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple and transparent process to get your startup accepted into our incubation program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Application Section */}
      <section id="application-section" className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply to Our Incubation Program</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Submit your startup idea directly through our application form
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ApplicationForm />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Idea?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Join our incubation program and get the support you need to build a revolutionary startup. 
              Apply today and take the first step towards turning your vision into reality.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/quotation">Start Your Application</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}