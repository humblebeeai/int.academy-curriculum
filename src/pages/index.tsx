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
  FileText,
  CheckCircle,
  Sparkles,
  Target,
  AlertTriangle,
  GitPullRequest,
  Linkedin,
  Github,
  Twitter,
  MessageCircle,
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
            structured, role-aligned pathway built from free and open resources.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link className={styles.primaryButton} to="/docs">
              <BookOpen size={20} />
              Explore the Roadmap
            </Link>
            <Link
              to="/docs/contributors-guide"
              className={styles.secondaryButton}
            >
              <GitPullRequest size={18} />
              Contribute to the Roadmap
            </Link>
          </motion.div>

          <motion.div
            className={styles.heroCta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="https://t.me/airoadmapcommunity"
              className={styles.telegramButton}
            >
              <MessageCircle size={18} />
              Join Community
            </Link>
            <span className={styles.heroCtaText}>
              Connect with learners and contributors
            </span>
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
            <Link to="/docs/contributors-guide" className={styles.whoCardLink}>
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
                    democratize AI competence by improving modules, projects,
                    and evaluation standards.
                  </p>
                </div>
              </motion.div>
            </Link>
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
                We turn scattered resources into a clear path by organizing what
                to learn, in what order, and where hands-on projects help
                connect theory to practice.
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
                  <CheckCircle size={16} />A structured AI learning roadmap with
                  curated references and optional projects.
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
                  <AlertTriangle size={16} />A job guarantee.
                </li>
                <li>
                  <AlertTriangle size={16} />
                  Not the HumbleBeeAI Academy program (separate).
                </li>
              </ul>

              <h4 className={styles.aboutCardTitle}>Contribute</h4>
              <ul className={styles.aboutList}>
                <li>
                  <CheckCircle size={16} />
                  Help us keep it sharp: improve modules, add resources, propose
                  projects
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
          <h2 className={styles.sectionTitle}>Role-Based Tracks</h2>
          <p className={styles.sectionSubtitle}>
            Each track builds role-specific capability through guided topics and
            a final capstone project.
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
                  activeTab === index && styles.tabButtonActive,
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

// Mentorship & Programs Section
function OnDemandMentorshipSection() {
  return (
    <section className={clsx(styles.features, styles.mentorshipSection)}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Mentorship & Programs</h2>
          <p className={styles.sectionSubtitle}>
            Get the level of support you need - from a single expert session to
            an intensive, cohort-based training environment.
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
            <motion.div
              className={clsx(styles.featureCard, styles.mentorshipCard)}
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
                  On-Demand Mentorship
                </Heading>
                <p className={styles.featureDescription}>
                  Book a 1-on-1 session with experienced AI practitioners to get
                  unblocked, review your code, or plan your next steps.
                </p>
                <ul className={styles.comparisonList}>
                  <li>
                    <CheckCircle size={16} /> Technical deep dives (LLMs,
                    evaluation, debugging, optimization)
                  </li>
                  <li>
                    <CheckCircle size={16} /> Code and project review
                    (architecture, best practices, production considerations)
                  </li>
                  <li>
                    <CheckCircle size={16} /> Career guidance (portfolio review,
                    interview prep, specialization direction)
                  </li>
                </ul>
                <p className={styles.mentorshipNote}>Booking opens soon</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="col col--6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className={clsx(
                styles.featureCard,
                styles.mentorshipCard,
                styles.academyCard,
              )}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.academyFeaturedBadge}>Recommended</span>
              <div className={styles.cardMain}>
                <div
                  className={styles.iconWrapper}
                  style={{ color: "var(--accent-gold)" }}
                >
                  <GraduationCap size={40} strokeWidth={1.5} />
                </div>
                <Heading as="h3" className={styles.featureTitle}>
                  HumbleBeeAI Academy
                </Heading>
                <p className={styles.featureDescription}>
                  Apply for an intensive training environment with structured
                  progression, mentorship, and guided project work.
                </p>
                <ul className={styles.comparisonList}>
                  <li>
                    <CheckCircle size={16} /> Structured learning path and
                    weekly cadence
                  </li>
                  <li>
                    <CheckCircle size={16} /> Mentorship and continuous feedback
                    loops
                  </li>
                  <li>
                    <CheckCircle size={16} /> Hands-on projects and case studies
                  </li>
                  <li>
                    <CheckCircle size={16} /> Community and accountability
                  </li>
                </ul>
                <div className={styles.mentorshipButtonWrapper}>
                  <Link
                    to="https://academy.humblebee.ai"
                    className={styles.secondaryButton}
                  >
                    Apply to the Academy
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Reviewers Section
function ReviewersSection() {
  const maintainers = [
    {
      name: "Jumabek Alikhanov",
      role: "Executive Sponsor & Roadmap Reviewer",
      bio: "Founder of HumbleBeeAI, PhD in Machine Learning with 10+ years of teaching and industry experience.",
      image: "/img/maintainer-1.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/jumabek-alikhan-phd-1036a864/",
        github: "https://github.com/Jumabek",
        instagram: "https://twitter.com/johndoe",
      },
    },
    {
      name: "Oybek Eraliyev",
      role: "Senior Roadmap Architect",
      bio: "PhD, AI engineer. Passionate about accessible education.",
      image: "/img/maintainer-2.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/oybek-eraliev-56884a213/",
      },
    },
  ];

  return (
    <section className={clsx(styles.features, styles.reviewersSection)}>
      <div className="container">
        {/* Main Builders Section */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Meet the Builders</h2>
          <p className={styles.sectionSubtitle}>
            The core team building and maintaining the curriculum.
          </p>
        </motion.div>

        {/* Individual Maintainers */}
        <div className="row">
          {maintainers.map((maintainer, index) => (
            <motion.div
              key={maintainer.name}
              className="col col--6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className={styles.maintainerCard}>
                <div className={styles.maintainerImageWrapper}>
                  <img
                    src={maintainer.image}
                    alt={maintainer.name}
                    className={styles.maintainerImage}
                  />
                </div>
                <div className={styles.maintainerInfo}>
                  <h3 className={styles.maintainerName}>{maintainer.name}</h3>
                  <p className={styles.maintainerRole}>{maintainer.role}</p>
                  <p className={styles.maintainerBio}>{maintainer.bio}</p>
                  <div className={styles.maintainerSocials}>
                    {maintainer.socials.linkedin && (
                      <a
                        href={maintainer.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`${maintainer.name} LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {maintainer.socials.github && (
                      <a
                        href={maintainer.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`${maintainer.name} GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {maintainer.socials.twitter && (
                      <a
                        href={maintainer.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`${maintainer.name} Twitter`}
                      >
                        <Twitter size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reviewed by Professionals Section */}
        <motion.div
          className={clsx(styles.sectionHeader, styles.reviewersHeader)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Reviewed by Professionals</h2>
          <p className={styles.sectionSubtitle}>
            Expert-vetted by senior engineers and researchers from the world's
            leading technology companies and academic institutions.
          </p>
        </motion.div>

        {/* Group Photo with Credits */}
        <motion.div
          className={styles.reviewersGroupContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.groupPhotoWrapper}>
            <img
              src="/img/team-photo.jpg"
              alt="Professional Reviewers"
              className={styles.groupPhoto}
            />
          </div>
          <div className={styles.reviewersCredits}>
            <h4 className={styles.reviewersCreditsTitle}>
              Validated by Industry Leaders
            </h4>
            <p className={styles.reviewersParagraph}>
              This curriculum has been thoroughly reviewed by senior
              practitioners from leading technology companies and research
              institutions. The validation panel includes engineering leaders
              from <span className={styles.highlightCompany}>DP World</span>, AI
              researchers from{" "}
              <span className={styles.highlightCompany}>KRICT</span> and{" "}
              <span className={styles.highlightCompany}>DeltaX</span>, and
              senior engineers from{" "}
              <span className={styles.highlightCompany}>VCA Technology</span>{" "}
              and <span className={styles.highlightCompany}>skyve</span>.
            </p>
            <p className={styles.reviewersParagraph}>
              Academic guidance comes from PhD researchers and postdoctoral
              fellows at{" "}
              <span className={styles.highlightCompany}>
                Chungnam National University
              </span>{" "}
              and{" "}
              <span className={styles.highlightCompany}>Inha University</span>,
              bringing extensive experience in deploying real-world AI systems
              and advancing machine learning research.
            </p>
          </div>
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
      'Maybe. We have a "Direct Entry" path for Soft Landing, but it requires passing a rigorous placement test. We find that 80% of "experienced" self-taught developers still have critical gaps in data manipulation or math that Engineering Fundamentals covers. When in doubt, don\'t skip it.',
  },
  {
    question: "Do I need a powerful computer?",
    answer:
      "For Engineering Fundamentals, any laptop (Windows/Mac/Linux) released in the last 5-7 years is fine. For Soft Landing (Deep Learning), having an NVIDIA GPU is helpful but not required; we show you how to use free cloud resources like Google Colab and Kaggle Kernels.",
  },
];

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
        <ReviewersSection />
        <section id="roadmap">
          <RoadmapShowcase />
        </section>
        <OnDemandMentorshipSection />
        <FAQSection items={faqItems} />
      </main>
    </Layout>
  );
}
