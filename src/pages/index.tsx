import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          HUMBLEBEE AI <span style={{ color: 'var(--ifm-color-primary)' }}>ACADEMY</span>
        </h1>
        <p className="hero__subtitle" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons} style={{ gap: '1rem' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/school/intro">
            Start School Program
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            to="/docs/softlanding/intro">
            Soft Landing Program
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ title, icon, description }: { title: string, icon: string, description: string }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={{ marginBottom: '0.5rem' }}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features} style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="row">
          <Feature
            title="Zero to Hero"
            icon="🌱"
            description="Start from absolute basics. We build your foundation in Math, Logic, and Python from the ground up."
          />
          <Feature
            title="Engineering First"
            icon="⚡"
            description="Code is just the tool. We teach Architecture, Docker, CI/CD, and Systems Thinking."
          />
          <Feature
            title="Specialized Tracks"
            icon="🎯"
            description="Master your craft. Deep dive into Computer Vision, NLP, or Data Science with real-world capstones."
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
      title={`Welcome to ${siteConfig.title}`}
      description="HumblebeeAI Academy Curriculum >">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
