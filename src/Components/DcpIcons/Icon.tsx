import puzzle from '../../assets/Icons/Puzzle.png'
import taskboard from '../../assets/Icons/Taskboard.png'
import menu from '../../assets/Icons/Menu.png'
import filter from '../../assets/Icons/Filter.png'
import next from '../../assets/Icons/Next.png'
import lastPage from '../../assets/Icons/LastPage.png'
import lastPageDisabled from '../../assets/Icons/LastPageDisabled.png'
import firstPage from '../../assets/Icons/FirstPage.png'
import firstPageDisabled from '../../assets/Icons/FirstPageDisabled.png'
import back from '../../assets/Icons/Back.png'
import styles from './Icon.module.css'
import enem from '../../assets/IconsProva/Enem.png'
import mit from '../../assets/IconsProva/MIT.png';
import obmep from '../../assets/IconsProva/Obmep.png'
import discipline from '../../assets/IconsProva/logo.png'
import noresults from '../../assets/Icons/NoResults.png'

type clickableIcon = {
    isButton?: boolean,
    disabled?: boolean
}

type IconProps = {
    width?: number
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

export function NoResults() {
    return (
        <>
            <img src={noresults} className={styles.icon} alt="Icon de sem resultados" />
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

export function FirstPage({isButton, disabled=false}: clickableIcon) {
    return (
        <>
            {disabled ? (
                <img src={firstPageDisabled} className={styles.interactive_icon} alt="Icon para voltar para página inicial desativado" />
            ) : (
                <img src={firstPage} className={styles.interactive_icon} alt="Icon para voltar para página inicial" style={isButton ? clickableIconStyle : {}} />
            )}
        </>
    )
}

export function LastPage({isButton, disabled=false}: clickableIcon) {

    return (
        <>
            {disabled ? (
                <img src={lastPageDisabled} className={styles.interactive_icon} alt="Icon para avançar para ultima página desativado" />
            ) : (
                <img src={lastPage} className={styles.interactive_icon} alt="Icon para avançar para ultima página" style={isButton ? clickableIconStyle : {}} />
            )}
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