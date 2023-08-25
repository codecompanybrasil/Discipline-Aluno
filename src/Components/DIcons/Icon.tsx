import puzzle from '../../assets/Icons/Puzzle.png'
import taskboard from '../../assets/Icons/Taskboard.png'
import menu from '../../assets/Icons/Menu.png'
import filter from '../../assets/Icons/Filter.png'
import next from '../../assets/Icons/Next.png'
import lastPage from '../../assets/Icons/LastPage.png'
import firstPage from '../../assets/Icons/FirstPage.png'
import back from '../../assets/Icons/Back.png'
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

export function FirstPage({onClick = () => {}}) {
    return (
        <>
            <img src={firstPage} className={styles.interactive_icon} alt="Icon para voltar para página inicial" onClick={onClick}  />
        </>
    )
}

export function Back({onClick = () => {}}) {
    return (
        <>
            <img src={back} className={styles.interactive_icon} alt="Icon para voltar uma página" onClick={onClick}  />
        </>
    )
}

export function Next({onClick = () => {}}) {
    return (
        <>
            <img src={next} className={styles.interactive_icon} alt="Icon de Next" onClick={onClick}  />
        </>
    )
}

export function LastPage({onClick = () => {}}) {
    return (
        <>
            <img src={lastPage} className={styles.interactive_icon} alt="Icon para avançar para ultima página" onClick={onClick}  />
        </>
    )
}