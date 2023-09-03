import { Filter } from "../../../../Components/DcpIcons/Icon"
import QueryFiltro from "./QueryFiltro"
import styles from './Filtro.module.css'
import { useEffect, useState } from "react"
import { DataItem } from "../../main"


type FiltroProps = {
    onMenuClick: () => void,
    handleFilterData: (d: DataItem[]) => void,
    allData: DataItem[]
}

const Filtro = ({onMenuClick, handleFilterData, allData}: FiltroProps) => {
    const [searchData, setSearchData] = useState<string>("")
    const [anoData, setAnoData] = useState<number>(0)
    // const [statusData, setStatusData] = useState<boolean>()

    const handleSearchData = (d: string) => {
        setSearchData(d)
    }

    const handleAnoData = (d: number) => {
        setAnoData(d)
    }

    // const handleStatusData = (d: boolean) => {
    //     setStatusData(d)
    // }

    useEffect(() => {
        // Função para aplicar todos os filtros
        const applyFilters = (data: DataItem[], searchData: string, anoData: number) => {
            return data.filter((item) => {
                const textMatch =
                String(searchData) === "" ||
                item.text.toLowerCase().includes(searchData) ||
                item.text.toUpperCase().includes(searchData)
        
                const yearMatch = typeof item.year === "number" && String(anoData) === "" || item.year === Number(anoData);

        
                return textMatch && yearMatch;
            });
        };
      
        const filteredData = applyFilters(allData, searchData, anoData);
        handleFilterData(filteredData);
      }, [searchData, anoData]);

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