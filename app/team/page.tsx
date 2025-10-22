"use client"

import { useLanguage } from "@/hooks/use-language"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { useState, useEffect } from "react"
import { getTranslation } from "@/lib/i18n"

export default function TeamPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = (key: string) => getTranslation(language, key)

  if (!mounted) {
    return null
  }

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ahmed El-Sayed",
      role: "team.ceo",
      image: "/professional-man-1.jpg",
      bio: "team.bio.ahmed",
      expertise: ["AI/ML", "Strategy", "Innovation"],
      social: {
        email: "ahmed@sid.dev",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "team.cto",
      image: "/professional-woman-1.jpg",
      bio: "team.bio.sarah",
      expertise: ["Full-Stack", "Architecture", "DevOps"],
      social: {
        email: "sarah@sid.dev",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 3,
      name: "Dmitri Volkov",
      role: "team.leadAI",
      image: "/professional-man-2.png",
      bio: "team.bio.dmitri",
      expertise: ["Deep Learning", "Computer Vision", "NLP"],
      social: {
        email: "dmitri@sid.dev",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 4,
      name: "Marie Dubois",
      role: "team.designLead",
      image: "/professional-woman-2.png",
      bio: "team.bio.marie",
      expertise: ["3D Design", "UX/UI", "WebGL"],
      social: {
        email: "marie@sid.dev",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 5,
      name: "Carlos Rodriguez",
      role: "team.mobileHead",
      image: "/placeholder.svg?key=m8n2p",
      bio: "team.bio.carlos",
      expertise: ["React Native", "iOS", "Android"],
      social: {
        email: "carlos@sid.dev",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 6,
      name: "Yuki Tanaka",
      role: "team.productManager",
      image: "/placeholder.svg?key=p9q3r",
      bio: "team.bio.yuki",
      expertise: ["Product Strategy", "Analytics", "Growth"],
      social: {
        email: "yuki@sid.dev",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t("team.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("team.subtitle")}</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-secondary">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <a
                        href={`mailto:${member.social.email}`}
                        className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{t(member.role)}</p>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{t(member.bio)}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance">{t("team.values")}</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "team.value1", description: "team.value1Desc" },
              { title: "team.value2", description: "team.value2Desc" },
              { title: "team.value3", description: "team.value3Desc" },
              { title: "team.value4", description: "team.value4Desc" },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t(value.title)}</h3>
                <p className="text-muted-foreground text-sm">{t(value.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t("team.joinCta")}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t("team.joinCtaDesc")}</p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            {t("common.startProject")}
          </a>
        </div>
      </section>
    </main>
  )
}
