"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(smoothScroll, [0, 0.8], [1, 0]);
  const imageScale = useTransform(smoothScroll, [0, 0.5], [1, 1.1]);
  const textX = useTransform(smoothScroll, [0, 0.5], [0, 50]);

  const displacement = useTransform(smoothScroll, [0, 1], [0, 100]);

  return (
    <div
      ref={containerRef}
      className="relative h-[180vh] bg-[#020617] overflow-hidden"
    >
      <svg className="hidden">
        <filter id="displacementFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="2"
            result="noise"
          />
          <motion.feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={displacement}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            style={{ y: useTransform(smoothScroll, [0, 1], [0, -100]) }}
            className="absolute inset-0 bg-linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px) bg-size:4rem_4rem opacity-20"
          />
          <div className="absolute inset-0 bg-linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06)) bg-size:100%_2px,3px_100% pointer-events-none" />
        </div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-24"
        >
          <motion.div
            style={{
              scale: imageScale,
              filter: "url(#displacementFilter)",
            }}
            className="relative group"
          >
            <div className="w-56 h-56 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-blue-500/20 bg-slate-900/50 backdrop-blur-sm p-2 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
              <img
                src="/images/myimages/pranjalpanging.avif"
                alt="Pranjal Panging"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-4 -right-4 font-mono text-[9px] text-blue-500/60 bg-slate-950 px-2 py-1 border border-blue-500/20">
              0x42_LOGIC_INIT
            </div>
          </motion.div>

          <div className="flex flex-col items-center md:items-start">
            <motion.div style={{ x: textX }} className="space-y-0">
              <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-white leading-[0.75] tracking-tighter uppercase italic">
                PRANJAL
              </h1>
              <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] leading-[0.75] tracking-tighter uppercase ml-4">
                PANGING
              </h1>
            </motion.div>

            <motion.p className="mt-12 max-w-md text-slate-400 text-sm md:text-lg font-light leading-relaxed text-center md:text-left">
              I’m a full stack developer and student specializing in
              <span className="text-white"> mathematical logic</span>.
              Proficient in building systems with
              <span className="text-blue-400"> Python</span>,
              <span className="text-blue-400"> C++</span>, and
              <span className="text-blue-400 italic"> Rust</span>.
            </motion.p>
          </div>
        </motion.div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
          <span className="font-mono text-9px text-slate-600 rotate-90">
            SCROLL
          </span>
          <div className="w-2px h-32 bg-slate-800 relative">
            <motion.div
              style={{ scaleY: smoothScroll }}
              className="absolute inset-0 bg-blue-500 origin-top shadow-0_0_10px_#3b82f6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
