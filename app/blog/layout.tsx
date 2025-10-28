import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog & Resources | Society of Intelligent Development",
  description: "Latest insights, tutorials, and resources on AI, web development, and technology trends",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
