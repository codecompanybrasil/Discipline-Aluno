import { MenuIcon, Discipline } from '../../../Components/DcpIcons/Icon';
import Menu from '../../../Components/Menu/Menu';
import styles from './Avaliacao.module.css'
import { useState, useEffect, ReactNode, CSSProperties } from 'react';

type QueryAvaliacaoProps = {
    text: string,
    icon?: ReactNode,
    index: number
    link?: string,
    setActiveMenuIndex: (newCount: number | null) => void,
    // setActiveMenuIndex: (index: number | null) => void;
    isActive: boolean
}

const QueryAvaliacao = ({text, icon, link, setActiveMenuIndex, isActive, index}: QueryAvaliacaoProps) => {
    const [menuStyle, setMenuStyle] = useState<CSSProperties>({ visibility: "hidden" })

    if (isActive) {
        setMenuStyle({
            visibility: "hidden",
        });
    }

    const onClickMenu = () => {
        if (menuStyle.visibility == "hidden") {
            setMenuStyle({
                visibility: "visible"
            })
            console.log(`Index: ${index}`)
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
                    <MenuIcon onClick={onClickMenu} />
                    <div style={menuStyle} >
                        <Menu options={menuOptions}/>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
        </>
    )
}

export default QueryAvaliacao