import Benefits from "@/components/sections/Benefits";
import BentoSection from "@/components/sections/BentoSection";
import ContactUsSection from "@/components/sections/Contact";
import Cta from "@/components/sections/Cta";
import Faq from "@/components/sections/Faq";
import FeatureHighlight from "@/components/sections/FeatureHighlight";
import Features from "@/components/sections/Features";
import FeatureScroll from "@/components/sections/FeatureScroll";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/Hero";
import Logos from "@/components/sections/logos";
import Stats from "@/components/sections/Stats";
import Testimonial from "@/components/sections/Testimonial";
export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <Logos />
      <Stats />
      <FeatureScroll />
      {/* <FeatureHighlight /> */}
      <BentoSection />
      <Benefits />
      <Features />
      <Faq />
      <Testimonial />
      <ContactUsSection />
      <Cta />
      <Footer />
    </main>
  );
}
