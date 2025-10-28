"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  changeLanguage: (lang: Language) => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null
    if (saved && ["en", "ar", "fr", "ru"].includes(saved)) {
      setLanguage(saved)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    }
  }, [language, mounted])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return <LanguageContext.Provider value={{ language, changeLanguage, mounted }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
