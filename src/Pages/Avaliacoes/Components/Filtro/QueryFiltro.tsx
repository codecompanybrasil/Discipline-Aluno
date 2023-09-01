import styles from './Filtro.module.css'

type QueryFiltroProps = {
    title: string,
    typeInput: "data" | "search" | "status"
}

const QueryFiltro = ({title, typeInput}: QueryFiltroProps) => {
    return (
        <div className={styles.query_filtro} >
            <h3>{title}</h3>
            {typeInput == "data" ? (
                <div>
                    <input type="date" />
                </div>  
            ) : typeInput == "search" ? (
                <div>
                    <input type="search" />
                </div>
            ) : typeInput == "status" ? (
                <div>
                    <input type="text" />
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default QueryFiltro