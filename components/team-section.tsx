"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BookOpen, Target } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/animated-section"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"

type Expert = {
  name: string
  title: string
  description: string
  image: string
  badge: string
  gradient: string
  tags: string[]
}

const experts: Expert[] = [
  {
    name: "James McGaughran",
    title: "Thạc sĩ Lãnh đạo Chiến lược & Truyền thông – Stephens College",
    description:
      "Nhà giáo người Mỹ với hơn 7 năm giảng dạy tại Việt Nam, ông hiện dẫn dắt hoạt động Hướng dẫn Học tập. Ông kết hợp kinh nghiệm quốc tế với niềm đam mê trong giáo dục và phát triển bền vững.",
    image: "/images/james-mcgaughran-new.jpeg",
    badge: "Chuyên gia",
    gradient: "from-[#d6a067] to-[#b8864f]",
    tags: ["Mỹ – 7+ năm tại VN", "Hướng dẫn Học tập", "Phát triển bền vững"],
  },
  {
    name: "Sandra Schneiderman",
    title: "Thạc sĩ Giáo dục – Đại học Melbourne",
    description:
      "Trưởng nhóm Công tác Sinh viên & Giảng viên. Hơn 28 năm kinh nghiệm giảng dạy môn Tiếng Anh và Lịch sử tại Úc và Việt Nam, bà Sandra hiện đang giữ vai trò Trưởng nhóm Công tác Sinh viên.",
    image: "/images/sandra-schneiderman-new.jpeg",
    badge: "Chuyên gia",
    gradient: "from-[#d6a067] to-[#b8864f]",
    tags: ["28+ năm kinh nghiệm", "ĐH Melbourne", "Trưởng nhóm Công tác SV"],
  },
  {
    name: "Julien Psomas",
    title: "MBA Quản lý Nhà hàng – Khách sạn – École Supérieure de Savignac",
    description:
      "Hơn 15 năm kinh nghiệm quốc tế tại các tập đoàn như Hilton, Marriott, Rocco Forte. Ông mang đến lớp học những bài học thực tiễn và tiêu chuẩn ngành toàn cầu.",
    image: "/images/julien-psomas-new.jpeg",
    badge: "Chuyên gia",
    gradient: "from-[#d6a067] to-[#b8864f]",
    tags: ["15+ năm QT", "Hilton & Marriott", "Tiêu chuẩn toàn cầu"],
  },
]

const teachers: Expert[] = [
  {
    name: "Lê Phương Quyên",
    title: "",
    description:
      "Á khôi Duyên dáng Ngoại thương 2023. Với Quyên, dù đã có nhiều thành tích nổi bật và dày dặn kinh nghiệm hoạt động, tiếng Anh vẫn luôn là hành trang phải liên tục trau dồi.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%284%29-AhieEKvjNvKafHJDCYAaPXq37zrLH5.webp",
    badge: "Giáo viên",
    gradient: "from-[#d6a067] to-[#b8864f]",
    tags: [],
  },
  {
    name: "Phùng Yến Linh",
    title: "",
    description:
      "Hoa khôi VNU – Đại sứ Sinh viên 2023. Mình tin rằng mình nên được nhìn nhận là người partner đồng hành khiến cho quá trình học Tiếng Anh của học viên được dễ dàng & thú vị hơn.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%282%29-0MCFc6sJBFvRJ6cRt4Uf1xjmh42VwA.webp",
    badge: "Giáo viên",
    gradient: "from-[#d6a067] to-[#b8864f]",
    tags: [],
  },
  {
    name: "Vũ Thị Khánh Vi",
    title: "",
    description:
      "Top 12 Duyên dáng Ngoại thương, danh hiệu Người đẹp toàn năng. Vì các tình huống Vi cần nói chuyện bằng Tiếng Anh không chỉ là giao tiếp thông thường.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%285%29-2MUuG7aPYqekx6c1qDBGXzlgPmp7XR.webp",
    badge: "Giáo viên",
    gradient: "from-[#d6a067] to-[#b8864f]",
    tags: [],
  },
  {
    name: "Nguyễn Lê Kỳ Anh",
    title: "",
    description:
      "Sinh viên Phát thanh K43, Học viện Báo chí & Tuyên truyền. 'Tiếng Anh với mình giống như một tấm vé – không chỉ mở ra cơ hội học hỏi quốc tế.'",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%281%29-gJx9BoMnX5qX5Qkx9xAPKGYgAGT6i2.webp",
    badge: "Giáo viên",
    gradient: "from-[#d6a067] to-[#b8864f]",
    tags: [],
  },
  {
    name: "Vũ Bình Dương",
    title: "",
    description:
      "Với niềm đam mê truyền thông và giao tiếp, Bình Dương luôn tin rằng tiếng Anh không chỉ là ngôn ngữ mà còn là cầu nối văn hóa. Cô mong muốn truyền cảm hứng cho học viên thông qua những bài học sinh động và thực tế.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%283%29-dgQh2fts5L4jSmY6wdSVR66fQeWhJS.webp",
    badge: "Giáo viên",
    gradient: "from-[#d6a067] to-[#b8864f]",
    tags: [],
  },
]

