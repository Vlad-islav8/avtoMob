import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AboutForm.module.css';
import cont from '../../Container/container.module.css';
import { setFormData, setFormErrors, resetForm } from '../../../redux/action';

const AboutForm = () => {
    const formData = useSelector((state) => state.cars.formData);
    const errors = useSelector((state) => state.cars.formErrors);
    const dispatch = useDispatch();

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Пожалуйста, введите ваше имя';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Пожалуйста, введите email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Пожалуйста, введите корректный email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Пожалуйста, введите номер телефона';
        } else if (!/^\+?[0-9\s-()]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Пожалуйста, введите корректный номер телефона';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Пожалуйста, введите сообщение';
        }

        dispatch(setFormErrors(newErrors));
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFormData({ name, value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Здесь будет логика отправки формы на сервер
            console.log('Форма отправлена:', formData);
            // Очищаем форму после успешной отправки
            dispatch(resetForm());
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        }
    };
    return (
        <div className={`${styles.formSection}`}>
            <div className={cont.container}>
                <h2 className={styles.title}>Свяжитесь с нами</h2>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Ваше имя</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Введите ваше имя'
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? styles.errorInput : ''}
                            />
                            {errors.name && <span className={styles.error}>{errors.name}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='youremail@gmail.com'
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? styles.errorInput : ''}
                            />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Телефон</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder='+7-XXX-XXX-XX-XX'
                                value={formData.phone}
                                onChange={handleChange}
                                className={errors.phone ? styles.errorInput : ''}
                            />
                            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Сообщение</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Введите ваш вопрос'

                                rows="5"
                                className={errors.message ? styles.errorInput : ''}
                            ></textarea>
                            {errors.message && <span className={styles.error}>{errors.message}</span>}
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Отправить сообщение
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AboutForm;