import React from 'react';
import styles from './AboutUs.module.css';
import photo from '../../../assets/salonAbout.jpg'; // Импортируем фотографию

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <h2 className={styles.aboutTitle}>О компании avtoMob</h2>
                    <p className={styles.aboutText}>
                        <strong>avtoMob</strong> —  ваш верный помощник в выборе автомобиля с пробегом. Мы не просто продаем автомобили, мы помогаем вам найти именно тот, который отвечает вашим требованиям, предлагая широкий выбор проверенных вариантов и экспертную поддержку на каждом этапе.
                    </p>
                    <div className={styles.aboutFeatures}>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>🚗</span>
                            <h3 className={styles.featureTitle}>Широкий выбор</h3>
                            <p className={styles.featureText}>
                                У нас вы найдете автомобили различных марок, моделей и ценовых категорий.
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>🔍</span>
                            <h3 className={styles.featureTitle}>Проверка качества</h3>
                            <p className={styles.featureText}>
                                Каждый автомобиль проходит многоэтапную проверку на техническое состояние и юридическую чистоту.
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>💼</span>
                            <h3 className={styles.featureTitle}>Индивидуальный подход</h3>
                            <p className={styles.featureText}>
                                Мы поможем вам подобрать автомобиль, который идеально соответствует вашим потребностям.
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>📜</span>
                            <h3 className={styles.featureTitle}>Гарантия и поддержка</h3>
                            <p className={styles.featureText}>
                                Мы предоставляем гарантию на все автомобили и поддерживаем клиентов даже после покупки.
                            </p>
                        </div>
                    </div>
                    <a href="/catalog" className={styles.ctaButton}>Перейти в каталог</a>
                </div>
                <div className={styles.aboutImage}>
                    <img src={photo} alt="Автосалон avtoMob" className={styles.image} />
                </div>
            </div>
        </section>
    );
};

export default About;