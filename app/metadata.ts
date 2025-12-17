import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pranjal Panging – AI, ML, Maths & Physics Enthusiast",
  description: "...",
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
