"use client"
import { useEffect, useRef, useState } from "react"

interface VideoLoadingScreenProps {
  onLoadingComplete?: () => void
}

/**
 * VideoLoadingScreen
 * ------------------
 * A full-screen overlay that shows a short intro video centered on the
 * viewport.  The overlay fades out when:
 *  • the video finishes
 *  • the video errors
 *  • 5 seconds have passed (fallback)
 */
export default function VideoLoadingScreen({ onLoadingComplete }: VideoLoadingScreenProps) {
  const [visible, setVisible] = useState(true)
  const fallbackRef = useRef<NodeJS.Timeout>()
  const videoRef = useRef<HTMLVideoElement>(null)

  // Fallback in case video never ends (e.g. network issue)
  useEffect(() => {
    fallbackRef.current = setTimeout(hide, 5_000)
    return () => clearTimeout(fallbackRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /** Safely hide the overlay and invoke callback once */
  function hide() {
    if (!visible) return
    setVisible(false)
    onLoadingComplete?.()
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500">
      {/* Centered video */}
      <video
        ref={videoRef}
        className="w-auto h-auto max-w-md max-h-[70vh] object-contain"
        src="/videos/sagetalk-logo.mp4"
        muted
        playsInline
        autoPlay
        onEnded={hide}
        onError={hide}
      />

      {/* Three-dot pulse indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {[0, 0.15, 0.3].map((delay) => (
          <span
            key={delay}
            className="w-2 h-2 rounded-full bg-white/60 animate-bounce"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>
    </div>
  )
}
