import styles from './Avaliacao.module.css'
import { Filter } from '../../../Components/DcpIcons/Icon'

function HeaderAvaliacao() {
    let filter = {
        position: "absolute",
        left: "10px"
    }

    return (
        <header className={styles.header} >
            <Filter isButton style={filter} />
            <h2>Avaliações</h2>
        </header>
    )
}

export default HeaderAvaliacao