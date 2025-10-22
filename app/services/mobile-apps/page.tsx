"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Zap, Lock, Globe } from "lucide-react"

export default function MobileAppsPage() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  const features = [
    {
      icon: Smartphone,
      title: "Native & Cross-Platform",
      description: "iOS, Android, and cross-platform solutions with native performance",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized apps that run smoothly on all devices and screen sizes",
    },
    {
      icon: Lock,
      title: "Secure Architecture",
      description: "Enterprise-grade security with encrypted data and secure authentication",
    },
    {
      icon: Globe,
      title: "Cloud Integration",
      description: "Seamless backend integration with cloud services and APIs",
    },
  ]

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Mobile App Development</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build powerful mobile applications that engage users and drive business growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="p-8 border-border/50">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Tech Stack */}
        <div className="bg-card/50 rounded-lg p-8 mb-16 border border-border/50">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Redux", "Expo"].map((tech) => (
              <div key={tech} className="p-4 bg-background rounded-lg text-center font-semibold">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="rounded-full">
            Build Your Mobile App
          </Button>
        </div>
      </div>
    </section>
  )
}
