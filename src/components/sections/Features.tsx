"use client"
import { motion } from "framer-motion";
import { Brain, Clock, Calendar, Cloud, Users, Bell } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Scheduling",
    description: "Intelligent scheduling that learns your preferences and optimizes your time."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Smart Time Blocking",
    description: "Automatically block time for focused work and personal activities."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Predictive Event Planning",
    description: "AI suggests optimal times for meetings and events based on your habits."
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Sync",
    description: "Access your schedule across all devices in real-time."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Collaboration",
    description: "Easily coordinate schedules with team members and clients."
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Smart Reminders",
    description: "Contextual notifications that adapt to your schedule and priorities."
  }
];

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg overflow-hidden bg-card p-6 flex flex-col items-center text-center"
    >
      <div className="flex flex-col items-center gap-y-4 mb-4">
        <div className="bg-gradient-to-b from-primary to-primary/80 p-2 rounded-lg text-white">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-card-foreground">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <a className="text-sm text-primary hover:underline" href="#">
        Learn more &gt;
      </a>
    </motion.div>
  );
};

export default function Features() {
  return (
    <section id="features">
      <div className="sm:py-20 py-12 max-w-screen-lg mx-auto container px-10">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase"
          >
            Features
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase"
          >
            Powerful features
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}