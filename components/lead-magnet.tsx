"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Download, Zap, BookOpen, Code } from "lucide-react"
import { useState, useEffect } from "react"

export function LeadMagnet() {
  const { language, mounted } = useLanguage()
  const [selectedMagnet, setSelectedMagnet] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", company: "" })
  const [submitted, setSubmitted] = useState(false)

  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !mounted) return null

  const magnets = [
    {
      id: "ai-guide",
      title: "blog.leadMagnet.aiGuide",
      description: "blog.leadMagnet.aiGuideDesc",
      icon: Zap,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      id: "web-checklist",
      title: "blog.leadMagnet.webChecklist",
      description: "blog.leadMagnet.webChecklistDesc",
      icon: BookOpen,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      id: "dev-toolkit",
      title: "blog.leadMagnet.devToolkit",
      description: "blog.leadMagnet.devToolkitDesc",
      icon: Code,
      color: "bg-green-500/10 text-green-600",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setSelectedMagnet(null)
      setFormData({ name: "", email: "", company: "" })
    }, 3000)
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {getTranslation(language, "blog.leadMagnet.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {getTranslation(language, "blog.leadMagnet.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {magnets.map((magnet) => {
            const Icon = magnet.icon
            return (
              <button
                key={magnet.id}
                onClick={() => setSelectedMagnet(magnet.id)}
                className={`text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedMagnet === magnet.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg ${magnet.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{getTranslation(language, magnet.title)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{getTranslation(language, magnet.description)}</p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Download className="w-4 h-4" />
                  {getTranslation(language, "blog.leadMagnet.download")}
                </div>
              </button>
            )
          })}
        </div>

        {selectedMagnet && (
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {getTranslation(language, "blog.leadMagnet.getAccess")}{" "}
              {getTranslation(language, magnets.find((m) => m.id === selectedMagnet)?.title || "")}
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  {getTranslation(language, "blog.leadMagnet.checkEmail")}
                </p>
                <p className="text-muted-foreground">{getTranslation(language, "blog.leadMagnet.checkEmailDesc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {getTranslation(language, "blog.leadMagnet.name")}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder={getTranslation(language, "blog.leadMagnet.namePlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {getTranslation(language, "blog.leadMagnet.email")}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder={getTranslation(language, "blog.leadMagnet.emailPlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {getTranslation(language, "blog.leadMagnet.company")}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder={getTranslation(language, "blog.leadMagnet.companyPlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {getTranslation(language, "blog.leadMagnet.getAccessBtn")}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  {getTranslation(language, "blog.leadMagnet.noSpam")}
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
