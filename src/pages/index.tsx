'use client';

import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import {
  Sprout, Zap, Target, GraduationCap, Rocket, BookOpen, Code2, Building2, Globe, Cpu, Users, BarChart,
  Mic, Briefcase, Heart, User, Activity, Terminal, Eye, Wifi, Box, Scale, FlaskConical, LayoutGrid
} from 'lucide-react';

import styles from './index.module.css';

function EcosystemSection() {
  const projects = [
    { title: 'Smart Office', desc: 'Smart Workspace Solutions', link: 'https://smart-office.humblebee.ai/', icon: LayoutGrid },
    { title: 'Wakil AI', desc: 'Legal tech NLP assistant that simplifies legal workflows.', link: 'https://wakil.ai/', icon: Scale },
    { title: 'Kumush AI', desc: 'Voice-enabled natural language platform for conversational AI.', link: 'https://kumush.ai/', icon: Mic },
    { title: 'bRide', desc: 'Data-driven talent growth and workforce matching.', link: 'https://bride.humblebee.ai/', icon: Briefcase },
    { title: 'EnlightenQalb', desc: 'NLP-powered tool for culturally aligned mental wellness.', link: 'https://beeintel.ai/projects/enlighten-qalb', icon: Heart },
    { title: 'AI Avatar', desc: 'Generative AI platform creating personalized educational avatars.', link: 'https://avatar.humblebee.ai/', icon: User },
    { title: 'HStaff', desc: 'Team management dashboard with analytics for leaders.', link: 'https://hstaff.humblebee.ai/dashboard/talents', icon: Users },
    { title: 'Infer', desc: 'Production-ready ML evaluation engine with confidence intervals.', link: 'https://infer.humblebee.ai/', icon: BarChart },
    { title: 'LearnPrompting', desc: 'Comprehensive LLM prompting guide (Uzbek Translation).', link: 'http://learnprompting.uz/', icon: Terminal },
    { title: 'RISE', desc: 'Analytics and AI system to boost science and engineering teams.', link: '-', icon: FlaskConical },
    { title: 'AntvisionAI', desc: 'Concept AI platform for advanced analytics and visual intelligence.', link: 'https://AntVision.ai', icon: Eye },
    { title: 'mPal', desc: 'Connected IoT lifestyle ecosystem.', link: '-', icon: Wifi },
    { title: 'Customs', desc: 'NLP-driven tool for customs automation.', link: '-', icon: Box },
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
          <h2 className={styles.sectionTitle}>Humblebee Ecosystem</h2>
          <p className={styles.sectionSubtitle}>
            Real-world AI products built by our community and engineers.
          </p>
        </motion.div>

        <div className="row">
          {projects.map((p, i) => {
            const hasLink = p.link && p.link !== '-' && p.link !== '#';
            const Icon = p.icon || Zap;

            return (
              <div key={i} className="col col--4" style={{ marginBottom: '1.5rem' }}>
                <div
                  className={clsx(
                    styles.featureCard,
                    styles.projectCard,
                    !hasLink && styles.projectCardDisabled
                  )}
                  onClick={() => hasLink ? window.open(p.link, '_blank') : null}
                >
                  <div className={clsx(styles.cardMain, styles.projectCardMain)}>
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

                    <h3 className={clsx(styles.featureTitle, styles.projectTitle)}>
                      {p.title}
                    </h3>
                    <p className={clsx(styles.featureDescription, styles.projectDescription)}>{p.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.ecosystemFooter}>
          <p className={styles.ecosystemFooterText}>Part of the HumblebeeAI Family</p>
          <a href="https://humblebee.ai" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
            Visit Humblebee.ai
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
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GraduationCap size={20} />
            <span>Open Source AI Curriculum</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Journey to Becoming a<br />
            <span className={styles.gradientText}>Top 1% AI Engineer</span>
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bridge the gap between theory and production. <br />
            Democratizing access to world-class AI education for everyone, everywhere.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link className={styles.primaryButton} to="/docs/school/intro">
              <Rocket size={20} />
              Start Phase 1
            </Link>
            <Link className={styles.secondaryButton} to="/docs/curriculum-outline">
              View Roadmap
              <span className={styles.arrow}>→</span>
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
  index
}: {
  title: string;
  Icon: any;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className={clsx('col col--4')}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className={styles.featureCard}>
        <div className={styles.cardShadowBottom} />
        <div className={styles.cardShadowMiddle} />
        <div className={styles.cardMain}>
          <div className={styles.iconWrapper} style={{ color: 'var(--ifm-color-primary)' }}>
            <Icon size={40} strokeWidth={1.5} />
          </div>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function MissionSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>The Problems We Solve</h2>
          <p className={styles.sectionSubtitle}>
            Most aspiring engineers get stuck. Here's why, and how we fix it.
          </p>
        </motion.div>

        <div className="row">
          <ProblemCard
            title="The Theory-Practice Gap"
            Icon={BookOpen}
            description="Academic courses teach concepts, but not how to build production systems. We focus on engineering first."
            index={0}
          />
          <ProblemCard
            title="The Portfolio Paradox"
            Icon={Code2}
            description="You need experience to get a job, but need a job to get experience. We build a production-grade portfolio."
            index={1}
          />
          <ProblemCard
            title="Isolated Learning"
            Icon={Building2}
            description="Self-teaching is lonely and lacks feedback. We provide a community and structured mentorship path."
            index={2}
          />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  title,
  duration,
  description,
  Icon,
  link,
  index,
  comingSoon,
  phase
}: {
  title: string;
  duration: string;
  description: string;
  Icon: any;
  link: string;
  index: number;
  comingSoon?: boolean;
  phase?: number;
}) {
  const cardContent = (
    <>
      <div className={styles.programCardShadow} />
      <div className={clsx(styles.programCardContent, comingSoon && styles.programCardComingSoon)}>
        <div className={styles.programIcon}>
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <div className={styles.programInfo}>
          <div className={styles.programHeader}>
            <span className={styles.phaseBadge}>
              {phase || '?'}
            </span>
            <h3 className={styles.programTitle}>{title}</h3>
            <span className={clsx(styles.programDuration, comingSoon && styles.comingSoonBadge)}>
              {duration}
            </span>
          </div>
          <p className={styles.programDescription}>{description}</p>
        </div>
        {!comingSoon && (
          <div className={styles.programArrow}>
            <span>→</span>
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      className={clsx('col col--6')}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
    >
      {comingSoon ? (
        <div className={styles.programCard}>
          {cardContent}
        </div>
      ) : (
        <Link to={link} className={styles.programCard}>
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
}

function ProgramsSection() {
  return (
    <section className={styles.programsSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Your Path to Mastery</h2>
          <p className={styles.sectionSubtitle}>
            Three progressive phases designed to take you from hello world to production deployment.
          </p>
        </motion.div>

        <div className="row">
          <ProgramCard
            phase={1}
            title="School Program"
            duration="4-6 Months"
            description="Build the foundation. Master the terminal, Git, Math, and core Python data engineering skills."
            Icon={GraduationCap}
            link="/docs/school/intro"
            index={0}
          />
          <ProgramCard
            phase={2}
            title="Soft Landing"
            duration="4-6 Months"
            description="Bridge to production. Deep learning, systems engineering, Docker, and full-stack AI applications."
            Icon={Rocket}
            link="/docs/softlanding/intro"
            index={1}
          />
        </div>
        <div className="row" style={{ marginTop: '2rem' }}>
          <div className="col col--3"></div>
          <ProgramCard
            title="Foundation Curriculum"
            duration="Coming Soon"
            description="Essential prerequisites and foundational skills. The perfect starting point for absolute beginners."
            Icon={Building2}
            link="#"
            index={2}
            comingSoon={true}
          />
          <div className="col col--3"></div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="HumblebeeAI Academy Curriculum - Transform into a Technical Junior Engineer">
      <HomepageHeader />
      <main>
        <MissionSection />
        <ProgramsSection />
        <EcosystemSection />
      </main>
    </Layout>
  );
}
