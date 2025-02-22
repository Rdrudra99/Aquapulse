// "use client"
// import { motion } from "framer-motion";
// import { Calendar } from "lucide-react";
// import Link from "next/link";

// const Hero = () => {
//   const devices = [1, 2, 3, 4, 5];
//   const getYOffset = (index: number) => {
//     if (index === 0 || index === 4) return 100;
//     if (index === 1 || index === 3) return 50;
//     return 0;
//   };

//   return (
//     <div className="relative flex max-w-7xl rounded-b-3xl my-2 md:my-20 mx-auto flex-col items-center justify-center pt-32 overflow-hidden px-4  bg-gradient-to-t from-[rgba(247,135,67,1)] via-[rgba(255,244,239,1)] to-[rgba(255,255,255,1)]">
//       {/* Background Circles */}
//       <div className="absolute inset-0 z-0 flex items-center justify-center">
//         <motion.div
//           className="absolute z-0 rounded-full border border-white/30"
//           style={{ width: '1400px', height: '1400px' }}
//         />
//         <motion.div
//           className="absolute z-0 rounded-full border border-white"
//           style={{
//             width: '1100px',
//             height: '1100px',
//             clipPath: 'circle(50% at 50% 50%)',
//             background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0) 60%)'
//           }}
//           animate={{
//             translateY: [-5, 5],
//             scale: [1, 1.02]
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//         />
//         <motion.div
//           className="absolute bg-white/5 z-2 rounded-full border border-[rgba(255,255,255,0.1)] shadow-[0_0_200px_80px_rgba(255,255,255,0.1)]"
//           style={{ width: '800px', height: '800px' }}
//           animate={{
//             translateY: [-8, 8],
//             scale: [1, 1.03]
//           }}
//           transition={{
//             duration: 2.5,
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="text-balance relative z-20 mx-auto mb-4 max-w-6xl text-center text-4xl font-semibold tracking-tight text-gray-700 md:text-7xl">
//         <h2 className="inline-block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)] bg-clip-text text-transparent">
//           Effortless{" "}
//           <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
//             Aquaculture
//           </span>
//         </h2>
//         <h2 className="inline-block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)] bg-clip-text text-transparent py-2">
//           That Makes{" "}
//           <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
//             Sustainability Simple
//           </span>
//         </h2>
//       </div>





//       <motion.p
//         className="relative z-20 mx-auto mt-4 max-w-2xl px-4 text-center text-base/6 text-gray-600 sm:text-base"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//       >
//         Manage aquaculture effortlessly. Optimize operations, reduce waste, and enhance sustainability with cutting-edge AI solutions from Aquapulse
//       </motion.p>

//       <motion.div
//         className="mb-8 mt-6 z-10 sm:mb-10 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:px-8 sm:flex-row md:mb-20"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <Link
//           href="/login"
//           className="px-4 py-2 text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 rounded-[6px] bg-[linear-gradient(181deg,_#5E5E5E_18.12%,_#000_99.57%)] shadow-[0px_4px_8px_0px_rgba(3,_7,_18,_0.06),_0px_2px_4px_0px_rgba(3,_7,_18,_0.06),_0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_1px_2px_rgba(255,_255,_255,_0.40)_inset,_0px_-1px_5px_2px_rgba(255,_255,_255,_0.40)_inset] text-white w-full sm:w-40 h-12 flex items-center justify-center"
//         >
//           Get Started
//         </Link>
//       </motion.div>

//       {/* Phone Mockup Component would go here */}
//       <div className="pt-[2rem] w-full min-h-[21rem] relative">
//         <div className="relative w-full max-w-[320px] mx-auto">
//           <img
//             src="/aqua/crop.png"
//             alt="Aquapulse App Mockup"
//             className="w-full h-auto object-contain"
//             loading="lazy"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


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