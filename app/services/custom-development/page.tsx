"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Wrench, Rocket, Headphones } from "lucide-react"
import Link from "next/link"

export default function CustomDevelopmentPage() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  const features = [
    {
      icon: Lightbulb,
      title: "Custom Solutions",
      description: "Tailored software built specifically for your unique business requirements",
    },
    {
      icon: Wrench,
      title: "Full Stack Development",
      description: "End-to-end development from frontend to backend and database design",
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Quick time-to-market with agile development methodologies",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Continuous maintenance, updates, and technical support",
    },
  ]

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Custom Development Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bespoke software solutions crafted to solve your specific business challenges
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
          <h2 className="text-2xl font-bold mb-6">Our Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React", "Next.js", "Python", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS"].map((tech) => (
              <div key={tech} className="p-4 bg-background rounded-lg text-center font-semibold">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/pricing?service=custom-development">
            <Button size="lg" className="rounded-full">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
