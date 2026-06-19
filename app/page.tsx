import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { CoverageSection } from "@/components/landing/coverage-section";
import { WaitlistSection } from "@/components/landing/waitlist-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CoverageSection />
        <WaitlistSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
