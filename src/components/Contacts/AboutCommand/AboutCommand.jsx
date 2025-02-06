import React from 'react';
import styles from './AboutCommand.module.css'
import cont from '../../Container/container.module.css'
import { useSelector } from 'react-redux';

const AboutCommand = () => {
  const contactsData = useSelector((state) => state.cars.contactsData)

  return (
    <div className={styles.AboutCommand}>
      <h1 className={styles.title}>Наша команда</h1>
      <div className={`${styles.contactsGrid} ${cont.container}`}>
        {contactsData.map((contact) => (
          <div key={contact.id} className={styles.contactCard}>
            <img src={contact.photo} alt={contact.name} className={styles.contactPhoto} />
            <div className={styles.contactInfo}>
              <h3 className={styles.contactName}>{contact.name}</h3>
              <p className={styles.contactPosition}>{contact.position}</p>
              <p className={styles.contactDetails}>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p className={styles.contactDetails}>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCommand;