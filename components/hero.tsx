"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { ThreeDBackground } from "./3d-background"
import Link from "next/link"

export function Hero() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      <ThreeDBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center gap-2 border border-primary/20">
              <Sparkles className="w-4 h-4" />✨ Intelligent Solutions
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            {getTranslation(language, "hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            {getTranslation(language, "hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/services">
              <Button size="lg" className="rounded-full gap-2 bg-primary hover:bg-primary/90">
                {getTranslation(language, "hero.cta")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
           
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-16 border-t border-border/50">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
