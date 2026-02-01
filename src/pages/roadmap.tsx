"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Rocket,
  Target,
  Lock,
  Terminal,
  GitBranch,
  Calculator,
  BarChart,
  Database,
  Cpu,
  Brain,
  Server,
  Globe,
  MessageSquare,
  Camera,
  Settings,
  Award,
  BookOpen,
  ExternalLink,
  ChevronRight,
  Zap,
} from "lucide-react";

import styles from "./roadmap.module.css";

// Type definitions
interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  icon: any;
  duration: string;
  status: "available" | "locked";
  link?: string;
  skills?: string[];
  position: { x: number; y: number };
  color: string;
}

// Roadmap tree data with positioning
const roadmapTree: RoadmapNode[] = [
  // START NODE
  {
    id: "start",
    title: "Start Your Journey",
    description: "Begin your path to becoming a top 1% AI Engineer",
    icon: Rocket,
    duration: "",
    status: "available",
    position: { x: 50, y: 5 },
    color: "#3b82f6",
  },
  
  // SCHOOL PROGRAM - Row 1
  {
    id: "computational-thinking",
    title: "Computational Thinking",
    description: "Terminal, Git & Problem Solving",
    icon: Terminal,
    duration: "15-20h",
    status: "available",
    link: "/docs/school/computational-thinking",
    skills: ["Terminal", "Git", "VS Code", "Bash"],
    position: { x: 50, y: 15 },
    color: "#3b82f6",
  },
  
  // SCHOOL PROGRAM - Row 2 (Split into 2)
  {
    id: "calculus-algebra",
    title: "Calculus & Linear Algebra",
    description: "Math foundations for AI",
    icon: Calculator,
    duration: "160-180h",
    status: "available",
    link: "/docs/school/calculus-algebra",
    skills: ["Derivatives", "Gradients", "Matrices", "Vectors"],
    position: { x: 30, y: 28 },
    color: "#3b82f6",
  },
  {
    id: "data-engineering",
    title: "Python Data Engineering",
    description: "Pandas, NumPy & SQL",
    icon: Database,
    duration: "10-14h",
    status: "available",
    link: "/docs/school/data-engineering",
    skills: ["Pandas", "NumPy", "SQL", "Data Cleaning"],
    position: { x: 70, y: 28 },
    color: "#3b82f6",
  },
  
  // SCHOOL PROGRAM - Row 3 (Split into 2)
  {
    id: "probability-statistics",
    title: "Probability & Statistics",
    description: "Statistical foundations",
    icon: BarChart,
    duration: "60-90h",
    status: "available",
    link: "/docs/school/probability-statistics",
    skills: ["Distributions", "Testing", "Bayesian", "Modeling"],
    position: { x: 30, y: 41 },
    color: "#3b82f6",
  },
  {
    id: "iot-activation",
    title: "IoT & Activation",
    description: "Edge ML deployment",
    icon: Cpu,
    duration: "4-7h",
    status: "available",
    link: "/docs/school/iot-activation",
    skills: ["Raspberry Pi", "Edge Computing", "Sensors"],
    position: { x: 70, y: 41 },
    color: "#3b82f6",
  },
  
  // MERGE POINT
  {
    id: "school-complete",
    title: "School Program Complete",
    description: "Foundation skills mastered",
    icon: GraduationCap,
    duration: "",
    status: "available",
    position: { x: 50, y: 53 },
    color: "#3b82f6",
  },
  
  // SOFT LANDING CORE - Row 1 (Split into 2)
  {
    id: "math-ml",
    title: "Math & Classical ML",
    description: "ML algorithms & evaluation",
    icon: Brain,
    duration: "20-30h",
    status: "available",
    link: "/docs/softlanding/core-systems/01-math-ml",
    skills: ["Linear Regression", "SVM", "Model Evaluation"],
    position: { x: 30, y: 63 },
    color: "#8b5cf6",
  },
  {
    id: "networking",
    title: "Networking & Systems",
    description: "Linux, Docker, APIs",
    icon: Server,
    duration: "12-16h",
    status: "available",
    link: "/docs/softlanding/core-systems/03-networking",
    skills: ["Linux", "Docker", "REST APIs", "HTTP"],
    position: { x: 70, y: 63 },
    color: "#8b5cf6",
  },
  
  // SOFT LANDING CORE - Row 2 (Split into 2)
  {
    id: "deep-learning",
    title: "Deep Learning",
    description: "PyTorch, CNNs, Transformers",
    icon: Zap,
    duration: "30-40h",
    status: "available",
    link: "/docs/softlanding/core-systems/02-advanced-ai",
    skills: ["PyTorch", "Neural Nets", "CNNs", "Transformers"],
    position: { x: 30, y: 76 },
    color: "#8b5cf6",
  },
  {
    id: "fullstack-ops",
    title: "Fullstack & MLOps",
    description: "FastAPI, CI/CD, Cloud",
    icon: Globe,
    duration: "12-15h",
    status: "available",
    link: "/docs/softlanding/core-systems/04-fullstack-ops",
    skills: ["FastAPI", "PostgreSQL", "CI/CD", "Cloud"],
    position: { x: 70, y: 76 },
    color: "#8b5cf6",
  },
  
  // CORE COMPLETE
  {
    id: "core-complete",
    title: "Core Systems Complete",
    description: "Production-ready ML skills",
    icon: Award,
    duration: "",
    status: "available",
    position: { x: 50, y: 88 },
    color: "#8b5cf6",
  },
  
  // SPECIALIZATIONS - Final Row (4 branches)
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Image AI & Detection",
    icon: Camera,
    duration: "100-150h",
    status: "available",
    link: "/docs/softlanding/specializations/computer-vision",
    skills: ["Object Detection", "Segmentation", "GANs"],
    position: { x: 15, y: 98 },
    color: "#10b981",
  },
  {
    id: "nlp-llms",
    title: "NLP & LLMs",
    description: "Transformers & Agents",
    icon: MessageSquare,
    duration: "100-150h",
    status: "available",
    link: "/docs/softlanding/specializations/nlp",
    skills: ["Fine-tuning", "RAG", "LLM Agents"],
    position: { x: 38, y: 98 },
    color: "#10b981",
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Analytics & A/B Testing",
    icon: BarChart,
    duration: "100-150h",
    status: "available",
    link: "/docs/softlanding/specializations/data-science",
    skills: ["A/B Testing", "Experimentation", "Analytics"],
    position: { x: 62, y: 98 },
    color: "#10b981",
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "Distributed Systems",
    icon: Settings,
    duration: "100-150h",
    status: "available",
    link: "/docs/softlanding/specializations/software-engineering",
    skills: ["Scalability", "System Design", "Production ML"],
    position: { x: 85, y: 98 },
    color: "#10b981",
  },
];

