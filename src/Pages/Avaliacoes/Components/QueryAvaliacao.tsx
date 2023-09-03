import { MenuIcon, Discipline } from '../../../Components/DcpIcons/Icon';
import Menu from '../../../Components/Menu/Menu';
import styles from './Avaliacao.module.css'
import { useState, useEffect, useRef, ReactNode, CSSProperties } from 'react';

type QueryAvaliacaoProps = {
    text: string,
    icon?: ReactNode,
    index: number
    link?: string,
    setActiveMenuIndex: (newCount: number | null) => void,
    // setActiveMenuIndex: (index: number | null) => void;
    activeMenuIndex: number | null
}

const QueryAvaliacao = ({text, icon, link, setActiveMenuIndex, index, activeMenuIndex}: QueryAvaliacaoProps) => {
    const [menuStyle, setMenuStyle] = useState<CSSProperties>({ visibility: "hidden" })

    //Tentaiva de fazer os menus fecharem ao clickar na tela

    // useEffect(() => {
    //     const handleClickForaDoMenu = (event: MouseEvent) => {
    //         if (menuRef.current && !menuRef.current.contains(event.target as HTMLElement) && menuStyle.visibility == "visible") {
    //             console.log("Clicke fora do negocio")
    //             setMenuStyle({
    //                 visibility: "hidden"
    //             })
    //         }
    //     }

    //     document.addEventListener("click", handleClickForaDoMenu)

    // }, [])


    useEffect(() => {
        if (activeMenuIndex != index) {
            setMenuStyle({
                visibility: "hidden"
            })
        }
    }, [activeMenuIndex])

    const onClickMenu = () => {
        if (menuStyle.visibility == "hidden") {
            setMenuStyle({
                visibility: "visible"
            })
            setActiveMenuIndex(index)
        } else {
            setMenuStyle({
                visibility: "hidden"
            })
            setActiveMenuIndex(null)
        }
    }


    const menuOptions = [
        {
            text: "Resolver",
            onClick: () => {}
        }, 
        {
            text: "Saiba mais",
            onClick: () => {}
        }
    ]

    if (!icon) {
        icon = (<Discipline />)
    }

    return (
        <>
            <div className={styles.query_line} >
                <a href={link ? link : "#"} className={styles.query_inline}>
                    {icon}
                    <p >{text}</p>
                </a>
                <div style={{position: "relative"}}>
                    <div onClick={onClickMenu}>
                        <MenuIcon />
                    </div>
                    <div style={menuStyle} >
                        <Menu options={menuOptions} />
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
        </>
    )
}

export default QueryAvaliacao