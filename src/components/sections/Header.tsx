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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navItems = [
    { label: "Blog", href: "/" },
    { label: 'About Us', href: '/about-us' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];


  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <motion.div
      className="w-full fixed top-2 inset-x-0 z-50 "
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
            href="/contact"
            className="px-4 flex justify-center items-center gap-2 py-2 bg-gradient-to-r from-sky-400 to-blue-600 text-white text-sm font-semibold rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200"
          >
            Contact Us
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </Link>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        className="flex lg:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 mx-4 flex-row self-center items-center justify-between mt-2 border rounded-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-between items-center w-full px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/aqua/logo.svg" alt="logo" width={32} height={16} />
            <span className="font-medium text-black text-base">Aquapulse</span>
          </Link>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
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
                    onClick={() => setIsSheetOpen(false)}
                    className="text-lg font-medium text-gray-600 hover:text-black transition-all duration-200 px-2 py-1.5 rounded-lg hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Link
                    href="#contact"
                    onClick={() => setIsSheetOpen(false)}
                    className="w-full text-white bg-gradient-to-r from-sky-400 to-blue-600 px-4 py-2 text-center text-sm font-semibold rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200"
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