import React from 'react';
import styles from './HeroSection.module.css';
import Cont from '../../Container/Container.module.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={Cont.container}>
                <div className={styles.heroContent}>
                    <h1>avtoMob</h1>
                    <p>Автомобили с пробегом по самым приятным ценам</p>
                    <Link to="/search" className={styles.ctaButton}>Подобрать авто</Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;