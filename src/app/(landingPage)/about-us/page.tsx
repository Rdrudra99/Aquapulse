
import Ab1 from "@/components/aboutus/ab1";
import Ab3 from "@/components/aboutus/ab3";
import TeamSection from "@/components/sections/team";
import { siteConfig } from "@/config/site";


export const metadata = {
  title: "About Us",
  description: "Discover Aquapulse's commitment to revolutionizing aquaculture through sustainable practices, advanced technology, and expert advisory services.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Aquapulse",
    description: "Learn about Aquapulse's mission to enhance aquaculture efficiency and sustainability with innovative solutions and a dedicated team.",
    url: `${siteConfig.url}/about-us`,
  },
};


export default function Aboutus() {
  return (
    <section className="py-10  md:py-20 lg:py-32">
      <Ab1 />
      <TeamSection />
      <Ab3 />
    </section>
  )
}