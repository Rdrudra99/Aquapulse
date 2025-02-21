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
    question: "How does AI improve my scheduling?",
    answer: "Our AI analyzes your scheduling patterns, preferences, and priorities to automatically optimize your calendar. It learns from your behavior to suggest the best times for meetings and helps prevent scheduling conflicts."
  },
  {
    question: "Can I integrate Cal AI with other apps?",
    answer: "Yes, Cal AI seamlessly integrates with popular calendar apps, productivity tools, and communication platforms. This ensures a smooth workflow across all your digital tools."
  },
  {
    question: "How does the team collaboration feature work?",
    answer: "Team collaboration allows you to share calendars, set group availability, and coordinate schedules effortlessly. The AI helps find optimal meeting times that work for all participants."
  },
  {
    question: "Is my data secure with Cal AI?",
    answer: "We prioritize your data security with enterprise-grade encryption, secure authentication, and strict privacy controls. Your scheduling data is protected according to industry best practices."
  },
  {
    question: "Can I use Cal AI offline?",
    answer: "While some features require internet connectivity, Cal AI includes offline capabilities for basic scheduling functions. Your data syncs automatically when you're back online."
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