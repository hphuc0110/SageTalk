"use client"

import { Search, Menu } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import clsx from "clsx"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsAtTop(currentScrollY === 0)

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false)
    router.push(href)
  }

  const scrollToTrial = () => {
    const trialSection = document.getElementById("trial-section")
    if (trialSection) {
      trialSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { href: "/courses", label: "Gói học" },
    { href: "/team", label: "Đội ngũ chuyên gia" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform border-b",
        isAtTop
          ? "bg-black border-gray-900"
          : "backdrop-blur-xl bg-black/70 border-gray-800",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigation("/")} className="flex items-center space-x-3">
            <div className="relative h-[48px] w-[65px] lg:h-[70px] lg:w-[100px] transition-transform duration-300 hover:scale-105">
              <Image src="/images/mastertalk-logo.png" alt="Logo" fill className="object-contain" />
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="relative text-gray-300 text-sm font-medium tracking-wide transition-all duration-300 hover:text-white group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 bottom-0 h-0.5 bg-[#d6a067] w-0 group-hover:w-full transition-all duration-500"></span>
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center space-x-4">
            {/* Search icon */}
            <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer group">
              <Search className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
            </div>

            {/* CTA Button - Desktop only */}
            <button
              onClick={scrollToTrial}
              className="hidden lg:inline-flex px-4 py-2 rounded-full bg-[#d6a067] text-white text-sm font-semibold hover:bg-[#e3b378] transition"
            >
              ĐĂNG KÝ NGAY
            </button>

            {/* Mobile menu icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
            >
              <Menu className="w-5 h-5 text-gray-300 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 animate-fade-in-down">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-300 font-medium text-base hover:text-white transition-all py-2 px-4 rounded-md hover:bg-gray-800 text-left"
                >
                  {item.label}
                </button>
              ))}
              {/* CTA Button - Mobile */}
              <button
                onClick={() => handleNavigation("/courses")}
                className="mt-3 mx-4 py-2 rounded-md bg-[#d6a067] text-white text-base font-semibold hover:bg-[#e3b378] transition"
              >
                ĐĂNG KÝ NGAY
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
