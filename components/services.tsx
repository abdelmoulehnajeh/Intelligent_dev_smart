"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Card } from "@/components/ui/card"
import { Code2, Brain, Smartphone, Cable as Cube } from "lucide-react"

const serviceIcons = {
  web: Code2,
  ai: Brain,
  mobile: Smartphone,
  threeDee: Cube,
}

export function Services() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"
  const services = [
    {
      key: "services.webDesign",
      icon: "web",
      description: "Custom WordPress, Ecommerce, and responsive web solutions tailored to your business needs.",
    },
    {
      key: "services.aiModels",
      icon: "ai",
      description: "NVIDIA-certified AI solutions including deep learning, computer vision, and NLP models.",
    },
    {
      key: "services.mobileApps",
      icon: "mobile",
      description: "Cross-platform and native mobile applications with AI-powered features.",
    },
    {
      key: "services.threeDDesign",
      icon: "threeDee",
      description: "Interactive 3D experiences and visualizations using Three.js and WebGL.",
    },
  ]

  return (
    <section id="services" className={`py-20 bg-card/50 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{getTranslation(language, "services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons]
            return (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-border/50">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{getTranslation(language, service.key)}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
