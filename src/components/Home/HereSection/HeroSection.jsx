import React from 'react';
import styles from './HeroSection.module.css';
import Cont from '../../Container/Container.module.css';

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={Cont.container}>
                <div className={styles.heroContent}>
                    <h1>avtoMob</h1>
                    <p>Автомобили с пробегом по самым приятным ценам</p>
                    <a href="#" className={styles.ctaButton}>Узнать больше</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;