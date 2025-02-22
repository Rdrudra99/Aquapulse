"use client"
import Section from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What makes Aquapulse a unique investment opportunity?",
    answer: "Aquapulse is a pioneering aqua-tech company revolutionizing aquaculture through sustainable practices, advanced technology, and expert advisory services. With a team of industry-leading professionals, we focus on efficient resource use and modernizing the aquaculture industry, making it a unique and impactful investment opportunity."
  },
  {
    question: "How does Aquapulse ensure the sustainability of its operations?",
    answer: "We prioritize sustainable practices by utilizing advanced technologies to minimize post-harvest losses, optimize resource utilization, and maintain environmental stewardship, ensuring the long-term viability of aquaculture ecosystems."
  },
  {
    question: "What services does Aquapulse offer to farmers?",
    answer: "Aquapulse provides tailored solutions and advanced technology to minimize post-harvest losses, enhance efficiency, and promote sustainability in aquaculture. Our services include supply chain optimization, market linkage and export facilitation, regulatory compliance support, environmental monitoring, expert advisory, and virtual farming assistance."
  },
  {
    question: "How can input dealers benefit from partnering with Aquapulse?",
    answer: "Input dealers collaborating with Aquapulse gain access to a network of aquaculture professionals and farmers, facilitating the distribution of sustainable and efficient aquaculture inputs. Our platform enhances market reach and provides opportunities for business growth."
  },
  {
    question: "What support does Aquapulse offer for export management?",
    answer: "Aquapulse assists clients in navigating international markets by offering market linkage and export facilitation services. We ensure compliance with global standards, streamline supply chains, and provide insights into market trends to help businesses expand globally."
  },
  {
    question: "Is my data secure with Aquapulse?",
    answer: "We prioritize your data security with enterprise-grade encryption, secure authentication, and strict privacy controls. Your information is protected according to industry best practices."
  }
];


export default function Faq() {
  return (
    <Section
      id="faq"
      title="FAQ"
      subtitle="Frequently Asked Questions"
      className="bg-background"
    >
      <div className="w-full max-w-2xl mx-auto py-10">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b">
              <AccordionTrigger className="text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}