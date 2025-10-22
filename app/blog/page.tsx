"use client"

import { useLanguage } from "@/hooks/use-language"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { useState, useEffect } from "react"
import { getTranslation } from "@/lib/i18n"

export default function BlogPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = (key: string) => getTranslation(language, key)

  if (!mounted) {
    return null
  }

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Solutions",
      category: "ai",
      author: "Dr. Ahmed El-Sayed",
      date: "2024-10-15",
      image: "/placeholder.svg?key=blog1",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing enterprise software and creating new opportunities for business growth.",
      readTime: "8 min read",
      tags: ["AI", "Enterprise", "Future"],
    },
    {
      id: 2,
      title: "Next.js 15: What's New and Why It Matters",
      category: "web",
      author: "Sarah Mitchell",
      date: "2024-10-12",
      image: "/placeholder.svg?key=blog2",
      excerpt:
        "A comprehensive guide to the latest features in Next.js 15 and how they can improve your web development workflow.",
      readTime: "6 min read",
      tags: ["Next.js", "React", "Web Development"],
    },
    {
      id: 3,
      title: "Building Scalable Mobile Apps with React Native",
      category: "mobile",
      author: "Carlos Rodriguez",
      date: "2024-10-10",
      image: "/placeholder.svg?key=blog3",
      excerpt:
        "Best practices for building high-performance mobile applications that scale across iOS and Android platforms.",
      readTime: "7 min read",
      tags: ["React Native", "Mobile", "Performance"],
    },
    {
      id: 4,
      title: "3D Web Experiences: From Concept to Reality",
      category: "3d",
      author: "Marie Dubois",
      date: "2024-10-08",
      image: "/placeholder.svg?key=blog4",
      excerpt: "Learn how to create stunning 3D web experiences using Three.js and WebGL technologies.",
      readTime: "9 min read",
      tags: ["3D", "WebGL", "Three.js"],
    },
    {
      id: 5,
      title: "Machine Learning Models: Training and Deployment",
      category: "ai",
      author: "Dmitri Volkov",
      date: "2024-10-05",
      image: "/placeholder.svg?key=blog5",
      excerpt: "A deep dive into training machine learning models and deploying them to production environments.",
      readTime: "10 min read",
      tags: ["ML", "Python", "Deployment"],
    },
    {
      id: 6,
      title: "Web Performance Optimization Techniques",
      category: "web",
      author: "Sarah Mitchell",
      date: "2024-10-01",
      image: "/placeholder.svg?key=blog6",
      excerpt: "Essential techniques for optimizing web application performance and improving user experience.",
      readTime: "7 min read",
      tags: ["Performance", "Optimization", "Web"],
    },
  ]

  const resources = [
    {
      id: 1,
      title: "AI Development Toolkit",
      description: "Complete toolkit for building AI-powered applications",
      type: "toolkit",
      downloads: "2.5K",
      icon: "🛠️",
    },
    {
      id: 2,
      title: "Web Design System",
      description: "Comprehensive design system for modern web applications",
      type: "design",
      downloads: "1.8K",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Mobile Development Guide",
      description: "Step-by-step guide for mobile app development",
      type: "guide",
      downloads: "3.2K",
      icon: "📱",
    },
    {
      id: 4,
      title: "3D Graphics Library",
      description: "Optimized library for 3D graphics and visualization",
      type: "library",
      downloads: "1.5K",
      icon: "🎯",
    },
  ]

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "ai", label: "AI & ML" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile" },
    { id: "3d", label: "3D Design" },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t("blog.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("blog.subtitle")}</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder={t("blog.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-secondary text-foreground px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                  >
                    {t("blog.readMore")}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">{t("blog.noResults")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 md:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">{t("blog.resources")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("blog.resourcesDesc")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{resource.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{resource.downloads} downloads</span>
                  <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                    {t("blog.download")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t("blog.newsletter")}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t("blog.newsletterDesc")}</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("blog.emailPlaceholder")}
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              {t("blog.subscribe")}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
