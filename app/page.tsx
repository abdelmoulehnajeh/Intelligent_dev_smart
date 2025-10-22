"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import AnalyticsDashboard from "@/components/analytics-dashboard"
import { Certifications } from "@/components/certifications"
import { LeadMagnet } from "@/components/lead-magnet"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <AnalyticsDashboard />
      <Certifications />
      <LeadMagnet />
      <NewsletterSignup />
      <Contact />
      <Footer />
    </main>
  )
}
