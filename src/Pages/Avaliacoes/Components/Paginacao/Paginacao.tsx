import styles from './Paginacao.module.css'
import { FirstPage, LastPage } from '../../../../Components/DcpIcons/Icon';
import { useState, useEffect } from 'react';
import { DataItem } from '../../main';

type PaginacaoButtonProps = {
    isSelected?: boolean,
    number: Number,
    onClick: () => void
}

type PaginacaoProps = {
    actualPage: number,
    totalPages: number,
    data: DataItem[],
    handleLimitedData: (d: DataItem[]) => void
}

let isSelectedStyle = {
    color: "white",
    backgroundColor: "black"
}

let unSelectedStyle = {
    color: "black",
    backgroundColor: "white"
}

function PaginacaoButton({isSelected, number, onClick}: PaginacaoButtonProps) {
    let buttonStyle;

    if (isSelected) {
        buttonStyle = isSelectedStyle
    } else {
        buttonStyle = unSelectedStyle
    }

    return (
        <div className={styles.paginacao_button} style={buttonStyle} onClick={onClick} >
            {String(number)}
        </div>
    )
}


function Paginacao({totalPages, data, handleLimitedData}: PaginacaoProps) {
    const [actualPage, setActualPage] = useState<number>(1)
    const [firstPageStatus, setFirstPageStatus] = useState<boolean>()
    const [lastPageStatus, setLastPageStatus] = useState<boolean>()

    // let actualPage = 1
    // let totalPages = 6
    // useEffect(() => {
        
    // }, firstPageStatus)

    useEffect(() => {
        let limitedData;
        console.log("Data foi alterado na paginação")
        setActualPage(1)
        if (data.length > 5 * actualPage) {
            
        }
        handleLimitedData(data)
    }, [data])

    useEffect(() => {
        if (actualPage == 1) {
            setFirstPageStatus(true)
            setLastPageStatus(false)
        } else if (actualPage < totalPages) {
            setFirstPageStatus(false)
            setLastPageStatus(false) 
        } else {
            setFirstPageStatus(false)
            setLastPageStatus(true)
        }
        
    }, [actualPage])

    const mudaPaginacao = (paginacao: number) => {
        setActualPage(paginacao)
    }

    return (
        <>
            {totalPages > 1 ? (
                <div className={styles.paginacao} >
                    <div className="d-flex align-items-center justify-content-center" style={{gap: "5px"}} >
                        <div onClick={() => mudaPaginacao(1)}>
                            <FirstPage isButton disabled={firstPageStatus}/>
                        </div>
                        {actualPage == 1 ? (
                            <>
                                <PaginacaoButton number={1} isSelected={actualPage === 1} onClick={() => mudaPaginacao(1)} />
                                <PaginacaoButton number={2} onClick={() => mudaPaginacao(2)} />
                                {totalPages > 2 && (
                                    <PaginacaoButton number={3} onClick={() => mudaPaginacao(3)} />
                                )}
                            </>
                        ) : actualPage < totalPages ? (
                            <>
                                <PaginacaoButton number={actualPage - 1} onClick={() => mudaPaginacao(actualPage - 1)} />
                                <PaginacaoButton number={actualPage} isSelected={true}  onClick={() => mudaPaginacao(actualPage)} />
                                <PaginacaoButton number={actualPage + 1} onClick={() => mudaPaginacao(actualPage + 1)} />
                            </>
                        ) : (
                            <>
                                {actualPage - 2 > 0 && (
                                    <PaginacaoButton number={actualPage - 2} onClick={() => mudaPaginacao(actualPage - 2)} />
                                )}
                                <PaginacaoButton number={actualPage - 1} onClick={() => mudaPaginacao(actualPage - 1)} />
                                <PaginacaoButton number={actualPage} isSelected={true} onClick={() => mudaPaginacao(actualPage)} />
                            </>
                        )}
                        <div onClick={() => mudaPaginacao(totalPages)}>
                            <LastPage isButton disabled={lastPageStatus} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mb-5 mt-5"></div>
            )}
        </>
    )
}

export default Paginacao;