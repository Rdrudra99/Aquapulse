"use client"
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";



const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
    { label: "Recognitions", href: "#logo" },
    { label: "About Us", href: "#about" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <motion.div
      className="w-full fixed top-2 inset-x-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Desktop Navigation */}
      <motion.div
        className="hidden lg:flex max-w-5xl mx-auto flex-row self-center items-center justify-between py-3 border border-[#E5E5E5] px-8 rounded-full relative z-[100]"
        style={{
          width: "80%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(5px)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Logo */}
        <Link href="/" className="font-normal flex gap-2 justify-center items-center text-sm text-black px-2 py-1 shrink-0 relative z-20">
          <Image src="/aqua/logo.svg" alt="logo" width={40} height={20} />
          <span className="font-medium text-black text-lg">Aquapulse</span>
        </Link>

        {/* Navigation Links */}
        <div className="lg:flex flex-row flex-1 items-center justify-center space-x-6 text-sm">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              <Link
                href={item.href}
                className="text-black/90 relative px-3 py-1.5 transition-colors hover:text-black font-medium"
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-600 text-white text-sm font-semibold rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        className="flex lg:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-between items-center w-full px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/aqua/logo.svg" alt="logo" width={32} height={16} />
            <span className="font-medium text-black text-base">Aquapulse</span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="font-normal flex gap-2 justify-start items-center text-sm text-black py-1 shrink-0 relative z-20">
                    <Image src="/aqua/logo.svg" alt="logo" width={40} height={20} />
                    <span className="font-medium text-black text-lg">Aquapulse</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-gray-600 hover:text-black transition-all duration-200 px-2 py-1.5 rounded-lg hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Link
                    href="#contact"
                    className="w-full  text-white bg-gradient-to-r from-sky-400 to-blue-600 px-4 py-2 text-center text-sm font-semibold rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;