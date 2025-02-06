import React, { useState } from 'react';
import styles from './AccordionItem.module.css';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionButton} onClick={toggleAccordion}>
        {question}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>&#9660;</span>
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
