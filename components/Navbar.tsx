"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Pranjal Panging<span className="text-blue-600">.</span>
        </Link>
        <div></div>
      </div>
    </nav>
  );
}
