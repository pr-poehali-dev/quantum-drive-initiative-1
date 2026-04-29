import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/fde83c03-8201-46b0-be91-060df6ad6a1d/files/63ea80f2-f9cc-4664-ab22-b75166b4c804.jpg"
          alt="Крутая кошка"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"></h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Премиум-корм для кошек, которые знают себе цену. Только натуральные ингредиенты, только высший класс.
        </p>
      </div>
    </div>
  );
}