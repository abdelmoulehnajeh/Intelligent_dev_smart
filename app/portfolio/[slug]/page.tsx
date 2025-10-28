"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const projectDetails: Record<string, any> = {
  "ai-analytics": {
    title: "AI-Powered Analytics Platform",
    category: "AI & Web",
    image: "/analytics-dashboard.png",
    description: "A comprehensive analytics dashboard with predictive models for enterprise clients.",
    fullDescription: `This project involved building a sophisticated analytics platform that leverages machine learning models to provide predictive insights. The platform processes real-time data streams and generates actionable intelligence for business decision-making.`,
    challenge:
      "The main challenge was handling massive data volumes while maintaining real-time performance and accuracy of predictions.",
    solution:
      "We implemented a scalable microservices architecture with optimized data pipelines and deployed ML models using TensorFlow and PyTorch.",
    results: [
      "40% improvement in data processing speed",
      "95% prediction accuracy",
      "Reduced infrastructure costs by 30%",
      "Increased user engagement by 250%",
    ],
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis", "Docker"],
    timeline: "6 months",
    team: "8 engineers",
  },
  "ecommerce-3d": {
    title: "E-commerce with 3D Visualizer",
    category: "3D & Web",
    image: "/ecommerce-3d-product.jpg",
    description: "Interactive product visualization using Three.js with AI recommendations.",
    fullDescription: `An innovative e-commerce platform featuring interactive 3D product visualization that allows customers to view products from every angle. Integrated AI recommendation engine suggests products based on user behavior.`,
    challenge: "Creating smooth 3D interactions while maintaining performance on various devices and browsers.",
    solution:
      "Optimized Three.js implementation with WebGL, implemented progressive enhancement, and used AI for personalized recommendations.",
    results: [
      "60% increase in conversion rate",
      "45% reduction in product returns",
      "3x increase in average order value",
      "Mobile performance score: 95/100",
    ],
    technologies: ["React", "Three.js", "WebGL", "Node.js", "MongoDB", "TensorFlow.js"],
    timeline: "4 months",
    team: "6 engineers",
  },
  "mobile-vision": {
    title: "Mobile App with Computer Vision",
    category: "Mobile & AI",
    image: "/mobile-app-interface-computer-vision.jpg",
    description: "React Native app with real-time object detection capabilities.",
    fullDescription: `A cutting-edge mobile application that uses computer vision to detect and classify objects in real-time. The app processes camera feeds and provides instant feedback with high accuracy.`,
    challenge: "Optimizing computer vision models to run efficiently on mobile devices with limited resources.",
    solution:
      "Used TensorFlow Lite for mobile optimization, implemented efficient model compression, and optimized inference pipelines.",
    results: [
      "Real-time detection at 30 FPS",
      "92% accuracy on object detection",
      "Battery consumption reduced by 40%",
      "Downloaded 100K+ times",
    ],
    technologies: ["React Native", "TensorFlow Lite", "OpenCV", "Firebase", "Redux", "TypeScript"],
    timeline: "5 months",
    team: "7 engineers",
  },
  "enterprise-erp": {
    title: "Enterprise ERP System",
    category: "Web & Backend",
    image: "/enterprise-dashboard-erp-system.jpg",
    description: "Full-stack ERP/CRM solution with custom integrations and workflows.",
    fullDescription: `A comprehensive enterprise resource planning system designed for large organizations. Features include inventory management, financial tracking, customer relationship management, and custom workflow automation.`,
    challenge: "Integrating multiple legacy systems while maintaining data consistency and system performance.",
    solution:
      "Built microservices architecture with event-driven design, implemented comprehensive API layer, and created custom integration adapters.",
    results: [
      "Unified 5 legacy systems",
      "99.99% uptime",
      "50% reduction in manual processes",
      "ROI achieved in 8 months",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Kubernetes", "RabbitMQ", "GraphQL"],
    timeline: "12 months",
    team: "15 engineers",
  },
}

export default function ProjectDetailPage() {
  const { language, mounted } = useLanguage()
  const params = useParams()
  const slug = params.slug as string

  if (!mounted) return null

  const isRTL = language === "ar"
  const project = projectDetails[slug]

  if (!project) {
    return (
      <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/portfolio" className="inline-block mb-8">
          <Button variant="outline" className="gap-2 bg-transparent">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4">
            <div className="text-sm text-primary font-semibold">{project.category}</div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">{project.fullDescription}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Challenge */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-3">Challenge</h3>
            <p className="text-muted-foreground">{project.challenge}</p>
          </Card>

          {/* Solution */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-3">Solution</h3>
            <p className="text-muted-foreground">{project.solution}</p>
          </Card>

          {/* Timeline */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-3">Project Details</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-muted-foreground">Timeline:</span> {project.timeline}
              </div>
              <div>
                <span className="text-muted-foreground">Team Size:</span> {project.team}
              </div>
            </div>
          </Card>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.results.map((result: string, idx: number) => (
              <Card key={idx} className="p-4 border-border/50 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p>{result}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string) => (
              <div key={tech} className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12 text-center border border-border/50">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full gap-2">
              Get Started
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
