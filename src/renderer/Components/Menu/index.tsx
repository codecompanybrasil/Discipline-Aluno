import styles from "./component.module.css";
import { Fragment } from "react";

interface MenuOptionsInterface {
    text: string;
    onClick?: () => void;
}

type OptionProps = {
    text: string;
    key?: number;
    onClick?: () => void;
};

type MenuProps = {
    options: MenuOptionsInterface[]; // Alterado para um array de OptionProps
};

function Option({ text, key, onClick = () => { } }: OptionProps) {
    return (
        <>
            <p onClick={onClick} key={key ? key : undefined} className={styles.option}>
                {text}
            </p>
        </>
    );
}

function Menu({ options }: MenuProps) {
    return (
        <div className={styles.menu}>
            {options.map((item, index) => (
                <Fragment key={index}>
                    <Option {...item} />
                    {index !== options.length - 1 && (
                        <div className={styles.line}></div>
                    )}
                </Fragment>
            ))}
        </div>
    );
}

export default Menu;
