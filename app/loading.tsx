"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(lettersRef.current, {
        y: () => gsap.utils.random(-100, 100),
        x: () => gsap.utils.random(-100, 100),
        rotation: () => gsap.utils.random(-90, 90),
        opacity: 0,
      });

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      tl.to(lettersRef.current, {
        y: 0,
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        stagger: { each: 0.05, from: "center" },
        ease: "expo.out",
      }).to(lettersRef.current, {
        y: () => gsap.utils.random(-50, 50),
        x: () => gsap.utils.random(-50, 50),
        rotation: () => gsap.utils.random(-45, 45),
        opacity: 0.3,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 1, 
      });

      const words = ["INITIALIZING", "OPTIMIZING", "LAUNCHING"];
      let index = 0;

      const switchWord = () => {
        gsap.to(wordRef.current, {
          opacity: 0,
          y: 5,
          duration: 0.3,
          onComplete: () => {
            index = (index + 1) % words.length;
            if (wordRef.current) {
              wordRef.current.innerText = words[index];
              gsap.to(wordRef.current, { opacity: 0.6, y: 0, duration: 0.3 });
            }
          },
        });
      };

      const wordTimer = setInterval(switchWord, 2000);
      return () => clearInterval(wordTimer);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex flex-col items-center justify-center bg-[#0a0f16] text-white relative overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -top-20 -left-20 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -bottom-20 -right-20" />

      <div className="flex text-5xl md:text-7xl font-black z-10 tracking-tighter">
        {"DEVELOPER".split("").map((letter, i) => (
          <div
            key={i}
            ref={(el) => {
              lettersRef.current[i] = el;
            }}
            className="inline-block select-none shadow-blue-500/20"
          >
            {letter}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div
          ref={wordRef}
          className="text-xs tracking-[0.3em] opacity-60 font-mono uppercase border-t border-white/10 pt-4"
        >
          INITIALIZING
        </div>

        <div className="w-32 h-2px bg-white/5 overflow-hidden">
            <motion.div
              className="h-full bg-blue-500 w-full"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
        </div>
      </div>
    </div>
  );
}
