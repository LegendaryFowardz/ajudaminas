import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { GallerySection } from "@/components/gallery-section"
import { DonationSection } from "@/components/donation-section"
import { HowToHelpSection } from "@/components/how-to-help-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <GallerySection />
      <DonationSection />
      <HowToHelpSection />
      <Footer />
    </main>
  )
}
