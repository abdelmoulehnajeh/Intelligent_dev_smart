"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const { language, mounted } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  if (!mounted) return null

  const isRTL = language === "ar"

  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Platform",
      category: "AI & Web",
      description:
        "Custom analytics dashboard with predictive models for enterprise clients. Real-time data processing with machine learning insights.",
      image: "/analytics-dashboard.png",
      technologies: ["Next.js", "TensorFlow", "PostgreSQL", "React"],
      year: "2024",
      link: "#",
    },
    {
      id: 2,
      title: "E-commerce with 3D Visualizer",
      category: "3D & Web",
      description:
        "Interactive product visualization using Three.js with AI-powered recommendations. Increased conversion rates by 45%.",
      image: "/3d-product-visualization-ecommerce.jpg",
      technologies: ["Three.js", "React", "Stripe", "Node.js"],
      year: "2024",
      link: "#",
    },
    {
      id: 3,
      title: "Mobile App with Computer Vision",
      category: "Mobile & AI",
      description:
        "React Native app with real-time object detection capabilities. Used by 50k+ users for product identification.",
      image: "/mobile-app-interface-computer-vision.jpg",
      technologies: ["React Native", "TensorFlow Lite", "Firebase", "OpenCV"],
      year: "2023",
      link: "#",
    },
    {
      id: 4,
      title: "Enterprise ERP System",
      category: "Web & Backend",
      description:
        "Full-stack ERP/CRM solution with custom integrations and workflows. Streamlined operations for 200+ employees.",
      image: "/enterprise-dashboard-erp-system.jpg",
      technologies: ["Next.js", "PostgreSQL", "GraphQL", "Docker"],
      year: "2023",
      link: "#",
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Web",
      description:
        "Modern real estate marketplace with virtual tours and AI property matching. Processed $50M+ in transactions.",
      image: "/real-estate-property-listing-platform.jpg",
      technologies: ["Next.js", "Mapbox", "Stripe", "Supabase"],
      year: "2023",
      link: "#",
    },
    {
      id: 6,
      title: "AI Content Generator",
      category: "AI & Web",
      description:
        "SaaS platform for AI-powered content generation. Serves 10k+ monthly active users with custom models.",
      image: "/ai-content-dashboard.png",
      technologies: ["Next.js", "OpenAI", "Vercel", "Stripe"],
      year: "2024",
      link: "#",
    },
  ]

  const categories = ["All", ...new Set(projects.map((p) => p.category))]
  const filteredProjects =
    selectedCategory === null || selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            {getTranslation(language, "portfolio.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of our latest projects and innovations across AI, Web, Mobile, and 3D
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category || (selectedCategory === null && category === "All")
                  ? "default"
                  : "outline"
              }
              onClick={() => setSelectedCategory(category === "All" ? null : category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all border-border/50 group">
              <div className="aspect-video bg-muted overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{project.category}</Badge>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button variant="ghost" className="gap-2 p-0 group/btn">
                  {getTranslation(language, "portfolio.viewProject")}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 py-12 border-t border-border/50">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">$5M+</div>
            <div className="text-muted-foreground">Total Value Delivered</div>
          </div>
        </div>
      </div>
    </section>
  )
}
