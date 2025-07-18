"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/animated-section"

export default function TrialSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzWnjhE3Z2IiUNrHbeB3lAECqo60HI3NJdlvwF5FLToUU1MTe4uCVx57ZBJ1p3qK_2PLQ/exec"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors",
      })

      setSubmitSuccess(true)
      setSubmitMessage("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
      setFormData({ name: "", email: "", phone: "", goal: "" })
    } catch (error) {
      console.error("Error:", error)
      setSubmitSuccess(false)
      setSubmitMessage("Có lỗi xảy ra. Vui lòng thử lại sau.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section
      id="trial-section"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-12">
            <AnimatedText>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                ĐĂNG KÝ HỌC THỬ VÀ NHẬN TƯ VẤN LỘ TRÌNH MIỄN PHÍ
              </h2>
            </AnimatedText>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <Card className="bg-gray-800/80 border border-gray-600/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Họ và tên</label>
                    <Input
                      type="text"
                      placeholder="Nhập họ và tên của bạn"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#d6a067] focus:ring-[#d6a067] h-12"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="Nhập email của bạn"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#d6a067] focus:ring-[#d6a067] h-12"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Số điện thoại</label>
                    <Input
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#d6a067] focus:ring-[#d6a067] h-12"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#d6a067] to-[#f4d03f] text-black font-bold py-3 h-12 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      "Đăng ký học thử miễn phí"
                    )}
                  </Button>

                  {submitMessage && (
                    <div
                      className={`text-center p-3 rounded-lg ${
                        submitSuccess
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
