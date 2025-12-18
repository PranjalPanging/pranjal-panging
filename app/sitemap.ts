import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pranjalpanging.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://pranjalpanging.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://pranjalpanging.vercel.app/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://pranjalpanging.vercel.app/contact",
      lastModified: new Date(),
    changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
