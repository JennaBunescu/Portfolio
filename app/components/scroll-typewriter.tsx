"use client"

import { useState, useEffect, useRef } from "react"

interface ScrollTypewriterProps {
  text: string
  className?: string
  speed?: number
  threshold?: number
}

export default function ScrollTypewriter({ text, className = "", speed = 50, threshold = 0.3 }: ScrollTypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setIsVisible(true)
          setHasStarted(true)
        }
      },
      { threshold },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, hasStarted])

  useEffect(() => {
    if (!isVisible || !hasStarted) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, isVisible, hasStarted])

  return (
    <h2 ref={elementRef} className={className}>
      {displayText}
      {hasStarted && currentIndex < text.length && <span className="inline-block animate-pulse">|</span>}
    </h2>
  )
}
