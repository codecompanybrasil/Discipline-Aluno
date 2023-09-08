import styles from './Icon.module.css'
import puzzle from '../../assets/icons/Puzzle.png'
import taskboard from '../../assets/icons/Taskboard.png'
import menu from '../../assets/icons/Menu.png'
import enem from '../../assets/IconsProva/Enem.png'
import mit from '../../assets/IconsProva/MIT.png';
import obmep from '../../assets/IconsProva/Obmep.png'
import discipline from '../../assets/IconsProva/logo.png'
import noresults from '../../assets/icons/NoResults.png'

type IconProps = {
    width?: number
}
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

export function MenuIcon() {
    return (
        <>
            <img src={menu} className={styles.icon} alt="Icon de menu" />
        </>
    )
}

export function NoResults() {
    return (
        <>
            <img src={noresults} className={styles.icon} alt="Icon de sem resultados" />
        </>
    )
}

export function Enem() {
    return (
        <>
            <img src={enem} alt="Icon do Enem" className={styles.icon_prova} />
        </>
    )
}

export function Mit() {
    return (
        <>
            <img src={mit} alt="Icon do MIT" className={styles.icon_prova} />
        </>
    )
}

export function Obmep() {
    return (
        <>
            <img src={obmep} alt="Icon da OBMEP" className={styles.icon_prova} />
        </>
    )
}

export function Discipline({width}: IconProps) {
    return (
        <>
            <img src={discipline} alt="Icon do Discipline" className={styles.icon_prova} style={{width: `${width}px`, height: `${width}px` }} />
        </>
    )
}