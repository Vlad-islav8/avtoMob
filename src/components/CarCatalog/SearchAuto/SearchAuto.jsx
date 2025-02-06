import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './SearchAuto.module.css'
import { SearhUpdateText } from '../../../redux/action'
const SearchAuto = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const handleInputChange = () => {
        const value = inputRef.current.value
        console.log(value)
        setSearchValue(value);
    }

    const handleSearch = (e) => {
        const value = inputRef.current.value
        e.preventDefault(); 
        dispatch(SearhUpdateText(value));
    }

    
    return (
        <div className={styles.SearchAuto}>
            <form onSubmit={handleSearch} className={styles.searchWrapper}>
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder="Поиск по марке и модели"
                    className={styles.searchInput}
                    ref={inputRef}
                />
                <button 
                    type="submit"
                    className={styles.searchButton}
                    onClick={handleSearch}
                >
                    Поиск
                </button>
            </form>
        </div>
    )
}

export default SearchAuto