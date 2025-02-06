import React, { useEffect } from 'react';
import styles from './HowWeWork.module.css';
import cont from '../../Container/Container.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../../../redux/action';

const HowWeWork = () => {
    const steps = useSelector((state) => state.cars.steps);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCars());
    }, [dispatch]);

    return (
        <section className={styles.section} id="как-мы-работаем">
            <div className={styles.header}>
                <h2 className={styles.title}>Как мы работаем</h2>
                <p className={styles.description}>
                    avtoMob – ваш надежный помощник в мире подержанных автомобилей.
                </p>
            </div>
            <div className={`${cont.container} ${styles.container}`}>
                {steps && steps.length > 0 ? (
                    steps.map((step, index) => (
                        <div className={styles.card} key={step.title || index}>
                            {step.icon && (
                                <img src={step.icon} alt={step.title} className={styles.icon} />
                            )}
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                            <p className={styles.cardDescription}>{step.description}</p>
                        </div>
                    ))
                ) : (
                    <p className={styles.loadingMessage}>Загрузка данных...</p>
                )}
            </div>
        </section>
    );
};

export default HowWeWork;
