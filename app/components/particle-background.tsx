"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  baseVx: number
  baseVy: number
}

interface Planet {
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  color: string
  ringColor: string
}

interface ParticleBackgroundProps {
  isDark: boolean
}

export default function ParticleBackground({ isDark }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const planetsRef = useRef<Planet[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.min(200, Math.floor((canvas.width * canvas.height) / 6000))

      for (let i = 0; i < particleCount; i++) {
        const baseVx = (Math.random() - 0.5) * 2
        const baseVy = (Math.random() - 0.5) * 2

        // Cosmic color palette - blues, purples, and whites
        const colors = [
          "#1E3A8A", // Deep blue
          "#1E40AF", // Blue
          "#3B82F6", // Medium blue
          "#60A5FA", // Light blue
          "#93C5FD", // Very light blue
          "#DBEAFE", // Pale blue
          "#F0F9FF", // Almost white blue
          "#4C1D95", // Deep purple (less frequent)
        ]

        const color = colors[Math.floor(Math.random() * colors.length)]

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          size: Math.random() * 3 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color,
        })
      }
      particlesRef.current = particles
    }

    const createPlanets = () => {
      const planets: Planet[] = []

      // Single Saturn positioned higher to align with main text
      planets.push({
        x: canvas.width * 0.75,
        y: canvas.height * 0.35, // Moved up from 0.45 to 0.35
        size: 40 + Math.random() * 20,
        rotation: 0,
        rotationSpeed: 0.01,
        color: "#7C3AED",
        ringColor: "#A855F7",
      })

      planetsRef.current = planets
    }

    const drawParticle = (particle: Particle) => {
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()

      // Cosmic glow effect
      ctx.shadowBlur = 15
      ctx.shadowColor = particle.color
      ctx.fill()
      ctx.restore()
    }

    const drawPlanet = (planet: Planet) => {
      ctx.save()
      ctx.translate(planet.x, planet.y)
      ctx.rotate(planet.rotation)

      // Draw planet with cosmic glow
      ctx.globalAlpha = 0.9
      ctx.fillStyle = planet.color
      ctx.beginPath()
      ctx.arc(0, 0, planet.size, 0, Math.PI * 2)
      ctx.fill()

      // Draw cosmic rings
      ctx.strokeStyle = planet.ringColor
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.6

      for (let i = 1; i <= 2; i++) {
        ctx.beginPath()
        ctx.ellipse(0, 0, planet.size + i * 12, (planet.size + i * 12) * 0.3, 0, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Cosmic glow
      ctx.shadowBlur = 25
      ctx.shadowColor = planet.color
      ctx.globalAlpha = 0.3
      ctx.fill()

      ctx.restore()
    }

    const updateParticle = (particle: Particle) => {
      // Gentle cosmic drift
      const dx = mouseRef.current.x - particle.x
      const dy = mouseRef.current.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 120) {
        const force = (120 - distance) / 120
        const pushForce = force * 0.015
        particle.vx += (dx / distance) * pushForce
        particle.vy += (dy / distance) * pushForce
      }

      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Cosmic randomness
      particle.vx += (Math.random() - 0.5) * 0.01
      particle.vy += (Math.random() - 0.5) * 0.01

      // Return to base velocity
      particle.vx += (particle.baseVx - particle.vx) * 0.008
      particle.vy += (particle.baseVy - particle.vy) * 0.008

      // Damping
      particle.vx *= 0.99
      particle.vy *= 0.99

      // Boundary conditions
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8
        particle.baseVx *= -1
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8
        particle.baseVy *= -1
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      }

      // Twinkling effect
      particle.opacity += (Math.random() - 0.5) * 0.02
      particle.opacity = Math.max(0.2, Math.min(0.9, particle.opacity))
    }

    const updatePlanet = (planet: Planet) => {
      planet.rotation += planet.rotationSpeed
    }

    const drawConnections = () => {
      const particles = particlesRef.current

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = ((140 - distance) / 140) * 0.3

            // Cosmic connection colors
            ctx.strokeStyle = isDark ? `rgba(124, 58, 237, ${opacity})` : `rgba(30, 64, 175, ${opacity})`

            ctx.lineWidth = 1
            ctx.globalAlpha = opacity
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw planets first (background)
      planetsRef.current.forEach((planet) => {
        updatePlanet(planet)
        drawPlanet(planet)
      })

      // Draw connections
      drawConnections()

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        updateParticle(particle)
        drawParticle(particle)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
      createPlanets()
    }

    // Initialize
    resizeCanvas()
    createParticles()
    createPlanets()
    animate()

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    // Custom cursor with cosmic theme
    const addCustomCursor = () => {
      document.body.style.cursor = "none"

      const cursor = document.createElement("div")
      cursor.id = "custom-cursor"
      cursor.style.cssText = `
  position: fixed;
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, #1E40AF, #3B82F6);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 15px #1E40AF;
  transform: translate(-50%, -50%);
`
      document.body.appendChild(cursor)

      const updateCursor = (e: MouseEvent) => {
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"

        const target = e.target as HTMLElement
        if (
          target &&
          (target.tagName === "BUTTON" || target.tagName === "A" || target.classList.contains("cursor-pointer"))
        ) {
          cursor.style.background = "radial-gradient(circle, #60A5FA, #93C5FD)"
          cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
        } else {
          cursor.style.background = "radial-gradient(circle, #1E40AF, #3B82F6)"
          cursor.style.transform = "translate(-50%, -50%) scale(1)"
        }
      }

      document.addEventListener("mousemove", updateCursor)

      return () => {
        document.body.style.cursor = "auto"
        document.removeEventListener("mousemove", updateCursor)
        const existingCursor = document.getElementById("custom-cursor")
        if (existingCursor) {
          existingCursor.remove()
        }
      }
    }

    const cleanupCursor = addCustomCursor()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cleanupCursor()
    }
  }, [isDark])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
