import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterCars } from '../../../redux/action'
import styles from './Parametrs.module.css'

const Parametrs = () => {
    const dispatch = useDispatch()
    const [filters, setFilters] = useState({
        price: { min: '', max: '' },
        year: { min: '', max: '' },
        km_age: { min: '', max: '' },
        mark: '',
        body_type: '',
        transmission: '',
        drive_type: '',
        engine_type: '',
        color: '',
        no_accidents: false,
        source: '',
        wheel: '',
        region: '',
        city: ''
    })

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target
        if (name.includes('.')) {
            const [parent, child] = name.split('.')
            setFilters(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }))
        } else {
            setFilters(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        debugger
        
        dispatch(filterCars(filters))
    }

    return (
        <form className={styles.parametrs} onSubmit={handleSubmit}>
            <div className={styles.filterGroup}>
                <h3>Цена (₽)</h3>
                <div className={styles.rangeInputs}>
                    <input
                        type="number"
                        name="price.min"
                        placeholder="От"
                        value={filters.price.min}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="number"
                        name="price.max"
                        placeholder="До"
                        value={filters.price.max}
                        onChange={handleFilterChange}
                    />
                </div>
            </div>

            <div className={styles.filterGroup}>
                <h3>Год выпуска</h3>
                <div className={styles.rangeInputs}>
                    <input
                        type="number"
                        name="year.min"
                        placeholder="От"
                        value={filters.year.min}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="number"
                        name="year.max"
                        placeholder="До"
                        value={filters.year.max}
                        onChange={handleFilterChange}
                    />
                </div>
            </div>

            <div className={styles.filterGroup}>
                <h3>Пробег (км)</h3>
                <div className={styles.rangeInputs}>
                    <input
                        type="number"
                        name="km_age.min"
                        placeholder="От"
                        value={filters.km_age.min}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="number"
                        name="km_age.max"
                        placeholder="До"
                        value={filters.km_age.max}
                        onChange={handleFilterChange}
                    />
                </div>
            </div>

            <div className={styles.filterGroup}>
                <h3>Тип кузова</h3>
                <select name="body_type" value={filters.body_type} onChange={handleFilterChange}>
                    <option value="">Любой</option>
                    <option value="Седан">Седан</option>
                    <option value="Хэтчбек">Хэтчбек</option>
                    <option value="Универсал">Универсал</option>
                    <option value="Внедорожник">Внедорожник</option>
                    <option value="Минивэн">Минивэн</option>
                </select>
            </div>

            <div className={styles.filterGroup}>
                <h3>Коробка передач</h3>
                <select name="transmission" value={filters.transmission} onChange={handleFilterChange}>
                    <option value="">Любая</option>
                    <option value="автомат">Автоматическая</option>
                    <option value="механика">Механическая</option>
                    <option value=" робот">Роботизированная</option>
                    <option value="вариатор">Вариатор</option>
                </select>
            </div>

            <div className={styles.filterGroup}>
                <h3>Привод</h3>
                <select name="drive_type" value={filters.drive_type} onChange={handleFilterChange}>
                    <option value="">Любой</option>
                    <option value="Передний">Передний</option>
                    <option value="Задний">Задний</option>
                    <option value="Полный">Полный</option>
                </select>
            </div>

            <div className={styles.filterGroup}>
                <h3>Дополнительно</h3>
                <label>
                    <input
                        type="checkbox"
                        name="no_accidents"
                        checked={filters.no_accidents}
                        onChange={handleFilterChange}
                    />
                    Без ДТП
                </label>
            </div>
            <div className={styles.filterGroup}>
                <h3>Источник</h3>
                <select name="source" value={filters.source} onChange={handleFilterChange}>
                    <option value="">Все</option>
                    <option value="auto.ru">Auto.ru</option>
                    <option value="avito.ru">Avito.ru</option>
                    <option value="drom.ru">Drom.ru</option>
                </select>
            </div>

            <div className={styles.filterGroup}>
                <h3>Цвет</h3>
                <select name="color" value={filters.color} onChange={handleFilterChange}>
                    <option value="">Все</option>
                    <option value="белый">Белый</option>
                    <option value="черный">Черный</option>
                    <option value="серый">Серый</option>
                    <option value="красный">Красный</option>
                    <option value="синий">Синий</option>
                    <option value="зеленый">Зеленый</option>
                    {/* Добавьте другие цвета по необходимости */}
                </select>
            </div>

            <div className={styles.filterGroup}>
                <h3>Руль</h3>
                <select name="wheel" value={filters.wheel} onChange={handleFilterChange}>
                    <option value="">Все</option>
                    <option value="левый">Левый</option>
                    <option value="правый">Правый</option>
                </select>
            </div>

            <div className={styles.filterGroup}>
                <h3>Регион</h3>
                <input
                    type="text"
                    name="region"
                    placeholder="Введите регион"
                    value={filters.region}
                    onChange={handleFilterChange}
                />
            </div>

            <div className={styles.filterGroup}>
                <h3>Город</h3>
                <input
                    type="text"
                    name="city"
                    placeholder="Введите город"
                    value={filters.city}
                    onChange={handleFilterChange}
                />
            </div>

            <button type="submit" className={styles.submitButton}>
                Применить фильтры
            </button>
        </form>
    )
}

export default Parametrs