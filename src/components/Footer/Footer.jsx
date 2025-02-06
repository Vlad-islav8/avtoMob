import React from 'react';
import { Link } from 'react-router-dom'; // Для навигации
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faThList, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';
import logo from '../../assets/Logo.svg'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Верхняя часть футера */}
            <div className={styles.footerTop}>
                {/* Левая часть с ссылками */}
                <div className={styles.footerLinks}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome}/> Главная
                    </Link>
                    <Link to="/catalog">
                        <FontAwesomeIcon icon={faThList}/> Каталог
                    </Link>
                </div>

                {/* Логотип по центру */}
                <div className={styles.footerLogo}>
                    <Link to="/">
                        <img src={logo} alt="Логотип компании"/>
                        <span className={styles.logoText}>avtoMob</span>
                    </Link>
                </div>

                {/* Правая часть с ссылками */}
                <div className={styles.footerLinks}>
                    <Link to="/search">
                        <FontAwesomeIcon icon={faSearch}/> Поиск
                    </Link>
                    <Link to="/contacts">
                        <FontAwesomeIcon icon={faEnvelope}/> Контакты
                    </Link>
                </div>
            </div>

            {/* Нижняя часть футера */}
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} avtoMob. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;