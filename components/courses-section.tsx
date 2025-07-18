"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Star,
  Users,
} from "lucide-react"
import ReactMarkdown from "react-markdown"

const academicPrograms = [
  
  {
    title: "LỘ TRÌNH THUYẾT TRÌNH CẤP TỐC 3 BUỔI",
    content: "Nội dung sẽ được cập nhật sau.",
  },
  {
    title: "LỘ TRÌNH HUẤN LUYỆN 5+1 (TOÀN DIỆN)",
    sessions: [
      "Buổi 1: Xây dựng Uy tín & Nền tảng (Credibility)",
      "Buổi 2: Cấu trúc Lập luận Sắc bén (Structure)",
      "Buổi 3: Kể chuyện bằng Dữ liệu (Data Storytelling)",
      "Buổi 4: Gây ảnh hưởng & Thuyết phục (Influence)",
      "Buổi 5: Làm chủ Phiên Hỏi-Đáp & Phản biện (Q&A Mastery)",
      
    ],
    outcomes: [
      "Diễn đạt ý tưởng phức tạp một cách chuẩn xác và tinh tế bằng Tiếng Anh, tránh các lỗi sai ngô nghê có thể làm giảm uy tín.",
      "Sở hữu một bộ từ vựng mạnh (power vocabulary) và các mẫu câu chuyên nghiệp có thể áp dụng ngay cho mọi bài thuyết trình kinh doanh.",
      "Tăng thời gian trình bày nội dung chiến lược lên 30% vì không còn phải vất vả dịch trong đầu từ Việt sang Anh.",
    ],
    target:
      "Phù hợp với người mới bắt đầu hoặc cần chuẩn bị cho một bài thuyết trình quan trọng",
    subtitle: "Từ Zero → Thuyết trình tự tin trong 5 buổi",
    description: "Cho người cần thuyết trình 1 bài quan trọng sắp tới",
  },
  {
    title: "LỘ TRÌNH GIAO TIẾP THỰC CHIẾN 10 BUỔI",
    content: "Nội dung sẽ được cập nhật sau.",
  },
  {
    title: "LỘ TRÌNH PHÁT TRIỂN KỸ NĂNG GIAO TIẾP CAO CẤP 20 BUỔI ",
    content: "Nội dung sẽ được cập nhật sau.",
  },
  {
    title: "LỘ TRÌNH MASTERY ỨNG XỬ 25 BUỔI",
    content: "Nội dung sẽ được cập nhật sau.",
  },
]

function ProgramCard({
  title,
  content,
  sessions,
  outcomes,
  target,
  subtitle,
  description,
}: {
  title: string
  content?: string
  sessions?: string[]
  outcomes?: string[]
  target?: string
  subtitle?: string
  description?: string
}) {
  const isQuickWin = title.includes("5+1")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative group transition-transform hover:scale-105 w-full sm:w-[320px] md:w-[340px] lg:w-[360px]">
          <Card className="h-[220px] overflow-hidden border-none rounded-2xl shadow-lg cursor-pointer transition-all duration-500 group-hover:shadow-yellow-400/30">
            <div className="relative h-full w-full z-10 bg-[#fdf6e3] group-hover:bg-gradient-to-br group-hover:from-[#f59e0b] group-hover:to-[#facc15] transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                {title}
              </h3>
              <div className="flex justify-between items-center mt-6">
                <div className="w-9 h-9 rounded-full border border-gray-400 group-hover:border-white flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 group-hover:animate-pulse bg-white pointer-events-none rounded-2xl transition-all" />
          </Card>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-white max-w-3xl text-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-yellow-600">
            {title}
          </DialogTitle>
        </DialogHeader>

        {isQuickWin ? (
          <div className="mt-4 space-y-4">
            <div className="bg-yellow-50 p-4 rounded-xl">
              <p className="text-lg font-semibold">{subtitle}</p>
              <p className="text-sm text-gray-600">{description}</p>
              <p className="mt-2 text-sm text-yellow-600 font-semibold">
                📅 5 BUỔI + 1 BUỔI THE SIGNATURE 
                 <br /> Tổng hợp các kĩ năng đã học để thực hiện 1 bài thuyết trình hoàn chỉnh, định hình dấu ấn lãnh đạo của riêng mình
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 font-semibold text-base mb-2">
                  <BookOpen className="w-5 h-5" />
                  Nội dung khóa học
                </div>
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside pl-2">
                  {sessions?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 text-yellow-600 font-semibold text-base mb-2">
                  <Star className="w-5 h-5" />
                  Lợi ích đạt được
                </div>
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside pl-2">
                  {outcomes?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mt-6">
              <div className="flex items-center gap-2 font-semibold text-blue-700 mb-1">
                <Users className="w-5 h-5" />
                Phù hợp với:
              </div>
              <p className="text-sm text-blue-700">{target}</p>
            </div>
            <div className="flex justify-end mt-6">
      <a
        href="#"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
      >
        Tìm hiểu ngay
      </a>
    </div>
  </div>
          
        ) : (
          <div className="mt-4 prose prose-sm prose-slate max-w-none">
            <ReactMarkdown>{content || ""}</ReactMarkdown>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default function AcademicProgramsSectionThemed() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="relative mb-8 border-b-2 border-[#d7a13d] pb-2 inline-block">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase">
            Chương trình học
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {academicPrograms.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  )
}
