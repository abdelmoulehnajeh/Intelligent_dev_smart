import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing & Plans | Society of Intelligent Development",
  description: "Flexible pricing plans for AI solutions, web development, mobile apps, and 3D design services",
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
