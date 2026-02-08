import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { HelpCircle, ChevronDown } from "lucide-react";
import styles from "./FAQSection.module.css";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

function FAQItemComponent({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={styles.faqItem}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className={clsx(styles.faqQuestion, isOpen && styles.faqQuestionOpen)}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          size={20}
          className={clsx(styles.faqChevron, isOpen && styles.faqChevronOpen)}
        />
      </button>
      <motion.div
        className={styles.faqAnswer}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <p>{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Common questions about the curriculum and Academy program.",
}: FAQSectionProps) {
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionIconWrapper}>
            <HelpCircle size={32} />
          </div>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionSubtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.faqContainer}>
          {items.map((item, index) => (
            <FAQItemComponent
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
