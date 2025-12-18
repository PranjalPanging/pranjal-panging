export interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
  github: string;
  tech: string[];
  achievement?: string;
}

export const projectsData: Project[] = [
  {
    id: "museum-guide",
    name: "The Museum Guide (Smart City)",
    achievement: "AI Vidyasetu 1.0 Hackathon Project",
    description:
      "A full-stack cultural discovery platform developed for the 'Code for New Bharat' Hackathon. It features a searchable directory of 15+ Indian museums, an AI-powered 'Smart Artifact Scanner', and a personalized user dashboard.",
    link: "/projects/museum-guide/",
    github: "https://github.com/PranjalPanging/the_museum_guide-smart_city.git",
    tech: ["React", "Tailwind CSS", "Supabase", "Gemini API", "Vite"],
  },
];
