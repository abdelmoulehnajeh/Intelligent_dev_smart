"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const isRTL = language === "ar"

  return (
    <footer className={`border-t border-border bg-card/50 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Society of Intelligent Development</h3>
            <p className="text-sm text-muted-foreground">Crafting intelligent solutions for the future.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/web-design" className="hover:text-foreground transition">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/ai-models" className="hover:text-foreground transition">
                  AI Models
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="hover:text-foreground transition">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/3d-design" className="hover:text-foreground transition">
                  3D Design
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-foreground transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-foreground transition">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Society of Intelligent Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
