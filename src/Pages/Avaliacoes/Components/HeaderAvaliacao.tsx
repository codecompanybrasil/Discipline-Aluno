import styles from './Avaliacao.module.css'
import { CSSProperties } from 'react'
import { DcpIcon, DcpIconButton } from '@codecompanybrasil/discipline-core'

type HeaderAvaliacaoProps = {
    onClick: () => void,
    filterIconStyle: CSSProperties
}

function HeaderAvaliacao({ onClick = () => { }, filterIconStyle }: HeaderAvaliacaoProps) {
    let filter: CSSProperties = {
        position: "absolute",
        left: "10px"
    }

    return (
        <header className={styles.header} >
            <div style={Object.assign(filter, filterIconStyle)}>
                <div>
                    <DcpIconButton onClick={onClick}>
                        <DcpIcon.Filter />
                    </DcpIconButton>
                </div>
            </div>
            <h2>Avaliações</h2>
        </header>
    )
}

export default HeaderAvaliacao