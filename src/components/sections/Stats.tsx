"use client";

import { motion } from "framer-motion";

const statsData = [
  {
    number: "3,175",
    text: "♂ AQUAFARMERS",
    description: "Male farmers actively engaged in sustainable aquaculture practices"
  },
  {
    number: "2,791",
    text: "♀ AQUAFARMERS",
    description: "Female farmers contributing to aquaculture development"
  },
  {
    number: "32",
    text: "♂ AQUAPRENEURS",
    description: "Male entrepreneurs leading aquaculture businesses"
  },
  {
    number: "23",
    text: "♀ AQUAPRENEURS",
    description: "Female entrepreneurs driving innovation in aquaculture"
  },
  {
    number: "20,485",
    text: "AREA UNDER SUSTAINABLE AQUACULTURE",
    description: "Total area in acres dedicated to sustainable aquaculture practices"
  },
  {
    number: "84",
    text: "VILLAGES COVERED",
    description: "Rural communities benefiting from our aquaculture initiatives"
  },
  {
    number: "287",
    text: "COASTLINE COVERED",
    description: "Kilometers of coastline under sustainable management"
  }
];

interface StatCardProps {
  number: string;
  text: string;
  description: string;
  index: number;
}

const StatCard = ({ number, text, description, index }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative p-6 rounded-xl border border-gray-200 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
  >
    {/* Grid Background */}
    <div
      className="overflow-hidden absolute rounded-xl inset-0 z-0"
      style={{
        backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px),
          linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}
    >
      <motion.div
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/30"
          style={{ opacity: 0.2 }} />
      </motion.div>
    </div>

    {/* Gradient Background */}
    <div className="absolute z-0 inset-0 rounded-xl h-full bg-gradient-to-br from-white/50 via-white/60 to-white/40 group-hover:from-white/60 group-hover:to-white/50 transition-all duration-300" />

    {/* Top Border Gradient */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-12 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent" />

    {/* Content */}
    <div className="relative">
      <motion.h3
        className="text-4xl font-bold mb-2  bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
      >
        {number}
      </motion.h3>
      <motion.p
        className="text-lg font-semibold text-gray-800 mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        {text}
      </motion.p>
      <motion.p
        className="text-sm text-muted-foreground leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.25 }}
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

export default function Stats() {
  return (
    <div className="w-full py-20 relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold mb-4">
          Our <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Impact</span> in Numbers
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Transforming aquaculture through sustainable practices and community engagement
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4" style={{ zIndex: 10 }}>
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} index={index} />
        ))}
      </div>

      {/* Bottom Gradient Effect */}
      <motion.div
        className="absolute rounded-full max-w-3xl mx-auto -bottom-10 w-full left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-40 relative bg-gradient-to-b from-white via-white/80 to-transparent">
          <div className="absolute z-10 inset-0 h-full bg-radial-gradient from-white/80 via-white/90 to-white" />
        </div>
      </motion.div>
    </div>
  );
}