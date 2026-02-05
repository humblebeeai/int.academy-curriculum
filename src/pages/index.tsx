"use client";

import type { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  Rocket,
  Users,
  BookOpen,
  Code2,
  Zap,
  Target,
  Github,
  Award,
  Building2,
  FileText,
  CheckCircle,
  LayoutGrid,
  Scale,
  Mic,
  Briefcase,
  Heart,
  User,
  BarChart,
  Terminal,
  FlaskConical,
  Eye,
  Wifi,
  Box,
} from "lucide-react";

import styles from "./index.module.css";

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
            <div className={clsx(styles.featureCard, styles.comparisonCard)}>
              <div className={styles.cardMain}>
                <div
                  className={styles.iconWrapper}
                  style={{ color: "var(--ifm-color-primary)" }}
                >
                  <FileText size={40} strokeWidth={1.5} />
                </div>
                <Heading as="h3" className={styles.featureTitle}>
                  The Curriculum (This Site)
                </Heading>
                <p className={styles.featureDescription}>
                  Open educational resources: roadmaps, project specs, learning
                  objectives, and skill gates. Anyone can access and use these
                  materials for self-directed study.
                </p>
                <ul className={styles.comparisonList}>
                  <li>
                    <CheckCircle size={16} /> Free and open-source (CC BY-SA
                    4.0)
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
            </div>
          </motion.div>

          <motion.div
            className="col col--6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className={clsx(
                styles.featureCard,
                styles.comparisonCard,
                styles.academyCard,
              )}
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
            </div>
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

function EcosystemSection() {
  const projects = [
    {
      title: "Smart Office",
      desc: "Smart Workspace Solutions",
      link: "https://smart-office.humblebee.ai/",
      icon: LayoutGrid,
    },
    {
      title: "Wakil AI",
      desc: "Legal tech NLP assistant that simplifies legal workflows.",
      link: "https://wakil.ai/",
      icon: Scale,
    },
    {
      title: "Kumush AI",
      desc: "Voice-enabled natural language platform for conversational AI.",
      link: "https://kumush.ai/",
      icon: Mic,
    },
    {
      title: "bRide",
      desc: "Data-driven talent growth and workforce matching.",
      link: "https://bride.humblebee.ai/",
      icon: Briefcase,
    },
    {
      title: "EnlightenQalb",
      desc: "NLP-powered tool for culturally aligned mental wellness.",
      link: "https://beeintel.ai/projects/enlighten-qalb",
      icon: Heart,
    },
    {
      title: "AI Avatar",
      desc: "Generative AI platform creating personalized educational avatars.",
      link: "https://avatar.humblebee.ai/",
      icon: User,
    },
    {
      title: "HStaff",
      desc: "Team management dashboard with analytics for leaders.",
      link: "https://hstaff.humblebee.ai/dashboard/talents",
      icon: Users,
    },
    {
      title: "Infer",
      desc: "Production-ready ML evaluation engine with confidence intervals.",
      link: "https://infer.humblebee.ai/",
      icon: BarChart,
    },
    {
      title: "LearnPrompting",
      desc: "Comprehensive LLM prompting guide (Uzbek Translation).",
      link: "https://learnprompting.uz/",
      icon: Terminal,
    },
    {
      title: "RISE",
      desc: "Analytics and AI system to boost science and engineering teams.",
      link: "-",
      icon: FlaskConical,
    },
    {
      title: "AntvisionAI",
      desc: "Concept AI platform for advanced analytics and visual intelligence.",
      link: "https://AntVision.ai",
      icon: Eye,
    },
    {
      title: "mPal",
      desc: "Connected IoT lifestyle ecosystem.",
      link: "-",
      icon: Wifi,
    },
    {
      title: "Customs",
      desc: "NLP-driven tool for customs automation.",
      link: "-",
      icon: Box,
    },
  ];

  return (
    <section className={clsx(styles.features, styles.ecosystemSection)}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>HumbleBeeAI Ecosystem</h2>
          <p className={styles.sectionSubtitle}>
            Real-world AI products built by our community and engineers.
          </p>
        </motion.div>

        <div className="row">
          {projects.map((p, i) => {
            const hasLink = p.link && p.link !== "-" && p.link !== "#";
            const Icon = p.icon || Zap;

            return (
              <div
                key={i}
                className="col col--4"
                style={{ marginBottom: "1.5rem" }}
              >
                <div
                  className={clsx(
                    styles.featureCard,
                    styles.projectCard,
                    !hasLink && styles.projectCardDisabled,
                  )}
                  onClick={() =>
                    hasLink ? window.open(p.link, "_blank") : null
                  }
                >
                  <div
                    className={clsx(styles.cardMain, styles.projectCardMain)}
                  >
                    <div className={styles.projectHeader}>
                      <div className={styles.projectIconWrapper}>
                        <Icon size={24} />
                      </div>
                      {!hasLink && (
                        <span className={styles.statusBadge}>Coming Soon</span>
                      )}
                      {hasLink && (
                        <span className={styles.externalLinkIcon}>↗</span>
                      )}
                    </div>

                    <h3
                      className={clsx(styles.featureTitle, styles.projectTitle)}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={clsx(
                        styles.featureDescription,
                        styles.projectDescription,
                      )}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.ecosystemFooter}>
          <p className={styles.ecosystemFooterText}>
            Part of the HumbleBeeAI Family
          </p>
          <a
            href="https://humblebee.ai"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            Visit HumbleBeeAI
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
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
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className={styles.gradientText}>
              AI Engineering Curriculum
            </span>
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Free, open-source learning materials for building top-tier AI
            skills. Self-paced, community-driven, and designed for real-world
            engineering.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link className={styles.primaryButton} to="/docs">
              <BookOpen size={20} />
              Browse the Curriculum
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

function ProblemCard({
  title,
  Icon,
  description,
  index,
}: {
  title: string;
  Icon: any;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className={clsx("col col--4")}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <div className={styles.problemCard}>
        <div className={styles.problemCardIconWrapper}>
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <Heading as="h3" className={styles.problemCardTitle}>
          {title}
        </Heading>
        <p className={styles.problemCardDescription}>{description}</p>
      </div>
    </motion.div>
  );
}

function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Why We Exist</h2>
          <p className={styles.sectionSubtitle}>
            Most aspiring AI engineers get stuck. Here's why—and how we fix it.
          </p>
        </motion.div>

        <div className="row">
          <ProblemCard
            title="The Theory-Practice Gap"
            Icon={BookOpen}
            description="Academic courses teach concepts, not how to build production-ready systems. We focus on engineering first."
            index={0}
          />
          <ProblemCard
            title="The Portfolio Paradox"
            Icon={Code2}
            description="You need a job to get experience, but experience to get a job. Our curriculum builds a production-grade portfolio."
            index={1}
          />
          <ProblemCard
            title="Isolated Learning"
            Icon={Users}
            description="Self-teaching is lonely and lacks feedback. We provide a structured community and mentorship path."
            index={2}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Free & Open AI Engineering Curriculum"
      description="Free, open-source AI engineering curriculum. Community-driven learning materials for production-ready skills in Deep Learning, AI Software Engineering, Computer Vision, and NLP."
    >
      <HomepageHeader />
      <main>
        <MissionSection />
        <CurriculumVsAcademySection />
        <EcosystemSection />
      </main>
    </Layout>
  );
}
