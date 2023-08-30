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
    onClick?: () => void,
    isButton?: boolean,
    style?: object
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

export function Menu({onClick = () => {}}) {
    return (
        <>
            <img src={menu} className={styles.icon} alt="Icon de menu" onClick={onClick} />
        </>
    )
}

export function Filter({onClick = () => {}, isButton, style}: clickableIcon) {
    if (isButton) {
        style = Object.assign({
            cursor: "pointer"
        }, style)
    }

    return (
        <>
            <img src={filter} className={styles.icon} alt="Icon de Filtro" onClick={onClick} style={style} />
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

export function FirstPage({onClick = () => {}, isButton=false}: clickableIcon) {
    let style = {}

    if (isButton) {
        style = {
            cursor: "pointer"
        }
    }

    return (
        <>
            <img src={firstPage} className={styles.interactive_icon} alt="Icon para voltar para página inicial" onClick={onClick} style={style} />
        </>
    )
}

export function LastPage({onClick = () => {}, isButton=false}: clickableIcon) {
    let style = {}

    if (isButton) {
        style = {
            cursor: "pointer"
        }
    }

    return (
        <>
            <img src={lastPage} className={styles.interactive_icon} alt="Icon para avançar para ultima página" onClick={onClick} style={style} />
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