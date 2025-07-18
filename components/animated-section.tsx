"use client"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp" | "slideInDown"
  delay?: number
  className?: string
}

export function AnimatedSection({ children, animation = "fadeInUp", delay = 0, className = "" }: AnimatedSectionProps) {
  const { isVisible, elementRef } = useScrollAnimation()

  const animationClasses = {
    fadeInUp: "translate-y-8 opacity-0",
    fadeInLeft: "-translate-x-8 opacity-0",
    fadeInRight: "translate-x-8 opacity-0",
    scaleIn: "scale-95 opacity-0",
    slideInUp: "translate-y-12 opacity-0",
    slideInDown: "-translate-y-12 opacity-0",
  }

  const visibleClasses = {
    fadeInUp: "translate-y-0 opacity-100",
    fadeInLeft: "translate-x-0 opacity-100",
    fadeInRight: "translate-x-0 opacity-100",
    scaleIn: "scale-100 opacity-100",
    slideInUp: "translate-y-0 opacity-100",
    slideInDown: "translate-y-0 opacity-100",
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClasses[animation] : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { isVisible, elementRef } = useScrollAnimation()

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
