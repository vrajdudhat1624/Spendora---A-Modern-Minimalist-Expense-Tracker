import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { Comparison } from "@/components/comparison"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Features />
      <Comparison />
      <CTA />
    </div>
  )
}

