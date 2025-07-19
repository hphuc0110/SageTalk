import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft, Target, Users, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function TiengAnhThuyetTrinhChoQuanLyCapCaoPage() {
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
              <span className="bg-[#d6a067] text-white px-4 py-2 rounded-full text-sm font-semibold">Lãnh đạo</span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>20 Dec 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>12 phút đọc</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>1.5k lượt xem</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
              Tiếng Anh Thuyết Trình Cho Quản Lý Cấp Cao: Lộ Trình Học Dựa Trên Khoa Học Học Tập Người Trưởng Thành
              (Andragogy)
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
              src="/images/blog-andragogy.png"
              alt="Tiếng Anh thuyết trình cho quản lý cấp cao"
              fill
              className="object-cover"
            />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-xl font-bold text-center mb-8 text-[#d6a067] flex items-center justify-center">
              <Target className="w-6 h-6 mr-3 text-[#d6a067]" />
              TIẾNG ANH THUYẾT TRÌNH CHO QUẢN LÝ CẤP CAO
              <Target className="w-6 h-6 ml-3 text-[#d6a067]" />
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Trong bối cảnh toàn cầu hóa ngày càng sâu rộng, năng lực tiếng Anh không chỉ đơn thuần là một kỹ năng giao
              tiếp, mà đã trở thành một <strong>công cụ chiến lược</strong> thể hiện tầm vóc lãnh đạo, bản lĩnh điều
              hành và khả năng truyền cảm hứng trong môi trường kinh doanh quốc tế.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Tuy nhiên, không ít quản lý cấp cao dù sở hữu chuyên môn vững chắc, tư duy chiến lược sắc bén vẫn gặp phải
              những rào cản tinh vi về ngôn ngữ, đặc biệt trong những tình huống đòi hỏi sự chính xác, linh hoạt và bản
              lĩnh:
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <ul className="space-y-3 text-lg text-red-800">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Khó truyền tải đầy đủ chiều sâu của tư duy trong các cuộc họp song ngữ
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Thiếu sự tinh tế và sắc sảo khi trình bày quan điểm trong môi trường đối thoại cấp cao
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Gặp trở ngại khi thể hiện phong thái lãnh đạo và năng lực điều hành bằng tiếng Anh
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-[#d6a067]" />
              Thực trạng: Các khóa học hiện nay chưa thực sự dành cho người đi làm
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Phần lớn các chương trình tiếng Anh trên thị trường được thiết kế cho người học phổ thông, tập trung vào
              nền tảng ngữ pháp và từ vựng cơ bản. Điều này dẫn đến tình trạng các nhà quản lý, dù có trình độ tiếng Anh
              trung – cao cấp, vẫn cảm thấy <strong>"lạc lõng"</strong> khi theo học các lớp đại trà.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Thực tế, người đi làm – đặc biệt là đội ngũ quản lý cấp trung và cấp cao – không cần học lại từ đầu, họ
              cần được tinh chỉnh ngôn ngữ theo hướng chuyên sâu để:
            </p>

            <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-8 rounded-2xl mb-8">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  Nâng cấp khả năng truyền đạt tư duy chiến lược
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  Thể hiện rõ tầm nhìn lãnh đạo
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                  Giao tiếp thuyết phục và điều hành hiệu quả trong môi trường quốc tế
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Award className="w-8 h-8 mr-3 text-[#d6a067]" />
              Giải pháp từ SageTalk: Tiếp cận theo phương pháp Andragogy
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Khác biệt hoàn toàn với các mô hình giảng dạy truyền thống, SageTalk ứng dụng phương pháp{" "}
              <strong>Andragogy</strong> – khoa học học tập dành riêng cho người trưởng thành, giúp học viên chủ động
              trong tư duy, tự tin trong giao tiếp và hiệu quả trong việc chuyển hóa kiến thức thành năng lực thực thi.
            </p>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              <div className="bg-white border-2 border-[#d6a067] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-[#d6a067]">1. Lấy học viên làm trung tâm</h3>
                <p className="text-lg leading-relaxed">
                  Khóa học được thiết kế xoay quanh bối cảnh công việc thực tế của từng cá nhân, tập trung vào những
                  tình huống sử dụng tiếng Anh thường gặp trong môi trường doanh nghiệp, thay vì áp đặt giáo trình cố
                  định.
                </p>
              </div>

              <div className="bg-white border-2 border-[#d6a067] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-[#d6a067]">2. Tôn trọng kinh nghiệm cá nhân</h3>
                <p className="text-lg leading-relaxed">
                  Giảng viên đóng vai trò người đồng hành, hướng dẫn và khai thác kinh nghiệm tích lũy của học viên để
                  xây dựng bài học phù hợp với hành trình sự nghiệp riêng biệt. Học viên không học lại cái đã biết, mà
                  được mở rộng khả năng ứng dụng ngôn ngữ vào các tình huống chiến lược.
                </p>
              </div>

              <div className="bg-white border-2 border-[#d6a067] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-[#d6a067]">3. Tập trung vào mục tiêu chuyên biệt</h3>
                <p className="text-lg leading-relaxed">
                  Tất cả nội dung được "cá nhân hóa" theo mục tiêu cụ thể: chuẩn bị thuyết trình trước ban điều hành,
                  phản biện trong buổi pitching, điều phối nhóm đa quốc gia, đàm phán thương mại, hoặc tham dự diễn đàn
                  quốc tế với tư cách lãnh đạo cấp cao.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="w-8 h-8 mr-3 text-[#d6a067]" />
              Kết quả đầu ra: Không chỉ nói đúng, mà phải nói hay và có ảnh hưởng
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              SageTalk không đơn thuần giúp học viên sử dụng đúng cấu trúc ngữ pháp hay từ vựng phù hợp, mà tập trung
              vào:
            </p>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-white mb-8">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-xl">🎯</span>
                  Truyền tải thông điệp một cách chiến lược
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-xl">👑</span>
                  Thể hiện bản sắc và phong thái lãnh đạo
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-xl">🌍</span>
                  Giao tiếp có sức ảnh hưởng trong bối cảnh quốc tế đa chiều
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-xl">💼</span>
                  Thuyết phục và điều hành với ngôn ngữ toàn cầu
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-[#d6a067] p-8 rounded-r-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Trích dẫn học viên tiêu biểu</h3>
              <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                "Tôi từng học tại nhiều trung tâm tiếng Anh nhưng chỉ đến khi tham gia SageTalk, tôi mới thực sự tìm
                thấy một chương trình phù hợp với vai trò lãnh đạo của mình. Không còn học lại từ đầu, tôi được học cách
                thể hiện tư duy điều hành bằng chính giọng nói của mình."
              </blockquote>
              <cite className="text-[#d6a067] font-semibold mt-4 block">– Nguyễn Quốc Duy, Giám đốc Điều hành</cite>
            </div>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Đăng ký trải nghiệm ngay hôm nay</h3>
              <p className="text-white text-lg mb-6">
                Nếu bạn là người đi làm đang tìm kiếm một chương trình học tiếng Anh thuyết trình thực tiễn, được thiết
                kế riêng theo nhu cầu, có khả năng chuyển hóa khả năng ngôn ngữ thành kỹ năng lãnh đạo hiệu quả,
                SageTalk chính là lựa chọn phù hợp.
              </p>
              <p className="text-white text-lg mb-6">
                Hiện tại, SageTalk đang mở đăng ký trải nghiệm buổi học thử 1:1 miễn phí dành cho{" "}
                <strong>20 người đầu tiên</strong>.
              </p>
              <Button className="bg-white text-[#d6a067] hover:bg-gray-100 font-bold px-8 py-3 text-lg">
                Đăng ký trải nghiệm miễn phí
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
                📩 Hoặc để lại thông tin tại biểu mẫu trên trang để được tư vấn lộ trình cá nhân hóa.
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
