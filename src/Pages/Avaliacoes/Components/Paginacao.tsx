import styles from './Paginacao.module.css'
import { FirstPage, LastPage } from '../../../Components/DcpIcons/Icon';

type PaginacaoButtonProps = {
    isSelected?: boolean,
    number: Number,
    onClick: () => void
}

type PaginacaoProps = {
    actualPage: number,
    totalPages: number,
    mudaPaginacao: (paginacao: Number) => void
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


function Paginacao({actualPage, totalPages, mudaPaginacao}: PaginacaoProps) {

    // let actualPage = 1
    // let totalPages = 6

    return (
        <div className={styles.paginacao} >
            <div className="d-flex align-items-center justify-content-center" style={{gap: "5px"}} >
                <FirstPage isButton onClick={() => mudaPaginacao(1)} />
                {actualPage == 1 ? (
                    <>
                        <PaginacaoButton number={1} isSelected={true} onClick={() => mudaPaginacao(1)} />
                        <PaginacaoButton number={2} onClick={() => mudaPaginacao(2)} />
                        <PaginacaoButton number={3} onClick={() => mudaPaginacao(3)} />
                    </>
                ) : actualPage < totalPages ? (
                    <>
                        <PaginacaoButton number={actualPage - 1} onClick={() => mudaPaginacao(actualPage - 1)} />
                        <PaginacaoButton number={actualPage} isSelected={true}  onClick={() => mudaPaginacao(actualPage)} />
                        <PaginacaoButton number={actualPage + 1} onClick={() => mudaPaginacao(actualPage + 1)} />
                    </>
                ) : (
                    <>
                        <>
                        <PaginacaoButton number={actualPage - 2} onClick={() => mudaPaginacao(actualPage - 2)} />
                        <PaginacaoButton number={actualPage - 1} onClick={() => mudaPaginacao(actualPage - 1)} />
                        <PaginacaoButton number={actualPage} isSelected={true} onClick={() => mudaPaginacao(actualPage)} />
                    </>
                    </>
                )}
                <LastPage isButton onClick={() => mudaPaginacao(totalPages)} />
            </div>
        </div>
    )
}

export default Paginacao;