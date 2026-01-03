import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://pranjalpanging.vercel.app"),

  title: {
    default: "Pranjal Panging – Portfolio",
    template: "%s | Pranjal Panging",
  },

  description:
    "Pranjal Panging is a student developer specializing in AI, Rust, and C++. Exploring the intersection of High-Performance Computing, Mathematics, and Physics.",

  applicationName: "Pranjal Panging Portfolio",
  category: "Technology",

  keywords: [
    "Pranjal Panging",
    "Pranjal Panging Portfolio",
    "Student Developer",
    "AI Enthusiast",
    "Rust Developer",
    "C++ Developer",
    "High-Performance Computing",
    "Machine Learning",
    "Systems Programming",
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
    title: "Pranjal Panging – Portfolio",
    description:
      "Pranjal Panging is a student developer specializing in AI, Rust, and C++. Exploring the intersection of High-Performance Computing, Mathematics, and Physics.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
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
        <main>{children}</main>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
