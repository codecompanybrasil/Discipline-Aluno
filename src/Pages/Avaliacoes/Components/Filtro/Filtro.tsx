import { Filter } from "../../../../Components/DcpIcons/Icon"
import QueryFiltro from "./QueryFiltro"
import styles from './Filtro.module.css'

type FiltroProps = {
    onMenuClick: () => void
}

const Filtro = ({onMenuClick}: FiltroProps) => {
    return (
        <div className={`d-flex flex-column`}>
            <div className={`${styles.header_filtro} d-flex align-items-center mt-1`} style={{marginLeft: "10px"}} >
                <div onClick={onMenuClick}>
                    <Filter isButton/>
                </div>
                <h2 className={styles.title_filtro} >Filtros</h2>
            </div>
            <QueryFiltro title="Pesquisar" typeInput="search" />
            <QueryFiltro title="Ano" typeInput="data" />
            <QueryFiltro title="Status" typeInput="status" />
        </div>
    )
}

export default Filtro