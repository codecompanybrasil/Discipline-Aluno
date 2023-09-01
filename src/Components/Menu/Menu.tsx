// Menu.tsx

import styles from './Menu.module.css'
import { useState, Fragment, CSSProperties } from 'react'

interface MenuOptionsInterface {
    text: string
    onClick?: () => void
}

type OptionProps = {
    text: string,
    key?: number,
    onClick?: () => void
}

type MenuProps = {
    options: MenuOptionsInterface[] // Alterado para um array de OptionProps
}

function Option({text, key, onClick = () => {}}: OptionProps) {
    return (
        <>
            <p onClick={onClick} key={key ? key : undefined} >{text}</p>
        </>
    )
}

function Menu({options}: MenuProps) {
    const [screenMenuStyle, setScreenMenuStyle] = useState<CSSProperties>({ visibility: "visible" })

    const onClickScreen = () => {
        if (screenMenuStyle.visibility == "visible") {
            setScreenMenuStyle({ visibility: "hidden" })
        } else {
            setScreenMenuStyle({ visibility: "visible" })
        }
    }

    return (
        <div className={styles.menu} >
            {
                options.map((item, index) => (
                    <Fragment key={index} >
                        <Option {...item} />
                        {index != options.length - 1 && (
                            <div className={styles.line} ></div>
                        )}
                    </Fragment>
                ))
            }
        </div>
    )
}

export default Menu;
