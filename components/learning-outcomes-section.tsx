"use client"

import { FileText, Target, MessageSquare } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/animated-section"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export default function LearningOutcomesSection() {
  const { visibleItems, containerRef } = useStaggeredAnimation(3, 300)

  const outcomes = [
    {
      icon: FileText,
      title: "Sự tự tin & chủ động",
      points: [
        'Giảm 80% từ đệm ("uhm", "ahh"...)',
        "Ngôn ngữ cơ thể: Giao tiếp bằng mắt tự tin, tư thế định đạc (đánh giá theo thang điểm 1-5).",
        "Tốc độ nói: Duy trì tốc độ nói ổn định, có chủ đích.",
      ],
    },
    {
      icon: Target,
      title: "Bộ kịch bản thuyết trình cá nhân hóa",
      points: [
        "Tính logic: Tuân thủ cấu trúc SCQA không? (Có/Không).",
        'Tính thuyết phục: Sử dụng hiệu quả các "power verbs" và dữ liệu (Đánh giá 1-5).',
        "Sự trôi chảy: Có thể trình bày 90 giây mở đầu mà không cần kịch bản (Có/Không).",
      ],
    },
    {
      icon: MessageSquare,
      title: "Năng lực xử lý tình huống (Q&A)",
      points: [
        "Áp dụng PREP hiệu quả: >90% câu trả lời triển khai đúng cấu trúc",
        "Phân xa tình huống: Giữ bình tĩnh, chủ động xử lý câu hỏi bất ngờ",
        "Chuyển hóa tiêu cực: Chuyển hướng thành thông điệp tích cực (theo số lần thành công)",
      ],
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#d6a067]/20 to-[#f4d03f]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#f4d03f]/20 to-[#d6a067]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-20">
            <AnimatedText>
              <h2 className="text-5xl md:text-7xl font-bold font-playfair text-white mb-8 leading-tight">
                Học xong,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6a067] via-[#f4d03f] to-[#d6a067]">
                  bạn có gì?
                </span>
              </h2>
            </AnimatedText>
          </div>
        </AnimatedSection>

        {/* Main Content Card */}
        <AnimatedSection animation="scaleIn" delay={400}>
          <div className="bg-gradient-to-br from-[#d6a067] via-[#e6b56b] to-[#f4d03f] rounded-3xl p-8 md:p-16 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02]">
            {/* Outcomes Grid */}
            <div ref={containerRef} className="grid md:grid-cols-3 gap-12 md:gap-16">
              {outcomes.map((outcome, index) => (
                <div
                  key={outcome.title}
                  className={`text-center group transition-all duration-1000 transform ${
                    visibleItems[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Icon with enhanced animation */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                        <outcome.icon className="w-10 h-10 text-black drop-shadow-lg" />
                      </div>
                      {/* Pulse ring effect */}
                      <div className="absolute inset-0 w-20 h-20 bg-black/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Title with better typography */}
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 font-playfair leading-tight group-hover:text-black/90 transition-colors duration-300">
                    {outcome.title}
                  </h3>

                  {/* Points with improved styling */}
                  <div className="space-y-6 text-left">
                    {outcome.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className={`flex items-start space-x-4 transform transition-all duration-700 ${
                          visibleItems[index] ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                        }`}
                        style={{ transitionDelay: `${(index * 200) + (pointIndex * 100) + 400}ms` }}
                      >
                        <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                        <p className="text-black text-base md:text-lg leading-relaxed font-medium">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced decorative dots */}
            <div className="flex justify-center mt-16 space-x-3">
              {Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={index}
                  className="w-3 h-3 bg-white/40 rounded-full animate-pulse hover:bg-black/60 transition-colors duration-300 cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    animationDuration: "2s",
                  }}
                ></div>
              ))}
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute w-2 h-2 bg-black/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
