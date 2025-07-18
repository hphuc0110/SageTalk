"use client"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export default function ContactSection() {
  const { visibleItems, containerRef } = useStaggeredAnimation(3, 200)

  return null
}
