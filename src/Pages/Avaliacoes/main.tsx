//Componente principal da página de avaliações
import Paginacao from "./Components/Paginacao/Paginacao"
import HeaderAvaliacao from "./Components/HeaderAvaliacao"
import QueryAvaliacao from "./Components/QueryAvaliacao";
import styles from './Components/Avaliacao.module.css'
import { Enem, Mit, Obmep, Filter } from "../../Components/DcpIcons/Icon";
import { useState, useEffect, CSSProperties } from "react";
import Filtro from "./Components/Filtro/Filtro";

const Avaliacoes = () => {
    const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null) //Váriavel que diz qual Query tem o menu aberto
    const [avaliacaoStyle, setAvaliacaoStyle] = useState(styles.avaliacao)
    const [filterStyle, setFilterStyle] = useState(styles.filter_area)
    const [filterIconStyle, setFilterIconStyle] = useState<CSSProperties>({visibility: "visible"})

    // useEffect(() => {
    //     console.log(`SetActiveMenuIndex foi alterado, mensagem do pai: ${activeMenuIndex}`)
    // }, [activeMenuIndex])

    console.log(activeMenuIndex)

    const mudaPaginacao = (paginacao: Number) => {
        console.log(`Mudando para a página ${paginacao}`)
    }

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

    const allData = [
        {
            text: "Enem - 2016",
            icon: (<Enem />),

        }, {
            text: "Obmep -2018",
            icon: (<Obmep />)
        },
        {
            text: "MIT - 2019",
            icon: (<Mit />)
        }
    ]

    const menuData = []

    return (
        <div className={styles.centralizer} >
            <div className={filterStyle}>
                <Filtro onMenuClick={onMenuClick} />
            </div>
            <div className={avaliacaoStyle} >
                <HeaderAvaliacao onClick={onMenuClick} filterIconStyle={filterIconStyle} />
                <div className={styles.querys_avaliacao} >
                    { allData.map((item, index) => (
                        <QueryAvaliacao 
                            key={index}
                            index={index}
                            text={item.text}
                            icon={item.icon}
                            isActive={activeMenuIndex === index} // Verifica se este menu está ativo
                            setActiveMenuIndex={setActiveMenuIndex}
                        />
                    ))}
                </div>
                <Paginacao actualPage={1} totalPages={6} mudaPaginacao={mudaPaginacao} />
            </div>
        </div>
    )
}

export default Avaliacoes

