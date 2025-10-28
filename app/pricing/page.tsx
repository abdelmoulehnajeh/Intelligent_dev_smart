"use client"

import { useLanguage } from "@/hooks/use-language"
import { Check, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { getTranslation } from "@/lib/i18n"
import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"

const servicePricing: Record<string, any> = {
  "web-design": {
    name: "Web Design & Development",
    description: "WordPress, React, and Next.js websites",
    basePrice: 2999,
  },
  "ai-models": {
    name: "Custom AI Models",
    description: "Deep learning, computer vision, and NLP solutions",
    basePrice: 5999,
  },
  "mobile-apps": {
    name: "Mobile App Development",
    description: "iOS, Android, and cross-platform applications",
    basePrice: 4999,
  },
  "3d-design": {
    name: "3D Design & Visualization",
    description: "Interactive 3D experiences and visualizations",
    basePrice: 3999,
  },
  "crm-erp": {
    name: "CRM & ERP Solutions",
    description: "Enterprise resource planning and customer management",
    basePrice: 7999,
  },
  "custom-development": {
    name: "Custom Development",
    description: "Bespoke solutions tailored to your needs",
    basePrice: 6999,
  },
}

export default function PricingPage() {
  const { language } = useLanguage()
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")

  const [mounted, setMounted] = useState(false)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [selectedService, setSelectedService] = useState<string | null>(serviceParam)

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = (key: string) => getTranslation(language, key)

  if (!mounted) {
    return null
  }

  const plans = [
    {
      id: "starter",
      name: "pricing.starter",
      description: "pricing.starterDesc",
      price:
        selectedService && servicePricing[selectedService]
          ? billingCycle === "monthly"
            ? servicePricing[selectedService].basePrice
            : servicePricing[selectedService].basePrice * 10
          : billingCycle === "monthly"
            ? 2999
            : 29990,
      period: billingCycle === "monthly" ? "month" : "year",
      popular: false,
      features: [
        { name: "pricing.feature1", included: true },
        { name: "pricing.feature2", included: true },
        { name: "pricing.feature3", included: false },
        { name: "pricing.feature4", included: false },
        { name: "pricing.feature5", included: false },
        { name: "pricing.feature6", included: false },
      ],
      cta: "pricing.getStarted",
    },
    {
      id: "professional",
      name: "pricing.professional",
      description: "pricing.professionalDesc",
      price:
        selectedService && servicePricing[selectedService]
          ? billingCycle === "monthly"
            ? servicePricing[selectedService].basePrice * 2.5
            : servicePricing[selectedService].basePrice * 25
          : billingCycle === "monthly"
            ? 7999
            : 79990,
      period: billingCycle === "monthly" ? "month" : "year",
      popular: true,
      features: [
        { name: "pricing.feature1", included: true },
        { name: "pricing.feature2", included: true },
        { name: "pricing.feature3", included: true },
        { name: "pricing.feature4", included: true },
        { name: "pricing.feature5", included: false },
        { name: "pricing.feature6", included: false },
      ],
      cta: "pricing.startTrial",
    },
    {
      id: "enterprise",
      name: "pricing.enterprise",
      description: "pricing.enterpriseDesc",
      price: null,
      period: "custom",
      popular: false,
      features: [
        { name: "pricing.feature1", included: true },
        { name: "pricing.feature2", included: true },
        { name: "pricing.feature3", included: true },
        { name: "pricing.feature4", included: true },
        { name: "pricing.feature5", included: true },
        { name: "pricing.feature6", included: true },
      ],
      cta: "pricing.contactSales",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t("pricing.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">{t("pricing.subtitle")}</p>

          {selectedService && servicePricing[selectedService] && (
            <div className="mb-8 inline-block">
              <Card className="p-4 border-primary/50 bg-primary/5">
                <p className="text-sm text-muted-foreground">Selected Service:</p>
                <p className="text-lg font-semibold">{servicePricing[selectedService].name}</p>
              </Card>
            </div>
          )}

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {t("pricing.monthly")}
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === "annual"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {t("pricing.annual")}
              <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                {t("pricing.save20")}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? "md:scale-105 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary shadow-2xl"
                    : "bg-card border border-border hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      {t("pricing.mostPopular")}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{t(plan.name)}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{t(plan.description)}</p>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.price !== null ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-foreground">${(plan.price / 100).toFixed(0)}</span>
                        <span className="text-muted-foreground">/{t(`pricing.${plan.period}`)}</span>
                      </div>
                    ) : (
                      <div className="text-3xl font-bold text-foreground">{t("pricing.customPrice")}</div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:shadow-lg"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {t(plan.cta)}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-foreground" : "text-muted-foreground line-through"
                          }`}
                        >
                          {t(feature.name)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 md:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance">{t("pricing.comparison")}</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold text-foreground">{t("pricing.feature")}</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">{t("pricing.starter")}</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">{t("pricing.professional")}</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">{t("pricing.enterprise")}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "pricing.comp1",
                  "pricing.comp2",
                  "pricing.comp3",
                  "pricing.comp4",
                  "pricing.comp5",
                  "pricing.comp6",
                ].map((comp, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-6 text-foreground">{t(comp)}</td>
                    <td className="py-4 px-6 text-center">
                      {idx < 2 ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance">{t("pricing.faq")}</h2>

          <div className="space-y-6">
            {[
              { q: "pricing.faq1Q", a: "pricing.faq1A" },
              { q: "pricing.faq2Q", a: "pricing.faq2A" },
              { q: "pricing.faq3Q", a: "pricing.faq3A" },
              { q: "pricing.faq4Q", a: "pricing.faq4A" },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{t(item.q)}</h3>
                <p className="text-muted-foreground">{t(item.a)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t("pricing.ctaTitle")}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t("pricing.ctaDesc")}</p>
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
