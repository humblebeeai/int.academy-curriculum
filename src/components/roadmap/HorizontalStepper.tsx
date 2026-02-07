"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "@docusaurus/Link";
import {
  ChevronDown,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { phases } from "./roadmapData";
import styles from "./HorizontalStepper.module.css";

export function HorizontalStepper() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <div className={styles.stepperContainer} ref={containerRef}>
      {/* Progress Bar */}
      <div className={styles.progressTrack}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: "0%" }}
          animate={
            isInView
              ? { width: `${((activeStep + 1) / phases.length) * 100}%` }
              : {}
          }
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Step Circles */}
        <div className={styles.stepsRow}>
          {phases.map((phase, index) => (
            <motion.button
              key={phase.id}
              className={`${styles.stepCircle} ${index <= activeStep ? styles.stepActive : ""} ${index === activeStep ? styles.stepCurrent : ""}`}
              style={
                {
                  "--phase-color": phase.color,
                } as React.CSSProperties
              }
              onClick={() => setActiveStep(index)}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.3 + index * 0.15,
              }}
              whileHover={{ scale: 1.12 }}
            >
              <span className={styles.stepNumber}>{index + 1}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Step Labels */}
      <div className={styles.labelsRow}>
        {phases.map((phase, index) => (
          <motion.button
            key={phase.id}
            className={`${styles.stepLabel} ${index === activeStep ? styles.stepLabelActive : ""}`}
            onClick={() => setActiveStep(index)}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          >
            <span className={styles.labelTitle}>{phase.title}</span>
            <span className={styles.labelDuration}>
              <Clock size={12} />
              {phase.duration}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Expanded Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          className={styles.contentPanel}
          style={
            {
              "--phase-color": phases[activeStep].color,
            } as React.CSSProperties
          }
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.panelHeader}>
            <div>
              <h3 className={styles.panelTitle}>
                {phases[activeStep].title}
              </h3>
              <p className={styles.panelSubtitle}>
                {phases[activeStep].subtitle}
              </p>
            </div>
            <span className={styles.panelDuration}>
              <Clock size={16} />
              {phases[activeStep].duration}
            </span>
          </div>

          <p className={styles.panelDescription}>
            {phases[activeStep].description}
          </p>

          <div className={styles.skillsList}>
            {phases[activeStep].skills.map((skill, i) => (
              <motion.div
                key={i}
                className={styles.skillChip}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.06 }}
              >
                <skill.icon size={16} />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>

          <Link to={phases[activeStep].link} className={styles.phaseLink}>
            <span>Explore {phases[activeStep].title}</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Step Navigation */}
      <div className={styles.stepNav}>
        <button
          className={styles.navButton}
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
        >
          Previous
        </button>
        <span className={styles.stepIndicator}>
          {activeStep + 1} / {phases.length}
        </span>
        <button
          className={styles.navButton}
          onClick={() =>
            setActiveStep(Math.min(phases.length - 1, activeStep + 1))
          }
          disabled={activeStep === phases.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HorizontalStepper;
