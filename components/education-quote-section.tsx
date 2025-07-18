"use client"

import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AnimatedSection, AnimatedText } from "@/components/animated-section"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export default function EducationQuoteSection() {
  const { visibleItems, containerRef } = useStaggeredAnimation(5, 150)

  const educationImages = [
    {
      src: "/images/presentation-training.webp",
      alt: "Presentation Training",
      label: "Thiết kế dựa trên Khoa học",
      modalTitle: "Thiết kế dựa trên Khoa học",
      modalContent:
        "Lộ trình được xây dựng dựa trên các nguyên tắc về khoa học nhận thức và phương pháp học tập của người trưởng thành (Andragogy), đảm bảo mỗi hoạt động đều được tinh chỉnh để mang lại hiệu quả cao nhất trong thời gian ngắn nhất.",
    },
    {
      src: "/images/communication-training.webp",
      alt: "Communication Training",
      label: "Lớp học đảo ngược",
      modalTitle: "Lớp học đảo ngược",
      modalContent:
        "Lý thuyết và các khung sườn (frameworks) sẽ được gửi trước để học viên tham khảo. Toàn bộ thời gian trên lớp (100%) được dành cho việc thực hành, mài giũa và nhận phản hồi trực tiếp từ giáo viên.",
    },
    {
      src: "/images/communication-training.webp",
      alt: "Communication Training 2",
      label: "Học qua Thực hành",
      modalTitle: "Học qua Thực hành",
      modalContent:
        "Học viên sẽ không học lý thuyết suông. Thay vào đó, HV sẽ thực chiến ngay lập tức với chính bài thuyết trình thực tế của mình trong các tình huống giả lập áp lực cao.",
    },
    {
      src: "/images/international-training.webp",
      alt: "International Presentation",
      label: "Case study cá nhân hóa ",
      modalTitle: "Case study cá nhân hóa",
      modalContent:
        "Toàn bộ khóa học xoay quanh 1 case study mà học viên cung cấp, giúp học viên tập trung luyện tập nội dung mình cần. Mọi kỹ năng, mọi buổi thực hành đều nhằm mục đích phục vụ cho buổi thuyết trình sắp tới.",
    },
    {
      src: "/images/development-training.webp",
      alt: "Development Training",
      label: "Workshop & Phản hồi Trực tiếp",
      modalTitle: "Workshop & Phản hồi Trực tiếp",
      modalContent:
        "Giáo viên không chỉ là một người dạy, mà còn là đối tác chiến lược (sparring partner). Giáo viên sẽ lắng nghe, đặt câu hỏi, phản biện và đưa ra phản hồi chuyên sâu, tức thì để giúp học viên đạt được phiên bản tốt nhất.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#5f462b] via-[#b6863b] to-[#8b6914] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-[#8b6914]/30 to-transparent rounded-full transform translate-x-32 translate-y-32 blur-2xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-white mb-20 text-center">
          <AnimatedSection animation="fadeInUp">
            <AnimatedText delay={200}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-snug">
                Luyện thuyết trình tiếng Anh 1-1 chuyên sâu
                <br /> <span className="text-[#f4d03f]">&</span> <br />
                Coaching trình bày chuyên nghiệp
              </h2>
            </AnimatedText>
          </AnimatedSection>
        </div>

        {/* 5 card hiển thị hàng ngang */}
        <div ref={containerRef} className="grid grid-cols-5 gap-6">
          {educationImages.map((image, index) => (
            <Dialog key={image.alt}>
              <DialogTrigger asChild>
                <div
                  className={`relative group transition-all duration-700 cursor-pointer ${
                    visibleItems[index]
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-8 opacity-0 scale-95"
                  }`}
                >
                  <div className="relative h-80 w-full bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-700">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/60 rounded-3xl" />
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm">+</span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-white font-semibold text-xl lg:text-2xl drop-shadow-lg transition-all duration-300 group-hover:text-[#f4d03f]">
                        {image.label}
                      </span>
                      <p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Nhấn để xem chi tiết
                      </p>
                    </div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="bg-[#fefae0] text-[#3e2d11] max-w-lg rounded-xl p-6 shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-3">
                    {image.modalTitle}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-base leading-relaxed">{image.modalContent}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
