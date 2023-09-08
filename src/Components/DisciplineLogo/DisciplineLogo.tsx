import discipline from '../../assets/Discipline/logo.png'
import logo_discipline from '../../assets/Discipline/logo_discipline.png'
import styles from './DisciplineLogo.module.css'

type DisciplineLogoProps = {
    type?: "simple" | "complete"
}

function DisciplineLogo({type = "simple"}: DisciplineLogoProps) {
    return (
        <>
            {type == "simple" ? (
                <img src={discipline} alt="Icon do Discipline" className={styles.logo} />
            ) : type == "complete" ? (
                <img src={logo_discipline} alt="Icon do Discipline" className={styles.complete_logo} />
            ) : (
                <></>
            )}
        </>
    )    
}

export default DisciplineLogo
