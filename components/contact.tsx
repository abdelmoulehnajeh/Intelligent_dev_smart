"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const { language, mounted } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  if (!mounted) return null

  const isRTL = language === "ar"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{getTranslation(language, "contact.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {getTranslation(language, "contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-border/50">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{getTranslation(language, "contact.emailLabel")}</h3>
                  <p className="text-muted-foreground">{getTranslation(language, "contact.emailAddress")}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-border/50">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{getTranslation(language, "contact.phone")}</h3>
                  <p className="text-muted-foreground">{getTranslation(language, "contact.phoneNumber")}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-border/50">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{getTranslation(language, "contact.location")}</h3>
                  <p className="text-muted-foreground">{getTranslation(language, "contact.locationAddress")}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder={getTranslation(language, "contact.email")}
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="rounded-lg"
            />
            <Input
              placeholder={getTranslation(language, "contact.name")}
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="rounded-lg"
            />
            <Textarea
              placeholder={getTranslation(language, "contact.message")}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="rounded-lg min-h-32"
            />
            <Button type="submit" size="lg" className="w-full rounded-lg">
              {submitted ? getTranslation(language, "contact.messageSent") : getTranslation(language, "contact.send")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
