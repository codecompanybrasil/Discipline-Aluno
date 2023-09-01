import styles from './Avaliacao.module.css'
import { CSSProperties } from 'react'
import { Filter } from '../../../Components/DcpIcons/Icon'

type HeaderAvaliacao = {
    onClick: () => void,
    filterIconStyle: CSSProperties
}

function HeaderAvaliacao({onClick = () => {}, filterIconStyle}: HeaderAvaliacao) {
    let filter: CSSProperties = {
        position: "absolute",
        left: "10px"
    }

    return (
        <header className={styles.header} >
            <div style={Object.assign(filter, filterIconStyle)}>
                <Filter isButton onClick={onClick}/>
            </div>
            <h2>Avaliações</h2>
        </header>
    )
}

export default HeaderAvaliacao