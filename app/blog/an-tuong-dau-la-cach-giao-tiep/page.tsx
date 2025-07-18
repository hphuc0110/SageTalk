"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AnTuongDauLaCachGiaoTiepPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-[#d6a067] hover:text-[#b8864f] mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại Blog
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-[#d6a067] text-white px-4 py-2 rounded-full text-sm font-semibold">Giao tiếp</span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>15 Dec 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>5 phút đọc</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>1.2k lượt xem</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
              Ấn Tượng Đầu Không Chỉ Là Ngoại Hình Hay Danh Thiếp Mà Là Chính Cách Bạn Mở Lời
            </h1>

            <div className="flex items-center space-x-3 text-gray-600">
              <User className="w-5 h-5" />
              <span>
                Bởi <strong>MasterTalk Team</strong>
              </span>
            </div>
          </header>

          {/* Featured image */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
            <Image
              src="/images/blog-dont-stop-learning.webp"
              alt="Ấn tượng đầu là cách giao tiếp"
              fill
              className="object-cover"
            />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-xl font-bold text-center mb-8 text-[#d6a067] flex items-center justify-center">
              <Sparkles className="w-6 h-6 mr-3 text-[#d6a067]" />
              ẤN TƯỢNG ĐẦU KHÔNG CHỈ LÀ NGOẠI HÌNH HAY DANH THIẾP MÀ LÀ CHÍNH CÁCH BẠN MỞ LỜI
              <Sparkles className="w-6 h-6 ml-3 text-[#d6a067]" />
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Sự thật là, phần lớn những cuộc thương lượng thành công, những mối quan hệ đối tác dài lâu, hay những cơ
              hội nghề nghiệp được mở ra… đều bắt đầu từ cách bạn chào hỏi, giới thiệu bản thân, dẫn dắt một câu chuyện
              ngắn ngủi – tưởng đơn giản mà lại rất khó thành thạo.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Có lẽ ai trong chúng ta cũng từng tự hỏi:{" "}
              <strong>“Nên bắt đầu thế nào cho thật tự nhiên? Làm sao để họ thực sự lắng nghe?”</strong>
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <p className="text-lg leading-relaxed text-red-800">
                Dù kinh nghiệm dày dạn, không ít người vẫn bối rối khi phải mở lời – giới thiệu còn thiếu điểm nhấn,
                chuyển ý chưa mạch lạc, và rồi đánh mất cơ hội tạo thiện cảm ngay từ đầu.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Trong môi trường làm việc hiện đại, một câu giới thiệu rõ ràng, tự tin, hàm chứa thiện ý và cá tính, có
              thể giúp bạn <strong>"mở khóa"</strong> được thiện cảm, sự chú ý và lòng tin từ đối tác hoặc khách hàng –
              điều mà không một bản CV hay danh thiếp nào thay thế được.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-2xl mr-3">👉</span>
                Và MasterTalk hiểu rằng, không phải ai cũng có được kỹ năng đó một cách tự nhiên. Mỗi buổi học tại đây
                là một lần giúp bạn “luyện mở bài – chốt câu” thật mượt trong mọi tình huống presentation English:
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  Luyện cách mở lời, giới thiệu bản thân, sản phẩm, dự án sao cho vừa mạch lạc vừa có chiều sâu – Giáo
                  viên role-play lại kịch bản gặp khách hàng, đối tác hoặc phỏng vấn nhà đầu tư để bạn làm chủ từng lời
                  nói.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  Chỉ ra các lỗi nhỏ nhưng hay gặp (giới thiệu vòng vo, thiếu trọng tâm, “vấp” khi chuyển ý…) và cách
                  điều chỉnh.
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-8 font-semibold">
              Khi làm chủ được cách mở lời, bạn không chỉ tự tin hơn mà còn chủ động tạo ra cơ hội, xây dựng hình ảnh và
              để lại dấu ấn lâu dài – dù là trong một buổi họp, thương lượng hợp đồng, hay đơn giản là một cuộc trò
              chuyện hàng ngày.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-center mb-8">
              <p className="text-white text-lg mb-4">
                MasterTalk đồng hành cùng bạn chinh phục mọi sân khấu công sở
              </p>
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
                Đăng ký ngay
              </Button>
            </div>

            <hr className="my-8 border-gray-300" />

            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">
                MasterTalk – Tiếng Anh Thuyết Trình cho người đi làm
              </h4>
              <p className="text-lg mb-4">
                Tiếng Anh thực chiến – Nói khác biệt, bứt phá trong công việc & cuộc sống.
              </p>
              <p className="text-[#d6a067] font-semibold mb-2">
                📩 INBOX để nhận tư vấn lộ trình cá nhân hóa MIỄN PHÍ!
              </p>
              <p className="text-red-600 font-bold mb-4">Chỉ còn 20 suất trải nghiệm trong ngày!</p>
              <p className="text-xl font-bold">
                🤙 Hotline:{" "}
                <a href="tel:0325194889" className="text-[#d6a067] hover:underline">
                  0325194889
                </a>
              </p>
            </div>
          </article>

          {/* Share and navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link href="/blog" className="text-[#d6a067] hover:text-[#b8864f] font-semibold">
                ← Xem thêm bài viết khác
              </Link>
              <Button className="bg-[#d6a067] hover:bg-[#b8864f] text-white">Chia sẻ bài viết</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
