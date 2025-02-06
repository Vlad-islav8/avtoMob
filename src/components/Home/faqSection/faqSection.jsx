import React, { useEffect } from 'react';
import styles from './faqSection.module.css';
import AccordionItem from './AccordionItem/AccordionItem';
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../../../redux/action';

const FAQSection = () => {
    const dispatch = useDispatch()
    const faqData = useSelector((state) => state.cars.Faq)
      
    useEffect(() => {
        dispatch(loadCars())
    },[dispatch])
    return (
        <section className={styles.faqSection}>
            <div className={styles.faqContainer}>
                <h2 className={styles.faqTitle}>Часто задаваемые вопросы</h2>
                <div className={styles.accordion}>
                    {faqData.map((item, index) => (
                        <AccordionItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
