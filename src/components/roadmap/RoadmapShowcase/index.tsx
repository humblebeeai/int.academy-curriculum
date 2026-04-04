"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "@docusaurus/Link";
import { ArrowRight } from "lucide-react";
import { JourneyMap } from "../JourneyMap";
import styles from "./RoadmapShowcase.module.css";

export function RoadmapShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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

        <JourneyMap />

        {/* CTA */}
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
