import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ThoiGianLuyenTapTiengAnhPage() {
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
              <span className="bg-[#d6a067] text-white px-4 py-2 rounded-full text-sm font-semibold">Học tập</span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>12 Dec 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>7 phút đọc</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>980 lượt xem</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
              Đi Làm 8 Tiếng Mỗi Ngày Thì Thời Gian Đâu Để Luyện Tập Năng Lực Giao Tiếp Tiếng Anh?
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
              src="/images/blog-time-management.webp"
              alt="Thời gian luyện tập tiếng Anh"
              fill
              className="object-cover"
            />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-xl font-bold text-center mb-8 text-[#d6a067] flex items-center justify-center">
              <span className="text-2xl mr-3">🕖</span>
              ĐI LÀM 8 TIẾNG MỘT NGÀY THÌ THỜI GIAN ĐÂU ĐỂ LUYỆN TẬP NÂNG CAO KHẢ NĂNG THUYẾT TRÌNH TIẾNG ANH?
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Không ít người đi làm hiểu rõ khả năng{" "}
              <strong>
                nói trước đám đông, truyền đạt ý tưởng, báo cáo kết quả hay đàm phán với đối tác bằng tiếng Anh
              </strong>{" "}
              đều là những yếu tố quyết định vị thế nghề nghiệp.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Nhưng thực tế, giữa lịch họp dày đặc, deadline liên tục và áp lực từ công việc lẫn gia đình, không ít
              người dù rất muốn nâng cao kỹ năng thuyết trình tiếng Anh nhưng lại phải dừng giữa chừng vì{" "}
              <strong>lịch trình thay đổi liên tục, khó lòng duy trì một khóa học đều đặn.</strong>
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <p className="text-lg leading-relaxed text-red-800">
                <strong>Không ít người từng cố gắng – rồi bỏ cuộc.</strong> Không phải vì thiếu quyết tâm, mà vì chưa
                tìm được một lộ trình phù hợp với nhịp sống thực tế của người đi làm.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-2xl mr-3">✨</span>
                MasterTalk hiểu rõ điều đó. Vì vậy, toàn bộ chương trình được xây dựng linh hoạt tuyệt đối:
              </h3>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold mb-3 text-[#d6a067]">📅 Lịch học linh hoạt</h4>
                  <p className="text-lg leading-relaxed">
                    Chọn khung giờ học 1-kèm-1 từ <strong>6h sáng đến 23h đêm</strong>, dễ dàng điều chỉnh, đặt lớp
                    trước chỉ 10 phút, học ở bất cứ đâu – chỉ cần điện thoại kết nối internet.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold mb-3 text-[#d6a067]">🎯 Tập trung đúng nhu cầu</h4>
                  <p className="text-lg leading-relaxed">
                    Mỗi buổi học cá nhân hóa, giải quyết ngay các vấn đề thực tế:{" "}
                    <strong>báo cáo, họp, đàm phán, thuyết trình, gặp gỡ khách hàng.</strong>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold mb-3 text-[#d6a067]">👨‍🏫 Giáo viên đồng hành</h4>
                  <p className="text-lg leading-relaxed">
                    Mentor cá nhân sát sao tiến độ, điều chỉnh nội dung linh hoạt và phản hồi chi tiết – giúp bạn tiến
                    bộ rõ rệt, không còn cảm giác <em>"học xong để đó"</em>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <span className="text-2xl mr-3">📌</span>
                Không còn lý do trì hoãn!
              </h3>
              <p className="text-white text-lg mb-6">
                Chỉ cần <strong>35 phút mỗi ngày</strong>, bạn sẽ tự tin giao tiếp mà không ảnh hưởng đến công việc chỉ
                có tại MasterTalk.
              </p>
              <Button className="bg-white text-[#d6a067] hover:bg-gray-100 font-bold px-8 py-3 text-lg">
                Trải nghiệm thử 1 buổi luyện thuyết trình cá nhân hóa!
              </Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Tại sao MasterTalk phù hợp với người đi làm?</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#d6a067] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Linh hoạt tuyệt đối</h4>
                      <p className="text-gray-700">Học mọi lúc, mọi nơi theo lịch trình của bạn</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#d6a067] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Cá nhân hóa 100%</h4>
                      <p className="text-gray-700">Nội dung học phù hợp với công việc thực tế</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#d6a067] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Tiết kiệm thời gian</h4>
                      <p className="text-gray-700">Chỉ 35 phút/ngày, hiệu quả tối đa</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#d6a067] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Mentor chuyên nghiệp</h4>
                      <p className="text-gray-700">Hướng dẫn sát sao, phản hồi chi tiết</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#d6a067] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Ứng dụng ngay</h4>
                      <p className="text-gray-700">Học xong áp dụng luôn vào công việc</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#d6a067] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Không gián đoạn</h4>
                      <p className="text-gray-700">Dễ dàng duy trì và phát triển</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-white border-2 border-[#d6a067] p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#d6a067]">
                📩 Inbox để trải nghiệm thử 1 buổi luyện thuyết trình cá nhân hóa!
              </h3>
              <Button className="bg-[#d6a067] hover:bg-[#b8864f] text-white font-bold px-8 py-3 text-lg mb-4">
                Đăng ký ngay
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
