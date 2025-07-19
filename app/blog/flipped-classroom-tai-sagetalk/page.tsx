import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft, BookOpen, Users, TrendingUp, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function FlippedClassroomTaiSageTalkPage() {
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
              <span className="bg-[#d6a067] text-white px-4 py-2 rounded-full text-sm font-semibold">Phương pháp</span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>22 Dec 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>10 phút đọc</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>1.8k lượt xem</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
              Flipped Classroom tại SageTalk – Giải pháp Học Tập Hiệu Quả Cho Người Đi Làm Bận Rộn
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
              src="/images/blog-flipped-classroom.webp"
              alt="Flipped Classroom tại SageTalk"
              fill
              className="object-cover"
            />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              Trong các chương trình đào tạo tiếng Anh hiện nay, không khó để nhận ra một thực tế phổ biến: phần lớn
              thời lượng vẫn đang dành cho việc truyền đạt lý thuyết – thay vì tạo ra môi trường rèn luyện thực tế có
              chiều sâu.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Điều này dẫn đến một nghịch lý: Nhiều người học có nền tảng chuyên môn vững vàng, khả năng tư duy chiến
              lược tốt, nhưng lại gặp khó khăn khi truyền đạt sắc sảo bằng tiếng Anh trong những tình huống quan trọng
              như:
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <ul className="space-y-3 text-lg text-red-800">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Trình bày kế hoạch trước hội đồng quản trị
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Truyền đạt thông điệp chiến lược tới toàn tổ chức
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Bảo vệ đề xuất với đối tác quốc tế
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Không phải vì họ thiếu kiến thức. Mà bởi vì họ chưa từng luyện tập đúng ngữ cảnh – dưới áp lực thật – cùng
              phản hồi đủ sâu để điều chỉnh phong thái và thông điệp.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-[#d6a067]" />
                Thống kê từ Harvard Business Review (2023)
              </h3>
              <blockquote className="text-lg italic leading-relaxed border-l-4 border-[#d6a067] pl-6">
                "Có đến <strong>67% quản lý trung và cao cấp</strong> cảm thấy chưa đủ sẵn sàng khi phải truyền đạt các
                ý tưởng chiến lược bằng tiếng Anh một cách ngắn gọn, thuyết phục và đúng trọng tâm – mặc dù đã hoàn tất
                nhiều khóa học trước đó."
              </blockquote>
            </div>

            <p className="text-lg leading-relaxed mb-8 font-semibold">
              Điều này cho thấy: học lý thuyết hay biết cấu trúc ngữ pháp không đủ. Người đi làm cần một môi trường học
              mà ở đó, mọi nội dung đều xoay quanh chính thách thức thật họ đang gặp phải.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <BookOpen className="w-8 h-8 mr-3 text-[#d6a067]" />
              Flipped Classroom – Mô hình đào tạo đảo ngược tại SageTalk
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Đó là lý do SageTalk triển khai mô hình <strong>Flipped Classroom</strong> – một cách tiếp cận được thiết
              kế dành riêng cho người học trưởng thành, bận rộn, và có mục tiêu chuyên biệt.
            </p>

            <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-[#d6a067] text-center">
                Thay đổi căn bản so với lớp học truyền thống:
              </h3>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-[#d6a067]">📚 Trước buổi học:</h4>
                  <p className="text-lg leading-relaxed">
                    Học viên nhận toàn bộ tài liệu, framework và mẫu bài – được thiết kế dựa trên mục tiêu cá nhân (ví
                    dụ: pitching, báo cáo kết quả, thuyết trình ngân sách...). Họ chủ động chuẩn bị nội dung theo đúng
                    bối cảnh công việc.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#f4d03f]/10 to-[#d6a067]/10 p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-[#d6a067]">🎯 Trong lớp học:</h4>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                      Không còn nghe giảng một chiều. <strong>100% thời gian</strong> dành cho luyện tập chính bài
                      thuyết trình thật của học viên.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                      Giáo viên đóng vai trò như một <strong>đối tác chiến lược</strong>, đưa ra phản biện và phản hồi
                      sâu sát.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1 text-xl">✔</span>
                      Người học được tinh chỉnh phong thái – ngôn ngữ – và thông điệp cho đến khi bài nói đạt độ sắc
                      sảo, thuyết phục, và đúng tinh thần lãnh đạo toàn cầu.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Target className="w-8 h-8 mr-3 text-[#d6a067]" />
              Học để thể hiện rõ tầm vóc – chứ không chỉ đúng ngữ pháp
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Mục tiêu của SageTalk không phải đào tạo người học phát âm chuẩn từng âm tiết – mà là giúp họ sở hữu thông
              điệp mạnh mẽ, định vị được phong cách lãnh đạo bằng tiếng Anh trong bối cảnh toàn cầu hóa.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Khi người học rèn luyện trên chính nội dung của mình, dưới sự dẫn dắt từ đội ngũ chuyên gia ngôn ngữ có
              nền tảng tư duy kinh doanh, họ sẽ:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#d6a067] to-[#f4d03f] p-6 rounded-2xl text-white text-center">
                <h4 className="text-xl font-bold mb-3">Trình bày rõ ràng hơn</h4>
                <p className="text-white/90">Cấu trúc logic, mạch lạc và dễ theo dõi</p>
              </div>
              <div className="bg-gradient-to-br from-[#f4d03f] to-[#d6a067] p-6 rounded-2xl text-white text-center">
                <h4 className="text-xl font-bold mb-3">Dẫn dắt thuyết phục hơn</h4>
                <p className="text-white/90">Sử dụng ngôn ngữ có sức ảnh hưởng</p>
              </div>
              <div className="bg-gradient-to-br from-[#d6a067] to-[#f4d03f] p-6 rounded-2xl text-white text-center">
                <h4 className="text-xl font-bold mb-3">Thể hiện trọng lượng</h4>
                <p className="text-white/90">Để người nghe tin tưởng và đồng thuận</p>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-[#d6a067] p-8 rounded-r-2xl mb-8">
              <p className="text-lg leading-relaxed italic text-gray-700">
                "Trong một thế giới nơi khả năng ảnh hưởng phụ thuộc ngày càng nhiều vào ngôn ngữ, điều mà người học
                thực sự cần không phải là <strong>'học thêm'</strong> – mà là được rèn giũa đúng nội dung, trong đúng
                bối cảnh, với đúng người."
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 mr-3" />
                Bạn đang chuẩn bị cho một bài thuyết trình quan trọng bằng tiếng Anh?
              </h3>
              <p className="text-white text-lg mb-6">
                Hãy để đội ngũ tại SageTalk English đồng hành và cá nhân hóa lộ trình luyện tập cho chính bạn.
              </p>
              <Button className="bg-white text-[#d6a067] hover:bg-gray-100 font-bold px-8 py-3 text-lg">
                Liên hệ tư vấn 1:1 miễn phí
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
                📩 Liên hệ để nhận tư vấn 1:1 và trải nghiệm buổi học thử miễn phí cùng giáo viên chuyên sâu về tiếng
                Anh cho nhà quản lý.
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
