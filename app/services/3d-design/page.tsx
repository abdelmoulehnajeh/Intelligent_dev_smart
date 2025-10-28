"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cable as Cube, Zap, Eye, Palette } from "lucide-react"

export default function ThreeDDesignPage() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  const features = [
    {
      icon: Cube,
      title: "3D Modeling",
      description: "Professional 3D models and assets created with industry-standard tools",
    },
    {
      icon: Eye,
      title: "Interactive Experiences",
      description: "Engaging 3D visualizations that captivate and convert your audience",
    },
    {
      icon: Zap,
      title: "Real-time Rendering",
      description: "High-performance WebGL and Three.js implementations for smooth interactions",
    },
    {
      icon: Palette,
      title: "Custom Visualization",
      description: "Tailored 3D solutions for product showcases, data visualization, and more",
    },
  ]

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">3D Design & Visualization</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create immersive 3D experiences that bring your ideas to life
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

        {/* Tools & Technologies */}
        <div className="bg-card/50 rounded-lg p-8 mb-16 border border-border/50">
          <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Three.js", "Babylon.js", "WebGL", "Blender", "Cinema 4D", "Unreal Engine", "Unity", "GLSL"].map(
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
            Start Your 3D Project
          </Button>
        </div>
      </div>
    </section>
  )
}
