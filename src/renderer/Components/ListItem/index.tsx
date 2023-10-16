import { useState, useEffect, ReactNode, CSSProperties } from "react";
import { useNavigate, Link } from "react-router-dom";

import { DcpIcon, DcpIconButton } from "@codecompanybrasil/discipline-core";

import Menu from "@/Components/Menu";
import Image from "@/Components/Image";

import styles from "./component.module.css";

type ListItemProps = {
  hash: string;
  title: string;
  iconPath?: string;
  iconAlt?: string;
  index: number;
  link?: string;
  setActiveMenuIndex: (newCount: number | null) => void;
  // setActiveMenuIndex: (index: number | null) => void;
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

  const [menuStyle, setMenuStyle] = useState<CSSProperties>({ visibility: "hidden" });

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
      setMenuStyle({
        visibility: "hidden",
      });
    }
  }, [activeMenuIndex]);

  const onClickMenu = () => {
    if (menuStyle.visibility === "hidden") {
      setMenuStyle({
        visibility: "visible",
      });
      setActiveMenuIndex(index);
    } else {
      setMenuStyle({
        visibility: "hidden",
      });
      setActiveMenuIndex(null);
    }
  };

  const menuOptions = [
    {
      text: "Resolver",
      onClick: () => navigate(`/avaliacoes/${hash}`),
    },
    {
      text: "Saiba mais",
      onClick: () => navigate(`/avaliacoes/${hash}/detalhes`),
    },
  ];

  return (
    <>
      <div className={styles.query_line}>
        <Link to={link} className={styles.query_inline}>
          <Image src={iconPath} alt={iconAlt} />
          {title}
        </Link>

        <div style={{ position: "relative" }}>
          <DcpIconButton onClick={onClickMenu}>
            <DcpIcon.Menu />
          </DcpIconButton>
          <div style={menuStyle}>
            <Menu options={menuOptions} />
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default ListItem;
