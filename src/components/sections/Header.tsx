"use client"
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
    { label: "Recognitions", href: "/recognitions" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 p-0 bg-background/60 backdrop-blur"
    >
      <div className="flex justify-between items-center container mx-auto p-2">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Calendar className="w-6 h-6" />
          <span className="font-bold text-xl">Cal AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="rounded-full"
          >
            <Link href="#">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={"bottom"}>
              <SheetTitle>
                <Link
                  href="/"
                  title="brand-logo"
                  className="relative mr-6 flex items-center space-x-2 hover:opacity-80 transition-opacity"
                >
                  <Calendar className="w-6 h-6" />
                  <span className="font-bold text-xl">Cal AI</span>
                </Link>
              </SheetTitle>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="rounded-full w-full"
                >
                  <Link href="#">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute w-full bottom-0"
      />
    </motion.header>
  );
}