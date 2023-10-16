import { useState, useEffect } from 'react';
import { DcpIcon, DcpIconButton } from '@codecompanybrasil/discipline-core';

// Styles and Images
import styles from './component.module.css'

type PaginationButtonProps = {
    isSelected?: boolean,
    pageNumber: Number,
    onClick: () => void
}

function PaginationButton({ isSelected, pageNumber, onClick }: PaginationButtonProps) {
    return (
        <button type="button"
            className={[
                styles.pagination_button,
                (isSelected) ? styles.selected : undefined
            ].join(" ")}
            title={`Muda para a página ${pageNumber}`}
            onClick={onClick}
            disabled={isSelected}>
            {String(pageNumber)}
        </button>
    )
}

type PaginationProps = {
    totalItems: number,
    itemsPerPage?: number,
    onPaginate: (page: number) => void
}

function Pagination({ totalItems, itemsPerPage = 10, onPaginate }: PaginationProps) {
    const [selectedPage, setSelectedPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [firstPageStatus, setFirstPageStatus] = useState<boolean>()
    const [lastPageStatus, setLastPageStatus] = useState<boolean>()

    const paginate = (page: number) => {
        setSelectedPage(page)
        onPaginate(page)
    }

    useEffect(() => {
        setTotalPages((totalItems % itemsPerPage) === 0 ? totalItems / itemsPerPage : Math.floor(totalItems / itemsPerPage) + 1)
    }, [totalItems])

    useEffect(() => {
        setFirstPageStatus((selectedPage === 1))
        setLastPageStatus((selectedPage === totalPages))
    }, [selectedPage, totalItems])

    const pageNumbers = [...Array(totalPages).keys()]
        .map((page: number) =>
            <PaginationButton
                key={page}
                pageNumber={page + 1}
                isSelected={selectedPage === (page + 1)}
                onClick={() => paginate((page + 1))} />
        )

    return (
        <div className={styles.pagination} >
            <DcpIconButton
                onClick={() => paginate(1)}
                title="Voltar para a primeira página"
                disabled={firstPageStatus}>
                {firstPageStatus ? <DcpIcon.FirstPageDisabled /> : <DcpIcon.FirstPage />}
            </DcpIconButton>

            {pageNumbers}

            <DcpIconButton
                onClick={() => paginate(totalPages)}
                title="Avançar para a última página"
                disabled={lastPageStatus}>
                {lastPageStatus ? <DcpIcon.LastPageDisabled /> : <DcpIcon.LastPage />}
            </DcpIconButton>
        </div>
    )
}

export default Pagination;