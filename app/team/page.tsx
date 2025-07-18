import Header from "@/components/header"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <TeamSection />
      </div>
      <Footer />
    </div>
  )
}
