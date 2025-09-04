import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Users, Target, Clock, MapPin, Mail, ExternalLink } from "lucide-react";

export default function Careers() {
  const fullTimeJobs = [
    {
      title: "Senior Cybersecurity Engineer",
      department: "Security",
      location: "Remote/Hybrid",
      salary: "₹60,000/month",
      type: "Full-time",
      description: "Lead cybersecurity initiatives and develop secure software solutions for enterprise clients.",
      responsibilities: [
        "Design and implement robust security frameworks",
        "Conduct security audits and vulnerability assessments", 
        "Develop secure coding standards and practices",
        "Lead incident response and threat analysis",
        "Mentor junior security team members"
      ],
      requirements: [
        "5+ years experience in cybersecurity",
        "Expert knowledge of security frameworks (OWASP, NIST)",
        "Experience with penetration testing and vulnerability assessment",
        "Strong knowledge of cryptography and secure coding",
        "Relevant certifications (CISSP, CEH, OSCP preferred)"
      ]
    },
    {
      title: "Secure Software Developer",
      department: "Development",
      location: "Remote/Hybrid", 
      salary: "₹60,000/month",
      type: "Full-time",
      description: "Build secure, scalable applications with focus on security-first development practices.",
      responsibilities: [
        "Develop secure web applications using modern frameworks",
        "Implement security controls and secure coding practices",
        "Perform code reviews with security focus",
        "Integrate security testing into CI/CD pipelines",
        "Collaborate with security team on threat modeling"
      ],
      requirements: [
        "4+ years experience in secure software development",
        "Proficiency in React, Node.js, and modern web technologies",
        "Strong understanding of web security (XSS, CSRF, SQL injection)",
        "Experience with secure authentication and authorization",
        "Knowledge of DevSecOps practices and tools"
      ]
    },
    {
      title: "DevSecOps Engineer",
      department: "DevOps & Security",
      location: "Remote/Hybrid",
      salary: "₹60,000/month", 
      type: "Full-time",
      description: "Integrate security practices into development and operations workflows.",
      responsibilities: [
        "Build and maintain secure CI/CD pipelines",
        "Implement infrastructure security and monitoring",
        "Automate security testing and compliance checks",
        "Manage cloud security configurations",
        "Develop security automation tools and scripts"
      ],
      requirements: [
        "3+ years experience in DevOps with security focus",
        "Expertise in AWS/Azure cloud security",
        "Experience with containerization and orchestration security",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)",
        "Familiarity with security scanning tools and SAST/DAST"
      ]
    }
  ];

  const internships = [
    {
      title: "Cybersecurity Intern",
      department: "Security",
      duration: "3-6 months",
      stipend: "Up to ₹15,000/month",
      description: "Learn cybersecurity fundamentals while working on real security projects.",
      responsibilities: [
        "Assist in security assessments and vulnerability scanning",
        "Support incident response activities",
        "Research emerging security threats and technologies",
        "Help maintain security documentation",
        "Participate in security awareness programs"
      ],
      requirements: [
        "Currently pursuing degree in Computer Science/IT/Cybersecurity",
        "Basic knowledge of networking and security concepts",
        "Familiarity with security tools (Nmap, Wireshark, etc.)",
        "Strong analytical and problem-solving skills",
        "Eagerness to learn and grow in cybersecurity"
      ]
    },
    {
      title: "SDE Intern (Software Development Engineer)",
      department: "Development",
      duration: "3-6 months", 
      stipend: "Up to ₹15,000/month",
      description: "Work on Next.js projects and gain hands-on development experience with modern tech stacks. We focus on practical technology skills, not DSA problems.",
      responsibilities: [
        "Develop applications using Next.js and modern React patterns",
        "Build mobile applications with Flutter/Firebase or React Native",
        "Work with backend technologies including Node.js and Laravel",
        "Implement Firebase integration for real-time features",
        "Collaborate on MERN stack projects and migrations to Next.js",
        "Participate in code reviews and agile development processes"
      ],
      requirements: [
        "Currently pursuing degree in Computer Science/IT",
        "Must have knowledge in one or more: Flutter + Firebase, Kotlin + Firebase, MERN stack + Firebase, React Native, or Laravel",
        "MERN developers willing to learn and migrate to Next.js are welcome",
        "Understanding of modern web/mobile development practices",
        "Experience with Firebase for backend services",
        "Java-only developers need not apply - we require the above technology stacks",
        "Want to learn? Prepare with our free organized course: https://ai-skill-enhancement-and-job-readiness.cehpoint.co.in/",
        "Good communication and eagerness to work with cutting-edge technologies"
      ]
    }
  ];

  const policies = [
    {
      title: "Performance-Based Compensation",
      description: "All internship stipends are performance-based. Exceptional work is rewarded with higher compensation up to ₹15,000/month."
    },
    {
      title: "Payment Transparency",
      description: "If an employee or intern fails to deliver committed work or meet quality standards, we reserve the right to adjust or decline payment for that specific deliverable."
    },
    {
      title: "Pre-Placement Offer (PPO)",
      description: "Outstanding interns who demonstrate exceptional performance, technical skills, and cultural fit will be eligible for a Pre-Placement Offer worth ₹6 LPA upon successful completion of their internship."
    },
    {
      title: "Professional Growth",
      description: "We provide mentorship, training, and career development opportunities to help our team members grow professionally and advance their careers."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
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
              <Users className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Build Your Career in Cybersecurity
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our innovative team and work on cutting-edge security solutions. 
              We offer competitive compensation, flexible work arrangements, and exceptional growth opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-Time Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Full-Time Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Permanent positions with competitive salary of ₹60,000/month and comprehensive benefits
            </p>
          </motion.div>

          <div className="grid gap-8">
            {fullTimeJobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{job.title}</CardTitle>
                        <CardDescription className="text-lg mt-2">{job.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="default" className="mb-2">{job.type}</Badge>
                        <p className="font-semibold text-lg">{job.salary}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <Button asChild className="w-full md:w-auto">
                        <a href="mailto:hr@cehpoint.co.in?subject=Application for {job.title}&body=Dear Hiring Team,%0A%0AI am interested in applying for the {job.title} position. Please find my resume attached.%0A%0AThank you for your consideration.%0A%0ABest regards">
                          <Mail className="w-4 h-4 mr-2" />
                          Apply Now - Email HR
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Opportunities */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Internship Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Performance-based internships with stipends up to ₹15,000/month and PPO opportunities worth ₹6 LPA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{internship.title}</CardTitle>
                        <CardDescription className="mt-2">{internship.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">{internship.duration}</Badge>
                        <p className="font-semibold">{internship.stipend}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">What You'll Do</h4>
                        <ul className="space-y-1">
                          {internship.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">What We're Looking For</h4>
                        <ul className="space-y-1">
                          {internship.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t">
                      <Button asChild className="w-full">
                        <a href="https://internlink.cehpoint.co.in/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Apply for Internship
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Policies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Policies & Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent policies that ensure fairness and growth for all team members
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      {policy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{policy.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Take the next step in your cybersecurity career. Apply today and become part of our innovative team 
              building the future of secure technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:hr@cehpoint.co.in?subject=Career Inquiry&body=Hello,%0A%0AI am interested in career opportunities at Cehpoint. Please let me know about current openings.%0A%0AThank you.">
                  Contact HR Team
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="https://internlink.cehpoint.co.in/" target="_blank" rel="noopener noreferrer">
                  Apply for Internship
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}