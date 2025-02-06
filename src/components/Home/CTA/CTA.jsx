import React, { useState, useEffect } from 'react';
import styles from './CTA.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../../../redux/action';
const CTASection = () => {
    const dispatch = useDispatch();
    const carsData = useSelector((state) => state.cars.allCars);

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 2;

    const [countCar, setCountCar] = useState(10)

    const cars = carsData.slice(0, countCar)
    useEffect(() => {
        dispatch(loadCars());
    }, [dispatch]);


    const handlePrevSlide = () => {
        if (!cars || cars.length <= visibleCards) {
              return;
        }
        setCurrentIndex(prev => (prev === 0 ? cars.length - visibleCards : prev - 1));
    };

    const handleNextSlide = () => {
        if (!cars || cars.length <= visibleCards) {
           return;
        }
         setCurrentIndex(prev => (prev + 1) % (cars.length - visibleCards + 1));
    };

    return (
        <section className={styles.ctaSection}>
            <div className={styles.slider}>
                <div
                    className={styles.sliderContainer}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    {cars && cars.length > 0 ? (
                        cars.map((el, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardImageContainer}>
                                     {el.image_urls && el.image_urls.length > 0 && (
                                        <img src={el.image_urls[0].url} alt="Автомобиль" className={styles.cardImage} />
                                    )}
                                    <div className={styles.imageOverlay} />
                                </div>
                                <div className={styles.carsInfo}>
                                    <h3 className={styles.cardTitle}>{el.mark} {el.model}</h3>
                                    <h4 className={styles.cardPrice}>{el.price_rub}р.</h4>
                                </div>
                                <p className={styles.cardDesc}>
                                    <span>{el.year} г.</span> {el.km_age ? el.km_age + ' км' : 'Пробег не указан'}
                                </p>
                                <a href={el.url} target='_blank' rel="noopener noreferrer" className={styles.cardButton}>Подробнее</a>
                            </div>
                        ))
                    ) : (
                        <p>Нет доступных автомобилей</p>
                    )}
                </div>
                <button className={`${styles.sliderButton} ${styles.prevButton}`} onClick={handlePrevSlide}>
                    ❮
                </button>
                <button className={`${styles.sliderButton} ${styles.nextButton}`} onClick={handleNextSlide}>
                    ❯
                </button>
            </div>

            <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Найдите свой идеальный автомобиль!</h2>
                <p className={styles.ctaText}>
                    Профессиональный подбор авто с учетом всех ваших пожеланий.
                    Гарантия лучшей цены и юридической чистоты.
                </p>
                <Link to='/catalog' className={styles.ctaButton}>Подобрать авто</Link>
            </div>
        </section>
    );
};

export default CTASection;
