"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Header from "@/components/header"
import VideoLoadingScreen from "@/components/video-loading-screen"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [isNavigationLoading, setIsNavigationLoading] = useState(false)
  const pathname = usePathname()

  // Initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Navigation loading
  useEffect(() => {
    // Skip loading for initial page load
    if (isInitialLoading) return

    // Show loading when pathname changes
    setIsNavigationLoading(true)

    // Hide loading after a short delay to show the video
    const timer = setTimeout(() => {
      setIsNavigationLoading(false)
    }, 2000) // Shorter duration for navigation

    return () => clearTimeout(timer)
  }, [pathname, isInitialLoading])

  // Show loading screen for initial load or navigation
  if (isInitialLoading || isNavigationLoading) {
    return (
      <VideoLoadingScreen
        onLoadingComplete={() => {
          if (isInitialLoading) {
            setIsInitialLoading(false)
          } else {
            setIsNavigationLoading(false)
          }
        }}
      />
    )
  }

  return (
    <>
      <Header />
      {children}
    </>
  )
}

// Also export as named export to fix the import error
export { ClientLayout }