// Connection paths between nodes
const connections = [
  // Start to first node
  { from: "start", to: "computational-thinking" },
  
  // Computational thinking splits
  { from: "computational-thinking", to: "calculus-algebra" },
  { from: "computational-thinking", to: "data-engineering" },
  
  // Second row to third row
  { from: "calculus-algebra", to: "probability-statistics" },
  { from: "data-engineering", to: "iot-activation" },
  
  // Third row merges to school complete
  { from: "probability-statistics", to: "school-complete" },
  { from: "iot-activation", to: "school-complete" },
  
  // School complete splits to soft landing
  { from: "school-complete", to: "math-ml" },
  { from: "school-complete", to: "networking" },
  
  // Soft landing row 1 to row 2
  { from: "math-ml", to: "deep-learning" },
  { from: "networking", to: "fullstack-ops" },
  
  // Row 2 merges to core complete
  { from: "deep-learning", to: "core-complete" },
  { from: "fullstack-ops", to: "core-complete" },
  
  // Core complete to specializations
  { from: "core-complete", to: "computer-vision" },
  { from: "core-complete", to: "nlp-llms" },
  { from: "core-complete", to: "data-science" },
  { from: "core-complete", to: "software-engineering" },
];

// Tree Node Component
function TreeNode({ node, index }: { node: RoadmapNode; index: number }) {
  const isMilestone = node.id === "start" || node.id === "school-complete" || node.id === "core-complete";

  const handleClick = () => {
    if (node.link) {
      window.location.href = node.link;
    }
  };

  // Calculate button width based on text length
  const getButtonWidth = () => {
    const textLength = node.title.length;
    // Approximate width: 1.2 units per character with font size 1.8
    return Math.max(textLength * 1.2, 16);
  };

  const buttonWidth = isMilestone ? getButtonWidth() : 0;
  const buttonHeight = 5;

  return (
    <g
      transform={`translate(${node.position.x}, ${node.position.y})`}
      onClick={handleClick}
      className={styles.treeNode}
      style={{ 
        cursor: node.link ? "pointer" : "default",
        animation: `nodeAppear 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`
      }}
    >
      {/* Node Circle/Rectangle */}
      {isMilestone ? (
        <rect
          x={-buttonWidth / 2}
          y={-buttonHeight / 2}
          width={buttonWidth}
          height={buttonHeight}
          rx="2"
          fill={node.color}
          stroke="white"
          strokeWidth="0.4"
          className={styles.nodeShape}
        />
      ) : (
        <circle
          r="3.5"
          fill={node.status === "locked" ? "#94a3b8" : node.color}
          stroke="white"
          strokeWidth="0.4"
          className={styles.nodeShape}
        />
      )}
      
      {/* Node Label */}
      <text
        x="0"
        y={isMilestone ? "0" : "6"}
        textAnchor="middle"
        dominantBaseline={isMilestone ? "central" : "auto"}
        className={styles.nodeLabel}
        fontSize={isMilestone ? "1.8" : "1.5"}
        fontWeight={isMilestone ? "700" : "600"}
      >
        {node.title}
      </text>
      
      {/* Duration label */}
      {node.duration && (
        <text
          x="0"
          y={isMilestone ? "6" : "8.2"}
          textAnchor="middle"
          className={styles.nodeDurationLabel}
          fontSize="1.2"
        >
          {node.duration}
        </text>
      )}
    </g>
  );
}

