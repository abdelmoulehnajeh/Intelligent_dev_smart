"use client"

import { useLanguage } from "@/hooks/use-language"
import dynamic from "next/dynamic"
import { Calendar, Download, Filter } from "lucide-react"
import { getTranslation } from "@/lib/i18n"

const AnalyticsDashboard = dynamic(() => import("@/components/analytics-dashboard"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>
  ),
})

export default function AnalyticsPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t("analytics.pageTitle")}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">{t("analytics.pageSubtitle")}</p>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button className="flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors">
                <Calendar className="w-4 h-4" />
                {t("analytics.dateRange")}
              </button>
              <button className="flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors">
                <Filter className="w-4 h-4" />
                {t("analytics.filter")}
              </button>
              <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                <Download className="w-4 h-4" />
                {t("analytics.export")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <AnalyticsDashboard />

      {/* Insights Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-balance">{t("analytics.insights")}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "analytics.insight1Title",
                description: "analytics.insight1Desc",
                metric: "45%",
              },
              {
                title: "analytics.insight2Title",
                description: "analytics.insight2Desc",
                metric: "3.2x",
              },
              {
                title: "analytics.insight3Title",
                description: "analytics.insight3Desc",
                metric: "92%",
              },
            ].map((insight, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8">
                <p className="text-4xl font-bold text-primary mb-4">{insight.metric}</p>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t(insight.title)}</h3>
                <p className="text-muted-foreground">{t(insight.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
