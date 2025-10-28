"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Zap, Shield, TrendingUp } from "lucide-react"

export default function WebDesignPage() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  const features = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored solutions built with modern technologies and best practices",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed and efficiency with minimal load times",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee",
    },
    {
      icon: TrendingUp,
      title: "SEO Optimized",
      description: "Built-in SEO best practices to improve your search rankings",
    },
  ]

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Web Design & Development</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create stunning, high-performance websites that convert visitors into customers
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

        {/* Technologies */}
        <div className="bg-card/50 rounded-lg p-8 mb-16 border border-border/50">
          <h2 className="text-2xl font-bold mb-6">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel", "Stripe", "Supabase"].map(
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
            Start Your Web Project
          </Button>
        </div>
      </div>
    </section>
  )
}
