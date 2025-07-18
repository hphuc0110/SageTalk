import type { ReactNode } from "react"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "SageTalk",
  description:
    "English for Leaders - Trung tâm tiếng Anh chuyên nghiệp dành cho các nhà quản lý và lãnh đạo doanh nghiệp",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-playfair">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
