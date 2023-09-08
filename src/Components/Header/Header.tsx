import styles from "./Header.module.css";
// import { useClient } from 'next/server-components';
import DisciplineLogo from "../DisciplineLogo/DisciplineLogo"

import { useState, useEffect } from "react";

type HeaderProps = {
    title?: string;
};

function Header({ title }: HeaderProps) {

    const [hrefDisciplineButton, setHrefDisciplineButton] =
        useState<string>("/");

    useEffect(() => {
        const myURL = new URL(window.location.href);
        if (myURL.pathname == "/") {
            setHrefDisciplineButton("#");
        } else {
            setHrefDisciplineButton("/");
        }
    }, []);

    return (
        <>
            <header className={styles.header}>
                <a
                    href={hrefDisciplineButton}
                    className={styles.discipline_button}
                >
                    <DisciplineLogo />
                </a>
                {title && <h1 className={styles.title}>{title}</h1>}
            </header>
        </>
    );
}

export default Header;
