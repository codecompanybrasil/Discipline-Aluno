import styles from './Paginacao.module.css'
import { FirstPage, LastPage } from '../../../Components/DIcons/Icon';
import { useState } from 'react';

type PaginacaoButtonProps = {
    isSelected?: boolean,
    number: string,
    onClick: () => void
}

type PaginacaoProps = {
    actualPage: number,
    totalPages: number
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
            {number}
        </div>
    )
}


function Paginacao({actualPage, totalPages}: PaginacaoProps) {

    // let actualPage = 1
    // let totalPages = 6

    const PaginacaoButtonClick = () => {

    }

    return (
        <div className={styles.paginacao} >
            <FirstPage />
            {actualPage == 1 ? (
                <>
                    <PaginacaoButton number="1" isSelected={true}  />
                    <PaginacaoButton number="2" />
                    <PaginacaoButton number="3" />
                </>
            ) : actualPage < totalPages ? (
                <>
                    <PaginacaoButton number={String(actualPage - 1)} />
                    <PaginacaoButton number={String(actualPage)} isSelected={true}  />
                    <PaginacaoButton number={String(actualPage + 1)} />
                </>
            ) : (
                <>
                    <>
                    <PaginacaoButton number={String(actualPage - 2)} />
                    <PaginacaoButton number={String(actualPage - 1)} />
                    <PaginacaoButton number={String(actualPage)} isSelected={true} />
                </>
                </>
            )}
            <LastPage />
        </div>
    )
}

export default Paginacao;