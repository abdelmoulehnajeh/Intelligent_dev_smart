import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics & Insights | Society of Intelligent Development",
  description: "Real-time analytics and performance metrics for your projects",
}

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
