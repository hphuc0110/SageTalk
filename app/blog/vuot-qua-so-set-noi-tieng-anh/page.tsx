"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function VuotQuaSoSetNoiTiengAnhPage() {
  const router = useRouter()

  const handleTrialClick = () => {
    router.push("/")
    setTimeout(() => {
      const trialSection = document.getElementById("trial-section")
      if (trialSection) {
        trialSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

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
              <span className="bg-[#d6a067] text-white px-4 py-2 rounded-full text-sm font-semibold">Thuyết trình</span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>5 Dec 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>8 phút đọc</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>892 lượt xem</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
              Vượt Qua Nỗi Sợ Nói Tiếng Anh Trước Đám Đông – StageSpeak Giúp Bạn Làm Chủ Sân Khấu
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
              src="/images/blog-overcome-fear.webp"
              alt="Vượt qua nỗi sợ nói tiếng Anh"
              fill
              className="object-cover"
            />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-xl font-bold text-center mb-8 text-[#d6a067] flex items-center justify-center">
              <Mic className="w-6 h-6 mr-3 text-[#d6a067]" />
              VƯỢT QUA NỖI SỢ NÓI TIẾNG ANH TRƯỚC ĐÁM ĐÔNG – StageSpeak giúp bạn làm chủ sân khấu
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Không ít người đi làm nhiều năm, vững vàng trong công việc, nhưng vẫn ngần ngại khi phải trình bày trước
              đám đông bằng tiếng Anh. Dù chuẩn bị kỹ lưỡng đến đâu, cảm giác tim đập nhanh, tay đổ mồ hôi, thậm chí
              quên sạch ý định nói trước khách hàng, sếp hay một phòng họp toàn người nước ngoài vẫn là trải nghiệm quen
              thuộc với rất nhiều người.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Điều này hoàn toàn dễ hiểu – bởi nói trước đám đông đã khó, nói bằng ngoại ngữ còn khó gấp nhiều lần. Và
              bạn không hề đơn độc.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-2xl mr-3">📌</span>
                Tại MasterTalk, mỗi buổi học là một lần bạn được thực sự luyện tập trong không gian mô phỏng sát với
                tình huống thật – nhưng không áp lực, không phán xét.
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  Toàn bộ thời gian trên lớp được dành cho <strong>thực hành giao tiếp</strong>. Học viên không chỉ hiểu
                  lý thuyết mà còn được sử dụng tiếng Anh ngay trong những tình huống công việc thực tế, nhờ đó ghi nhớ
                  lâu hơn và dần hình thành sự tự tin khi trình bày.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  Bạn sẽ có cơ hội luyện đi luyện lại các phần quan trọng như{" "}
                  <strong>mở đầu, diễn đạt ý, xử lý câu hỏi</strong> – cho đến khi cảm thấy thực sự tự tin.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  Giáo viên đồng hành sát sao, chủ động giúp bạn nhận ra và điều chỉnh từng điểm về ngôn ngữ và cách
                  diễn đạt, từ lựa chọn từ ngữ, cấu trúc câu cho đến cách sử dụng giọng nói – đảm bảo mỗi lần luyện tập
                  đều mang lại sự tiến bộ rõ rệt.
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-8 font-semibold">
              Học cách làm chủ sân khấu công sở – MasterTalk đồng hành đến lúc bạn tự tin thực sự!
            </p>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-center mb-8">
              <p className="text-white text-lg mb-4">
                📩 Để lại SĐT để trải nghiệm buổi luyện tập cá nhân hóa ngay hôm nay.
              </p>
              <Button
                onClick={handleTrialClick}
                className="bg-white text-[#d6a067] hover:bg-gray-100 font-bold px-8 py-3 text-lg cursor-pointer"
              >
                Đăng ký tư vấn miễn phí
              </Button>
            </div>

            <hr className="my-8 border-gray-300" />

            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">MasterTalk – Tiếng Anh Thuyết Trình cho người đi làm</h4>
              <p className="text-lg mb-4">Tiếng Anh thực chiến – Nói khác biệt, bứt phá trong công việc & cuộc sống.</p>
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
