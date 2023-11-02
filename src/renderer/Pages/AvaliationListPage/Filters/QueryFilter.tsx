import {
    useState,
    useEffect,
    CSSProperties,
    MouseEventHandler,
    ChangeEvent,
} from "react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import styles from "./component.module.css";

dayjs.locale("pt-br");

interface InputDateProps {
    name: string;
    placeholder?: string;
    onChange: (year: string) => void;
}

const InputDate = ({ name, placeholder, onChange }: InputDateProps) => {
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        onChange(date);
    }, [date]);

    return (
        // <NativeDatepicker value={date} onChange={(newValue) => setDate(newValue)} />
        <input
            type="text"
            name={name}
            id={name}
            value={date}
            onChange={(event) =>
                setDate(dayjs(event.target.value).format("YYYY"))
            }
            placeholder={placeholder}
        />
    );
};

interface InputSearchProps {
    id: string;
    placeholder?: string;
    onChange: (data: string) => void;
}

const InputSearch = ({ id, placeholder, onChange }: InputSearchProps) => {
    const [searchData, setSearchData] = useState<string>("");

    useEffect(() => {
        console.log(searchData);
        onChange(searchData);
    }, [searchData]);

    return (
        <input
            type="search"
            id={id}
            className="full-width"
            value={searchData}
            onChange={(event) => setSearchData(event.target.value)}
            placeholder={placeholder}
            maxLength={150}
        />
    );
};

interface QueryFiltroProps {
    title: string;
    typeInput: "text" | "select" | "search" | "date";
    placeholder?: string;
    handleData: (data: any) => void;
}

const QueryFilter = ({
    title,
    typeInput,
    placeholder,
    handleData,
}: QueryFiltroProps) => {
    const [yearInputValue, setYearInputValue] = useState<string>("");
    const [statusInputValue, setStatusInputValue] = useState<string>("");
    const [searchInputValue, setSearchInputValue] = useState<string>("");
    const actualYear = new Date().getFullYear();

    useEffect(() => {
        //Aqui eu envio os dados do input Year
        handleData(yearInputValue);
    }, [yearInputValue]);

    useEffect(() => {
        //Aqui eu envio os dados do Input de Status
        handleData(statusInputValue);
    }, [statusInputValue]);

    useEffect(() => {
        //Aqui eu envio os dados do Input de Search
        handleData(searchInputValue);
    }, [searchInputValue]);

    let yearsList: number[] = [];

    for (let i = actualYear; i > actualYear - 30; i--) {
        yearsList.push(i);
    }

    // const onYearOptionsClick: MouseEventHandler<HTMLUListElement> = (e) => {
    //     const target = e.target as HTMLElement
    //     if (target && target.textContent) {
    //         if (target.textContent === "Vazio") {
    //             setYearInputValue("")
    //         } else {
    //             setYearInputValue(target.textContent)
    //         }
    //         setYearOptionsStyle({ display: "none" })
    //     }
    // }

    // const onStatusInputClick = () => {
    //     setStatusOptionsStyle({ display: "block" })
    // }

    // const onStatusOptionsClick: MouseEventHandler<HTMLUListElement> = (e) => {
    //     const target = e.target as HTMLElement
    //     if (target && target.textContent) {
    //         if (target.textContent === "Vazio") {
    //             setStatusInputValue("")
    //         } else {
    //             setStatusInputValue(target.textContent)
    //         }
    //         setStatusOptionsStyle({ display: "none" })
    //     }
    // }

    return (
        <div className={styles.query_filtro}>
            <label htmlFor={title}>{title}</label>

            {typeInput === "search" && (
                <InputSearch
                    id={title}
                    placeholder={placeholder}
                    onChange={(data: any) => setSearchInputValue(data)}
                />
            )}

            {typeInput === "select" && (
                <select name={title} id={title}>
                    {yearsList.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>

                // <div className={styles.input_dropdown} >
                //     <input type="text" id={title} readOnly onClick={onYearInputClick} value={yearInputValue} placeholder={placeholder} />
                //     <ul className={styles.input_options} style={yearOptionsStyle} onClick={onYearOptionsClick}>
                //         <li>Vazio</li>
                //         {yearsList.map((year) => (
                //             <li key={year}>{year}</li>
                //         ))}
                //     </ul>
                // </div>
            )}

            {typeInput === "date" && (
                <InputDate
                    name={title}
                    placeholder="Ano"
                    onChange={(year: any) => setYearInputValue(year)}
                />
            )}
        </div>
    );
};

export default QueryFilter;
