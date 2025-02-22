"use client"
import { motion } from "framer-motion";
import {
  Droplets, // For water management
  Fish, // For fish health
  Leaf, // For eco-friendly solutions
  BarChart3, // For analytics
  Users, // For consultation
  Globe, // For global market
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const features = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Sustainable Water Management",
    description: "Implementing eco-friendly water recycling and filtration systems to minimize environmental impact."
  },
  {
    icon: <Fish className="w-6 h-6" />,
    title: "Advanced Fish Health Monitoring",
    description: "Utilizing IoT devices and AI analytics to monitor fish health in real-time, ensuring optimal growth conditions."
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Eco-Friendly Feed Solutions",
    description: "Developing and providing sustainable feed options that promote healthy aquaculture ecosystems."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data-Driven Farm Management",
    description: "Offering analytics platforms that help farmers make informed decisions to maximize yield and efficiency."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Advisory Services",
    description: "Providing guidance on best practices, regulatory compliance, and innovative techniques in aquaculture."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Market Access",
    description: "Assisting clients in navigating international markets to expand their aquaculture businesses globally."
  }
];

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg overflow-hidden bg-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
    >
      <div className="flex flex-col items-center gap-y-4 mb-4">
        <motion.div
          className="bg-gradient-to-r from-sky-400 to-blue-600 p-3 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h2 className="text-xl font-semibold  bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <motion.a
        className="text-sm bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
        href="#"
        whileHover={{ x: 5 }}
      >
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default function Features() {
  return (
    <section id="features" className="bg-gradient-to-b from-white to-gray-50">
      <div className="sm:py-20 py-12 max-w-screen-lg mx-auto container px-4 md:px-8">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-balance font-mono font-semibold tracking-wider uppercase bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
          >
            Features
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg  text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tighter text-foreground"
          >
            Comprehensive
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"> Aquaculture </span>
            Solutions
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