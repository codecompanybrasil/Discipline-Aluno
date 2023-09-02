import puzzle from '../../assets/Icons/Puzzle.png'
import taskboard from '../../assets/Icons/Taskboard.png'
import menu from '../../assets/Icons/Menu.png'
import filter from '../../assets/Icons/Filter.png'
import next from '../../assets/Icons/Next.png'
import lastPage from '../../assets/Icons/LastPage.png'
import firstPage from '../../assets/Icons/FirstPage.png'
import back from '../../assets/Icons/Back.png'
import styles from './Icon.module.css'
import enem from '../../assets/IconsProva/Enem.png'
import mit from '../../assets/IconsProva/MIT.png';
import obmep from '../../assets/IconsProva/Obmep.png'
import discipline from '../../assets/IconsProva/logo.png'

type clickableIcon = {
    isButton?: boolean
}

const clickableIconStyle = {
    cursor: "pointer"
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

export function Filter({isButton}: clickableIcon) {
    return (
        <>
            <img src={filter} className={styles.icon} alt="Icon de Filtro" style={isButton ? clickableIconStyle : {}} />
        </>
    )
}

export function Back() {
    return (
        <>
            <img src={back} className={styles.interactive_icon} alt="Icon para voltar uma página" />
        </>
    )
}

export function Next() {
    return (
        <>
            <img src={next} className={styles.interactive_icon} alt="Icon de Next" />
        </>
    )
}

export function FirstPage({isButton}: clickableIcon) {
    return (
        <>
            <img src={firstPage} className={styles.interactive_icon} alt="Icon para voltar para página inicial" style={isButton ? clickableIconStyle : {}} />
        </>
    )
}

export function LastPage({isButton}: clickableIcon) {

    return (
        <>
            <img src={lastPage} className={styles.interactive_icon} alt="Icon para avançar para ultima página" style={isButton ? clickableIconStyle : {}} />
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

export function Discipline() {
    return (
        <>
            <img src={discipline} alt="Icon do Discipline" className={styles.icon_prova} />
        </>
    )
}