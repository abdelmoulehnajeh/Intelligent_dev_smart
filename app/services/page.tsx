"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Brain, Smartphone, Cable as Cube, ArrowRight, Zap, Layers } from "lucide-react"

const serviceIcons = {
  web: Code2,
  ai: Brain,
  mobile: Smartphone,
  threeDee: Cube,
  crm: Zap,
  custom: Layers,
}

export default function ServicesPage() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  const services = [
    {
      key: "services.webDesign",
      icon: "web",
      slug: "web-design",
      description:
        "Custom WordPress, React, Next.js websites and e-commerce solutions tailored to your business needs.",
      features: [
        "WordPress Sites",
        "React Applications",
        "Next.js Web Apps",
        "E-commerce Solutions",
        "Responsive Design",
        "SEO Optimization",
      ],
    },
    {
      key: "services.aiModels",
      icon: "ai",
      slug: "ai-models",
      description: "NVIDIA-certified AI solutions including deep learning, computer vision, and NLP models.",
      features: [
        "Deep Learning",
        "Computer Vision",
        "NLP Models",
        "Custom Training",
        "Model Deployment",
        "AI Integration",
      ],
    },
    {
      key: "services.mobileApps",
      icon: "mobile",
      slug: "mobile-apps",
      description: "Cross-platform and native mobile applications with AI-powered features.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Apps",
        "AI Integration",
        "Real-time Features",
        "Cloud Sync",
      ],
    },
    {
      key: "services.threeDDesign",
      icon: "threeDee",
      slug: "3d-design",
      description: "Interactive 3D experiences and visualizations using Three.js and WebGL.",
      features: [
        "3D Modeling",
        "WebGL",
        "Interactive Experiences",
        "Real-time Rendering",
        "Product Visualization",
        "Immersive Design",
      ],
    },
    {
      key: "CRM & ERP Solutions",
      icon: "crm",
      slug: "crm-erp",
      description:
        "Enterprise resource planning and customer relationship management systems tailored to your workflow.",
      features: [
        "CRM Systems",
        "ERP Solutions",
        "Workflow Automation",
        "Data Integration",
        "Custom Modules",
        "Scalable Architecture",
      ],
    },
    {
      key: "Custom Development",
      icon: "custom",
      slug: "custom-development",
      description:
        "Bespoke software solutions and custom models built specifically for your unique business requirements.",
      features: [
        "Custom Solutions",
        "Business Logic",
        "API Development",
        "Database Design",
        "Integration Services",
        "Maintenance & Support",
      ],
    },
  ]

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            {getTranslation(language, "services.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your service to explore our comprehensive solutions and pricing options
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons]
            return (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all border-border/50 group flex flex-col">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {typeof service.key === "string" && service.key.startsWith("services.")
                    ? getTranslation(language, service.key)
                    : service.key}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/pricing?service=${service.slug}`} className="mt-auto">
                  <Button variant="outline" className="w-full gap-2 group/btn bg-transparent">
                    View Pricing
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12 text-center border border-border/50">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer custom solutions tailored to your specific needs. Let's discuss your project requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
