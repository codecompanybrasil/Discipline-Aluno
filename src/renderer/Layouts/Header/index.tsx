// import { useState, useEffect } from "react";

import DisciplineLogo from "@/Components/DisciplineLogo";
import { Link } from 'react-router-dom'
import styles from "./component.module.css";

type HeaderProps = {
    title?: string;
};

function Header({ title }: HeaderProps) {
    // const [hrefDisciplineButton, setHrefDisciplineButton] =
    //     useState<string>("/");

    // useEffect(() => {
    //     const myURL = new URL(window.location.href);
    //     if (myURL.pathname == "/avaliacoes") {
    //         setHrefDisciplineButton("/");
    //     } else {
    //         setHrefDisciplineButton("/avaliacoes");
    //     }
    // }, []);

    return (
        <header className="row align-items-center">
            <div className="d-flex col-12 justify-content-center col-md-3 justify-content-md-start col-xl-2">
                <div className={styles.dcp_icon_area}>
                    <Link to="/" className={styles.discipline_button}>
                        <DisciplineLogo />
                    </Link>
                    <div className={styles.beta}>Beta</div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xl-8">
                {title && <h1 className={styles.title}>{title}</h1>}
            </div>
        </header>
    );
}

export default Header;
