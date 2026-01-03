import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pranjal Panging – Portfolio",
  description: "Pranjal Panging is a student developer specializing in AI, Rust, and C++. Exploring the intersection of High-Performance Computing, Mathematics, and Physics.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Pranjal Panging",
      url: "https://pranjalpanging.vercel.app",
      sameAs: [
        "https://github.com/pranjalpanging",
        "https://linkedin.com/in/pranjalpanging",
        "https://www.instagram.com/pangnosis",
      ],
    }),
  },
};
