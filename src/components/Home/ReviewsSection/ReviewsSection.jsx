import React, { useState, useEffect, useRef } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../../../redux/action';
import styles from './ReviewsSection.module.css'; // Подключаем стили

const ReviewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = useSelector((state) => state.cars.reviews);
    const dispatch = useDispatch();
    const sliderRef = useRef(null);

    useEffect(() => {
        dispatch(loadCars());
    }, [dispatch]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    const handlePrevSlide = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentIndex(prev => Math.min(reviews.length - 1, prev + 1));
    };

    return (
        <div className={styles.reviewsSection}>
            <h2 className={styles.sectionTitle}>Отзывы клиентов</h2>
            <div className={styles.sliderContainer}>
                <div
                    ref={sliderRef}
                    className={styles.slider}
                >
                    {reviews.map((review, index) => (
                        <div key={index} className={styles.slide}>
                            <ReviewCard {...review} />
                        </div>
                    ))}
                </div>
                <button
                    className={`${styles.sliderButton} ${styles.prevButton}`}
                    onClick={handlePrevSlide}
                    disabled={currentIndex === 0}
                >
                    ❮
                </button>
                <button
                    className={`${styles.sliderButton} ${styles.nextButton}`}
                    onClick={handleNextSlide}
                    disabled={currentIndex >= reviews.length - 1}
                >
                    ❯
                </button>
            </div>
            <div className={styles.dotsContainer}>
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;