"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Star } from "lucide-react"

export function Testimonials() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "CEO, TechVision Egypt",
      image: "/professional-man-1.jpg",
      rating: 5,
      text: "testimonials.ahmed",
      company: "TechVision Egypt",
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager, Global Solutions",
      image: "/professional-woman-1.jpg",
      rating: 5,
      text: "testimonials.sarah",
      company: "Global Solutions",
    },
    {
      name: "Dmitri Volkov",
      role: "CTO, Innovation Labs",
      image: "/professional-man-2.png",
      rating: 5,
      text: "testimonials.dmitri",
      company: "Innovation Labs",
    },
    {
      name: "Marie Dubois",
      role: "Founder, Digital Ventures",
      image: "/professional-woman-2.png",
      rating: 5,
      text: "testimonials.marie",
      company: "Digital Ventures",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {getTranslation(language, "testimonials.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {getTranslation(language, "testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{getTranslation(language, testimonial.text)}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
