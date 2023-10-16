
// import { DcpIconButton } from "@codecompanybrasil/discipline-core"

import styles from './component.module.css'

import discipline from '@/Assets/logo.png'
import logo_discipline from '@/Assets/logo_discipline.png'

type DisciplineLogoProps = {
    type?: "simple" | "complete"
}

function DisciplineLogo({ type = "simple" }: DisciplineLogoProps) {
    const logoCss = (type === "complete") ? styles.complete_logo : styles.logo
    return <img src={(type === "complete") ? logo_discipline : discipline} alt="Icon do Discipline" className={logoCss} />
}

export default DisciplineLogo;