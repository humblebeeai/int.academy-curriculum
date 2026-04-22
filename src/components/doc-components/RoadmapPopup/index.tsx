import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './RoadmapPopup.module.css';

export default function RoadmapPopup() {
  const [isHovered, setIsHovered] = useState(false);
  const iconUrl = useBaseUrl('/img/iconkumush.png');

  // transition settings for a premium spring feel (no bounce, high precision)
  const springConfig = {
    type: "spring",
    bounce: 0,
    duration: 0.5,
  };

  return (
    <motion.a
      href="https://dev-kumushai-dashboard.humblebee.ai/chat/17f6e28b-9a0e-4326-a176-c45530c4b8b6"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.popupContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      // Use layout to ensure the entire container interpolates width changes perfectly
      layout
      transition={springConfig}
    >
      {/* Icon is on the left in DOM and visual order */}
      <motion.div 
        layout="position" 
        className={styles.iconWrapper}
        transition={springConfig}
      >
        <img 
          src={iconUrl} 
          alt="Roadmap Assistant" 
          className={styles.icon} 
        />
      </motion.div>

      {/* 
          Text is on the right in DOM and visual order. 
          Its width and opacity are animated in one single spring, 
          eliminating any staged disappearance or layout jump.
      */}
      <motion.div
        className={styles.textWrapper}
        initial={false}
        animate={{ 
          width: isHovered ? 'auto' : 0,
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? 'blur(0px)' : 'blur(4px)'
        }}
        transition={springConfig}
      >
        <span className={styles.text}>
          ask roadmap questions
        </span>
      </motion.div>
    </motion.a>
  );
}
