export interface Project {
  id: string;
  name: string;
  description: string;
  github: string;
  link: string;
  npm?: string;
  pypi?: string;
  tech: string[];
  achievement?: string;
}

export const projectsData: Project[] = [
  {
    id: "png-parser",
    name: "PNG Parser (WASM & Python)",
    description:
      "A high-performance steganography tool written in Rust. It enables embedding hidden data into PNG files using custom ancillary chunks, accessible via WebAssembly for browsers and a native Python extension.",
    tech: ["Rust", "WebAssembly", "Python", "TypeScript", "Maturin"],
    github: "https://github.com/PranjalPanging/png-parser",
    link: "",
    npm: "https://www.npmjs.com/package/@pranjalpanging/png-parser",
    pypi: "https://pypi.org/project/png-parser/",
    achievement: "Cross-platform Rust Core",
  },
  {
    id: "text2voice",
    name: "Text2Voice",
    description:
      "A Python Flask web application that converts text into speech in real-time. Features multiple voice presets (Normal, Male, Female, Robot) and allows users to download processed audio with custom filenames.",
    tech: ["Python", "Flask", "gTTS", "FFmpeg", "Pydub", "HTML/CSS"],
    github: "https://github.com/PranjalPanging/Text2Voice.git",
    link: "https://github.com/PranjalPanging/Text2Voice#installation",
  },
  {
    id: "video-to-mp3",
    name: "Video-to-MP3 Converter",
    description:
      "A private, local-first audio extraction tool. It allows users to convert video files to high-quality MP3s instantly using FFmpeg, ensuring data privacy by processing everything on the local machine.",
    tech: ["Python", "Flask", "FFmpeg", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/PranjalPanging/Video-MP3-Converter.git",
    link: "https://video-mp3-converter.onrender.com/",
    achievement: "Local-First Audio Extraction",
  },
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
