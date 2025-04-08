import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Us",
  description: "Reach out to Aquapulse for sustainable aquaculture solutions and expert advisory services. Contact our team today to learn how we can assist you.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Aquapulse",
    description: "Get in touch with Aquapulse for innovative aquaculture technologies and support. Our team is ready to help you enhance your aquaculture operations.",
    url: `${siteConfig.url}/contact`,
  },
};


export default function Contact() {
  return (
    <section className="py-10  md:py-20 lg:py-32">
      <ContactSection />
    </section>
  )
}