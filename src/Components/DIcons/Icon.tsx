import puzzle from '../../assets/Icons/Puzzle.png'
import taskboard from '../../assets/Icons/Taskboard.png'
import menu from '../../assets/Icons/Menu.png'
import filter from '../../assets/Icons/Filter.png'
import styles from './Icon.module.css'

export function Puzzle() {
    return (
        <>
            <img src={puzzle} className={styles.icon} alt="Icon de quebra-cabeça" />
        </>
    )
}

export function Taskboard() {
    return (
        <>
            <img src={taskboard} className={styles.icon} alt="Icon de prancheta" />
        </>
    )
}

export function Menu({onClick = () => {}}) {
    return (
        <>
            <img src={menu} className={styles.icon} alt="Icon de menu" onClick={onClick} />
        </>
    )
}

export function Filter({onClick = () => {}}) {

    return (
        <>
            <img src={filter} className={styles.icon} alt="Icon de Filtro" onClick={onClick} />
        </>
    )
}
