import { useEffect, useState } from "react";

import { DcpIconButton } from "@codecompanybrasil/discipline-core";
import filterImage from "@codecompanybrasil/discipline-core/dist/assets/icons/black/icons8-options-100.png";

import QueryFilter from "./QueryFilter";
import styles from "./component.module.css";

type FilterProps = {
    handleUrlAPI: (url: URL) => void;
    urlAPI: URL;
};

const Filters = ({ handleUrlAPI, urlAPI }: FilterProps) => {
    const [searchData, setSearchData] = useState<string>("");
    const [anoData, setAnoData] = useState<number>(0);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    // const [statusData, setStatusData] = useState<boolean>()

    useEffect(() => {
        // Função para renovar a URL dos filtros
        if (searchData) {
            urlAPI.searchParams.set("title", searchData);
        } else {
            urlAPI.searchParams.delete("title");
        }
        handleUrlAPI(urlAPI);
    }, [searchData]);

    useEffect(() => {
        // Função para renovar a URL dos filtros
        if (anoData) {
            urlAPI.searchParams.set("year", String(anoData));
        } else {
            urlAPI.searchParams.delete("year");
        }
        handleUrlAPI(urlAPI);
    }, [anoData]);

    const handleSearchData = (d: string) => {
        console.log("Alterou Input");
        setSearchData(d);
    };

    const handleAnoData = (d: number) => {
        setAnoData(d);
    };

    // const handleStatusData = (d: boolean) => {
    //     setStatusData(d)
    // }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <DcpIconButton
                            href="/"
                            onClick={() => setIsOpened((prev) => !prev)}
                        >
                            <img
                                className="dcp-icon"
                                src={filterImage}
                                alt="Filtro"
                            />
                        </DcpIconButton>
                    </div>
                </div>
                <div
                    className="row row-cols-1 row-cols-md-2 row-cols-lg-3"
                    style={{ display: isOpened ? "block" : "none" }}
                >
                    <div className="col">
                        <QueryFilter
                            title="Pesquisar"
                            typeInput="search"
                            placeholder="Pesquisar..."
                            handleData={handleSearchData}
                        />
                    </div>
                    <div className="col">
                        <QueryFilter
                            title="Ano"
                            typeInput="date"
                            handleData={handleAnoData}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Filters;
