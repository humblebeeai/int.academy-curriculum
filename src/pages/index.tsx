"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  FileText,
  CheckCircle,
  Sparkles,
  Target,
  AlertTriangle,
  GitPullRequest,
} from "lucide-react";

import {
  FAQSection,
  ParticleBackground,
  RoadmapShowcase,
} from "@site/src/components";
import styles from "./index.module.css";

function HomepageHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={styles.heroBanner}>
      {/* Particle Background */}
      {mounted && (
        <div className={styles.particleContainer}>
          <ParticleBackground />
        </div>
      )}

      {/* Animated gradient orbs */}
      <div className={styles.heroGradientOrbs}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
      </div>

      <div className="container">
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={styles.heroTitleSecondary}>
              Open Curriculum for Becoming an
            </span>
            <br />
            <span className={styles.gradientText}>AI Engineer</span>
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stop guessing what to learn next. HumbleBeeAI Open Curriculum is a
            structured, role-aligned pathway built from free and open resources,
            designed to turn self-study into measurable progress and real proof
            of skill.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link className={styles.primaryButton} to="/docs">
              <BookOpen size={20} />
              Explore the Curriculum
            </Link>
            <a
              href="https://github.com/humblebeeai/int.academy-curriculum/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              <GitPullRequest size={18} />
              Contribute a Module
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className={styles.heroBottomFade} />
    </header>
  );
}

