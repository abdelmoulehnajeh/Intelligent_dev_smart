"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Portfolio() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      category: "AI & Web",
      description: "Custom analytics dashboard with predictive models for enterprise clients.",
      image: "/analytics-dashboard.png",
      slug: "ai-analytics",
    },
    {
      title: "E-commerce with 3D Visualizer",
      category: "3D & Web",
      description: "Interactive product visualization using Three.js with AI recommendations.",
      image: "/ecommerce-3d-product.jpg",
      slug: "ecommerce-3d",
    },
    {
      title: "Mobile App with Computer Vision",
      category: "Mobile & AI",
      description: "React Native app with real-time object detection capabilities.",
      image: "/mobile-app-interface-computer-vision.jpg",
      slug: "mobile-vision",
    },
    {
      title: "Enterprise ERP System",
      category: "Web & Backend",
      description: "Full-stack ERP/CRM solution with custom integrations and workflows.",
      image: "/enterprise-dashboard-erp-system.jpg",
      slug: "enterprise-erp",
    },
  ]

  return (
    <section id="portfolio" className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{getTranslation(language, "portfolio.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of our latest projects and innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow border-border/50">
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Link href={`/portfolio/${project.slug}`}>
                  <Button variant="ghost" className="gap-2 p-0">
                    {getTranslation(language, "portfolio.viewProject")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
