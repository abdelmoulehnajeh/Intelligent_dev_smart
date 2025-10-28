import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/contexts/language-context"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Society of Intelligent Development - AI Solutions & Web Design",
  description: "Custom AI models, ERP/CRM solutions, web design, and 3D experiences powered by intelligent development",
  generator: "v0.app",
  keywords: ["AI solutions", "web design", "mobile development", "3D visualization", "machine learning"],
  authors: [{ name: "Society of Intelligent Development" }],
  creator: "Society of Intelligent Development",
  publisher: "Society of Intelligent Development",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sid.dev",
    siteName: "Society of Intelligent Development",
    title: "Society of Intelligent Development - AI Solutions & Web Design",
    description:
      "Custom AI models, ERP/CRM solutions, web design, and 3D experiences powered by intelligent development",
    images: [
      {
        url: "https://sid.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Society of Intelligent Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Society of Intelligent Development",
    description: "Custom AI models, ERP/CRM solutions, web design, and 3D experiences",
    images: ["https://sid.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#6554c0" />
        <link rel="canonical" href="https://sid.dev" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
