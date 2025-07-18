import Header from "@/components/header"
import CoursesSection from "@/components/courses-section"
import Footer from "@/components/footer"

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <CoursesSection />
      </div>
      <Footer />
    </div>
  )
}
