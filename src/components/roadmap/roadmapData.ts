import {
  Terminal,
  GitBranch,
  Calculator,
  Database,
  BrainCircuit,
  Server,
  Globe,
  Eye,
  MessageSquare,
  BarChart3,
  Zap,
  Settings,
} from "lucide-react";
import type React from "react";

export interface Phase {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  skills: Array<{
    icon: React.ElementType;
    name: string;
  }>;
  link: string;
  color: string;
}

export const phases: Phase[] = [
  {
    id: "fundamentals",
    title: "Engineering Fundamentals",
    subtitle: "Build Your Foundation",
    duration: "2-4 months",
    description:
      "Master terminal, Git, Python data engineering, and the math that powers AI. This phase builds the bedrock skills every professional AI engineer needs.",
    skills: [
      { icon: Terminal, name: "Terminal & CLI" },
      { icon: GitBranch, name: "Git & Version Control" },
      { icon: Calculator, name: "Math for AI" },
      { icon: Database, name: "Data Engineering" },
    ],
    link: "/docs/engineering-fundamentals",
    color: "var(--accent-gold)",
  },
  {
    id: "core-systems",
    title: "Core Systems",
    subtitle: "Master ML Foundations",
    duration: "3-6 months",
    description:
      "Deep dive into PyTorch, neural networks, systems engineering, and deployment. Build end-to-end ML systems from training to production.",
    skills: [
      { icon: BrainCircuit, name: "Deep Learning" },
      { icon: Server, name: "Systems & Docker" },
      { icon: Globe, name: "API & Deployment" },
    ],
    link: "/docs/softlanding",
    color: "var(--accent-amber)",
  },
  {
    id: "specialization",
    title: "Specialization",
    subtitle: "Choose Your Path",
    duration: "2-4 months",
    description:
      "Develop deep expertise in Computer Vision, NLP & LLMs, Data Science, Generative AI, or AI Software Engineering. End with production-grade capstone projects.",
    skills: [
      { icon: Eye, name: "Computer Vision" },
      { icon: MessageSquare, name: "NLP & LLMs" },
      { icon: BarChart3, name: "Data Science" },
      { icon: Zap, name: "Generative AI" },
      { icon: Settings, name: "AI Software Eng" },
    ],
    link: "/docs/softlanding/specializations",
    color: "var(--accent-orange)",
  },
];
