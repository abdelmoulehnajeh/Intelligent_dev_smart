"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Zap, BarChart3, Cpu } from "lucide-react"

export default function AIModelsPage() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  const features = [
    {
      icon: Brain,
      title: "Deep Learning",
      description: "Advanced neural networks for complex pattern recognition and prediction",
    },
    {
      icon: Cpu,
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual analysis solutions",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Extract insights from your data with machine learning algorithms",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Deploy models for instant predictions and decision-making",
    },
  ]

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Custom AI Models</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NVIDIA-certified AI solutions powered by cutting-edge machine learning technology
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

        {/* Expertise */}
        <div className="bg-card/50 rounded-lg p-8 mb-16 border border-border/50">
          <h2 className="text-2xl font-bold mb-6">Our Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["TensorFlow", "PyTorch", "CUDA", "OpenCV", "Scikit-learn", "Keras", "NVIDIA", "AWS SageMaker"].map(
              (tech) => (
                <div key={tech} className="p-4 bg-background rounded-lg text-center font-semibold">
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="rounded-full">
            Discuss Your AI Project
          </Button>
        </div>
      </div>
    </section>
  )
}
