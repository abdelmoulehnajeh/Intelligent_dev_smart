"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const { language, mounted } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  if (!mounted) return null

  const isRTL = language === "ar"
  const navItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.about", href: "/about" },
    {
      key: "nav.services",
      href: "/services",
      submenu: [
        { label: "Web Design", href: "/services/web-design" },
        { label: "AI Models", href: "/services/ai-models" },
        { label: "Mobile Apps", href: "/services/mobile-apps" },
        { label: "3D Design", href: "/services/3d-design" },
        { label: "CRM & ERP", href: "/services/crm-erp" },
        { label: "Custom Development", href: "/services/custom-development" },
      ],
    },
    { key: "nav.portfolio", href: "/portfolio" },
    { key: "nav.pricing", href: "/pricing" },
    { key: "nav.contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg flex-shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
            SID
          </div>
          <span className="hidden sm:inline text-sm">SID</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.key} className="relative group">
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-1"
              >
                {getTranslation(language, item.key)}
                {"submenu" in item && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown Menu */}
              {"submenu" in item && (
                <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.href}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.key}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => !("submenu" in item) && setMobileMenuOpen(false)}
                >
                  {getTranslation(language, item.key)}
                </Link>

                {/* Mobile Submenu */}
                {"submenu" in item && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-3 py-2 text-xs rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