// Who This Is For Section
function WhoThisIsForSection() {
  return (
    <section className={clsx(styles.features, styles.whoSection)}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Who This Is For</h2>
        </motion.div>

        <div className="row">
          <motion.div
            className="col col--6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className={clsx(styles.featureCard, styles.whoCard)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardMain}>
                <div
                  className={styles.iconWrapper}
                  style={{ color: "var(--accent-gold)" }}
                >
                  <GraduationCap size={40} strokeWidth={1.5} />
                </div>
                <Heading as="h3" className={styles.featureTitle}>
                  Learners
                </Heading>
                <p className={styles.featureDescription}>
                  For high school grads, university students, and career
                  switchers who want a clear plan and portfolio-grade outputs.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="col col--6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className={clsx(styles.featureCard, styles.whoCard)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardMain}>
                <div
                  className={styles.iconWrapper}
                  style={{ color: "var(--accent-gold)" }}
                >
                  <Users size={40} strokeWidth={1.5} />
                </div>
                <Heading as="h3" className={styles.featureTitle}>
                  Contributors
                </Heading>
                <p className={styles.featureDescription}>
                  For experienced practitioners (5+ years) who want to help
                  democratize AI competence by improving modules, projects, and
                  evaluation standards.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section className={clsx(styles.features, styles.aboutSection)}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Why This Exists</h2>
          <p className={styles.sectionSubtitle}>
            Free content is everywhere. Structure is not.
          </p>
        </motion.div>

        <div className="row">
          <motion.div
            className="col col--6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.aboutTextBlock}>
              <p>
                Most learners waste months because sequencing is unclear and
                progress is not tied to evidence. This curriculum defines{" "}
                <strong>what</strong> to learn, <strong>in what order</strong>,
                and <strong>what proof to produce</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col col--6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.aboutCard}>
              <h4 className={styles.aboutCardTitle}>What this is</h4>
              <ul className={styles.aboutList}>
                <li>
                  <CheckCircle size={16} />A curriculum map with outcomes, proof
                  artifacts, and a contributor framework
                </li>
              </ul>

              <h4
                className={clsx(
                  styles.aboutCardTitle,
                  styles.aboutCardTitleNot,
                )}
              >
                What this is not
              </h4>
              <ul className={styles.aboutList}>
                <li>
                  <AlertTriangle size={16} />A promise that watching content
                  makes you job-ready
                </li>
                <li>
                  <AlertTriangle size={16} />
                  The HumbleBeeAI Academy program (that is separate)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Outcomes Section with Tabs
function OutcomesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tracks = [
    {
      id: "nlp",
      label: "NLP & LLM",
      outcomes: [
        "Build reliable NLP systems with proper evaluation",
        "Create RAG-grounded LLM applications",
        "Design multi-step agent/tool workflows",
        "Know when to prompt vs RAG vs fine-tune",
      ],
      capstone: "Chat2Action — ERPNext Task Assistant with RAG Helpdesk",
    },
    {
      id: "cv",
      label: "Computer Vision",
      outcomes: [
        "Build/train/evaluate vision models with clean pipelines",
        "Apply transfer learning systematically",
        "Deliver practical CV applications with evidence",
        "Modern detection and segmentation workflows",
      ],
      capstone: "Pokemon Card Border Detection",
    },
    {
      id: "genai",
      label: "Generative AI",
      outcomes: [
        "Build complete GenAI apps across text, image, audio",
        "Work with diffusion models and efficiency techniques (LoRA)",
        "Evaluate generative outputs for reliability",
        "Optimize inference for real-time use",
      ],
      capstone: "Video Translation Tool — English to Russian",
    },
    {
      id: "ds",
      label: "Data Science",
      outcomes: [
        "Defensible statistical analysis and modeling",
        "Choose correct metrics for real-world constraints",
        "End-to-end pipelines with time series/forecasting",
        "Communicate results to technical and non-technical audiences",
      ],
      capstone: "Hotel Dynamic Pricing Challenge",
    },
    {
      id: "se",
      label: "AI Software Engineering",
      outcomes: [
        "Deploy backend services with clean APIs and database design",
        "Containerize multi-service systems",
        "CI/CD, testing, and monitoring discipline",
        "Ship production-grade systems",
      ],
      capstone: "Blogging Platform — Microservices with Customizable UI",
    },
  ];

  return (
    <section className={clsx(styles.features, styles.outcomesSection)}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>What You'll Build</h2>
          <p className={styles.sectionSubtitle}>
            Each track produces specific, measurable outcomes and a capstone project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Tab Bar */}
          <div className={styles.tabBar}>
            {tracks.map((track, index) => (
              <button
                key={track.id}
                className={clsx(
                  styles.tabButton,
                  activeTab === index && styles.tabButtonActive
                )}
                onClick={() => setActiveTab(index)}
              >
                {track.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={styles.tabContent}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.tabPanel}
            >
              <div className={styles.outcomesCard}>
                <h4 className={styles.outcomesCardTitle}>
                  {tracks[activeTab].label} — By the end, you can:
                </h4>
                <ul className={styles.outcomesList}>
                  {tracks[activeTab].outcomes.map((outcome, i) => (
                    <li key={i}>
                      <Target size={16} />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <div className={styles.capstoneNote}>
                  <strong>Capstone:</strong> {tracks[activeTab].capstone}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Curriculum vs Academy Section (kept)
function CurriculumVsAcademySection() {
  return (
    <section className={clsx(styles.features, styles.curriculumVsAcademy)}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Curriculum vs. Academy</h2>
          <p className={styles.sectionSubtitle}>
            Understanding the difference between the open curriculum and the
            full Academy program.
          </p>
        </motion.div>

        <div className="row">
          <motion.div
            className="col col--6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className={clsx(styles.featureCard, styles.comparisonCard)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardMain}>
                <div
                  className={styles.iconWrapper}
                  style={{ color: "var(--accent-gold)" }}
                >
                  <FileText size={40} strokeWidth={1.5} />
                </div>
                <Heading as="h3" className={styles.featureTitle}>
                  The Curriculum
                </Heading>
                <p className={styles.featureDescription}>
                  Open educational resources: roadmaps, project specs, learning
                  objectives, and skill gates. Anyone can access and use these
                  materials for self-directed study.
                </p>
                <ul className={styles.comparisonList}>
                  <li>
                    <CheckCircle size={16} /> Free and open-source
                  </li>
                  <li>
                    <CheckCircle size={16} /> Self-paced learning materials
                  </li>
                  <li>
                    <CheckCircle size={16} /> Project specifications and
                    milestones
                  </li>
                  <li>
                    <CheckCircle size={16} /> Community contributions welcome
                  </li>
                </ul>
                <Link to="/docs" className={styles.secondaryButton}>
                  Browse Curriculum
                  <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="col col--6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className={clsx(
                styles.featureCard,
                styles.comparisonCard,
                styles.academyCard,
              )}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardMain}>
                <div
                  className={styles.iconWrapper}
                  style={{ color: "var(--ifm-color-success)" }}
                >
                  <Award size={40} strokeWidth={1.5} />
                </div>
                <Heading as="h3" className={styles.featureTitle}>
                  The Academy
                </Heading>
                <p className={styles.featureDescription}>
                  A full-time, offline training program (40 hrs/week,
                  campus-based) that uses this curriculum as its foundation.
                  Academy students receive structured mentorship and verified
                  credentials.
                </p>
                <ul className={styles.comparisonList}>
                  <li>
                    <CheckCircle size={16} /> Structured mentorship and code
                    reviews
                  </li>
                  <li>
                    <CheckCircle size={16} /> Multiple mentors across domains
                  </li>
                  <li>
                    <CheckCircle size={16} /> Weekly structure with
                    scenario-based projects
                  </li>
                  <li>
                    <CheckCircle size={16} /> Performance transcripts and
                    verified portfolios
                  </li>
                  <li>
                    <CheckCircle size={16} /> Tuition-based with scholarship
                    options
                  </li>
                  <li>
                    <CheckCircle size={16} /> Pathway to Growth-3 professional
                    program
                  </li>
                </ul>
                <a
                  href="https://academy.humblebee.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  <GraduationCap size={20} />
                  Apply to Academy
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={styles.curriculumNote}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            <strong>Key distinction:</strong> The Curriculum is the content
            framework. The Academy is the full-service training environment with
            credentials, mentorship, and professional placement support.
          </p>
          <p>
            You can use the Curriculum materials independently. But if you want
            mentored training, verified credentials, and structured career
            pathways, the Academy provides that infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ data
const faqItems = [
  {
    question: "Why is this curriculum free and open source?",
    answer:
      'A world-class learning path should not be locked behind geography or budget. The open curriculum gives self-learners structure, sequence, and a clear standard for what "good" looks like. The Academy builds on the same roadmap with what self-learning usually lacks: mentor feedback, code reviews, accountability, and scenario projects that force real-world application.',
  },
  {
    question: 'What are "capstones"?',
    answer:
      "They are projects designed to mirror real work. As you finish a module, you apply it immediately in a capstone project, then iterate based on review until it meets a production bar.",
  },
  {
    question: "Does it guarantee a job?",
    answer:
      "No. It helps you build inspectable proof of your skills, not completion claims.",
  },
  {
    question: "Are there paid options?",
    answer:
      "The curriculum is free. Optional paid verification (exams and project reviews) is available for learners who need a credible signal. Hourly mentorship is also available for blockers such as math, debugging, evaluation, and project design.",
  },
  {
    question: "Can I skip Engineering Fundamentals if I know Python?",
    answer:
      'Maybe. We have a "Direct Entry" path for Soft Landing, but it requires passing a rigorous placement test. We find that 80% of "experienced" self-taught developers still have critical gaps in data engineering or math that Engineering Fundamentals covers. When in doubt, don\'t skip it.',
  },
  {
    question: "Do I need a powerful computer?",
    answer:
      "For Engineering Fundamentals, any laptop (Windows/Mac/Linux) released in the last 5-7 years is fine. For Soft Landing (Deep Learning), having an NVIDIA GPU is helpful but not required; we show you how to use free cloud resources like Google Colab and Kaggle Kernels.",
  },
];

// Final CTA Section
function FinalCTASection() {
  return (
    <section className={clsx(styles.features, styles.finalCtaSection)}>
      <div className="container">
        <div className="row">
          <motion.div
            className="col col--6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.finalCtaCard}>
              <div
                className={styles.finalCtaIcon}
                style={{ color: "var(--accent-gold)" }}
              >
                <Sparkles size={32} />
              </div>
              <h3 className={styles.finalCtaTitle}>Learners</h3>
              <p className={styles.finalCtaDescription}>
                Follow the structure. Build proof. Show real competence.
              </p>
              <Link to="/docs" className={styles.primaryButton}>
                <BookOpen size={20} />
                Start With the Curriculum
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="col col--6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.finalCtaCard}>
              <div
                className={styles.finalCtaIcon}
                style={{ color: "var(--accent-gold)" }}
              >
                <GitPullRequest size={32} />
              </div>
              <h3 className={styles.finalCtaTitle}>Contributors</h3>
              <p className={styles.finalCtaDescription}>
                Help keep the pathway sharp, open, and evidence-based.
              </p>
              <a
                href="https://github.com/humblebeeai/int.academy-curriculum/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                Submit a Contribution
                <span className={styles.arrow}>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Free & Open AI Engineering Curriculum"
      description="Free, open-source AI engineering curriculum. Community-driven learning materials for production-ready skills in Deep Learning, AI Software Engineering, Computer Vision, and NLP."
    >
      <HomepageHeader />
      <main>
        <WhoThisIsForSection />
        <AboutSection />
        <OutcomesSection />
        <section id="roadmap">
          <RoadmapShowcase />
        </section>
        <CurriculumVsAcademySection />
        <FAQSection items={faqItems} />
        <FinalCTASection />
      </main>
    </Layout>
  );
}
