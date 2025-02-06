import React, { useState } from 'react';
import styles from './CarCard.module.css';

const CarCard = (props) => {
    const { car } = props;
    const defaultImage = 'https://shk82-sar.gosuslugi.ru/netcat_files/9/167/123_9.jpg';
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Parse image URLs from JSON string if needed
    let images = [];
    try {
        if (typeof car.image_urls === 'string') {
            images = JSON.parse(car.image_urls).map(img => img.url);
        } else if (Array.isArray(car.image_urls)) {
            images = car.image_urls.map(img => img.url);
        }
    } catch (e) {
        images = [defaultImage];
    }

    const {
        id,
        mark,
        model,
        configuration,
        complectation,
        price_rub = 0,
        year,
        km_age,
        color,
        wheel,
        pts,
        custom,
        region,
        city,
        offer_updated_at,
        options,
        engine_type,
        displacement,
        horse_power,
        body_type,
        transmission,
        drive_type,
        no_accidents,
        url,
        inner_id,
    } = car;

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const sectionWidth = rect.width / Math.min(images.length, 10);
        const index = Math.floor(x / sectionWidth);

        if (index >= 0 && index < images.length) {
            setCurrentImageIndex(index);
        }
    };

    const getCurrentImage = () => {
        if (!images.length) return defaultImage;
        return images[currentImageIndex] || defaultImage;
    };


    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.carLink}
            key={id}
        >
            <div className={styles.carCard}>
                <div
                    className={styles.carImageContainer}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setCurrentImageIndex(0)}
                >
                    <img
                        src={getCurrentImage()}
                        alt={`${mark} ${model}`}
                        className={styles.carImage}
                    />
                </div>

                <div className={styles.carDetailsInfo}>
                    <div className={styles.carInfo}>
                        <a className={styles.carTitle}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer">
                            {mark} {model}
                        </a>
                        <div className={styles.carDataInfo}>
                            <p className={styles.carYear}>Год выпуска: {year}</p>
                            <p className={styles.carPrice}>
                                Цена: {price_rub?.toLocaleString('ru-RU') || 'Не указана'} ₽
                            </p>
                        </div>
                        
                        <p>Источник: {String(id || inner_id).length === 7 ? 'auto.ru' : String(id || inner_id).length === 10 ? 'avito.ru' : String(id || inner_id).length === 8 ? 'drom.ru' : 'Неизвестно'}</p>
                    </div>

                    <div className={styles.carDetails}>
                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>Характеристики</h4>
                            <ul className={styles.detailList}>
                                <li>Комплектация: {complectation || 'Не указана'}</li>
                                <li>Двигатель: {engine_type || 'Не указан'}, {displacement || '?'} л, {horse_power || '?'} л.с.</li>
                                <li>Коробка передач: {transmission || 'Не указана'}</li>
                                <li>Привод: {drive_type || 'Не указан'}</li>
                                <li>Тип кузова: {body_type || 'Не указан'}</li>
                            </ul>
                        </div>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>Состояние</h4>
                            <ul className={styles.detailList}>
                                <li>Пробег: {km_age ? `${km_age} км` : 'Не указан'}</li>
                                <li>Цвет: {color || 'Не указан'}</li>
                                <li>Руль: {wheel || 'Не указан'}</li>
                                <li>ПТС: {pts || 'Не указан'}</li>
                                <li>Таможня: {custom || 'Не указано'}</li>
                                <li>Без ДТП: {no_accidents === 'true' ? 'Да' : 'Нет'}</li>
                            </ul>
                        </div>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>Локация</h4>
                            <ul className={styles.detailList}>
                                <li>Город: {city || 'Не указан'}</li>
                                <li>Регион: {region || 'Не указан'}</li>
                                <li>Обновлено: {offer_updated_at ? new Date(offer_updated_at).toLocaleDateString() : 'Не указано'}</li>
                            </ul>
                        </div>
                    </div>

                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.detailsButton}
                    >
                        Подробнее
                    </a>
                </div>
            </div>
        </a>
    );
};

export default CarCard;