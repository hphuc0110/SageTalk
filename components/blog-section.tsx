"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection, AnimatedText } from "@/components/animated-section"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import Link from "next/link"

type BlogPost = {
  id: number
  title: string
  image: string
  views: string
  slug: string
}

export default function BlogSection() {
  const { visibleItems, containerRef } = useStaggeredAnimation(10, 200)

  const blogPosts: BlogPost[] = [
    {
      id: 10,
      title: "Tiếng Anh Thuyết Trình Chuyên Nghiệp: Lợi Thế Chiến Lược Dành Cho Lãnh Đạo Hiện Đại",
      image: "/images/blog-strategic-advantage.webp",
      views: "3.2k",
      slug: "tieng-anh-thuyet-trinh-chuyen-nghiep",
    },
    {
      id: 9,
      title: "THE ARENA – Làm chủ kỹ năng trả lời Q&A bằng tiếng Anh cho lãnh đạo",
      image: "/images/blog-the-arena.webp",
      views: "3.6k",
      slug: "the-arena-qa-skills",
    },
    {
      id: 1,
      title: "Ấn Tượng Đầu Không Chỉ Là Ngoại Hình Hay Danh Thiếp Mà Là Cách Giao Tiếp",
      image: "/images/blog-dont-stop-learning.webp",
      views: "1.2k",
      slug: "an-tuong-dau-la-cach-giao-tiep",
    },
    {
      id: 2,
      title: "Đi Làm 8 Tiếng Mỗi Ngày Thì Thời Gian Đâu Để Luyện Tập Năng Lực Giao Tiếp Tiếng Anh?",
      image: "/images/blog-time-management.webp",
      views: "980",
      slug: "thoi-gian-luyen-tap-tieng-anh",
    },
    {
      id: 3,
      title: "'Tiếng Anh Đủ Dùng' Không Phải Là Lý Do Để Dừng Lại",
      image: "/images/blog-senior-manager.webp",
      views: "756",
      slug: "tieng-anh-du-dung",
    },
    {
      id: 4,
      title: "Không Có Môi Trường Nào Giúp Bạn Tiến Bộ Nhanh Bằng Việc Được Phép Sai Và Sửa",
      image: "/images/blog-practice-mistakes.webp",
      views: "634",
      slug: "thuc-hanh-sai-va-sua",
    },
    {
      id: 5,
      title: "Vượt Qua Nỗi Sợ Nói Tiếng Anh Trước Đám Đông - MasterTalk Giúp Bạn Làm Chủ Sân Khấu",
      image: "/images/blog-overcome-fear.webp",
      views: "892",
      slug: "vuot-qua-so-set-noi-tieng-anh",
    },
    {
      id: 6,
      title: "Tiếng Anh Thuyết Trình Cho Quản Lý Cấp Cao: Lộ Trình Học Dựa Trên Khoa Học Andragogy",
      image: "/images/blog-andragogy.png",
      views: "1.5k",
      slug: "tieng-anh-thuyet-trinh-cho-quan-ly-cap-cao",
    },
    {
      id: 7,
      title: "Flipped Classroom tại SageTalk – Giải pháp Học Tập Hiệu Quả Cho Người Đi Làm Bận Rộn",
      image: "/images/blog-flipped-classroom.webp",
      views: "1.8k",
      slug: "flipped-classroom-tai-sagetalk",
    },
    {
      id: 8,
      image: "/images/blog-3c-framework.webp",
      title: "3C Credibility Framework – Xây dựng Uy Tín Trong Từng Lời Nói",
      views: "2.1k",
      slug: "3c-credibility-framework",
    },
  ]

  function BlogCard({ post, visible }: { post: BlogPost; visible: boolean }) {
    return (
      <Card
        className={`group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2 ${
          visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
        }`}
      >
        <CardContent className="p-0">
          <div className="relative h-64 bg-gradient-to-br from-[#d6a067] to-[#b8864f] overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />

          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 line-clamp-2">{post.title}</h3>

            <Link href={`/blog/${post.slug}`}>
              <Button className="w-full bg-gradient-to-r from-[#d6a067] to-[#f4d03f] hover:from-[#b8864f] hover:to-[#d6a067] text-black font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 text-sm">
                Đọc thêm
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section id="blog" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d6a067] bg-opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 bg-opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-20">
            <AnimatedText>
              <div className="inline-flex items-center px-6 py-3 bg-[#d6a067] bg-opacity-10 border border-[#d6a067] border-opacity-20 rounded-full mb-8 backdrop-blur-sm">
                <span className="text-[#d6a067] font-medium text-lg">Kiến thức & Kinh nghiệm</span>
              </div>
            </AnimatedText>
            <AnimatedText delay={200}>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 font-playfair text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6a067] via-[#f4d03f] to-[#d6a067]">
                  Blog
                </span>{" "}
                MasterTalk
              </h2>
            </AnimatedText>
            <AnimatedText delay={400}>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                Chia sẻ kiến thức, kinh nghiệm và xu hướng mới nhất trong việc học tiếng Anh doanh nghiệp từ đội ngũ
                chuyên gia hàng đầu
              </p>
            </AnimatedText>
          </div>
        </AnimatedSection>

        <div ref={containerRef} className="grid lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} visible={visibleItems[index]} />
          ))}
        </div>
      </div>
    </section>
  )
}
