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
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
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

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO at InnovateTech",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    description: (
      <p>
        The tools provided by <strong>#WhyMe</strong> have completely revolutionized our approach to innovation.
        <Highlight>
          Faster development cycles and streamlined workflows.
        </Highlight>{" "}
        Essential for any tech-driven company.
      </p>
    ),
  },
  {
    name: "Samantha Lee",
    role: "Marketing Director at NextGen Solutions",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    description: (
      <p>
        <strong>#WhyMe</strong> has transformed our marketing campaigns with data-driven insights.
        <Highlight>
          We’ve seen significant growth in engagement and ROI.
        </Highlight>{" "}
        Highly recommended for marketing professionals.
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Founder & CEO at StartUp Grid",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        Partnering with <strong>#WhyMe</strong> has given us the tools to scale rapidly.
        <Highlight>
          Their platform has doubled our operational efficiency.
        </Highlight>{" "}
        A must-have for any growing startup.
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Product Manager at Digital Wave",
    img: "https://randomuser.me/api/portraits/women/83.jpg",
    description: (
      <p>
        <strong>#WhyMe</strong> has simplified product management with cutting-edge solutions.
        <Highlight>
          Collaboration and efficiency are at an all-time high.
        </Highlight>{" "}
        A game-changer for product teams.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Data Scientist at FinTech Innovations",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    description: (
      <p>
        The advanced analytics provided by <strong>#WhyMe</strong> have elevated our predictive models.
        <Highlight>
          Real-time insights are now driving our strategies.
        </Highlight>{" "}
        Essential for the financial sector.
      </p>
    ),
  },
  {
    name: "Linda Wu",
    role: "VP of Operations at LogiChain Solutions",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    description: (
      <p>
        The operational tools from <strong>#WhyMe</strong> have reduced our costs significantly.
        <Highlight>
          Precision and efficiency like never before.
        </Highlight>{" "}
        An invaluable partner for logistics.
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Head of R&D at EcoInnovate",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    description: (
      <p>
        Thanks to <strong>#WhyMe</strong>, we’ve integrated sustainable solutions seamlessly into our projects.
        <Highlight>
          Leading the charge in green technology.
        </Highlight>{" "}
        A key player in eco-innovation.
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "Chief Marketing Officer at Fashion Forward",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    description: (
      <p>
        <strong>#WhyMe</strong> has revolutionized how we approach trend analysis in fashion.
        <Highlight>
          Our campaigns are now more impactful and data-driven.
        </Highlight>{" "}
        A game-changer for fashion marketing.
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Director of IT at HealthTech Solutions",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
    description: (
      <p>
        The AI-powered solutions from <strong>#WhyMe</strong> have improved patient care systems dramatically.
        <Highlight>
          Healthcare and technology in perfect harmony.
        </Highlight>{" "}
        Transforming the medical industry.
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "CEO at EduTech Innovations",
    img: "https://randomuser.me/api/portraits/women/73.jpg",
    description: (
      <p>
        With <strong>#WhyMe</strong>, our learning platforms now deliver personalized education experiences.
        <Highlight>
          Students are achieving better outcomes than ever before.
        </Highlight>{" "}
        Transforming education for the future.
      </p>
    ),
  },
  {
    name: "Jake Morrison",
    role: "CTO at SecureNet Tech",
    img: "https://randomuser.me/api/portraits/men/25.jpg",
    description: (
      <p>
        <strong>#WhyMe</strong> has set a new standard for data security in the industry.
        <Highlight>
          Trust and safety are our new cornerstones.
        </Highlight>{" "}
        Redefining cybersecurity.
      </p>
    ),
  },
  {
    name: "Nadia Ali",
    role: "Product Manager at Creative Solutions",
    img: "https://randomuser.me/api/portraits/women/78.jpg",
    description: (
      <p>
        <strong>#WhyMe</strong> has accelerated our creative processes with intuitive tools.
        <Highlight>
          Innovation and productivity have soared.
        </Highlight>{" "}
        Perfect for the creative industries.
      </p>
    ),
  },
  {
    name: "Omar Farooq",
    role: "Founder at Startup Hub",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    description: (
      <p>
        The startup insights provided by <strong>#WhyMe</strong> have been crucial for our growth.
        <Highlight>
          Data-driven decisions are now our foundation.
        </Highlight>{" "}
        A catalyst for startup success.
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