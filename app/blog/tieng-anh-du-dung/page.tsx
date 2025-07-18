import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function TiengAnhDuDungPage() {
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
              <span className="bg-[#d6a067] text-white px-4 py-2 rounded-full text-sm font-semibold">Phát triển</span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>10 Dec 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>6 phút đọc</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>756 lượt xem</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
              "Tiếng Anh Đủ Dùng" Không Phải Là Lý Do Để Dừng Lại
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
            <Image src="/images/blog-senior-manager.webp" alt="Tiếng Anh Đủ Dùng" fill className="object-cover" />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-xl font-bold text-center mb-8 text-[#d6a067]">
              🔥"TIẾNG ANH ĐỦ DÙNG" KHÔNG PHẢI LÀ LÝ DO ĐỂ DỪNG LẠI🔥
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Nhiều người khi đã có thể giao tiếp, trao đổi công việc, họp hành và xử lý email tiếng Anh trôi chảy
              thường nghĩ:
              <strong>"Vậy là đã ổn, đủ cho công việc rồi."</strong>
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Nhưng thực tế, <strong>"đủ dùng"</strong> chỉ giúp bạn hòa nhập. Để tạo dấu ấn, để dẫn dắt và thực sự
              truyền cảm hứng trong môi trường chuyên nghiệp, tiếng Anh cần nhiều hơn thế.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067]/10 to-[#f4d03f]/10 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">⚡</span>
                Sẽ có những khoảnh khắc mà khả năng giao tiếp cơ bản không còn đủ:
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-[#d6a067] mr-3 mt-1">–</span>
                  Khi bạn cần trình bày chiến lược một cách thuyết phục, rõ ràng và logic.
                </li>
                <li className="flex items-start">
                  <span className="text-[#d6a067] mr-3 mt-1">–</span>
                  Khi phải phản biện, bảo vệ ý kiến trước lãnh đạo hoặc đối tác quốc tế.
                </li>
                <li className="flex items-start">
                  <span className="text-[#d6a067] mr-3 mt-1">–</span>
                  Khi cần điều hướng một cuộc họp căng thẳng, hay đơn giản chỉ muốn nói một lần – và ai cũng lắng nghe.
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Nhiều người đi làm dày dạn kinh nghiệm nhận ra: <strong>"Ổn"</strong> chỉ là bước đầu. Nếu muốn thực sự
              tạo ảnh hưởng, tiếng Anh phải trở thành điểm mạnh và là bản sắc riêng của bạn – không chỉ là một công cụ
              vừa đủ xài.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Có những thông điệp, dù có phiên dịch viên xuất sắc hỗ trợ, vẫn không thể truyền tải trọn vẹn sắc thái, sự
              tự tin và cá tính của chính bạn.
            </p>

            <div className="bg-white border-2 border-[#d6a067] p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Tại MasterTalk, bạn không chỉ học để "đủ giao tiếp". Bạn sẽ học cách:
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1 text-xl">✔</span>
                  Trình bày quan điểm sắc nét, mạch lạc và thuyết phục.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1 text-xl">✔</span>
                  Phản biện và bảo vệ ý kiến một cách tự tin, giữ vững lập trường trước bất cứ ai.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1 text-xl">✔</span>
                  Dẫn dắt câu chuyện, tạo ảnh hưởng tích cực trong mọi cuộc họp, bài thuyết trình hay thương lượng quan
                  trọng.
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-8 font-semibold">
              MasterTalk sẽ cùng bạn nâng cấp năng lực ngôn ngữ, để tiếng Anh không chỉ là công cụ – mà thực sự trở
              thành lợi thế cạnh tranh khác biệt.
            </p>

            <div className="bg-gradient-to-r from-[#d6a067] to-[#f4d03f] p-8 rounded-2xl text-center mb-8">
              <p className="text-white text-lg mb-4">
                📩 Để lại số điện thoại dưới đây để nhận tư vấn lộ trình cá nhân hóa từ chuyên gia.
              </p>
              <Button className="bg-white text-[#d6a067] hover:bg-gray-100 font-bold px-8 py-3">
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