function ExpertCard({ expert, visible }: { expert: Expert; visible: boolean }) {
  return (
    <Card
      className={`group bg-gray-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-700 rounded-3xl overflow-hidden hover:scale-125 hover:-translate-y-2 hover:z-20 ${
        visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
      }`}
    >
      <CardContent className="p-0">
        <div className={`relative h-80 bg-gradient-to-br ${expert.gradient} overflow-hidden`}>
          <Image
            src={expert.image || "/placeholder.svg"}
            alt={expert.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay for text and gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Text overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-sm font-medium mb-2">{expert.badge}</p>
            <h3 className="text-4xl font-bold font-playfair leading-tight">{expert.name}</h3>
          </div>

          {/* Hover overlay with detailed information */}
          <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8">
            <div className="text-white">
              <p className="text-base font-medium mb-3 text-[#d6a067]">{expert.badge}</p>
              <h3 className="text-3xl font-bold font-playfair mb-6 leading-tight">{expert.name}</h3>
              <p className="text-[#d6a067] font-semibold mb-6 text-base">{expert.title}</p>
              <p className="text-white/90 text-base leading-relaxed mb-6">{expert.description}</p>

              <div className="space-y-3">
                {expert.tags.map((tag, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#d6a067] rounded-full"></div>
                    <span className="text-white/80 text-sm">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TeamSection() {
  const { visibleItems: expertVisible, containerRef: expertRef } = useStaggeredAnimation(experts.length, 200)
  const { visibleItems: teacherVisible2, containerRef: teacherRef2 } = useStaggeredAnimation(teachers.length, 200)

  return (
    <section id="team" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* ===== Stats Section ===== */}

        {/* ===== Experts Section ===== */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="text-center mb-16">
            <AnimatedText>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-white">
                Đội ngũ{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6a067] via-[#f4d03f] to-[#d6a067]">
                  chuyên gia
                </span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={200}>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
                Các chuyên gia hàng đầu với kinh nghiệm thực chiến đa lĩnh vực
              </p>
            </AnimatedText>
          </div>
        </AnimatedSection>

        <div ref={expertRef} className="grid lg:grid-cols-3 gap-10 mb-24">
          {experts.map((expert, i) => (
            <ExpertCard key={expert.name} expert={expert} visible={expertVisible[i]} />
          ))}
        </div>

        {/* ===== Teachers Section ===== */}
        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="text-center mb-16">
            <AnimatedText>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-white">
                Đội ngũ{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6a067] via-[#f4d03f] to-[#d6a067]">
                  giáo viên
                </span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={200}>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
                Những giáo viên trẻ tài năng với niềm đam mê truyền cảm hứng học tiếng Anh
              </p>
            </AnimatedText>
          </div>
        </AnimatedSection>

        <div ref={teacherRef2} className="grid lg:grid-cols-5 gap-6 mb-24">
          {teachers.map((teacher, i) => (
            <ExpertCard key={teacher.name} expert={teacher} visible={teacherVisible2[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
