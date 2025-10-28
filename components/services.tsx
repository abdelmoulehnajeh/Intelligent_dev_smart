"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Card } from "@/components/ui/card"

export function Services() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  const services = [
    {
      titleKey: "servicesDetailed.webDev",
      descKey: "servicesDetailed.webDevDesc",
    },
    {
      titleKey: "servicesDetailed.aiMl",
      descKey: "servicesDetailed.aiMlDesc",
    },
    {
      titleKey: "servicesDetailed.softwareEng",
      descKey: "servicesDetailed.softwareEngDesc",
    },
    {
      titleKey: "servicesDetailed.cybersecurity",
      descKey: "servicesDetailed.cybersecurityDesc",
    },
    {
      titleKey: "servicesDetailed.devops",
      descKey: "servicesDetailed.devopsDesc",
    },
    {
      titleKey: "servicesDetailed.consulting",
      descKey: "servicesDetailed.consultingDesc",
    },
  ]

  return (
    <section id="services" className={`py-20 bg-card/50 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{getTranslation(language, "services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "en" && "Comprehensive solutions for your digital transformation"}
            {language === "fr" && "Solutions complètes pour votre transformation numérique"}
            {language === "ar" && "حلول شاملة لتحولك الرقمي"}
            {language === "ru" && "Комплексные решения для вашей цифровой трансформации"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            return (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-border/50">
                <h3 className="text-xl font-semibold mb-3 leading-relaxed">
                  {getTranslation(language, service.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {getTranslation(language, service.descKey)}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
