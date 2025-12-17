import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://pranjalpanging.vercel.app"),

  title: {
    default: "Pranjal Panging – AI, ML, Maths & Physics Enthusiast",
    template: "%s | Pranjal Panging",
  },

  description:
    "Pranjal Panging is a student developer passionate about Artificial Intelligence, Machine Learning, Mathematics, and Physics. Explore projects, skills, and a growing STEM journey.",

  applicationName: "Pranjal Panging Portfolio",
  category: "Technology",

  keywords: [
    "Pranjal Panging",
    "Pranjal Panging Portfolio",
    "Student Developer",
    "AI Enthusiast",
    "Machine Learning",
    "Web Development",
    "Mathematics",
    "Physics",
    "STEM Student",
    "Coding Projects",
    "Personal Website",
  ],

  authors: [{ name: "Pranjal Panging" }],
  creator: "Pranjal Panging",
  publisher: "Pranjal Panging",

  alternates: {
    canonical: "https://pranjalpanging.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  referrer: "origin-when-cross-origin",
  themeColor: "#0f172a",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  verification: {
    google: "JfWB9MEO4HuBuFkpgAopL7Qq_4aaBmm8YDRJaW6lAqo",
  },

  openGraph: {
    title: "Pranjal Panging – AI, ML, Maths & Physics Enthusiast",
    description:
      "Student developer exploring AI, Machine Learning, Mathematics, and Physics. Discover projects and skills.",
    url: "https://pranjalpanging.vercel.app",
    siteName: "Pranjal Panging Personal Website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicons/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranjal Panging Personal Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pranjal Panging – AI, ML, Maths & Physics Enthusiast",
    description:
      "Projects, AI/ML skills, and interests in Mathematics & Physics.",
    images: ["/favicons/og-image.png"],
    creator: "@pranjalpanging_",
  },

  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },

  appleWebApp: {
    capable: true,
    title: "Pranjal Panging",
    statusBarStyle: "black-translucent",
  },

  archives: ["https://pranjalpanging.vercel.app/projects"],
  assets: ["https://pranjalpanging.vercel.app"],

  other: {
    "google-site-verification": "JfWB9MEO4HuBuFkpgAopL7Qq_4aaBmm8YDRJaW6lAqo",
    "msapplication-TileColor": "#0f172a",
    "msapplication-config": "/favicons/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
