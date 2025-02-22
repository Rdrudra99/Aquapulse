"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Section from "../ui/section";
import { Marquee } from "../magicui/marquee";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-sky-400/20 p-1 py-0.5 font-bold text-primary dark:bg-sky-400/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

// const testimonials = [
//   {
//     name: "Alex Rivera",
//     role: "CTO at InnovateTech",
//     img: "https://randomuser.me/api/portraits/men/91.jpg",
//     description: (
//       <p>
//         The tools provided by <strong>#WhyMe</strong> have completely revolutionized our approach to innovation.
//         <Highlight>
//           Faster development cycles and streamlined workflows.
//         </Highlight>{" "}
//         Essential for any tech-driven company.
//       </p>
//     ),
//   },
//   {
//     name: "Samantha Lee",
//     role: "Marketing Director at NextGen Solutions",
//     img: "https://randomuser.me/api/portraits/women/12.jpg",
//     description: (
//       <p>
//         <strong>#WhyMe</strong> has transformed our marketing campaigns with data-driven insights.
//         <Highlight>
//           We’ve seen significant growth in engagement and ROI.
//         </Highlight>{" "}
//         Highly recommended for marketing professionals.
//       </p>
//     ),
//   },
//   {
//     name: "Raj Patel",
//     role: "Founder & CEO at StartUp Grid",
//     img: "https://randomuser.me/api/portraits/men/45.jpg",
//     description: (
//       <p>
//         Partnering with <strong>#WhyMe</strong> has given us the tools to scale rapidly.
//         <Highlight>
//           Their platform has doubled our operational efficiency.
//         </Highlight>{" "}
//         A must-have for any growing startup.
//       </p>
//     ),
//   },
//   {
//     name: "Emily Chen",
//     role: "Product Manager at Digital Wave",
//     img: "https://randomuser.me/api/portraits/women/83.jpg",
//     description: (
//       <p>
//         <strong>#WhyMe</strong> has simplified product management with cutting-edge solutions.
//         <Highlight>
//           Collaboration and efficiency are at an all-time high.
//         </Highlight>{" "}
//         A game-changer for product teams.
//       </p>
//     ),
//   },
//   {
//     name: "Michael Brown",
//     role: "Data Scientist at FinTech Innovations",
//     img: "https://randomuser.me/api/portraits/men/1.jpg",
//     description: (
//       <p>
//         The advanced analytics provided by <strong>#WhyMe</strong> have elevated our predictive models.
//         <Highlight>
//           Real-time insights are now driving our strategies.
//         </Highlight>{" "}
//         Essential for the financial sector.
//       </p>
//     ),
//   },
//   {
//     name: "Linda Wu",
//     role: "VP of Operations at LogiChain Solutions",
//     img: "https://randomuser.me/api/portraits/women/5.jpg",
//     description: (
//       <p>
//         The operational tools from <strong>#WhyMe</strong> have reduced our costs significantly.
//         <Highlight>
//           Precision and efficiency like never before.
//         </Highlight>{" "}
//         An invaluable partner for logistics.
//       </p>
//     ),
//   },
//   {
//     name: "Carlos Gomez",
//     role: "Head of R&D at EcoInnovate",
//     img: "https://randomuser.me/api/portraits/men/14.jpg",
//     description: (
//       <p>
//         Thanks to <strong>#WhyMe</strong>, we’ve integrated sustainable solutions seamlessly into our projects.
//         <Highlight>
//           Leading the charge in green technology.
//         </Highlight>{" "}
//         A key player in eco-innovation.
//       </p>
//     ),
//   },
//   {
//     name: "Aisha Khan",
//     role: "Chief Marketing Officer at Fashion Forward",
//     img: "https://randomuser.me/api/portraits/women/56.jpg",
//     description: (
//       <p>
//         <strong>#WhyMe</strong> has revolutionized how we approach trend analysis in fashion.
//         <Highlight>
//           Our campaigns are now more impactful and data-driven.
//         </Highlight>{" "}
//         A game-changer for fashion marketing.
//       </p>
//     ),
//   },
//   {
//     name: "Tom Chen",
//     role: "Director of IT at HealthTech Solutions",
//     img: "https://randomuser.me/api/portraits/men/18.jpg",
//     description: (
//       <p>
//         The AI-powered solutions from <strong>#WhyMe</strong> have improved patient care systems dramatically.
//         <Highlight>
//           Healthcare and technology in perfect harmony.
//         </Highlight>{" "}
//         Transforming the medical industry.
//       </p>
//     ),
//   },
//   {
//     name: "Sofia Patel",
//     role: "CEO at EduTech Innovations",
//     img: "https://randomuser.me/api/portraits/women/73.jpg",
//     description: (
//       <p>
//         With <strong>#WhyMe</strong>, our learning platforms now deliver personalized education experiences.
//         <Highlight>
//           Students are achieving better outcomes than ever before.
//         </Highlight>{" "}
//         Transforming education for the future.
//       </p>
//     ),
//   },
//   {
//     name: "Jake Morrison",
//     role: "CTO at SecureNet Tech",
//     img: "https://randomuser.me/api/portraits/men/25.jpg",
//     description: (
//       <p>
//         <strong>#WhyMe</strong> has set a new standard for data security in the industry.
//         <Highlight>
//           Trust and safety are our new cornerstones.
//         </Highlight>{" "}
//         Redefining cybersecurity.
//       </p>
//     ),
//   },
//   {
//     name: "Nadia Ali",
//     role: "Product Manager at Creative Solutions",
//     img: "https://randomuser.me/api/portraits/women/78.jpg",
//     description: (
//       <p>
//         <strong>#WhyMe</strong> has accelerated our creative processes with intuitive tools.
//         <Highlight>
//           Innovation and productivity have soared.
//         </Highlight>{" "}
//         Perfect for the creative industries.
//       </p>
//     ),
//   },
//   {
//     name: "Omar Farooq",
//     role: "Founder at Startup Hub",
//     img: "https://randomuser.me/api/portraits/men/54.jpg",
//     description: (
//       <p>
//         The startup insights provided by <strong>#WhyMe</strong> have been crucial for our growth.
//         <Highlight>
//           Data-driven decisions are now our foundation.
//         </Highlight>{" "}
//         A catalyst for startup success.
//       </p>
//     ),
//   },
// ];
const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Marine Biologist at Oceanic Research Institute",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        Collaborating with <strong>Aquapulse</strong> has significantly advanced our research.{" "}
        <Highlight>
          Their environmental monitoring tools provide precise data, enhancing our studies on marine ecosystems.
        </Highlight>{" "}
        A remarkable partner in marine science.
      </p>
    ),
  },
  {
    name: "Arjun Verma",
    role: "Owner of Verma Aquafarms",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        Since integrating <strong>Aquapulse</strong>'s solutions, our farm's productivity has soared.{" "}
        <Highlight>
          Post-harvest losses have decreased by 30%, and operational efficiency has improved remarkably.
        </Highlight>{" "}
        Essential for any aquaculture business.
      </p>
    ),
  },
  {
    name: "Sneha Patel",
    role: "Export Manager at FreshSea Ltd.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    description: (
      <p>
        <strong>Aquapulse</strong> has streamlined our export processes with their market linkage services.{" "}
        <Highlight>
          We've expanded into new international markets effortlessly.
        </Highlight>{" "}
        Their expertise is invaluable for export-oriented aquaculture enterprises.
      </p>
    ),
  },
  {
    name: "Ravi Kumar",
    role: "Sustainability Officer at GreenWave Aquatics",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    description: (
      <p>
        Implementing <strong>Aquapulse</strong>'s environmental management systems has been transformative.{" "}
        <Highlight>
          Our compliance with environmental regulations is now seamless, and we've achieved multiple certifications.
        </Highlight>{" "}
        A must-have for sustainable aquaculture operations.
      </p>
    ),
  },
  {
    name: "Anita Desai",
    role: "Technical Director at BlueFin Hatcheries",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    description: (
      <p>
        The expert advisory services from <strong>Aquapulse</strong> have elevated our hatchery's success rates.{" "}
        <Highlight>
          Their technical support is both prompt and insightful, addressing our challenges effectively.
        </Highlight>{" "}
        Highly recommended for technical advancements in aquaculture.
      </p>
    ),
  },
  {
    name: "Vikram Singh",
    role: "Operations Manager at AquaHarvest Inc.",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
    description: (
      <p>
        Partnering with <strong>Aquapulse</strong> has optimized our supply chain.{" "}
        <Highlight>
          We've reduced waste and improved delivery times, leading to increased customer satisfaction.
        </Highlight>{" "}
        A strategic ally in aquaculture logistics.
      </p>
    ),
  },
  {
    name: "Meera Nair",
    role: "Quality Assurance Lead at SeaFresh Co.",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
    description: (
      <p>
        <strong>Aquapulse</strong>'s compliance support has been invaluable.{" "}
        <Highlight>
          Navigating regulatory requirements is now straightforward, ensuring our products meet international standards.
        </Highlight>{" "}
        An essential service for quality-focused businesses.
      </p>
    ),
  },
  {
    name: "Suresh Iyer",
    role: "Founder & CEO at AquaInnovate Pvt. Ltd.",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
    description: (
      <p>
        The virtual farming solutions from <strong>Aquapulse</strong> have revolutionized our operations.{" "}
        <Highlight>
          Real-time monitoring and data analytics have led to informed decision-making and increased yields.
        </Highlight>{" "}
        A technological leap for modern aquaculture.
      </p>
    ),
  },
  {
    name: "Lakshmi Menon",
    role: "Head of Research at Marine Solutions",
    img: "https://randomuser.me/api/portraits/women/34.jpg",
    description: (
      <p>
        Collaborating with <strong>Aquapulse</strong> has provided us with cutting-edge tools for environmental monitoring.{" "}
        <Highlight>
          Their technology is integral to our research on sustainable aquaculture practices.
        </Highlight>{" "}
        A forward-thinking partner in marine research.
      </p>
    ),
  },
  {
    name: "Amitabh Roy",
    role: "Chief Financial Officer at OceanDelights Ltd.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    description: (
      <p>
        <strong>Aquapulse</strong>'s market insights have been a game-changer for our export strategies.{" "}
        <Highlight>
          We've tapped into new markets with confidence, boosting our revenue streams.
        </Highlight>{" "}
        Their expertise is a valuable asset for any seafood exporter.
      </p>
    ),
  },
  {
    name: "Pooja Reddy",
    role: "Aquaculture Specialist at AquaSphere Enterprises",
    img: "https://randomuser.me/api/portraits/women/40.jpg",
    description: (
      <p>
        The training programs offered by <strong>Aquapulse</strong> have upskilled our team effectively.{" "}
        <Highlight>
          We're now better equipped to manage challenges and implement innovative solutions in our operations.
        </Highlight>{" "}
        A commendable commitment to industry education.
      </p>
    ),
  },
  {
    name: "Rahul Chatterjee",
    role: "Logistics Coordinator at FishFleet Pvt. Ltd.",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
    description: (
      <p>
        <strong>Aquapulse</strong> has transformed our logistics with their supply chain optimization services.{" "}
        <Highlight>
          We've seen a 25% reduction in transit times and improved product freshness upon delivery.
        </Highlight>{" "}
        Indispensable for efficient distribution.
      </p>
    ),
  },
  {
    name: "Neha Gupta",
    role: "Environmental Analyst at BlueWater Corp.",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    description: (
      <p>
        The sustainability initiatives guided by <strong>Aquapulse</strong> have aligned our operations with global environmental standards.{" "}
        <Highlight>
          Our eco-friendly practices have been recognized industry-wide.
        </Highlight>{" "}
        A trusted partner in promoting green aquaculture.
      </p>
    ),
  },
];

const Testimonial = () => {
  return (
    <Section
      title="Testimonials"
      subtitle="What our users say"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
};

export default Testimonial;