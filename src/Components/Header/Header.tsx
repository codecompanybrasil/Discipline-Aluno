import styles from './Header.module.css'
import { Discipline } from '../DcpIcons/Icon';
import { useState, useEffect } from 'react';

function Header () {
    const [hrefDisciplineButton, setHrefDisciplineButton] = useState<string>("/")
    
    useEffect(() => {
        const myURL = new URL(window.location.href)
        if (myURL.pathname == "/") {
            setHrefDisciplineButton("#")
        } else {
            setHrefDisciplineButton("/")
        }
    }, [])

    return (
        <>
            <header className={styles.header} >
                <a href={hrefDisciplineButton} className={styles.discipline_button} >
                    <Discipline width={100} />
                </a>
            </header>
        </>
    )
}

export default Header;