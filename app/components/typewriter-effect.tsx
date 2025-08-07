"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export default function TypewriterEffect({ text, className = "", speed = 100, delay = 500 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    // Start typing after initial delay
    const startTimeout = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!hasStarted) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, hasStarted])

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>
        |
      </span>
    </span>
  )
}
