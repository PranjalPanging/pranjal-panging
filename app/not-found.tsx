"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-b from-slate-50 to-white dark:from-[#0b1220] dark:to-[#071025] p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Illustration + floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-56 h-56"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              <g fill="none" fillRule="evenodd">
                <circle
                  cx="100"
                  cy="100"
                  r="92"
                  fill="url(#g1)"
                  opacity="0.12"
                />

                <g transform="translate(42 34)">
                  <text
                    x="0"
                    y="86"
                    fontSize="72"
                    fontWeight="700"
                    fill="#0f172a"
                    opacity="0.9"
                  >
                    404
                  </text>
                  <g transform="translate(78 6)">
                    <motion.path
                      d="M8 3c0 2.5 4 7 5 7s5-4.5 5-7S13 0 11 0 8 0.5 8 3z"
                      fill="#ffb86b"
                      initial={{ rotate: -12 }}
                      animate={{ rotate: 12 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 2,
                      }}
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          {/* tiny floating hint */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-full shadow"
          >
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Looks like this page floated away 🚀
            </span>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="px-2 md:px-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Oops — page not found
          </h1>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            The link you followed may be broken, or the page has been moved.
            Either way, we’ve sent a search party.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md transition"
            >
              ← Go back
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-lg hover:opacity-95 transition"
            >
              Home
            </Link>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="ml-0 sm:ml-2 mt-2 sm:mt-0"
            >
              <label htmlFor="q" className="sr-only">
                Search
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="q"
                  placeholder="Search the site"
                  className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-white/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                >
                  🔍
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-sm text-slate-500 dark:text-slate-400">
            <p>
              Tip: if you typed the address, double-check for typos. If you
              think this is a bug,{" "}
              <Link href="/contact" className="underline">
                let us know
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
