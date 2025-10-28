"use client"

import { useEffect, useRef } from "react"

export function ThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create canvas
    const canvas = document.createElement("canvas")
    containerRef.current.appendChild(canvas)

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = containerRef.current?.clientWidth || window.innerWidth
      canvas.height = containerRef.current?.clientHeight || window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system for 3D effect
    const particles: Array<{
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number
    }> = []

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 100,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: (Math.random() - 0.5) * 1,
        size: Math.random() * 2 + 1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(12, 12, 12, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        if (particle.z < 0) particle.z = 100
        if (particle.z > 100) particle.z = 0

        // Calculate perspective
        const scale = particle.z / 100
        const size = particle.size * scale

        // Draw particle
        ctx.fillStyle = `rgba(101, 84, 192, ${0.5 * scale})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connecting lines
        particles.forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(101, 84, 192, ${(1 - distance / 150) * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (containerRef.current?.contains(canvas)) {
        containerRef.current.removeChild(canvas)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 opacity-40" style={{ background: "transparent" }} />
}
