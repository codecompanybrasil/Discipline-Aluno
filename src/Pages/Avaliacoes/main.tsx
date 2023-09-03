//Componente principal da página de avaliações
import Paginacao from "./Components/Paginacao/Paginacao"
import HeaderAvaliacao from "./Components/HeaderAvaliacao"
import QueryAvaliacao from "./Components/QueryAvaliacao";
import styles from './Components/Avaliacao.module.css'
import { Enem, Mit, Obmep, Filter, NoResults } from "../../Components/DcpIcons/Icon";
import { useState, CSSProperties, ReactNode } from "react";
import Filtro from "./Components/Filtro/Filtro";

export interface DataItem {
    text: string,
    year: number,
    icon: ReactNode
}

const Avaliacoes = () => {
    const allData = [ //Variável temporaria, futuramente o valor virá como parametro
        {
            text: "Enem - 2016",
            year: 2016,
            icon: (<Enem />),

        }, {
            text: "Obmep - 2018",
            year: 2018,
            icon: (<Obmep />)
        },
        {
            text: "MIT - 2016",
            year: 2016,
            icon: (<Mit />)
        },
        {
            text: "MIT - 2019",
            year: 2019,
            icon: (<Mit />)
        },
        {
            text: "Enem - 2017",
            year: 2017,
            icon: (<Enem />),

        },
        {
            text: "Obmep - 2017",
            year: 2017,
            icon: (<Obmep />),

        },
    ]

    const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null) //Váriavel que diz qual Query tem o menu aberto
    const [avaliacaoStyle, setAvaliacaoStyle] = useState(styles.avaliacao)
    const [filterStyle, setFilterStyle] = useState(styles.filter_area)
    const [filterIconStyle, setFilterIconStyle] = useState<CSSProperties>({visibility: "visible"})
    const [data, setData] = useState<DataItem[]>(allData)
    const [limitedData, setLimitedData] = useState<DataItem[]>(allData)
    

    // useEffect(() => {
    //     console.log(`SetActiveMenuIndex foi alterado, mensagem do pai: ${activeMenuIndex}`)
    // }, [activeMenuIndex])

    const onMenuClick = () => {
        if (avaliacaoStyle == styles.avaliacao) { //Deve abrir o filtro
            setAvaliacaoStyle(`${styles.avaliacao} ${styles.filter_open}`)
            setFilterStyle(`${styles.filter_area_opened} ${styles.filter_area}`)
            setFilterIconStyle({visibility: "hidden"})
        } else { // Deve fechar o filtro
            setAvaliacaoStyle(styles.avaliacao)
            setFilterStyle(styles.filter_area)
            setFilterIconStyle({visibility: "visible"})
        }
    }

    // useEffect(() => onMenuClick(), [])
    const handleData = (d: DataItem[]) => {
        setData(d)
    }

    const handleLimitedData = (d: DataItem[]) => {
        setLimitedData(d)
    }

    const handleSetActiveMenuIndex = (menu: number | null) => {
        setActiveMenuIndex(menu)
    }

    return (
        <div className={styles.centralizer} >
            <div className={filterStyle}>
                <Filtro onMenuClick={onMenuClick} handleFilterData={handleData} allData={allData} />
            </div>
            <div className={avaliacaoStyle} >
                <HeaderAvaliacao onClick={onMenuClick} filterIconStyle={filterIconStyle} />
                <div className={styles.querys_avaliacao} >
                    {limitedData.length === 0 ? (
                        <div className="d-flex flex-column justify-content-center align-content-center">
                            <div className="w-50">
                                <p className={styles.sem_resultados} >Sem resultados</p>
                                <NoResults />
                            </div>
                        </div>
                    ) : (limitedData.map((item, index) => (
                        <QueryAvaliacao 
                            key={index}
                            index={index}
                            text={item.text}
                            icon={item.icon}
                            setActiveMenuIndex={handleSetActiveMenuIndex}
                            activeMenuIndex={activeMenuIndex}
                        />
                    )))}
                </div>
                <Paginacao actualPage={1} totalPages={Math.round(data.length / 5)} data={data} handleLimitedData={handleLimitedData} />
            </div>
        </div>
    )
}

export default Avaliacoes

