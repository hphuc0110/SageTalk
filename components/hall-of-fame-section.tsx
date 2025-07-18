"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/animated-section"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

const successStories = [
  {
    id: 1,
    name: "Lý Quốc Bình",
    quote: "Từ một người nhút nhát không dám phát biểu, giờ tôi tự tin dẫn dắt các cuộc họp quốc tế.",
    image: "/images/business-consultant.webp",
  },      
  {
    id: 2,
    name: "Nguyễn Hải Đăng",
    quote: "MasterTalk đã giúp tôi biến những ý tưởng 'không thể' thành hiện thực rực rỡ.",
    image: "/images/ceo-success.webp",
  },
  {
    id: 3,
    name: "Lê Minh Hạnh",
    quote: "Với đội ngũ tôi có thể thuyết trình tự tin trước các nhà đầu tư quốc tế.",
    image: "/images/cfo-international.webp",
  },
  {
    id: 4,
    name: "Trần Thu Trang",
    quote: "Từ việc chỉ truyền đạt thông tin, tôi đã học cách truyền cảm hứng cho cả đội ngũ.",
    image: "/images/hr-director.webp",
  },
]

export default function HallOfFameSection() {
  const { visibleItems: storyVisible, containerRef: storyRef } = useStaggeredAnimation(successStories.length, 200)

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#d6a067]/20 to-[#f4d03f]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-20">
            <AnimatedText>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#d6a067]/20 to-[#f4d03f]/20 border border-[#d6a067]/30 rounded-full mb-8 backdrop-blur-sm">
                <Quote className="w-5 h-5 text-[#d6a067] mr-2" />
                <span className="text-[#d6a067] font-medium text-lg">Hall of Fame</span>
              </div>
            </AnimatedText>
            <AnimatedText delay={200}>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 font-playfair text-white leading-tight">
                Từ{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6a067] via-[#f4d03f] to-[#d6a067]">
                  Khát Vọng
                </span>{" "}
                Đến{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6a067] via-[#f4d03f] to-[#d6a067]">
                  Thành Công
                </span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={400}>
            </AnimatedText>
          </div>
        </AnimatedSection>

        {/* Success Stories Grid - 2x2 Layout */}
        <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto">
          {successStories.map((story, i) => (
            <Card
              key={story.id}
              className={`group bg-gray-900/80 border border-gray-700/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-[#d6a067]/50 transition-all duration-700 ${
                storyVisible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <CardContent className="p-0">
                {/* Main Image Section */}
                <div className="relative h-80">
                  <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Top Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{story.title}</h3>
                      <h4 className="text-2xl font-bold text-[#d6a067] mb-4 leading-tight">{story.highlight}</h4>
                      <p className="text-gray-300 text-sm uppercase tracking-wider">{story.subtitle}</p>
                    </div>

                    {/* Bottom Profile */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#d6a067]">
                        <Image
                          src={story.image || "/placeholder.svg"}
                          alt={story.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h5 className="text-white font-semibold text-lg">{story.name}</h5>
                        <p className="text-gray-400 text-sm">{story.position}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="p-6 bg-gray-800/50">
                  <div className="flex items-start space-x-3">
                    <Quote className="w-6 h-6 text-[#d6a067] mt-1 flex-shrink-0" />
                    <blockquote className="text-gray-300 text-base leading-relaxed italic flex-1">
                      "{story.quote}"
                    </blockquote>
                  </div>

                  {/* Decorative Quote Mark */}
                  <div className="flex justify-end mt-4">
                    <div className="w-8 h-8 bg-[#d6a067] rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="scaleIn" delay={800}>
          <div className="text-center">
            <Button
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#d6a067] to-[#f4d03f] rounded-full text-black font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl border-0"
              onClick={() => {
                const trialSection = document.querySelector("#trial-section")
                if (trialSection) {
                  trialSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                } else {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
              }}
            >
              <Quote className="w-6 h-6 mr-3" />
              Viết nên câu chuyện thành công của riêng bạn
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
