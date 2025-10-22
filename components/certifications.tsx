"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Certifications() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"
  const certs = [
    {
      title: "NVIDIA Deep Learning AI",
      issuer: "NVIDIA",
      year: "2024",
      icon: "🎓",
    },
    {
      title: "NVIDIA GPU Computing",
      issuer: "NVIDIA",
      year: "2024",
      icon: "⚡",
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️",
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2023",
      icon: "🌐",
    },
  ]

  return (
    <section id="certifications" className={`py-20 bg-card/50 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating our technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <Card key={idx} className="p-6 text-center border-border/50 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
              <Badge variant="secondary">{cert.year}</Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
