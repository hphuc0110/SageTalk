"use client"
import { AnimatedSection, AnimatedText } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, User, Target, Calendar } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const features = [
    {
      icon: Target,
      title: "Chương trình học được thiết kế từ chính vấn đề của học viên",
    },
    {
      icon: Clock,
      title: "Hình thức học 1 kèm 1 linh hoạt và thực chiến",
    },
    {
      icon: User,
      title: "100% thực hành – Học dùng luôn không học để đấy",
    },
    {
      icon: Calendar,
      title: "Tự tin sau mỗi buổi học",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Mobile-first layout */}
        <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:text-left">
          {/* Hero Image - Mobile First */}
          <div className="order-1 mb-8 lg:order-2 lg:mb-0">
            <AnimatedSection animation="fadeInRight" delay={300}>
              <div className="relative">
                {/* Main hero image - optimized for mobile */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="aspect-square relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/herro-xajBLI8pHFFe2Qfkfd72v5hTtPMdAC.png"
                      alt="MasterTalk Hero - Professional English Training"
                      fill
                      className="object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

                {/* Decorative elements - smaller on mobile */}
                <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#d6a067] to-[#f4d03f] rounded-full opacity-20 animate-pulse"></div>
                <div
                  className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-[#f4d03f] to-[#d6a067] rounded-full opacity-30 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </AnimatedSection>
          </div>

          {/* Title and Content - Mobile Optimized */}
          <div className="order-2 lg:order-1 w-full">
            <AnimatedSection animation="fadeInUp">
              <AnimatedText>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white font-playfair leading-tight mb-4 sm:mb-6">
                  SAGE
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6a067] via-[#f4d03f] to-[#d6a067]">
                    TALK
                  </span>
                </h1>
              </AnimatedText>
              <AnimatedText delay={200}>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 font-medium">
                Executive Presentation English - Coaching Roadmap
                </p>
              </AnimatedText>
            </AnimatedSection>

 {/* Features */}
            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                  <AnimatedText key={index} delay={600 + index * 120}>
                    <Card className="group bg-neutral-900 border border-neutral-800 hover:border-yellow-500/50 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-yellow-500/10 transition-all duration-300">
                      <CardContent className="p-4 sm:p-5 flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d6a067] shadow-inner group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-sm sm:text-base tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
                            {feature.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedText>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>


      {/* Background decorative elements - adjusted for mobile */}
      <div className="absolute top-1/4 left-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-[#d6a067] to-[#f4d03f] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-r from-[#f4d03f] to-[#d6a067] rounded-full opacity-5 blur-3xl"></div>
    </section>
  )
}
