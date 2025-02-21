"use client"
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FeatureScroll = () => {
  return (
    <section id="feature-scroll">
      <div className="container px-4 sm:px-10 sm:py-20 py-12 mx-auto">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase"
          >
            Experience
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase"
          >
            An app unlike any other
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto select-none">
          {[6, 7, 8].map((num, index) => (
            <motion.img
              key={num}
              src={`https://mobile-magicui.vercel.app/Device-${num}.png`}
              alt={`iPhone ${index + 1}`}
              initial={{ y: 150 + (index * 50) }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 50
              }}
              className="w-full h-auto -z-10 max-w-[250px] sm:max-w-[300px] mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureScroll;
