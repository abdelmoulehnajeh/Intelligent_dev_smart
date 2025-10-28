"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { TrendingUp, Users, Zap, Target, BarChart3, PieChart } from "lucide-react"
import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as PieChartComponent,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function AnalyticsDashboard() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = (key: string) => getTranslation(language, key)

  if (!mounted) return null

  // Sample data for charts
  const trafficData = [
    { month: "Jan", visitors: 4000, projects: 2400 },
    { month: "Feb", visitors: 3000, projects: 1398 },
    { month: "Mar", visitors: 2000, projects: 9800 },
    { month: "Apr", visitors: 2780, projects: 3908 },
    { month: "May", visitors: 1890, projects: 4800 },
    { month: "Jun", visitors: 2390, projects: 3800 },
  ]

  const serviceData = [
    { name: "Web Development", value: 35 },
    { name: "AI Solutions", value: 28 },
    { name: "Mobile Apps", value: 22 },
    { name: "3D Design", value: 15 },
  ]

  const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"]

  const stats = [
    {
      label: "analytics.totalProjects",
      value: "250+",
      icon: Target,
      trend: "+12%",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      label: "analytics.activeClients",
      value: "85",
      icon: Users,
      trend: "+8%",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      label: "analytics.successRate",
      value: "98%",
      icon: TrendingUp,
      trend: "+2%",
      color: "bg-green-500/10 text-green-600",
    },
    {
      label: "analytics.avgDelivery",
      value: "14 days",
      icon: Zap,
      trend: "-3%",
      color: "bg-orange-500/10 text-orange-600",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("analytics.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("analytics.subtitle")}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-muted-foreground text-sm mb-2">{t(stat.label)}</p>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <span className="text-green-600 text-sm font-semibold">{stat.trend}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Line Chart */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{t("analytics.trafficTrend")}</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6" }} />
                <Line type="monotone" dataKey="projects" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: "#8b5cf6" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{t("analytics.serviceBreakdown")}</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChartComponent>
                <Pie
                  data={serviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {serviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChartComponent>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-card border border-border rounded-xl p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{t("analytics.performanceMetrics")}</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="visitors" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="projects" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
