"use client"
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BenefitCardProps {
  image: string;
  title: string;
}

const benefits = [
  {
    image: "https://mobile-magicui.vercel.app/Device-6.png",
    title: "Save hours each week with AI-optimized scheduling."
  },
  {
    image: "https://mobile-magicui.vercel.app/Device-7.png",
    title: "Reduce scheduling conflicts and double-bookings."
  },
  {
    image: "https://mobile-magicui.vercel.app/Device-8.png",
    title: "Improve work-life balance with smart time allocation."
  },
  {
    image: "https://mobile-magicui.vercel.app/Device-1.png",
    title: "Increase productivity with AI-driven time management insights."
  }
];

const BenefitCard = ({ image, title }: BenefitCardProps) => {
  return (
    <div className="w-full select-none px-4">
      <div className="h-[500px] relative rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out object-[0px_10px] hover:object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-muted to-transparent pointer-events-none" />
      </div>
      <div className="mt-4">
        <h2 className="text-balance text-xl tracking-tight font-semibold leading-[1.25] text-left text-foreground/80 dark:text-foreground/90">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default function Benefits() {
  return (
    <section id="benefits">
      <div className="sm:py-20 py-12 bg-muted relative max-w-screen">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase"
          >
            Benefits
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase"
          >
            What you can do with Cal AI
          </motion.h3>
        </div>

        <div className="px-4 md:px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              <CarouselItem className="hidden md:block pl-4 basis-1/12" aria-hidden="true" />
              {benefits.map((benefit, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-[calc(90%-1rem)] md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
                >
                  <BenefitCard {...benefit} />
                </CarouselItem>
              ))}
              <CarouselItem className="hidden md:block pl-4 basis-1/12" aria-hidden="true" />
            </CarouselContent>
            <div className="flex justify-center md:justify-end mt-4 md:mt-8 md:pr-32">
              <div className="flex gap-4">
                <CarouselPrevious className="static" />
                <CarouselNext className="static" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
