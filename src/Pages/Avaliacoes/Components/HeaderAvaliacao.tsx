import styles from './Avaliacao.module.css'
import { CSSProperties } from 'react'
import { Filter } from '../../../Components/DcpIcons/Icon'

type HeaderAvaliacaoProps = {
    onClick: () => void,
    filterIconStyle: CSSProperties
}

function HeaderAvaliacao({onClick = () => {}, filterIconStyle}: HeaderAvaliacaoProps) {
    let filter: CSSProperties = {
        position: "absolute",
        left: "10px"
    }

    return (
        <header className={styles.header} >
            <div style={Object.assign(filter, filterIconStyle)}>
                <div onClick={onClick}>
                    <Filter isButton />
                </div>
            </div>
            <h2>Avaliações</h2>
        </header>
    )
}

export default HeaderAvaliacao