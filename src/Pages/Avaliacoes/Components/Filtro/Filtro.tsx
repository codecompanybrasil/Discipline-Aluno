import { Filter } from "../../../../Components/DcpIcons/Icon"
import QueryFiltro from "./QueryFiltro"
import styles from './Filtro.module.css'
import { useEffect, useState } from "react"
import { DataItem } from "../ModalAvaliacao"

type FiltroProps = {
    onMenuClick: () => void,
    handleUrlAPI: (url: URL) => void,
    urlAPI: URL
}

const Filtro = ({onMenuClick, handleUrlAPI, urlAPI}: FiltroProps) => {
    const [searchData, setSearchData] = useState<string>("")
    const [anoData, setAnoData] = useState<number>(0)
    // const [statusData, setStatusData] = useState<boolean>()

    useEffect(() => {
        // Função para renovar a URL dos filtros
        if (searchData) {
            urlAPI.searchParams.set("s", searchData)
            handleUrlAPI(urlAPI)
            console.log("Dando o Handle na url")
        }
    }, [searchData]);

    useEffect(() => {
        // Função para renovar a URL dos filtros
        if (anoData) {
            urlAPI.searchParams.set("ano", String(anoData))
            handleUrlAPI(urlAPI)
            console.log("Dando o Handle na url")
        }
    }, [anoData]);

    
    const handleSearchData = (d: string) => {
        setSearchData(d)
    }

    const handleAnoData = (d: number) => {
        setAnoData(d)
    }

    // const handleStatusData = (d: boolean) => {
    //     setStatusData(d)
    // }


    return (
        <div className={`d-flex flex-column`}>
            <div className={`${styles.header_filtro} d-flex align-items-center mt-1`} style={{marginLeft: "10px"}} >
                <div onClick={onMenuClick}>
                    <Filter isButton/>
                </div>
                <h2 className={styles.title_filtro} >Filtros</h2>
            </div>
            <QueryFiltro title="Pesquisar" typeInput="search" handleData={handleSearchData} />
            <QueryFiltro title="Ano" typeInput="data" handleData={handleAnoData} />
            {/* <QueryFiltro title="Status" typeInput="status" handleData={handleStatusData} /> */}
        </div>
    )
}

export default Filtro