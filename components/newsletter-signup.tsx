"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Mail, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function NewsletterSignup() {
  const { language, mounted } = useLanguage()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!mounted || !isClient) {
    return null
  }

  const t = (key: string) => getTranslation(language, `blog.newsletter.${key}`)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setEmail("")
    setLoading(false)

    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t("title")}</h2>
              <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
            </div>
          </div>

          {submitted ? (
            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-900">{t("success")}</p>
                <p className="text-sm text-green-800">{t("successDesc")}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? t("subscribing") : t("subscribe")}
              </button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">{t("privacy")}</p>
        </div>
      </div>
    </section>
  )
}
