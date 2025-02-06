import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faThList, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import logo from '../../assets/Logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Состояние для открытия/закрытия меню

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
    };

    return (
        <header className={styles.header}>
            {/* Логотип и название компании */}
            <div className={styles.logo}>
                <Link to="/" aria-label="Главная страница">
                    <img src={logo} alt="Логотип компании" />
                    <h2>avtoMob</h2>
                </Link>
            </div>

            {/* Кнопка для мобильного меню */}
            <button
                className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            {/* Навигационное меню */}
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                <ul className={styles.navList}>
                    <li>
                        <Link to="/" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faHome} /> Главная
                        </Link>
                    </li>
                    <li>
                        <Link to="/search" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faSearch} /> Поиск
                        </Link>
                    </li>
                    <li>
                        <Link to="/catalog" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faThList} /> Каталог
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faEnvelope} /> Контакты
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default Header;