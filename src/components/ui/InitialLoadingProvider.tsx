"use client";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import { motion } from "framer-motion";

export default function InitialLoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen
          onAnimationComplete={() => {
            setTimeout(() => setIsLoading(false), 100);
          }}
        />
      )}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}