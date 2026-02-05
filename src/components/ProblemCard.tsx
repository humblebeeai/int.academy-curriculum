import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./ProblemCard.module.css";

export interface ProblemCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}

export default function ProblemCard({
  title,
  description,
  icon,
  index = 0,
}: ProblemCardProps) {
  return (
    <motion.div
      className={clsx("col col--4")}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className={styles.problemCard}>
        <div className={styles.cardShadowBottom} />
        <div className={styles.cardShadowMiddle} />
        <div className={styles.cardMain}>
          <div className={styles.iconWrapper}>{icon}</div>
          <Heading as="h3" className={styles.problemTitle}>
            {title}
          </Heading>
          <p className={styles.problemDescription}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
