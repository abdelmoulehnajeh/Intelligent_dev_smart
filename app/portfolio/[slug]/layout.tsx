import type React from "react"

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="min-h-screen">{children}</main>
    </>
  )
}
