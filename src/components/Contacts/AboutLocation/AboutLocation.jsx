import React from 'react';
import styles from './AboutLocation.module.css'
import cont from '../../Container/container.module.css'
import { useSelector } from 'react-redux';

const AboutLocation = () => {
  const locationData = useSelector((state) => state.cars.locationData)

  return (
    <div className={styles.AboutLocation}>
      <h1 className={styles.title}>Как нас найти</h1>
      <div className={`${styles.locationWrapper} ${cont.container}`}>
        <div className={styles.infoBlock}>
          <div className={styles.infoItem}>
            <h3>Адрес</h3>
            <p>{locationData.address}</p>
            <p>{locationData.city}, {locationData.postalCode}</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Контакты</h3>
            <p>
              <a href={`tel:${locationData.phone}`}>{locationData.phone}</a>
            </p>
            <p>
              <a href={`mailto:${locationData.email}`}>{locationData.email}</a>
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3>Режим работы</h3>
            <p>{locationData.workHours}</p>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src={locationData.mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта расположения офиса"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutLocation;