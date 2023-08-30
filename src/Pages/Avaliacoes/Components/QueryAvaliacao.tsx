import { Menu, Discipline } from '../../../Components/DcpIcons/Icon';
import styles from './Avaliacao.module.css'
import React from 'react';

type QueryAvaliacaoProps = {
    text: string,
    icon?: React.ReactNode,
    link?: string
}

const QueryAvaliacao = ({text, icon, link}: QueryAvaliacaoProps) => {

    const onClickMenu = () => {
        console.log("menu clicked")
    }

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
                <Menu onClick={onClickMenu} />
            </div>
            <div className={styles.line}></div>
        </>
    )
}

export default QueryAvaliacao