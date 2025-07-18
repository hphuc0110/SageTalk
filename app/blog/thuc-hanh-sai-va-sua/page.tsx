import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ThucHanhSaiVaSuaPage() {
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
              <span className="bg-[#d6a067] text-white px-4 py-2 rounded-full text-sm font-semibold">Kỹ năng</span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>8 Dec 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>4 phút đọc</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>634 lượt xem</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
              Không Có Môi Trường Nào Giúp Bạn Tiến Bộ Nhanh Bằng Việc Được Phép Sai Và Sửa
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
            <Image src="/images/blog-practice-mistakes.webp" alt="Thực hành sai và sửa" fill className="object-cover" />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-xl font-bold text-center mb-8 text-[#d6a067] flex items-center justify-center">
              <Zap className="w-6 h-6 mr-3 text-[#d6a067]" />
              KHÔNG CÓ MÔI TRƯỜNG NÀO GIÚP BẠN TIẾN BỘ NHANH BẰNG VIỆC ĐƯỢC PHÉP SAI VÀ SỬA
              <Zap className="w-6 h-6 ml-3 text-[#d6a067]" />
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Bạn từng thấy mình <strong>"mất điểm"</strong> hay lúng túng khi phát âm sai, chọn từ chưa chuẩn hoặc bí ý
              lúc đang thuyết trình tiếng Anh?
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Với nhiều người đi làm, cảm giác lúng túng khi phát âm chưa đúng, dùng từ chưa chuẩn hay mất mạch ý giữa
              buổi thuyết trình tiếng Anh là điều không hề hiếm gặp. Đôi khi, chỉ vì sợ mắc lỗi trước mặt đồng nghiệp mà
              bạn ngại luyện tập, hạn chế cơ hội phát triển kỹ năng thực sự quan trọng này.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Star className="w-6 h-6 mr-3 text-[#d6a067]" />
                Tại MasterTalk, mỗi buổi học 1 KÈM 1 là không gian an toàn để bạn thử sức:
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  Bạn được phép nói sai, và quan trọng hơn, để bạn được hướng dẫn chỉnh sửa từng chi tiết nhỏ mà không
                  phải e ngại bất cứ ai xung quanh.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  <strong>Tập trung 100% vào thực hành:</strong> Bạn nói trước, chỉnh sửa sau. Giáo viên sẽ ghi lại các
                  điểm cần cải thiện rồi cùng bạn điều chỉnh sau khi hoàn thành phần trình bày.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  <strong>Không ép buộc phát âm hoàn hảo:</strong> Chỉ cần nói đủ rõ, đủ để người nghe hiểu, bạn đã hoàn
                  thành mục tiêu của mình. Quan trọng nhất là xây dựng phản xạ giao tiếp và khả năng diễn đạt trọn vẹn ý
                  tưởng.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  <strong>Giáo viên mentor cá nhân:</strong> Động viên, khích lệ bạn chủ động nói lên quan điểm, thử sức
                  với các tình huống sát công việc thực tế, và chỉ chỉnh sửa những lỗi thực sự cần thiết – giúp bạn tiến
                  bộ một cách tự nhiên, không áp lực.
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-8 font-semibold">
              Không còn áp lực bị so sánh, không còn nỗi lo <strong>"mất điểm"</strong> giữa lớp đông. Ở đây, bạn được
              phép thử nghiệm, được phép sai, để ngày càng tự tin hơn trong mỗi lần trình bày.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-center mb-8">
              <p className="text-white text-lg mb-4">
                📩 Để lại SĐT để trải nghiệm buổi luyện tập cá nhân hóa ngay hôm nay.
              </p>
              <Button className="bg-white text-[#d6a067] hover:bg-gray-100 font-bold px-8 py-3 text-lg">
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
