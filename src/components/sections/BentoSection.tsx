"use client"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface BentoItemProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  fullWidth?: boolean;
  index: number;
}

const BentoItem = ({ title, description, image, imageAlt, fullWidth, index }: BentoItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 50
      }}
      viewport={{ once: true }}
      className={`${fullWidth ? 'md:col-span-2' : ''}`}
    >
      <Card className="bg-muted border-none rounded-3xl overflow-hidden">
        <CardContent className="p-4 sm:p-6 !pb-0 grid grid-rows-1">
          <div className="flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-foreground mb-4">
              {description}
            </p>
          </div>
          <div className={`flex justify-center ${fullWidth ? 'sm:space-x-4' : ''}`}>
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-64 sm:h-96 rounded-xl object-cover object-top"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function BentoSection() {
  const bentoItems = [
    {
      title: "AI-Powered Scheduling",
      description: "Our app uses advanced AI to optimize your calendar, suggesting the best times for meetings and tasks based on your preferences and habits.",
      image: "https://mobile-magicui.vercel.app/Device-1.png",
      imageAlt: "AI scheduling illustration",
      fullWidth: true
    },
    {
      title: "Smart Time Blocking",
      description: "Automatically block out time for focused work, breaks, and personal activities to maintain a balanced and productive schedule.",
      image: "https://mobile-magicui.vercel.app/Device-2.png",
      imageAlt: "Time blocking illustration"
    },
    {
      title: "Intelligent Reminders",
      description: "Receive context-aware notifications that adapt to your schedule, ensuring you never miss important events or deadlines.",
      image: "https://mobile-magicui.vercel.app/Device-3.png",
      imageAlt: "Smart reminders illustration"
    },
    {
      title: "Team Collaboration",
      description: "Effortlessly coordinate schedules with team members and clients, finding optimal meeting times across different time zones.",
      image: "https://mobile-magicui.vercel.app/Device-4.png",
      imageAlt: "Team collaboration illustration",
      fullWidth: true
    }
  ];

  return (
    <section id="bento">
      <div className="sm:py-20 py-12 mx-auto max-w-screen-md px-10">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-balance font-mono font-semibold tracking-wider uppercase bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
          >
            Benefits
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase"
          >
            It does a lot of things
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bentoItems.map((item, index) => (
            <BentoItem
              key={item.title}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
