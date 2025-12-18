export interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
  tech: string[];
  achievement?: string;
}

export const projectsData: Project[] = [
  {
    id: "museum-guide",
    name: "The Museum Guide (Smart City)",
    description:
      "The Museum Guide is a smart cultural discovery and journey-tracking platform designed to help users explore India’s rich museum heritage in one centralized place. The platform not only allows users to discover museums across India but also helps them track their cultural journey, record experiences, and receive AI-powered insights to enhance their visits. Users can sign up and log in securely to access a personalized dashboard where their entire museum journey is visualized. The application combines discovery, memory-keeping, and AI assistance to make museum exploration more engaging and meaningful.",
    link: "/projects/museum-guide/",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Gemini API"],
  },
];
