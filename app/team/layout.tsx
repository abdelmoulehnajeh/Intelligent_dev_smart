import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Society of Intelligent Development",
  description: "Meet the talented team behind SID - experts in AI, web development, mobile apps, and 3D design",
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
