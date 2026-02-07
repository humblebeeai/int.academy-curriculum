"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "@docusaurus/Link";
import { ArrowRight } from "lucide-react";
import { HorizontalStepper } from "./HorizontalStepper";
import { JourneyMap } from "./JourneyMap";
import styles from "./RoadmapShowcase.module.css";

type VariantKey = "stepper" | "journey";

interface TabOption {
  key: VariantKey;
  label: string;
  description: string;
}

const tabs: TabOption[] = [
  { key: "stepper", label: "Stepper", description: "Step-by-step progress" },
  { key: "journey", label: "Journey", description: "Winding path visual" },
];

const variants: Record<VariantKey, React.ComponentType> = {
  stepper: HorizontalStepper,
  journey: JourneyMap,
};

export function RoadmapShowcase() {
  const [activeTab, setActiveTab] = useState<VariantKey>("stepper");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const ActiveComponent = variants[activeTab];

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
            A structured path from fundamentals to AI engineering mastery.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          className={styles.tabSwitcher}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab.key)}
              title={tab.description}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Active Variant */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>

        {/* Shared CTA */}
        <motion.div
          className={styles.roadmapCTA}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
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

export default RoadmapShowcase;
