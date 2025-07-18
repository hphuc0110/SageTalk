import Header from "@/components/header"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <BlogSection />
      </div>
      <Footer />
    </div>
  )
}
