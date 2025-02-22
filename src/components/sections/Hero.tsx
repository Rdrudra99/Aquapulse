"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const devices = [
  "/aqua/3.png",
  "/aqua/2.png",
  "/aqua/4.png",
  "/aqua/1.png",
  "/aqua/5.png",
];

const getYOffset = (index: number) => {
  if (index === 0 || index === 4) return 100;
  if (index === 1 || index === 3) return 50;
  return 0;
};

const Hero = () => {
  return (
    <section className="relative pb-32 overflow-hidden md:pt-40 pt-40">
      {/* Background gradient */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* New badge */}
          <Link
            href="/"
            className="inline-flex items-center rounded-full gap-2 px-4 py-2 mb-8  bg-[#F9FAFB] border border-[rgba(104,104,129,0.1)] hover:bg-gray-50 transition-colors"
          >
            <span className="px-3 py-1 text-sm text-white bg-gradient-to-r from-sky-400 to-blue-600 rounded-full">
              New
            </span>
            <span className="text-gray-600">Your Partner in Blue Revolution</span>
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </Link>

          {/* Main heading */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aquaculture Reinvented
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">AquaPulse</span>   App
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Empowering you to take charge of your financial future with intuitive tools and personalized insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="https://play.google.com/store/apps/details?id=org.aquapulse&hl=en"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full border-2 border-black hover:bg-gray-900 transition-colors"
            >
              <span className="font-semibold">Get AquaPulse App</span>
              <div className="p-1 border border-white/20 rounded-full">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full border-2 border-black hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold">Explore Features</span>
            </Link>
          </motion.div>
        </div>
        <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none md:mt-15 mt-10">
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
              src={device}
              alt="iPhone"
              className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;