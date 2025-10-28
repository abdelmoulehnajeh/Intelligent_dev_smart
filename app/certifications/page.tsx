"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Zap, Cloud, Brain } from "lucide-react"

export default function CertificationsPage() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  const certifications = [
    {
      title: "NVIDIA Deep Learning AI",
      issuer: "NVIDIA",
      year: "2024",
      icon: Brain,
      description: "Advanced deep learning and neural network architecture certification",
      category: "AI",
    },
    {
      title: "NVIDIA GPU Computing",
      issuer: "NVIDIA",
      year: "2024",
      icon: Zap,
      description: "CUDA programming and GPU-accelerated computing certification",
      category: "AI",
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: Cloud,
      description: "Professional-level AWS cloud architecture and deployment",
      category: "Cloud",
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2023",
      icon: Cloud,
      description: "Google Cloud Platform professional data engineer certification",
      category: "Cloud",
    },
    {
      title: "Kubernetes Administrator",
      issuer: "Linux Foundation",
      year: "2023",
      icon: Zap,
      description: "Certified Kubernetes Administrator (CKA) certification",
      category: "DevOps",
    },
    {
      title: "AWS Machine Learning",
      issuer: "Amazon Web Services",
      year: "2024",
      icon: Brain,
      description: "AWS machine learning services and model deployment",
      category: "AI",
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker",
      year: "2023",
      icon: Zap,
      description: "Docker containerization and orchestration expertise",
      category: "DevOps",
    },
    {
      title: "Certified Ethical Hacker",
      issuer: "EC-Council",
      year: "2023",
      icon: Award,
      description: "Cybersecurity and ethical hacking certification",
      category: "Security",
    },
  ]

  const categories = ["All", ...new Set(certifications.map((c) => c.category))]

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Certifications & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating our technical expertise and commitment to excellence
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon
            return (
              <Card key={idx} className="p-6 border-border/50 hover:shadow-lg transition-all group">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mb-4">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {cert.year}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {cert.category}
                  </Badge>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Skills Overview */}
        <div className="bg-card/50 rounded-lg p-8 border border-border/50">
          <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-4 text-primary">AI & Machine Learning</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Deep Learning</li>
                <li>Computer Vision</li>
                <li>NLP Models</li>
                <li>TensorFlow & PyTorch</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Cloud & DevOps</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>AWS & GCP</li>
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Web Development</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Next.js & React</li>
                <li>TypeScript</li>
                <li>GraphQL</li>
                <li>Full-stack Development</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Security & Performance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cybersecurity</li>
                <li>Performance Optimization</li>
                <li>Scalability</li>
                <li>Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
