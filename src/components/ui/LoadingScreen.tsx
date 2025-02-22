"use client";
import { motion } from "framer-motion";
import { Droplet } from "lucide-react";
import { useEffect } from "react";

interface LoadingScreenProps {
  onAnimationComplete: () => void;
}

const LoadingScreen = ({ onAnimationComplete }: LoadingScreenProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 1, delay: 3.5, ease: "easeInOut" }}
      onAnimationComplete={onAnimationComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative">
        {/* Main Calendar Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          className="relative z-10"
        >
          <div className="bg-gradient-to-r from-sky-400 to-blue-600 text-primary-foreground p-10 rounded-[4rem] shadow-2xl">
            <Droplet className="w-32 h-32" />
          </div>
        </motion.div>

        {/* Glowing Background Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: [0, 0.2, 0.1] }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4, times: [0, 0.7, 1] }}
          className="absolute inset-0 blur-[100px] bg-primary rounded-[4rem]"
        />

        {/* Additional Pulsing Effect */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 blur-[80px] bg-primary/30 rounded-[4rem]"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;