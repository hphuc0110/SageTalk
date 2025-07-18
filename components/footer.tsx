"use client"

import { Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] py-16 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo + mô tả */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/images/mastertalk-logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-playfair font-bold text-[#d6a067]">SAGETALK</h2>
                <p className="text-xs text-gray-400 mt-0.5">Executive Presentation English - Coaching Roadmap</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
            Tiếng Anh Thuyết trình cao cấp cho nhà lãnh đạo doanh nghiệp.
            </p>
          </div>

          {/* Khóa học */}
          <div>
            <h3 className="text-white font-playfair font-semibold mb-5 text-base">Khóa học</h3>
            <ul className="space-y-3">
              {[
                "Quick Win - 5+1",
                "Confident Speakers",
                "Presentation Mentor",
                "Coaching 1:1",
              ].map((text, i) => (
                <li key={i}>
                  <Link
                    href="/courses"
                    className="text-[#d6a067] hover:text-[#f4d03f] transition-colors duration-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-white font-playfair font-semibold mb-5 text-base">Liên hệ</h3>
            <ul className="space-y-4">
        <li className="flex items-center gap-3">
           <Phone className="w-4 h-4 text-[#d6a067]" />
              <a href="tel:0325194889" className="hover:text-[#d6a067] transition-colors">
                    0325 194 889
              </a>
        </li>
              <li className="flex items-center gap-3">
                <Facebook className="w-4 h-4 text-[#d6a067]" />
                <a
                  href="https://www.facebook.com/sagetalk.tienganhthuyetrinh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d6a067] transition-colors"
                >
                  SageTalk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[#d6a067]" />
                <div>
                  <p className="hover:text-[#d6a067] transition-colors">1G Trần Quang Diệu</p>
                  <p className="hover:text-[#d6a067] transition-colors">Ô Chợ Dừa, Đống Đa, Hà Nội</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer dưới cùng */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
          </div>
        </div>
      </div>
    </footer>
  )
}
