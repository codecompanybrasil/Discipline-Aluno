import { useState, useEffect, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import { DcpIcon, DcpIconButton } from "@codecompanybrasil/discipline-core";

import Menu from "@/Components/Menu";
import Image from "@/Components/Image";
import { Link } from 'react-router-dom'
import styles from "./component.module.css";

import enterIcon from "@/Assets/icons/icons8-enter-100.png";

type ListItemProps = {
    hash: string;
    title: string;
    iconPath?: string;
    iconAlt?: string;
    index: number;
    link?: string;
    setActiveMenuIndex: (index: number | null) => void;
    activeMenuIndex: number | null;
};

const ListItem = ({
    hash,
    title,
    iconPath,
    iconAlt,
    link,
    setActiveMenuIndex,
    index,
    activeMenuIndex,
}: ListItemProps) => {
    const navigate = useNavigate();

    const [menuStyle, setMenuStyle] = useState<CSSProperties>({
        display: "none",
    });

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
        if (activeMenuIndex !== index) {
            setMenuStyle({ display: "none" });
        }
    }, [activeMenuIndex]);

    const onClickMenu = () => {
        if (menuStyle.display === "none") {
            setMenuStyle({ display: "block" });
            setActiveMenuIndex(index);
        } else {
            setMenuStyle({ display: "none" });
            setActiveMenuIndex(null);
        }
    };

    const menuOptions = [
        {
            text: "Saiba mais",
            onClick: () => navigate(`/avaliacoes/${hash}/detalhes`),
        },
    ];

    return (
        <>
            <div className={styles.query_line}>
                <Link
                    to={link}
                    className={styles.query_inline}
                    title="Resolver avaliação"
                >
                    <Image src={iconPath} alt={iconAlt} />
                    {title}
                </Link>

                <div className="btn-group">
                    <DcpIconButton
                        title="Resolver avaliação"
                        onClick={() => navigate(`/avaliacoes/${hash}`)}
                    >
                        <img
                            src={enterIcon}
                            style={{ width: "32px", height: "32px" }}
                        />
                    </DcpIconButton>
                    <DcpIconButton onClick={onClickMenu}>
                        <DcpIcon.Menu />
                    </DcpIconButton>
                    <div className={styles.menu_container} style={menuStyle}>
                        <Menu options={menuOptions} />
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
        </>
    );
};

export default ListItem;
