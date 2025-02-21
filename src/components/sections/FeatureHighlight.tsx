"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const Feature = ({ title, description, image, imageAlt, reverse }: FeatureProps) => {
  const direction = reverse ? 20 : -20;

  return (
    <div className={cn(
      "flex flex-col items-center justify-between pb-10 transition-all duration-500 ease-out",
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    )}>
      <motion.div
        initial={{ opacity: 0, x: direction }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "w-full lg:w-1/2 mb-10 lg:mb-0",
          reverse ? "lg:pl-8" : "lg:pr-8"
        )}
      >
        <div className="flex flex-col gap-4 max-w-sm text-center lg:text-left mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: direction / 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: direction / 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: direction / 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="rounded-full text-lg mx-auto lg:mx-0"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <div className="w-full lg:w-1/2">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={image}
          alt={imageAlt}
          className="w-full max-w-[300px] mx-auto"
        />
      </div>
    </div>
  );
};

const FeatureHighlight = () => {
  const features = [
    {
      title: "AI-Powered Scheduling",
      description: "Intelligent scheduling that learns your preferences and optimizes your time.",
      image: "https://mobile-magicui.vercel.app/Device-2.png",
      imageAlt: "AI-Powered Scheduling",
      reverse: true
    },
    {
      title: "Smart Time Blocking",
      description: "Automatically block time for focused work and personal activities.",
      image: "https://mobile-magicui.vercel.app/Device-3.png",
      imageAlt: "Smart Time Blocking",
      reverse: false
    },
    {
      title: "Predictive Event Planning",
      description: "AI suggests optimal times for meetings and events based on your habits.",
      image: "https://mobile-magicui.vercel.app/Device-4.png",
      imageAlt: "Predictive Event Planning",
      reverse: true
    }
  ];

  return (
    <section id="feature-highlight">
      <div className="container px-10 sm:py-20 py-12 mx-auto">
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

        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlight;
