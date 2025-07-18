"use client"

import { useState } from "react"
import { RefreshCw, User, Users, Apple, Lightbulb } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/animated-section"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export default function TrainingMethodologySection() {
  const [activeMethod, setActiveMethod] = useState<number | null>(null)
  const { visibleItems, containerRef } = useStaggeredAnimation(5, 150)

  const methodologies = [
    {
      icon: RefreshCw,
      title: "Flipped Classroom",
      description: "Học lý thuyết tại nhà - toàn bộ thời gian lớp dành cho luyện tập thực chiến & phản hồi trực tiếp",
    },
    {
      icon: User,
      title: "Cá Nhân Hóa",
      description: "Mỗi học viên phát triển chính bài thuyết trình thực tế của mình",
    },
    {
      icon: Users,
      title: "Phản Biện 1:1",
      description: "Giảng viên đóng vai đối tác chiến lược - đặt câu hỏi phản biện, giúp tinh chỉnh thông điệp",
    },
    {
      icon: Apple,
      title: "Andragogy",
      description: "Thiết kế theo phương pháp học tập trưởng thành - chủ động, xuất phát từ nhu cầu thật.",
    },
    {
      icon: Lightbulb,
      title: "Learning by Doing",
      description: "Trình bày trong môi trường mô phỏng - luyện phản xạ và bản lĩnh trình bày chuyên nghiệp.",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-[#d6a067] via-[#e6b56b] to-[#f4d03f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-20">
            <AnimatedText>
              <h2 className="text-5xl md:text-7xl font-bold font-playfair text-white mb-6 leading-tight drop-shadow-lg">
                Phương Pháp Đào Tạo
              </h2>
            </AnimatedText>
            <AnimatedText delay={200}>
              <p className="text-2xl md:text-3xl text-white/90 font-light">Tinh gọn - Thực chiến - Cá nhân hóa</p>
            </AnimatedText>
          </div>
        </AnimatedSection>

        {/* Methodology Icons and Content */}
        <div className="max-w-6xl mx-auto">
          {/* Icons Row */}
          <div ref={containerRef} className="flex justify-center items-center mb-16">
            {/* Connecting line */}
            <div className="absolute h-1 bg-white/30 w-full max-w-4xl"></div>

            <div className="flex justify-between items-center w-full max-w-4xl relative z-10">
              {methodologies.map((method, index) => (
                <div
                  key={method.title}
                  className={`relative transition-all duration-700 cursor-pointer ${
                    visibleItems[index] ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveMethod(index)}
                  onMouseLeave={() => setActiveMethod(null)}
                  onClick={() => setActiveMethod(activeMethod === index ? null : index)}
                >
                  {/* Icon Circle */}
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white bg-gradient-to-br from-[#d6a067] to-[#f4d03f] flex items-center justify-center shadow-xl transition-all duration-500 transform ${
                      activeMethod === index ? "scale-125 shadow-2xl bg-white" : "hover:scale-110 hover:shadow-2xl"
                    }`}
                  >
                    <method.icon
                      className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 ${
                        activeMethod === index ? "text-[#d6a067]" : "text-white"
                      }`}
                    />
                  </div>

                  {/* Pulse effect when active */}
                  {activeMethod === index && (
                    <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white animate-ping opacity-30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="min-h-[200px] flex items-center justify-center">
            {activeMethod !== null && (
              <AnimatedSection animation="fadeInUp" key={activeMethod}>
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto transform transition-all duration-500">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d6a067] to-[#f4d03f] flex items-center justify-center shadow-lg">
                        {(() => {
                          const IconComponent = methodologies[activeMethod].icon
                          return <IconComponent className="w-8 h-8 text-white" />
                        })()}
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-6">
                      {methodologies[activeMethod].title}
                    </h3>

                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                      {methodologies[activeMethod].description}
                    </p>

                    {/* Decorative elements */}
                    <div className="flex justify-center mt-8 space-x-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i === activeMethod ? "bg-[#d6a067]" : "bg-gray-300"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Default state message */}
            {activeMethod === null && (
              <div className="text-center">
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-white/50 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
