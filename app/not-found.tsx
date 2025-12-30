"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MoveLeft, Home, Search, LifeBuoy } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0f16] p-6 selection:bg-blue-500/30 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden"
          >
            <svg viewBox="0 0 200 200" className="w-64 h-64 z-10">
              <defs>
                <linearGradient
                  id="404-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="80"
                fontWeight="900"
                fill="url(#404-grad)"
                className="drop-shadow-2xl"
              >
                404
              </text>
            </svg>

            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] background-size:20px_20px" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 bg-slate-800 border border-slate-700 px-6 py-2 rounded-full shadow-2xl"
          >
            <span className="text-xs font-mono text-blue-400">
              ERROR_PAGE_NOT_FOUND
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Lost in{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                Cyberspace?
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-md">
              The page you're looking for doesn't exist or has been moved to
              another coordinate.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all active:scale-95"
              >
                <MoveLeft size={18} /> Go Back
              </button>

              <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
              >
                <Home size={18} /> Return Home
              </Link>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative max-w-sm group"
            >
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-200 transition-all"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                size={18}
              />
            </form>

            <div className="flex items-center gap-2 text-sm text-slate-500 pt-4">
              <LifeBuoy size={14} />
              <span>Think this is a mistake? </span>
              <Link href="/contact" className="text-blue-400 hover:underline">
                Report bug
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
