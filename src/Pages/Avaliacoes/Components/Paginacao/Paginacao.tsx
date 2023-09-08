import { useState, useEffect } from 'react';
import { DcpIcon, DcpIconButton } from "@codecompanybrasil/discipline-core";
import styles from './Paginacao.module.css'

type PaginacaoButtonProps = {
    isSelected?: boolean,
    number: Number,
    onClick: () => void
}

type PaginacaoProps = {
    actualPage: number,
    totalPages: number,
    urlAPI: URL,
    handleUrlAPI: (url: URL) => void,
    limitsOfQueryByPage: number
}

let isSelectedStyle = {
    color: "white",
    backgroundColor: "black"
}

let unSelectedStyle = {
    color: "black",
    backgroundColor: "white"
}

function PaginacaoButton({ isSelected, number, onClick }: PaginacaoButtonProps) {
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

function Paginacao({ totalPages, urlAPI, handleUrlAPI, limitsOfQueryByPage }: PaginacaoProps) {
    const [actualPage, setActualPage] = useState<number>(1)
    const [firstPageStatus, setFirstPageStatus] = useState<boolean>() //Controla o design de First Page
    const [lastPageStatus, setLastPageStatus] = useState<boolean>() // Controla o design de Last Page

    useEffect(() => {
        console.log("Data foi alterado na paginação")
        setActualPage(1)

    }, [urlAPI])

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
        urlAPI.searchParams.set("offset", String(paginacao * limitsOfQueryByPage))
        handleUrlAPI(urlAPI)
    }

    return (
        <>
            {totalPages > 1 ? (
                <div className={styles.paginacao} >
                    <div className="d-flex align-items-center justify-content-center" style={{ gap: "5px" }} >
                        <div>
                            <DcpIconButton onClick={() => mudaPaginacao(1)}>
                                {firstPageStatus && <DcpIcon.FirstPage />}
                                {!firstPageStatus && <DcpIcon.FirstPage />}
                            </DcpIconButton>
                            {/* <FirstPage isButton disabled={firstPageStatus}/> */}
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
                                <PaginacaoButton number={actualPage} isSelected={true} onClick={() => mudaPaginacao(actualPage)} />
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
                        <div>
                            <DcpIconButton onClick={() => mudaPaginacao(totalPages)}>
                                {lastPageStatus && <DcpIcon.LastPage />}
                                {!lastPageStatus && <DcpIcon.LastPage />}
                            </DcpIconButton>
                            {/* <LastPage isButton disabled={lastPageStatus} /> */}
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