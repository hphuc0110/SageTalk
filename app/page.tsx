import { ClientLayout } from "./ClientLayout"
import HeroSection from "@/components/hero-section"
import EducationQuoteSection from "@/components/education-quote-section"
import CoursesVideoSection from "@/components/courses-video-section"
import TrainingMethodologySection from "@/components/training-methodology-section"
import TeamSection from "@/components/team-section"
import HallOfFameSection from "@/components/hall-of-fame-section"
import LearningOutcomesSection from "@/components/learning-outcomes-section"
import TrialSection from "@/components/trial-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import CTASection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <ClientLayout>
      <main className="min-h-screen">
        <HeroSection />
        <EducationQuoteSection />
        <CoursesVideoSection />
        <TrainingMethodologySection />
        <TeamSection />
        <HallOfFameSection />
        <LearningOutcomesSection />
        <TrialSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </main>
    </ClientLayout>
  )
}
