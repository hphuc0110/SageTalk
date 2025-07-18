"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { ArrowRight, BookOpen, Star, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import { AnimatedSection, AnimatedText } from "@/components/animated-section"

const academicPrograms = [
  {
    title: "LỘ TRÌNH THUYẾT TRÌNH CẤP TỐC 3 BUỔI",
    content: "Nội dung sẽ được cập nhật sau.",
    subtitle: "Nhanh chóng - Hiệu quả - Tập trung",
    description: "Dành cho người cần kỹ năng cơ bản ngay lập tức",
  },
  {
    title: "LỘ TRÌNH HUẤN LUYỆN 5+1 (TOÀN DIỆN)",
    sessions: [
      "Buổi 1: Xây dựng Uy tín & Nền tảng (Credibility)",
      "Buổi 2: Cấu trúc Lập luận Sắc bén (Structure)",
      "Buổi 3: Kể chuyện bằng Dữ liệu (Data Storytelling)",
      "Buổi 4: Gây ảnh hưởng & Thuyết phục (Influence)",
      "Buổi 5: Làm chủ Phiên Hỏi-Đáp & Phản biện (Q&A Mastery)",
    ],
    outcomes: [
      "Diễn đạt ý tưởng phức tạp một cách chuẩn xác và tinh tế bằng Tiếng Anh.",
      "Sở hữu bộ từ vựng mạnh và các mẫu câu chuyên nghiệp.",
      "Tăng 30% thời gian trình bày nội dung chiến lược vì không phải dịch trong đầu.",
    ],
    target: "Phù hợp với người mới bắt đầu hoặc cần chuẩn bị cho một bài thuyết trình quan trọng.",
    subtitle: "Từ Zero → Thuyết trình tự tin trong 5 buổi",
    description: "Cho người cần thuyết trình một bài quan trọng sắp tới.",
  },
  {
    title: "LỘ TRÌNH GIAO TIẾP THỰC CHIẾN 10 BUỔI",
    content: "Nội dung sẽ được cập nhật sau.",
    subtitle: "Thực chiến - Chuyên sâu - Bền vững",
    description: "Phát triển kỹ năng giao tiếp toàn diện",
  },
  {
    title: "LỘ TRÌNH PHÁT TRIỂN KỸ NĂNG GIAO TIẾP CAO CẤP 20 BUỔI",
    content: "Nội dung sẽ được cập nhật sau.",
    subtitle: "Chuyên gia - Lãnh đạo - Thành thạo",
    description: "Dành cho nhà lãnh đạo cấp cao",
  },
  {
    title: "LỘ TRÌNH MASTERY ỨNG XỬ 25 BUỔI",
    content: "Nội dung sẽ được cập nhật sau.",
    subtitle: "Mastery - Tinh hoa - Đẳng cấp",
    description: "Trở thành bậc thầy giao tiếp quốc tế",
  },
]

function ProgramCard({ title, content, sessions, outcomes, target, subtitle, description }: any) {
  const isQuickWin = title.includes("5+1")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer h-full">
          <Card className="h-[280px] border-none rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-[#fef7ed] to-[#fed7aa] hover:from-[#fbbf24] hover:to-[#f59e0b] transform hover:scale-105">
            <div className="h-full p-8 flex flex-col justify-between relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-32 h-32 border border-current rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border border-current rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 leading-tight mb-4">
                  {title}
                </h3>

                {subtitle && (
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 mb-2">
                    {subtitle}
                  </p>
                )}

                {description && (
                  <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                    {description}
                  </p>
                )}
              </div>

              {/* Arrow button */}
              <div className="flex justify-end relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-gray-400 group-hover:border-white flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-white max-w-4xl text-gray-800 rounded-3xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-[#f59e0b] font-playfair">{title}</DialogTitle>
        </DialogHeader>

        {isQuickWin ? (
          <div className="mt-6 space-y-6">
            <div className="bg-gradient-to-r from-[#fef7ed] to-[#fed7aa] p-6 rounded-2xl">
              <p className="text-xl font-semibold text-gray-800 mb-2">{subtitle}</p>
              <p className="text-gray-600 mb-4">{description}</p>
              <p className="text-[#f59e0b] font-semibold">
                📅 5 BUỔI + 1 BUỔI THE SIGNATURE
                <br /> Tổng hợp các kỹ năng đã học để thực hiện 1 bài thuyết trình hoàn chỉnh.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 text-[#f59e0b] font-bold text-lg mb-4">
                  <BookOpen className="w-6 h-6" />
                  Nội dung khóa học
                </div>
                <ul className="space-y-3 text-gray-700">
                  {sessions?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 text-[#f59e0b] font-bold text-lg mb-4">
                  <Star className="w-6 h-6" />
                  Lợi ích đạt được
                </div>
                <ul className="space-y-3 text-gray-700">
                  {outcomes?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 font-bold text-blue-700 mb-3">
                <Users className="w-6 h-6" />
                Phù hợp với:
              </div>
              <p className="text-blue-700 leading-relaxed">{target}</p>
            </div>

            <div className="flex justify-end">
              <DialogClose asChild>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      const trialSection = document.getElementById("trial-section")
                      if (trialSection) {
                        trialSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }, 100)
                  }}
                  className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#f59e0b] text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Tìm hiểu ngay
                </button>
              </DialogClose>
            </div>
          </div>
        ) : (
          <div className="mt-6 prose prose-lg prose-slate max-w-none">
            <ReactMarkdown>{content || ""}</ReactMarkdown>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default function CoursesVideoSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const maxScroll = scrollWidth - clientWidth
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
      setScrollProgress(progress)
      setCanScrollLeft(scrollLeft > 5)
      setCanScrollRight(scrollLeft < maxScroll - 5)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollState)
      // Initial check
      setTimeout(updateScrollState, 100)
      return () => scrollContainer.removeEventListener("scroll", updateScrollState)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350
      const currentScroll = scrollRef.current.scrollLeft
      const targetScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#f59e0b]/10 to-[#fbbf24]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#fbbf24]/10 to-[#f59e0b]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <AnimatedText>
              <h2 className="text-4xl md:text-6xl font-bold font-playfair text-white mb-4 relative inline-block">
                CHƯƠNG TRÌNH HỌC
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full"></div>
              </h2>
            </AnimatedText>
          </div>
        </AnimatedSection>

        {/* Scrollable Cards Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
              canScrollLeft
                ? "bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:scale-110 hover:shadow-[#f59e0b]/50"
                : "bg-gray-600 cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
              canScrollRight
                ? "bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:scale-110 hover:shadow-[#f59e0b]/50"
                : "bg-gray-600 cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>

          {/* Cards Container */}
          <div className="px-16 py-4">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scroll-smooth gap-8"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {academicPrograms.map((program, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <ProgramCard {...program} />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 mx-16">
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.max(0, Math.min(100, scrollProgress))}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
