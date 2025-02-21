"use client"
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const Hero = () => {
  const devices = [1, 2, 3, 4, 5];
  const getYOffset = (index: number) => {
    if (index === 0 || index === 4) return 100;
    if (index === 1 || index === 3) return 50;
    return 0;
  };

  return (
    <section id="hero">
      <div className="sm:py-20 py-12 min-h-[100vh] w-full overflow-hidden">
        <main className="mx-auto pt-16 sm:pt-24 md:pt-32 text-center relative px-4">
          <div className="relative">
            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
              className="mb-16 relative z-20"
              style={{ transformOrigin: "center top" }}
            >
              <div className="bg-primary text-white text-xl font-bold p-4 h-20 w-20 flex items-center justify-center rounded-3xl mx-auto shadow-md">
                <Calendar className="w-auto h-[40px]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute inset-0 top-20 z-10"
            >
              Cal AI
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl font-bold mb-4 tracking-tighter"
            >
              Smart scheduling powered by AI.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-2xl mx-auto text-xl mb-8 font-medium text-balance"
            >
              Cal AI transforms your speech into text instantly. Perfect for quick note-taking,
              content creation, and capturing ideas on-the-go.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center mb-16"
            >
              <img
                src="https://mobile-magicui.vercel.app/download-black.svg"
                alt="Download"
                className="w-40 flex-shrink-0 dark:hidden block"
              />
              <img
                src="https://mobile-magicui.vercel.app/download-white.svg"
                alt="Download"
                className="w-40 flex-shrink-0 hidden dark:block"
              />
            </motion.div>
          </div>

          <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none">
            {devices.map((device, index) => (
              <motion.img
                key={device}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: getYOffset(index) }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 * index,
                  type: "spring",
                  stiffness: 50
                }}
                src={`https://mobile-magicui.vercel.app/Device-${device}.png`}
                alt="iPhone"
                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
              />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;