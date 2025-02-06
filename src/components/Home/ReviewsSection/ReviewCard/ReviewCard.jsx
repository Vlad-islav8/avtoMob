import React from 'react';
import styles from './ReviewCard.module.css';

const ReviewCard = ({ name, text, rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${styles.star} ${i < rating ? styles.filledStar : ''}`} // Исправлено
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <h3 className={styles.reviewerName}>{name}</h3>
        <div className={styles.rating}>{renderStars(rating)}</div>
      </div>
      <p className={styles.reviewText}>{text}</p>
    </div>
  );
};

export default ReviewCard;

