//Componente principal da página de avaliações
import Paginacao from "./Paginacao/Paginacao"
import HeaderAvaliacao from "./HeaderAvaliacao"
import QueryAvaliacao from "./QueryAvaliacao";
import styles from './Avaliacao.module.css'
import { Enem, Mit, Obmep, NoResults } from "../../../Components/DcpIcons/Icon";
import { useState, CSSProperties, ReactNode, useEffect } from "react";
import Filtro from "./Filtro/Filtro";

export interface DataItem {
    title: string,
    year: number,
    icon: ReactNode
}

const ModalAvaliacao = () => {
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
        }
    ]

    const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null) //Váriavel que diz qual Query tem o menu aberto
    const [avaliacaoStyle, setAvaliacaoStyle] = useState(styles.avaliacao)
    const [filterStyle, setFilterStyle] = useState(styles.filter_area)
    const [filterIconStyle, setFilterIconStyle] = useState<CSSProperties>({visibility: "visible"})
    const [data, setData] = useState<DataItem[]>([])
    const [urlAPI, setUrlAPI] = useState<URL>(new URL("http://api.discipline.app.br/avaliations"))

    const limitOfQuerysByPage = 5
    
    const fetchingAPI = () => {
        console.log(`URL: ${urlAPI}`)
        // fetch(urlAPI)
        //     .then(async (response) => {
        //         if (response.ok) {
        //             const text = await response.text()
        //             setData(JSON.parse(text))
        //             console.log(data)
        //         }
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //     })
    }

    useEffect(() => fetchingAPI(), [])

    useEffect(() => {
        console.log(urlAPI.searchParams.size)
        if (urlAPI.searchParams.size > 0) {
            fetchingAPI()
        }
    }, [urlAPI])
 
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

    const handleSetActiveMenuIndex = (menu: number | null) => {
        setActiveMenuIndex(menu)
    }

    const handleUrlAPI = (url: URL) => {
        console.log("To Mudando a URL por aqui")
        setUrlAPI(url)
        console.log(`Fetching: ${urlAPI.href}`)
    }

    return (
        <div className={styles.centralizer} >
            <div className={filterStyle}>
                <Filtro onMenuClick={onMenuClick} handleUrlAPI={handleUrlAPI} urlAPI={urlAPI} />
            </div>
            <div className={avaliacaoStyle} >
                <HeaderAvaliacao onClick={onMenuClick} filterIconStyle={filterIconStyle} />
                <div className={styles.querys_avaliacao} >
                    {data.length === 0 ? (
                        <div className="d-flex flex-column justify-content-center align-content-center">
                            <div className="w-50">
                                <p className={styles.sem_resultados} >Sem resultados</p>
                            </div>
                        </div>
                    ) : (data.map((item, index) => (
                        <QueryAvaliacao 
                            key={index}
                            index={index}
                            text={item.title}
                            icon={item.icon}
                            setActiveMenuIndex={handleSetActiveMenuIndex}
                            activeMenuIndex={activeMenuIndex}
                        />
                    )))}
                </div>
                <Paginacao actualPage={1} totalPages={Math.round(data.length / 5)} urlAPI={urlAPI} handleUrlAPI={handleUrlAPI} limitsOfQueryByPage={limitOfQuerysByPage} />
            </div>
        </div>
    )
}

export default ModalAvaliacao

