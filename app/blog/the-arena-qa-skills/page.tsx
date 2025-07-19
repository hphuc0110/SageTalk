import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft, Shield, Target, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function TheArenaQASkillsPage() {
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
              <span className="bg-[#d6a067] text-white px-4 py-2 rounded-full text-sm font-semibold">Q&A Skills</span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>28 Dec 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>11 phút đọc</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>2.5k lượt xem</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
              THE ARENA – Làm chủ kỹ năng trả lời Q&A bằng tiếng Anh cho lãnh đạo
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
            <Image src="/images/blog-the-arena.webp" alt="THE ARENA - Q&A Skills" fill className="object-cover" />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-xl font-bold text-center mb-8 text-[#d6a067] flex items-center justify-center">
              <Zap className="w-6 h-6 mr-3 text-[#d6a067]" />
              THE ARENA – Làm chủ kỹ năng trả lời Q&A bằng tiếng Anh cho lãnh đạo
              <Zap className="w-6 h-6 ml-3 text-[#d6a067]" />
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Trong một bài thuyết trình chiến lược hay cuộc họp cấp cao, phần Hỏi–Đáp không chỉ là đoạn kết. Đây là{" "}
              <strong>khoảnh khắc thể hiện bản lĩnh, khả năng phản biện và trình độ ngoại ngữ thực sự</strong> của một
              nhà quản lý.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Tại <strong>Buổi 5 – THE ARENA</strong> trong chương trình SageTalk, học viên được huấn luyện chuyên sâu
              để ứng biến linh hoạt trước những câu hỏi khó, mang tính chất phản biện hoặc đối đầu – bằng tiếng Anh,
              trong đúng ngữ cảnh công việc của mình.
            </p>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-8 rounded-r-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-red-800">Thực tế đáng lo ngại</h3>
              <p className="text-lg leading-relaxed text-red-700">
                Nhiều nhà quản lý có thể trình bày xuất sắc khi đã chuẩn bị trước, nhưng lại{" "}
                <strong>lúng túng, mất điểm</strong> khi phải đối mặt với những câu hỏi bất ngờ, đặc biệt là những câu
                hỏi mang tính chất thách thức hoặc phản biện.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Target className="w-8 h-8 mr-3 text-[#d6a067]" />
              Làm thế nào để phản hồi tiếng Anh vừa chuyên nghiệp vừa thuyết phục?
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              SageTalk kết hợp <strong>ba trụ cột huấn luyện chính</strong> để giúp học viên làm chủ hoàn toàn phần Q&A:
            </p>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {/* Pillar 1 */}
              <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#d6a067] rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#d6a067]">
                    1. Ngôn ngữ phòng vệ và ngoại giao (Hedging & Diplomatic Language)
                  </h3>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Giúp bạn xử lý tình huống nhạy cảm mà vẫn giữ được sự chuyên nghiệp. Học cách sử dụng các cụm từ như:
                </p>
                <div className="bg-[#d6a067]/10 p-4 rounded-xl">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• "That's an interesting perspective, and I'd like to add..."</li>
                    <li>• "While I understand your concern, our data suggests..."</li>
                    <li>• "I appreciate the question, and here's how we see it..."</li>
                  </ul>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white border-2 border-[#f4d03f] p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f4d03f] rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#f4d03f]">
                    2. Phương pháp PREP (Point – Reason – Example – Point again)
                  </h3>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Tổ chức câu trả lời rõ ràng, đi thẳng vào trọng tâm, đặc biệt hữu ích khi phản biện bằng tiếng Anh
                  dưới áp lực.
                </p>
                <div className="bg-[#f4d03f]/10 p-4 rounded-xl">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <strong>Point:</strong> Đưa ra quan điểm chính
                    </div>
                    <div>
                      <strong>Reason:</strong> Giải thích lý do
                    </div>
                    <div>
                      <strong>Example:</strong> Đưa ra ví dụ cụ thể
                    </div>
                    <div>
                      <strong>Point again:</strong> Nhấn mạnh lại quan điểm
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#d6a067] rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#d6a067]">3. Mô phỏng tình huống thực tế</h3>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Không dừng ở lý thuyết – học viên sẽ luyện tập các kịch bản như:
                </p>
                <div className="bg-[#d6a067]/10 p-4 rounded-xl">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Phản biện trong họp nội bộ</li>
                    <li>• Giải trình với ban điều hành</li>
                    <li>• Trả lời nhà đầu tư quốc tế</li>
                    <li>• Xử lý câu hỏi khó từ khách hàng</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Zap className="w-8 h-8 mr-3 text-[#d6a067]" />
              Vì sao phần Q&A là bài kiểm tra ngầm của người lãnh đạo?
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Trong mắt đối tác và cấp trên, phần Q&A không đơn thuần là vài phút trao đổi cuối buổi – mà là{" "}
              <strong>
                khoảnh khắc bạn để lộ rõ nhất bản lĩnh điều hành, khả năng xử lý áp lực và sự vững vàng trong tư duy
                chiến lược
              </strong>
              .
            </p>

            <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-8 rounded-2xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-[#d6a067]">Slide có thể soạn trước</h4>
                  <p className="text-gray-700">Chuẩn bị kỹ lưỡng, chỉnh sửa nhiều lần</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-[#f4d03f]">Bài thuyết trình có thể luyện thuộc</h4>
                  <p className="text-gray-700">Thực hành đến khi thành thạo</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-red-600">Nhưng phản ứng trước câu hỏi khó</h4>
                  <p className="text-gray-700">
                    <strong>Đó là lúc người nghe "nhìn" thấy thật sự con người bạn</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-r-2xl mb-8">
              <p className="text-lg leading-relaxed text-yellow-800 italic">
                "Nhiều người nói hay, nhưng lại lúng túng trước một câu phản biện. Trong khi đó, người trả lời đúng
                hướng – rõ ràng – điềm tĩnh, lại khiến người nghe tin tưởng và sẵn sàng gật đầu."
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ví dụ thực tế: Xử lý câu hỏi khó</h2>

            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
              <h4 className="text-xl font-bold mb-4 text-red-600">Câu hỏi thách thức:</h4>
              <p className="text-lg italic mb-6 text-gray-700">
                "Your proposal sounds expensive. How can you justify this cost when we're trying to cut budget?"
              </p>

              <h4 className="text-xl font-bold mb-4 text-green-600">Phản hồi theo phương pháp PREP:</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border-l-4 border-[#d6a067]">
                  <strong className="text-[#d6a067]">Point:</strong> "I understand the budget concern, and I believe
                  this investment will actually help us save money long-term."
                </div>
                <div className="bg-white p-4 rounded-xl border-l-4 border-[#f4d03f]">
                  <strong className="text-[#f4d03f]">Reason:</strong> "The automation will reduce our operational costs
                  by 30% within the first year."
                </div>
                <div className="bg-white p-4 rounded-xl border-l-4 border-blue-500">
                  <strong className="text-blue-500">Example:</strong> "Similar to what Company X achieved when they
                  implemented this system last year."
                </div>
                <div className="bg-white p-4 rounded-xl border-l-4 border-[#d6a067]">
                  <strong className="text-[#d6a067]">Point again:</strong> "So while the upfront cost seems high, the
                  ROI makes it a smart financial decision."
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-8 font-semibold">
              Muốn làm chủ sân khấu Q&A, bạn cần hơn một vốn tiếng Anh tốt – <strong>bạn cần phương pháp</strong>.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                SageTalk – nơi giúp bạn biến phần Hỏi-Đáp đầy áp lực thành sân chơi của bản lĩnh
              </h3>
              <p className="text-white text-lg mb-6">
                👉 Tìm hiểu chương trình <strong>"The Arena: Mastering Q&A Under Pressure"</strong> tại SageTalk English
              </p>
              <Button className="bg-white text-[#d6a067] hover:bg-gray-100 font-bold px-8 py-3 text-lg">
                Đăng ký trải nghiệm The Arena
              </Button>
            </div>

            <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-[#d6a067] text-center">
                Những gì bạn sẽ đạt được sau The Arena:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-lg">Tự tin trả lời mọi câu hỏi khó bằng tiếng Anh</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-lg">Sử dụng thành thạo ngôn ngữ ngoại giao</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-lg">Áp dụng phương pháp PREP một cách tự nhiên</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-lg">Xử lý áp lực và giữ bình tĩnh trong mọi tình huống</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-lg">Thể hiện bản lĩnh lãnh đạo qua ngôn ngữ</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-lg">Biến Q&A thành cơ hội tạo ấn tượng mạnh</p>
                  </div>
                </div>
              </div>
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
                📩 Đăng ký để trải nghiệm "The Arena" và làm chủ kỹ năng Q&A bằng tiếng Anh!
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
