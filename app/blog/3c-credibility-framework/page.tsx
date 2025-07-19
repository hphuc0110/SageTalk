import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft, Award, Users, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ThreeCCredibilityFrameworkPage() {
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
              <span className="bg-[#d6a067] text-white px-4 py-2 rounded-full text-sm font-semibold">Framework</span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>25 Dec 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>9 phút đọc</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>2.1k lượt xem</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
              3C Credibility Framework – Xây dựng Uy Tín Trong Từng Lời Nói
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
            <Image src="/images/blog-3c-framework.webp" alt="3C Credibility Framework" fill className="object-cover" />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              Trong môi trường làm việc toàn cầu, khả năng truyền đạt ý tưởng bằng tiếng Anh một cách rõ ràng, thuyết
              phục và có trọng lượng không chỉ là kỹ năng ngôn ngữ – mà là một{" "}
              <strong>yếu tố quyết định vị thế lãnh đạo</strong>.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Tuy nhiên, không ít chuyên gia, dù sở hữu kinh nghiệm dày dặn, vẫn cảm thấy khó khăn khi bắt đầu một bài
              thuyết trình hoặc phát biểu trước công chúng. Không phải vì họ thiếu kiến thức, mà vì chưa có công cụ giúp
              họ thể hiện được uy tín một cách mạch lạc, đúng trọng tâm và đúng thời điểm.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 mr-3 text-[#d6a067]" />
                Giới thiệu 3C Credibility Framework
              </h3>
              <p className="text-lg leading-relaxed">
                Tại SageTalk English, chúng tôi giới thiệu <strong>3C Credibility Framework</strong> – một mô hình đơn
                giản, tinh gọn, nhưng đặc biệt hiệu quả trong việc giúp người học xây dựng uy tín ngay từ những câu nói
                đầu tiên.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Ba trụ cột của uy tín</h2>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {/* Competence */}
              <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#d6a067] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#d6a067]">Competence – Năng lực</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Uy tín trước hết đến từ{" "}
                  <strong>khả năng chuyên môn, kinh nghiệm thực tiễn và thành tích rõ ràng</strong>. Đây là nền tảng để
                  người nghe tin tưởng vào những gì bạn chia sẻ.
                </p>
                <div className="mt-4 bg-[#d6a067]/10 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Ví dụ:</strong> "Với 10 năm kinh nghiệm trong lĩnh vực fintech và đã dẫn dắt 3 dự án chuyển
                    đổi số thành công..."
                  </p>
                </div>
              </div>

              {/* Character */}
              <div className="bg-white border-2 border-[#f4d03f] p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f4d03f] rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#f4d03f]">Character – Nhân cách</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Năng lực thôi là chưa đủ. Người nghe cần cảm thấy bạn là người đáng tin –{" "}
                  <strong>trung thực, nhất quán và có nguyên tắc</strong>.
                </p>
                <div className="mt-4 bg-[#f4d03f]/10 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Ví dụ:</strong> "Tôi luôn tin rằng minh bạch trong giao tiếp là chìa khóa của mọi hợp tác
                    bền vững..."
                  </p>
                </div>
              </div>

              {/* Caring */}
              <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#d6a067] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#d6a067]">Caring – Sự quan tâm</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Khi bạn cho thấy mình hiểu rõ <strong>ưu tiên, bối cảnh và nhu cầu của người nghe</strong>, thì thông
                  điệp của bạn sẽ trở nên có sức nặng thực sự.
                </p>
                <div className="mt-4 bg-[#d6a067]/10 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Ví dụ:</strong> "Tôi hiểu rằng trong bối cảnh thị trường hiện tại, các bạn đang tìm kiếm
                    giải pháp vừa hiệu quả vừa tiết kiệm chi phí..."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded-r-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Tại sao 3C Framework hiệu quả?</h3>
              <p className="text-lg leading-relaxed text-blue-700 mb-4">
                Khung 3C không yêu cầu người học phải học thuộc lòng mẫu câu hay kỹ thuật phức tạp.
              </p>
              <p className="text-lg leading-relaxed text-blue-700">
                Thay vào đó, nó giúp bạn định hình được cách lựa chọn thông tin, cách thể hiện bản thân, và cách điều
                chỉnh thông điệp sao cho phù hợp với người nghe – dù đó là nhà đầu tư, ban lãnh đạo, hay đối tác quốc
                tế.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-white mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Từ "công thức" đến phong thái tự nhiên</h3>
              <p className="text-lg leading-relaxed text-center">
                Khi được luyện tập bài bản, khung 3C không còn là "công thức", mà trở thành{" "}
                <strong>phong thái trình bày tự nhiên</strong> – giúp bạn nói điều đúng, theo cách đúng, vào thời điểm
                đúng.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Target className="w-8 h-8 mr-3 text-[#d6a067]" />
              Luyện tập để chuyển hóa – không chỉ học thêm thông tin
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Tại SageTalk English, người học được thiết kế riêng toàn bộ nội dung theo chính tình huống công việc thật
              của họ. Không học lan man, không dàn trải.
            </p>

            <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-[#d6a067] text-center">
                Chỉ trong 5 buổi huấn luyện chuyên sâu, bạn sẽ:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Rèn luyện chính bài thuyết trình, báo cáo, hoặc đối thoại mà mình cần</strong>
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Áp dụng mô hình 3C</strong> để tăng độ tin cậy và sức ảnh hưởng trong từng câu nói
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Nhận phản hồi cá nhân</strong> từ giáo viên có nền tảng ngôn ngữ và tư duy kinh doanh
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="w-8 h-8 mr-3 text-[#d6a067]" />
              Kết luận
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Trong một thế giới nơi người nghe ngày càng chọn lọc,{" "}
              <strong>uy tín không đến từ việc nói nhiều – mà từ việc nói đúng và có trọng lượng</strong>.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Khung 3C là công cụ để bạn bắt đầu làm điều đó – và SageTalk English là nơi giúp bạn rèn luyện điều đó một
              cách chuyên biệt, bài bản và sát thực tế.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Bạn đang chuẩn bị cho một bài thuyết trình chiến lược?
              </h3>
              <p className="text-white text-lg mb-6">
                Một vòng pitching, hoặc buổi họp với đối tác quốc tế? Hãy để chúng tôi đồng hành cùng bạn, cá nhân hóa
                lộ trình huấn luyện để giúp từng lời nói của bạn thể hiện rõ uy tín, phong thái và năng lực lãnh đạo.
              </p>
              <Button className="bg-white text-[#d6a067] hover:bg-gray-100 font-bold px-8 py-3 text-lg">
                Đăng ký tư vấn 1:1 miễn phí
              </Button>
              <p className="text-white/90 text-sm mt-4">📩 Số lượng suất giới hạn trong tháng</p>
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
                📩 Đăng ký tư vấn 1:1 và trải nghiệm buổi học thử miễn phí cùng đội ngũ SageTalk English.
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
