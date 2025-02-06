import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../../redux/action';
import styles from './CarCatalog.module.css';
import cont from '../Container/container.module.css'
import CarCard from './CarCard/CarCard';
import SearchAuto from './SearchAuto/SearchAuto';
import Catalog from './Catalog/Catalog';
const CarCatalog = () => {
    return (
        <div className={`${cont.container} ${styles.catalogContainer}`}>
            <div className={styles.sectionHead}>
                <h2 className={styles.catalogTitle}>Каталог автомобилей</h2>
                <SearchAuto />
            </div>
            <Catalog />
        </div>
    );
};

export default CarCatalog;
