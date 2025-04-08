import Benefits from "@/components/sections/Benefits";
import BentoSection from "@/components/sections/BentoSection";
import ContactSection from "@/components/sections/contact";
import Cta from "@/components/sections/Cta";
import Faq from "@/components/sections/Faq";
import FeatureHighlight from "@/components/sections/FeatureHighlight";
import Features from "@/components/sections/Features";
import FeatureScroll from "@/components/sections/FeatureScroll";
import HeroSection from "@/components/sections/Hero";
import Logos from "@/components/sections/logos";
import Stats from "@/components/sections/Stats";
import Testimonial from "@/components/sections/Testimonial";
export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <Logos />
      <Stats />
      <FeatureScroll />
      <FeatureHighlight />
      <BentoSection />
      <Benefits />
      <Features />
      <Faq />
      <Testimonial />
      <Cta />
    </main>
  );
}
