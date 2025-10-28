"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const { language, mounted } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  if (!mounted) return null

  const isRTL = language === "ar"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@sid.dev",
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us during business hours (9 AM - 6 PM EST)",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Global - Remote First",
      description: "We work with clients worldwide from our distributed team",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "24 Hours",
      description: "We aim to respond to all inquiries within one business day",
    },
  ]

  return (
    <section className={`py-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            {getTranslation(language, "contact.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help transform your vision into reality.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <Card key={idx} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">{method.title}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{method.value}</p>
                <p className="text-xs text-muted-foreground">{method.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-border/50">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg"
                />
                <Input
                  placeholder={getTranslation(language, "contact.email")}
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-lg"
                />
              </div>

              <Input
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="rounded-lg"
              />

              <Textarea
                placeholder={getTranslation(language, "contact.message")}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-lg min-h-40"
              />

              <Button type="submit" size="lg" className="w-full rounded-lg">
                {submitted ? "✓ Message Sent Successfully!" : getTranslation(language, "contact.send")}
              </Button>
            </form>

            {submitted && (
              <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary">
                Thank you for reaching out! We'll get back to you as soon as possible.
              </div>
            )}
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. Most projects take 2-6 months. We'll provide a detailed timeline during the initial consultation.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We offer maintenance, support, and optimization packages for all our projects. We can discuss the best plan for your needs.",
              },
              {
                q: "What's your pricing model?",
                a: "We offer flexible pricing based on project scope, complexity, and your budget. We provide detailed quotes after understanding your requirements.",
              },
              {
                q: "Can you work with existing systems?",
                a: "We specialize in integrating with existing systems, APIs, and databases. We'll assess your current setup and provide integration solutions.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 border-border/50">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
