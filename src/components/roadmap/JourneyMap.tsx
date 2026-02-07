"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "@docusaurus/Link";
import {
  Clock,
  CheckCircle,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { phases } from "./roadmapData";
import styles from "./JourneyMap.module.css";

export function JourneyMap() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <div className={styles.journeyContainer} ref={containerRef}>
      {/* Winding Path SVG */}
      <svg
        className={styles.pathSvg}
        viewBox="0 0 100 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="journeyGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--accent-gold)" />
            <stop offset="50%" stopColor="var(--accent-amber)" />
            <stop offset="100%" stopColor="var(--accent-orange)" />
          </linearGradient>
        </defs>
        {/* Background path */}
        <path
          d="M 50 0 C 80 80, 20 120, 50 200 C 80 280, 20 320, 50 400 C 80 480, 20 520, 50 600"
          fill="none"
          stroke="var(--ifm-color-emphasis-200)"
          strokeWidth="2"
          strokeDasharray="8 4"
        />
        {/* Animated path */}
        <motion.path
          d="M 50 0 C 80 80, 20 120, 50 200 C 80 280, 20 320, 50 400 C 80 480, 20 520, 50 600"
          fill="none"
          stroke="url(#journeyGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        />
      </svg>

      {/* Phase Stops */}
      <div className={styles.phasesColumn}>
        {phases.map((phase, index) => {
          const isExpanded = expandedPhase === phase.id;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={phase.id}
              className={`${styles.phaseStop} ${isEven ? styles.phaseLeft : styles.phaseRight}`}
              initial={{ opacity: 0, x: isEven ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.25,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Pin marker on the path */}
              <motion.div
                className={styles.pinMarker}
                style={
                  {
                    "--phase-color": phase.color,
                  } as React.CSSProperties
                }
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.6 + index * 0.25,
                }}
              >
                <MapPin size={20} />
              </motion.div>

              {/* Phase Card */}
              <motion.div
                className={`${styles.journeyCard} ${isExpanded ? styles.journeyCardExpanded : ""}`}
                style={
                  {
                    "--phase-color": phase.color,
                  } as React.CSSProperties
                }
                onClick={() =>
                  setExpandedPhase(isExpanded ? null : phase.id)
                }
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.cardAccent} />

                <div className={styles.cardTop}>
                  <div className={styles.phaseLabel}>Phase {index + 1}</div>
                  <span className={styles.duration}>
                    <Clock size={13} />
                    {phase.duration}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{phase.title}</h3>
                <p className={styles.cardSubtitle}>{phase.subtitle}</p>

                <div className={styles.skillTags}>
                  {phase.skills.map((skill, i) => (
                    <span key={i} className={styles.skillTag}>
                      <skill.icon size={13} />
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className={styles.expandedContent}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className={styles.description}>
                        {phase.description}
                      </p>

                      <div className={styles.skillChecks}>
                        {phase.skills.map((skill, i) => (
                          <div key={i} className={styles.skillCheck}>
                            <CheckCircle
                              size={15}
                              style={{ color: phase.color }}
                            />
                            <span>{skill.name}</span>
                          </div>
                        ))}
                      </div>

                      <Link to={phase.link} className={styles.exploreLink}>
                        <span>Explore Phase</span>
                        <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default JourneyMap;
