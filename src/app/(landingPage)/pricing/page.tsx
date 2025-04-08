import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Ab3 from "@/components/aboutus/ab3";
import LogoCloud from "@/components/logo-cloud";
import FAQs from "@/components/sections/faqs";
import PricingSection from "@/components/sections/Pricingsection";

export const metadata = {
  title: "Pricing",
  description: "Explore Aquapulse's tailored pricing plans for sustainable aquaculture solutions and services, designed to support aquafarmers and industry stakeholders.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Aquapulse",
    description: "Discover Aquapulse's flexible pricing options for innovative aquaculture technologies and expert advisory services, aimed at enhancing productivity and sustainability.",
    url: `${siteConfig.url}/pricing`,
  },
};


export default function Pricing() {
  return (
    <section className="py-10  md:py-20 lg:py-32">
      <PricingSection />
      <LogoCloud />
      <FAQs />
      <Ab3 />
    </section>
  )
}