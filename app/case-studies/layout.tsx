import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | Society of Intelligent Development",
  description: "Explore our successful projects and case studies showcasing real-world solutions",
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