// Connection Line Component
function ConnectionLine({ from, to, index }: { from: RoadmapNode; to: RoadmapNode; index: number }) {
  const startX = from.position.x;
  const startY = from.position.y;
  const endX = to.position.x;
  const endY = to.position.y;
  
  // Calculate control points for curved lines
  const midY = (startY + endY) / 2;
  
  // Create a smooth curve
  const path = `M ${startX} ${startY + 3} Q ${startX} ${midY}, ${(startX + endX) / 2} ${midY} T ${endX} ${endY - 3}`;
  
  return (
    <g 
      className={styles.connectionGroup}
      style={{ 
        animation: `lineAppear 0.6s ease-out ${index * 0.08}s both`
      }}
    >
      {/* Glow effect background */}
      <path
        d={path}
        stroke={from.color}
        strokeWidth="0.8"
        fill="none"
        opacity="0.2"
        className={styles.connectionGlow}
      />
      {/* Main line */}
      <path
        d={path}
        stroke={from.color}
        strokeWidth="0.5"
        fill="none"
        className={styles.connectionLine}
        opacity="0.6"
      />
    </g>
  );
}

// Interactive Tree Diagram
function RoadmapTreeDiagram() {
  return (
    <motion.div 
      className={styles.treeContainer}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 100 110"
        className={styles.treeSvg}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Render all connection lines first */}
        <g className={styles.connections}>
          {connections.map((conn, idx) => {
            const fromNode = roadmapTree.find((n) => n.id === conn.from);
            const toNode = roadmapTree.find((n) => n.id === conn.to);
            if (fromNode && toNode) {
              return <ConnectionLine key={idx} from={fromNode} to={toNode} index={idx} />;
            }
            return null;
          })}
        </g>
        
        {/* Render all nodes on top */}
        <g className={styles.nodes}>
          {roadmapTree.map((node, index) => (
            <TreeNode
              key={node.id}
              node={node}
              index={index}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
}

// Legend Component
function RoadmapLegend() {
  return (
    <motion.div 
      className={styles.legend}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className={styles.legendItem}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.legendDot} style={{ backgroundColor: "#3b82f6" }} />
        <span>School Program (Foundation)</span>
      </motion.div>
      <motion.div 
        className={styles.legendItem}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className={styles.legendDot} style={{ backgroundColor: "#8b5cf6" }} />
        <span>Soft Landing (Core Systems)</span>
      </motion.div>
      <motion.div 
        className={styles.legendItem}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className={styles.legendDot} style={{ backgroundColor: "#10b981" }} />
        <span>Specializations</span>
      </motion.div>
    </motion.div>
  );
}

// Hero section
function RoadmapHero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Target size={20} />
            <span>Interactive Learning Roadmap</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Path to Becoming a
            <br />
            <span className={styles.gradientText}>Production-Ready AI Engineer</span>
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A tree-based visualization of your learning journey from foundations to specializations.
            <br />
            Click on any node to explore that module and start learning.
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
}

// Main component
export default function RoadmapPage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Interactive Learning Roadmap"
      description="Your structured path to becoming a production-ready AI engineer - visualized as an interactive tree diagram"
    >
      <main className={styles.mainContent}>
        <motion.section 
          className={styles.diagramSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <RoadmapLegend />
            <RoadmapTreeDiagram />
            
            {/* Info Box */}
            <motion.div 
              className={styles.infoBox}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BookOpen size={24} />
              <div className={styles.infoContent}>
                <h3>How to Use This Roadmap</h3>
                <p>
                  This diagram shows the complete learning path from beginner to expert. Start at the top and work your way down. 
                  Click any node to navigate to that module's content. The path branches and merges to show prerequisites and dependencies.
                </p>
                <p className={styles.mobileHint}>
                  <strong>On mobile?</strong> Scroll horizontally to explore the full diagram.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <motion.div
              className={styles.ctaCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Award size={48} className={styles.ctaIcon} />
              <Heading as="h2" className={styles.ctaTitle}>
                Ready to Start Your Journey?
              </Heading>
              <p className={styles.ctaDescription}>
                Choose your starting point based on your current skill level. All materials are completely free and
                open-source.
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/docs/school" className={styles.primaryButton}>
                  <GraduationCap size={20} />
                  Start School Program
                </Link>
                <Link to="/docs/softlanding" className={styles.secondaryButton}>
                  <Rocket size={20} />
                  Start Soft Landing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
