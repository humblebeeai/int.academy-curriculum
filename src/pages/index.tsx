'use client';

import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import { Sprout, Zap, Target, GraduationCap, Rocket, BookOpen, Code2, Brain } from 'lucide-react';

import styles from './index.module.css';

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
            <span>Open Source Curriculum</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transform Into a<br />
            <span className={styles.gradientText}>Technical Engineer</span>
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From absolute beginner to specialized AI/Software Engineer.<br />
            Master the fundamentals, build real projects, and choose your track.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link className={styles.primaryButton} to="/docs/curriculum-outline">
              <BookOpen size={20} />
              Explore Curriculum
            </Link>
            <Link className={styles.secondaryButton} to="/docs/school/intro">
              Get Started
              <span className={styles.arrow}>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

function Feature({
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
          <div className={styles.iconWrapper}>
            <Icon size={40} strokeWidth={1.5} />
          </div>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ProgramCard({
  title,
  duration,
  description,
  Icon,
  link,
  index
}: {
  title: string;
  duration: string;
  description: string;
  Icon: any;
  link: string;
  index: number;
}) {
  return (
    <motion.div
      className={clsx('col col--6')}
      initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Link to={link} className={styles.programCard}>
        <div className={styles.programCardShadow} />
        <div className={styles.programCardContent}>
          <div className={styles.programIcon}>
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <div className={styles.programInfo}>
            <div className={styles.programHeader}>
              <h3 className={styles.programTitle}>{title}</h3>
              <span className={styles.programDuration}>{duration}</span>
            </div>
            <p className={styles.programDescription}>{description}</p>
          </div>
          <div className={styles.programArrow}>
            <span>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function HomepageFeatures() {
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
          <h2 className={styles.sectionTitle}>Why Choose This Path?</h2>
          <p className={styles.sectionSubtitle}>
            A comprehensive, battle-tested curriculum designed to transform beginners into professionals
          </p>
        </motion.div>

        <div className="row">
          <Feature
            title="Zero to Hero"
            Icon={Sprout}
            description="Start from absolute basics. We build your foundation in Math, Logic, and Python from the ground up."
            index={0}
          />
          <Feature
            title="Engineering First"
            Icon={Code2}
            description="Code is just the tool. We teach Architecture, Docker, CI/CD, and Systems Thinking."
            index={1}
          />
          <Feature
            title="Specialized Tracks"
            Icon={Target}
            description="Master your craft. Deep dive into Computer Vision, NLP, Data Science, or Software Engineering."
            index={2}
          />
        </div>
      </div>
    </section>
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
          <h2 className={styles.sectionTitle}>Choose Your Journey</h2>
          <p className={styles.sectionSubtitle}>
            Two comprehensive programs designed to take you from beginner to professional
          </p>
        </motion.div>

        <div className="row">
          <ProgramCard
            title="School Program"
            duration="6 Months"
            description="Build absolute engineering fundamentals. Master computational thinking, mathematics, and core programming skills."
            Icon={GraduationCap}
            link="/docs/school/intro"
            index={0}
          />
          <ProgramCard
            title="Soft Landing Program"
            duration="Advanced"
            description="Technical depth and systems engineering. Deep learning, advanced AI, and specialization tracks."
            Icon={Rocket}
            link="/docs/softlanding/intro"
            index={1}
          />
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Brain size={48} className={styles.ctaIcon} />
          <h2 className={styles.ctaTitle}>Ready to Transform Your Future?</h2>
          <p className={styles.ctaDescription}>
            Join hundreds of students who have successfully transformed into technical professionals
          </p>
          <Link className={styles.ctaButton} to="/docs/curriculum-outline">
            <BookOpen size={20} />
            View Full Curriculum
          </Link>
        </motion.div>
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
        <HomepageFeatures />
        <ProgramsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
