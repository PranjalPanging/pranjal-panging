"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";

export default function UniqueHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative h-[120vh] w-full bg-[#0f172a] overflow-hidden selection:bg-blue-500/30"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size:40px_40px" />
        <div
          className="absolute inset-0 opacity-[0.2] transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.3), transparent 40%)`,
          }}
        />
      </div>
      <div className="absolute inset-0 pointer-events-none font-mono text-[10px] uppercase tracking-tighter text-blue-400/20">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -250]) }}
          className="absolute top-[20%] left-[8%] rotate-90 origin-left"
        >
          Structure :: $S \rightarrow NP \ VP$
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -450]) }}
          className="absolute bottom-[25%] right-[8%] -rotate-90 origin-right"
        >
          Entropy :: $H(X) = -\sum P(x)\log P(x)$
        </motion.div>
      </div>
      <motion.div
        style={{ opacity, scale }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-10 px-6"
      >
        <div className="relative p-12 md:p-20 rounded-[4rem] bg-white/2 border border-white/10 backdrop-blur-3xl shadow-2xl">
          <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-blue-500/50" />
          <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-purple-500/50" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.4em] mb-8 uppercase">
              Portfolio
            </span>
            <h1 className="text-6xl md:text-[8rem] font-black text-white leading-none tracking-tighter uppercase mb-2">
              Pranjal
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-slate-500">
                Panging
              </span>
            </h1>
            <p className="text-slate-400 font-mono text-[11px] md:text-xs tracking-[0.5em] uppercase mt-6">
              Logic • Structure • Syntax
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase text-[10px] tracking-[0.2em] rounded-xl transition-all shadow-lg shadow-blue-900/20"
            >
              Initialize Exploration
            </motion.a>

            <div className="flex items-center gap-6">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/PranjalPanging",
                },
                { icon: <FaLinkedin />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  whileHover={{ y: -3, color: "#60a5fa" }}
                  className="text-slate-500 text-xl transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase">
            Scroll to Deepen
          </span>
          <FaChevronDown className="text-blue-500" />
        </motion.div>
      </motion.div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-20">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2px h-12 bg-white/5 relative rounded-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-blue-500 origin-top"
              style={{ scaleY: smoothProgress }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
