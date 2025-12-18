"use client";

import React from "react";
import { projectsData } from "../data/projects";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation Variants for staggering the list
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen w-full bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-20 -top-20 -left-20 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-500 rounded-full opacity-10 bottom-0 right-0 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-8 pt-20">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Projects
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Showcasing my journey in technology, mathematics, and innovation.
          </p>
        </motion.header>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                href={project.link}
                className="group block h-full p-8 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                {project.achievement && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-200 text-xs font-bold uppercase tracking-wider">
                    {project.achievement}
                  </div>
                )}

                <h2 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors mb-3">
                  {project.name}
                </h2>

                <p className="text-blue-50 leading-relaxed mb-6 text-sm md:text-base opacity-90">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/10 border border-white/5 text-blue-100 rounded-lg text-xs font-medium backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
