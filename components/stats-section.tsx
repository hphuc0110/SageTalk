"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, AnimatedText } from "@/components/animated-section"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"
import { TrendingDown, AlertTriangle, Clock } from "lucide-react"

export default function StatsSection() {
  const { visibleItems, containerRef } = useStaggeredAnimation(3, 200)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-20">
            <AnimatedText>
              <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
                <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                <span className="text-red-600 text-sm font-medium">Thực trạng đáng báo động</span>
              </div>
            </AnimatedText>
            <AnimatedText delay={200}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair text-gray-900 leading-tight">
                50% quản lý gặp{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  "glass ceiling"
                </span>{" "}
                vì...
              </h2>
            </AnimatedText>
            <AnimatedText delay={400}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Những rào cản ngôn ngữ đang cản trở sự phát triển nghề nghiệp của các nhà quản lý
              </p>
            </AnimatedText>
          </div>
        </AnimatedSection>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card
            className={`bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 rounded-3xl overflow-hidden ${
              visibleItems[0] ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-red-500" />
                </div>
                <Badge className="bg-red-500 text-white border-0 text-lg px-4 py-2 rounded-full font-bold">50%+</Badge>
              </div>

              <h3 className="text-gray-900 font-bold mb-4 text-xl font-poppins text-center leading-tight">
                Giọng tiếng Anh không trôi chảy trong các buổi họp quốc tế
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Thiếu tự tin khi giao tiếp với đối tác nước ngoài, ảnh hưởng đến hiệu quả công việc
              </p>

              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-red-200 rounded-full"></div>
                <div className="w-3 h-3 bg-red-300 rounded-full"></div>
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card
            className={`bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 rounded-3xl overflow-hidden ${
              visibleItems[1] ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                </div>
                <Badge className="bg-orange-500 text-white border-0 text-lg px-4 py-2 rounded-full font-bold">
                  40%+
                </Badge>
              </div>

              <h3 className="text-gray-900 font-bold mb-4 text-xl font-poppins text-center leading-tight">
                Mất cơ hội thăng tiến vì thiếu tự tin trình bày
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Không thể thể hiện được năng lực thực sự trước đối tác quốc tế
              </p>

              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card
            className={`bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 rounded-3xl overflow-hidden ${
              visibleItems[2] ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <Badge className="bg-yellow-500 text-white border-0 text-lg px-4 py-2 rounded-full font-bold">
                  60%+
                </Badge>
              </div>

              <h3 className="text-gray-900 font-bold mb-4 text-xl font-poppins text-center leading-tight">
                Thiếu thời gian học do công việc bận rộn
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Cần phương pháp học hiệu quả và tiết kiệm thời gian phù hợp với lịch trình
              </p>

              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-yellow-200 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-700 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
