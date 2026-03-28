"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "@docusaurus/Link";
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
  ChevronRight,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import styles from "./LearningRoadmap.module.css";

interface Phase {
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

const phases: Phase[] = [
  {
    id: "fundamentals",
    title: "Engineering Fundamentals",
    subtitle: "Build Your Foundation",
    duration: "2-4 months",
    description:
      "Master terminal, Git, Data Manipulation, and the math that powers AI. This phase builds the bedrock skills every professional AI engineer needs.",
    skills: [
      { icon: Terminal, name: "Terminal & CLI" },
      { icon: GitBranch, name: "Git & Version Control" },
      { icon: Calculator, name: "Math for AI" },
      { icon: Database, name: "Data Manipulation" },
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

export function LearningRoadmap() {
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [pathProgress, setPathProgress] = useState(0);

  // Animate path progress when in view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setPathProgress(100);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section className={styles.roadmapSection} ref={containerRef}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Your Learning Journey</h2>
          <p className={styles.sectionSubtitle}>
            A structured path from fundamentals to AI engineering mastery. Click
            on each phase to learn more.
          </p>
        </motion.div>

        {/* Desktop Roadmap */}
        <div className={styles.roadmapContainer}>
          {/* SVG Path connecting phases */}
          <svg
            className={styles.connectingPath}
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="var(--accent-gold)" />
                <stop offset="50%" stopColor="var(--accent-amber)" />
                <stop offset="100%" stopColor="var(--accent-orange)" />
              </linearGradient>
            </defs>
            {/* Background path */}
            <path
              d="M 50 60 Q 250 60 333 60 Q 416 60 500 60 Q 584 60 666 60 Q 750 60 950 60"
              fill="none"
              stroke="var(--ifm-color-emphasis-200)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Animated progress path */}
            <motion.path
              d="M 50 60 Q 250 60 333 60 Q 416 60 500 60 Q 584 60 666 60 Q 750 60 950 60"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: pathProgress / 100 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </svg>

          {/* Phase Cards */}
          <div className={styles.phasesRow}>
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className={styles.phaseWrapper}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Phase node/marker */}
                <motion.div
                  className={styles.phaseNode}
                  style={
                    {
                      "--phase-color": phase.color,
                    } as React.CSSProperties
                  }
                  whileHover={{ scale: 1.15 }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.6 + index * 0.2,
                  }}
                  onClick={() =>
                    setActivePhase(activePhase === phase.id ? null : phase.id)
                  }
                >
                  <span className={styles.phaseNumber}>{index + 1}</span>
                </motion.div>

                {/* Phase Card */}
                <motion.div
                  className={`${styles.phaseCard} ${activePhase === phase.id ? styles.phaseCardActive : ""}`}
                  style={
                    {
                      "--phase-color": phase.color,
                    } as React.CSSProperties
                  }
                  onClick={() =>
                    setActivePhase(activePhase === phase.id ? null : phase.id)
                  }
                  whileHover={{
                    y: -8,
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.15), 0 0 30px ${phase.color}20`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.phaseCardHeader}>
                    <h3 className={styles.phaseTitle}>{phase.title}</h3>
                    <span className={styles.phaseDuration}>
                      <Clock size={14} />
                      {phase.duration}
                    </span>
                  </div>

                  <p className={styles.phaseSubtitle}>{phase.subtitle}</p>

                  {/* Skills preview */}
                  <div className={styles.skillsPreview}>
                    {phase.skills.slice(0, 3).map((skill, i) => (
                      <div key={i} className={styles.skillBadge}>
                        <skill.icon size={14} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                    {phase.skills.length > 3 && (
                      <div className={styles.skillBadge}>
                        +{phase.skills.length - 3} more
                      </div>
                    )}
                  </div>

                  <div className={styles.expandIndicator}>
                    <ChevronRight
                      size={18}
                      className={activePhase === phase.id ? styles.rotated : ""}
                    />
                  </div>
                </motion.div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {activePhase === phase.id && (
                    <motion.div
                      className={styles.phaseDetails}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <p className={styles.phaseDescription}>
                        {phase.description}
                      </p>

                      <div className={styles.allSkills}>
                        <h4>Skills You'll Gain:</h4>
                        <div className={styles.skillsGrid}>
                          {phase.skills.map((skill, i) => (
                            <div key={i} className={styles.skillItem}>
                              <CheckCircle
                                size={16}
                                style={{ color: phase.color }}
                              />
                              <span>{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link to={phase.link} className={styles.phaseLink}>
                        <span>Start {phase.title}</span>
                        <ArrowRight size={18} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className={styles.roadmapCTA}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p>Ready to start your AI engineering journey?</p>
          <Link to="/docs" className={styles.ctaButton}>
            <span>View Full Curriculum</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default LearningRoadmap;
