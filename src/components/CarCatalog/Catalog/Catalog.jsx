import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Catalog.module.css';
import { loadCars } from '../../../redux/action';
import CarCard from '../CarCard/CarCard';
import Loader from './Loader/Loader';

const Catalog = () => {
    const carsData = useSelector((state) => state.cars.allCars);
    const dispatch = useDispatch();
    const [moreBtnVisible, setMoreBtnVisible] = useState(true);
    const [countCar, setCountCar] = useState(10);

    const cars = carsData.slice(0, countCar);

    const handleCarsMoreLoad = () => {
        setCountCar((prevCount) => prevCount + 10);
    };

    useEffect(() => {
        dispatch(loadCars());
    }, [dispatch]);

    useEffect(() => {
        if (cars.length >= carsData.length) {
            setMoreBtnVisible(false);
        } else {
            setMoreBtnVisible(true);
        }
    }, [cars, carsData]);

    const noResult = () => {
        return (
            <div className={styles.noResult}>
                <p>Ничего не найдено</p>
            </div>
        );
    };

    return (
        <>
            <div className={styles.carList}>
                {cars && cars.length > 0 ? (
                    cars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))
                ) : cars.length === 0 ? (
                    noResult()
                ) : (
                    <Loader />
                )}
            </div>
            {moreBtnVisible && (
                <div className={styles.hidenMoreBtn}>
                    <button onClick={handleCarsMoreLoad}>Показать еще...</button>
                </div>
            )}
        </>
    );
};

export default Catalog;
