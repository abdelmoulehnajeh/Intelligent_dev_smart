"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card } from "@/components/ui/card"
import { Users, Target, Zap, Award } from "lucide-react"

export default function AboutPage() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Empower businesses through intelligent technology solutions that drive innovation and growth.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously push boundaries with cutting-edge AI, web, and 3D technologies.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work closely with clients to understand their vision and deliver exceptional results.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintain the highest standards of quality, security, and performance in every project.",
    },
  ]

  const team = [
    {
      name: "Ahmed Hassan",
      role: "Founder & AI Specialist",
      expertise: "Deep Learning, Computer Vision, NLP",
    },
    {
      name: "Sarah Johnson",
      role: "Lead Web Developer",
      expertise: "Full-stack Development, Cloud Architecture",
    },
    {
      name: "Marcus Chen",
      role: "3D & Graphics Lead",
      expertise: "Three.js, WebGL, 3D Modeling",
    },
    {
      name: "Elena Rodriguez",
      role: "Mobile Development Lead",
      expertise: "React Native, iOS, Android",
    },
    {
      name: "David Kim",
      role: "DevOps & Infrastructure",
      expertise: "Kubernetes, AWS, CI/CD",
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      expertise: "Agile, Client Relations, Strategy",
    },
  ]

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">About Society of Intelligent Development</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pioneering intelligent solutions that transform businesses and shape the future of technology
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <Card className="p-8 border-border/50">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 2020, Society of Intelligent Development emerged from a vision to bridge the gap between
              cutting-edge AI technology and practical business solutions. What started as a small team of passionate
              developers has grown into a full-service digital agency serving clients across the globe.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We specialize in creating intelligent solutions that combine artificial intelligence, modern web
              technologies, mobile development, and immersive 3D experiences. Our team of NVIDIA-certified AI experts,
              cloud architects, and creative developers work together to deliver transformative projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we've completed over 50 projects for 30+ clients, generating $5M+ in value. Our commitment to
              excellence, innovation, and client success drives everything we do.
            </p>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <Card key={idx} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <Card key={idx} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/20 rounded-full mb-4" />
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.expertise}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 py-16 border-t border-border/50 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  )
}
