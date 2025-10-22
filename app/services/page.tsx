"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Brain, Smartphone, Cable as Cube, ArrowRight } from "lucide-react"

const serviceIcons = {
  web: Code2,
  ai: Brain,
  mobile: Smartphone,
  threeDee: Cube,
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
      description: "Custom WordPress, Ecommerce, and responsive web solutions tailored to your business needs.",
      features: ["Responsive Design", "SEO Optimization", "E-commerce Solutions", "Performance Tuning"],
    },
    {
      key: "services.aiModels",
      icon: "ai",
      slug: "ai-models",
      description: "NVIDIA-certified AI solutions including deep learning, computer vision, and NLP models.",
      features: ["Deep Learning", "Computer Vision", "NLP Models", "Custom Training"],
    },
    {
      key: "services.mobileApps",
      icon: "mobile",
      slug: "mobile-apps",
      description: "Cross-platform and native mobile applications with AI-powered features.",
      features: ["iOS Development", "Android Development", "Cross-platform", "AI Integration"],
    },
    {
      key: "services.threeDDesign",
      icon: "threeDee",
      slug: "3d-design",
      description: "Interactive 3D experiences and visualizations using Three.js and WebGL.",
      features: ["3D Modeling", "WebGL", "Interactive Experiences", "Real-time Rendering"],
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
            Comprehensive solutions for your digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons]
            return (
              <Card key={idx} className="p-8 hover:shadow-lg transition-all border-border/50 group">
                <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{getTranslation(language, service.key)}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/services/${service.slug}`}>
                  <Button variant="outline" className="w-full gap-2 group/btn bg-transparent">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
