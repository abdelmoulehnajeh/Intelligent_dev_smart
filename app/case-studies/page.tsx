"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { getTranslation } from "@/lib/i18n"

export default function CaseStudiesPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = (key: string) => getTranslation(language, key)

  if (!mounted) {
    return null
  }

  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      category: "web",
      client: "RetailMax",
      image: "/ecommerce-platform.jpg",
      results: [
        { metric: "340%", label: "Revenue Increase" },
        { metric: "2.5x", label: "Faster Load Time" },
        { metric: "85%", label: "Cart Conversion" },
      ],
      description:
        "Rebuilt legacy e-commerce platform with Next.js, resulting in significant performance improvements and revenue growth.",
      technologies: ["Next.js", "React", "PostgreSQL", "Stripe"],
    },
    {
      id: 2,
      title: "AI-Powered Customer Analytics",
      category: "ai",
      client: "DataInsight Corp",
      image: "/analytics-dashboard.png",
      results: [
        { metric: "92%", label: "Prediction Accuracy" },
        { metric: "60%", label: "Cost Reduction" },
        { metric: "10x", label: "Faster Processing" },
      ],
      description:
        "Developed machine learning models for customer behavior prediction, enabling data-driven decision making.",
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Mobile Banking Application",
      category: "mobile",
      client: "FinanceFlow",
      image: "/mobile-banking-app.jpg",
      results: [
        { metric: "500K+", label: "Active Users" },
        { metric: "4.8★", label: "App Rating" },
        { metric: "99.9%", label: "Uptime" },
      ],
      description:
        "Built secure, scalable mobile banking app with real-time transactions and advanced security features.",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    },
    {
      id: 4,
      title: "3D Product Visualization",
      category: "3d",
      client: "FurnitureHub",
      image: "/3d-furniture-visualization.jpg",
      results: [
        { metric: "45%", label: "Return Rate Decrease" },
        { metric: "3.2x", label: "Engagement Increase" },
        { metric: "78%", label: "Conversion Boost" },
      ],
      description:
        "Created interactive 3D product visualization system allowing customers to view furniture in their space.",
      technologies: ["Three.js", "WebGL", "React", "Node.js"],
    },
    {
      id: 5,
      title: "Enterprise ERP System",
      category: "web",
      client: "ManufactureCo",
      image: "/erp-dashboard.jpg",
      results: [
        { metric: "35%", label: "Efficiency Gain" },
        { metric: "200+", label: "Users Onboarded" },
        { metric: "50%", label: "Time Saved" },
      ],
      description:
        "Implemented comprehensive ERP system for manufacturing operations with real-time inventory and reporting.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    },
    {
      id: 6,
      title: "AI Content Generation Platform",
      category: "ai",
      client: "ContentPro",
      image: "/ai-content-generation.jpg",
      results: [
        { metric: "10x", label: "Faster Content" },
        { metric: "95%", label: "Quality Score" },
        { metric: "1M+", label: "Content Generated" },
      ],
      description: "Developed AI-powered platform for automated content generation with advanced NLP capabilities.",
      technologies: ["GPT-4", "Python", "FastAPI", "React"],
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI Solutions" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "3d", label: "3D Design" },
  ]

  const filteredStudies =
    selectedCategory === "all" ? caseStudies : caseStudies.filter((study) => study.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t("caseStudies.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("caseStudies.subtitle")}</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-secondary">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {study.category.toUpperCase()}
                    </span>
                    <span className="text-sm text-muted-foreground">{study.client}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground">{study.title}</h3>

                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-border">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-2xl font-bold text-primary">{result.metric}</p>
                        <p className="text-xs text-muted-foreground mt-1">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t("caseStudies.cta")}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t("caseStudies.ctaDescription")}</p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            {t("common.startProject")}
          </Link>
        </div>
      </section>
    </main>
  )
}
