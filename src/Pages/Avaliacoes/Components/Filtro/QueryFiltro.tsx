import styles from './Filtro.module.css'
import { useState, useEffect, CSSProperties, MouseEventHandler, ChangeEvent } from 'react'

type QueryFiltroProps = {
    title: string,
    typeInput: "data" | "search" | "status",
    handleData: (data: any) => void
}

const QueryFiltro = ({title, typeInput, handleData}: QueryFiltroProps) => {
    const [yearOptionsStyle, setYearOptionsStyle] = useState<CSSProperties>({ display: "none" })
    const [yearInputValue, setYearInputValue] = useState<string>("")
    const [statusOptionsStyle, setStatusOptionsStyle] = useState<CSSProperties>({ display: "none" })
    const [statusInputValue, setStatusInputValue] = useState<string>("")
    const [searchInputValue, setSearchInputValue] = useState<string>("")
    const actualYear = new Date().getFullYear()

    useEffect(() => { //Aqui eu envio os dados do input Year
        handleData(yearInputValue)
    }, [yearInputValue])

    useEffect(() => { //Aqui eu envio os dados do Input de Status
        handleData(statusInputValue)
    }, [statusInputValue])

    useEffect(() => { //Aqui eu envio os dados do Input de Search
        handleData(searchInputValue)
    }, [searchInputValue])


    let yearsList: number[] = []

    for (let i=actualYear;i>actualYear-30;i--) {
        yearsList.push(i)
    }

    const onYearInputClick = () => {
        setYearOptionsStyle({ display: "block" })
    }

    const onYearOptionsClick: MouseEventHandler<HTMLUListElement> = (e) => {
        const target = e.target as HTMLElement
        if (target && target.textContent) {
            if (target.textContent == "Vazio") {
                setYearInputValue("")
            } else {
                setYearInputValue(target.textContent)
            }
            setYearOptionsStyle({ display: "none" })
        }
    }

    const onStatusInputClick = () => {
        setStatusOptionsStyle({ display: "block" })
    }

    const onStatusOptionsClick: MouseEventHandler<HTMLUListElement> = (e) => {
        const target = e.target as HTMLElement
        if (target && target.textContent) {
            if (target.textContent == "Vazio") {
                setStatusInputValue("")
            } else {
                setStatusInputValue(target.textContent)
            }
            setStatusOptionsStyle({ display: "none" })
        }
    }

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(event.target.value)
    }

    return (
        <div className={styles.query_filtro} >
            <h3>{title}</h3>
            {typeInput == "data" ? (
                <div className={styles.input_dropdown} >
                    <input type="text" readOnly onClick={onYearInputClick} value={yearInputValue} />
                    <ul className={styles.input_options} style={yearOptionsStyle} onClick={onYearOptionsClick}>
                        <li>Vazio</li>
                        {yearsList.map((year) => (
                            <li key={year}>{year}</li>
                        ))}
                    </ul>
                </div>  
            ) : typeInput == "search" ? (
                <div>
                    <input type="search" value={searchInputValue} onChange={handleSearchInputChange} maxLength={150} />
                </div>
            ) : typeInput == "status" ? (
                <div className={styles.input_dropdown} >
                    <input type="text" readOnly value={statusInputValue} onClick={onStatusInputClick}/>
                    <ul className={styles.input_options} style={statusOptionsStyle} onClick={onStatusOptionsClick}>
                        <li>Vazio</li>
                        <li>Feito</li>
                        <li>Não feito</li>
                    </ul>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default QueryFiltro