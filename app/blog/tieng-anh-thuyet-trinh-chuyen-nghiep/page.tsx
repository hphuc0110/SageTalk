import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft, Target, TrendingUp, Award, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function TiengAnhThuyetTrinhChuyenNghiepPage() {
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
              <span className="bg-[#d6a067] text-white px-4 py-2 rounded-full text-sm font-semibold">Chiến lược</span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>30 Dec 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>13 phút đọc</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>3.2k lượt xem</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
              Tiếng Anh Thuyết Trình Chuyên Nghiệp: Lợi Thế Chiến Lược Dành Cho Lãnh Đạo Hiện Đại
            </h1>

            <div className="flex items-center space-x-3 text-gray-600">
              <User className="w-5 h-5" />
              <span>
                Bởi <strong>SageTalk Team</strong>
              </span>
            </div>
          </header>

          {/* Featured image */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
            <Image
              src="/images/blog-strategic-advantage.webp"
              alt="Tiếng Anh thuyết trình chuyên nghiệp"
              fill
              className="object-cover"
            />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-xl font-bold text-center mb-8 text-[#d6a067] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 mr-3 text-[#d6a067]" />
              TIẾNG ANH THUYẾT TRÌNH CHUYÊN NGHIỆP: LỢI THẾ CHIẾN LƯỢC DÀNH CHO LÃNH ĐẠO HIỆN ĐẠI
              <TrendingUp className="w-6 h-6 ml-3 text-[#d6a067]" />
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Trong môi trường làm việc toàn cầu hóa, tiếng Anh không còn chỉ là <strong>"kỹ năng bổ trợ"</strong> mà
              trở thành <strong>vũ khí chiến lược</strong> giúp các nhà lãnh đạo Việt Nam vươn xa, đàm phán hiệu quả và
              thể hiện tầm nhìn quốc tế.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Tuy nhiên, nhiều nhà quản lý dù đã giao tiếp tiếng Anh tốt vẫn gặp khó khăn khi cần:
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <ul className="space-y-3 text-lg text-red-800">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Thuyết trình trước đối tác cấp cao
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Trình bày chiến lược tại hội nghị quốc tế
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Phản biện trong các buổi họp đa quốc gia
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Target className="w-8 h-8 mr-3 text-[#d6a067]" />
              Vậy vì sao có những người nói tốt tiếng Anh nhưng vẫn chưa đủ?
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Họ có thể thành thạo từ vựng, phát âm chuẩn, nhưng để{" "}
              <strong>thuyết trình chuyên nghiệp bằng tiếng Anh</strong>, bạn cần nhiều hơn thế:
            </p>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {/* Tư duy hệ thống */}
              <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#d6a067] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#d6a067]">Tư duy hệ thống</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Biết sắp xếp ý tưởng theo cấu trúc thuyết phục, từ tổng quan đến chi tiết một cách logic và mạch lạc.
                </p>
              </div>

              {/* Kỹ thuật ngôn ngữ chiến lược */}
              <div className="bg-white border-2 border-[#f4d03f] p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f4d03f] rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#f4d03f]">Kỹ thuật ngôn ngữ chiến lược</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Biết cách mở đầu ấn tượng, nhấn mạnh thông điệp, xử lý câu hỏi hóc búa một cách khéo léo và chuyên
                  nghiệp.
                </p>
              </div>

              {/* Executive Presence */}
              <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#d6a067] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#d6a067]">Tính thuyết phục cá nhân (Executive Presence)</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Tạo uy tín và ảnh hưởng qua cách bạn nói, lựa chọn từ ngữ và kiểm soát cảm xúc trong mọi tình huống.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-8 rounded-2xl mb-8">
              <p className="text-lg leading-relaxed text-center font-semibold">
                Đây là lý do <strong>SageTalk</strong> – chương trình tiếng Anh thuyết trình chuyên nghiệp dành riêng
                cho lãnh đạo, quản lý cấp cao ra đời.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Award className="w-8 h-8 mr-3 text-[#d6a067]" />
              SageTalk – Nâng cấp cách bạn truyền đạt chiến lược
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Khác với các khóa học tiếng Anh thông thường, SageTalk không bắt đầu từ ngữ pháp hay phát âm, mà từ chính
              những <strong>tình huống chiến lược</strong> mà bạn đang đối mặt:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded-r-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Những câu hỏi mà SageTalk giải đáp:</h3>
              <ul className="space-y-4 text-lg text-blue-700">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  Làm thế nào để trình bày dự án trước lãnh đạo bằng tiếng Anh mà vẫn rõ ràng, súc tích?
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  Làm thế nào để trả lời phản biện từ đối tác nước ngoài một cách tự tin, không vòng vo?
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  Làm sao để giữ được "bản sắc lãnh đạo" khi chuyển ngữ tư duy sang tiếng Anh?
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="w-8 h-8 mr-3 text-[#d6a067]" />
              Hệ thống kỹ thuật tư duy, ngôn ngữ, thuyết phục tại SageTalk
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Chúng tôi huấn luyện bạn với các công cụ và framework được sử dụng tại{" "}
              <strong>các trường kinh doanh hàng đầu</strong>:
            </p>

            <div className="space-y-8 mb-8">
              {/* Pyramid Principle */}
              <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">🔺 Pyramid Principle</h3>
                <p className="text-lg leading-relaxed">
                  Tư duy từ tổng quan đến chi tiết – giúp thuyết trình mạch lạc, đi thẳng vào vấn đề. Phương pháp được
                  McKinsey & Company sử dụng để cấu trúc các báo cáo chiến lược.
                </p>
              </div>

              {/* SCQA & PREP */}
              <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-[#d6a067]">📋 SCQA & PREP</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Tổ chức lập luận theo logic tự nhiên, xử lý câu hỏi phản biện nhanh gọn.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#d6a067]/10 p-4 rounded-xl">
                    <h4 className="font-bold mb-2 text-[#d6a067]">SCQA Framework:</h4>
                    <ul className="text-sm space-y-1">
                      <li>
                        • <strong>S</strong>ituation - Bối cảnh
                      </li>
                      <li>
                        • <strong>C</strong>omplication - Vấn đề
                      </li>
                      <li>
                        • <strong>Q</strong>uestion - Câu hỏi
                      </li>
                      <li>
                        • <strong>A</strong>nswer - Giải pháp
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#f4d03f]/10 p-4 rounded-xl">
                    <h4 className="font-bold mb-2 text-[#f4d03f]">PREP Method:</h4>
                    <ul className="text-sm space-y-1">
                      <li>
                        • <strong>P</strong>oint - Quan điểm
                      </li>
                      <li>
                        • <strong>R</strong>eason - Lý do
                      </li>
                      <li>
                        • <strong>E</strong>xample - Ví dụ
                      </li>
                      <li>
                        • <strong>P</strong>oint - Nhấn mạnh lại
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3C Model */}
              <div className="bg-gradient-to-r from-[#f4d03f] to-[#d6a067] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">🎯 3C Model (Credibility – Clarity – Connection)</h3>
                <p className="text-lg leading-relaxed">
                  Xây dựng uy tín qua cách nói chuyện lãnh đạo. Mô hình giúp bạn thể hiện năng lực, tính minh bạch và
                  khả năng kết nối với người nghe.
                </p>
              </div>

              {/* Ngôn ngữ thuyết phục */}
              <div className="bg-white border-2 border-[#f4d03f] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-[#f4d03f]">🧠 Ngôn ngữ thuyết phục (Cialdini)</h3>
                <p className="text-lg leading-relaxed">
                  Áp dụng kỹ thuật ảnh hưởng để gây ấn tượng trong thuyết trình và đàm phán. Dựa trên 6 nguyên tắc
                  thuyết phục của Robert Cialdini được Fortune 500 áp dụng rộng rãi.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-[#d6a067] p-8 rounded-r-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Tại sao các framework này hiệu quả?</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Những công cụ này không chỉ là lý thuyết học thuật, mà là{" "}
                <strong>phương pháp đã được kiểm chứng</strong> tại các tập đoàn đa quốc gia, trường kinh doanh hàng đầu
                và được sử dụng bởi các CEO, lãnh đạo cấp cao trên toàn thế giới.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Khi áp dụng vào tiếng Anh thuyết trình, chúng giúp bạn không chỉ nói đúng ngữ pháp, mà{" "}
                <strong>nói có tác động, có ảnh hưởng và có sức thuyết phục</strong>.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Kết quả sau khi học tại SageTalk</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-lg">Thuyết trình với cấu trúc rõ ràng, logic chặt chẽ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-lg">Xử lý Q&A một cách tự tin và chuyên nghiệp</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-lg">Thể hiện Executive Presence trong mọi tình huống</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-lg">Đàm phán và thuyết phục hiệu quả bằng tiếng Anh</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-lg">Tạo ấn tượng mạnh với đối tác quốc tế</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-lg">Dẫn dắt cuộc họp đa quốc gia một cách hiệu quả</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Đăng ký ngay – Biến tiếng Anh thành công cụ truyền đạt quyền lực
              </h3>
              <p className="text-white text-lg mb-6">
                📩 Đăng ký học thử miễn phí tại <strong>SageTalk.vn</strong>
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-white text-lg">
                  📞 Hotline:{" "}
                  <a href="tel:0981070576" className="text-white font-bold underline hover:no-underline">
                    0981 070 576
                  </a>
                </p>
                <p className="text-white text-lg">
                  📍 <strong>SageTalk – Where Strategic Thinking Meets English Fluency</strong>
                </p>
              </div>
              <Button className="bg-white text-[#d6a067] hover:bg-gray-100 font-bold px-8 py-3 text-lg">
                Đăng ký học thử miễn phí
              </Button>
            </div>

            <hr className="my-8 border-gray-300" />

            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">SageTalk – Tiếng Anh Thuyết Trình cho Quản lý Cấp cao</h4>
              <p className="text-lg mb-4">Tiếng Anh thực chiến – Nói khác biệt, bứt phá trong công việc & cuộc sống.</p>
              <div className="space-y-2 mb-4">
                <p className="text-xl font-bold">
                  🤙 Hotline:{" "}
                  <a href="tel:0981070576" className="text-[#d6a067] hover:underline">
                    0981 070 576
                  </a>
                </p>
                <p className="text-lg">
                  📧 Email:{" "}
                  <a href="mailto:info@sagetalk.vn" className="text-[#d6a067] hover:underline">
                    info@sagetalk.vn
                  </a>
                </p>
              </div>
              <p className="text-[#d6a067] font-semibold mb-2">
                📩 Đăng ký để trải nghiệm phương pháp học tiếng Anh thuyết trình chuyên nghiệp dành riêng cho lãnh đạo!
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
