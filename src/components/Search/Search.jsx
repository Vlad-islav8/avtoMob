import SearchAuto from '../CarCatalog/SearchAuto/SearchAuto'
import styles from './Search.module.css'
import cont from '../Container/container.module.css'
import Catalog from '../CarCatalog/Catalog/Catalog'
import Parametrs from './Parametrs/Parametrs'

const Search = () => {

    return (
        <div className={styles.Search}>
            <div className={styles.searchHead}>
            <h1>Подберите свой автомобиль </h1>
            <SearchAuto />
            <Parametrs />
            </div>
            
            <div className={cont.container}>
                <Catalog />
            </div>
        </div>
    )
}

export default Search