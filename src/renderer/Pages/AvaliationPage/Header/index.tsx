import { useState } from "react";
import styles from "./component.module.css";

type AvaliationHeaderProps = {
    correctionMode?: boolean;
    title: string;
    userName?: string;
    userEmail?: string;
    onChangeUserName: (value: string) => void;
    onChangeUserEmail: (value: string) => void;
};

function AvaliationHeader({
    correctionMode = false,
    title,
    userName,
    userEmail,
    onChangeUserName,
    onChangeUserEmail,
}: AvaliationHeaderProps) {
    return (
        <>
            {correctionMode ? (
                <>
                    <div className="row d-flex align-items-center mb-3">
                        <div className="col-auto">
                            <p>Nome:</p>
                        </div>
                        <div className="col">
                            <h2>{userName}</h2>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center mb-3">
                        <div className="col-auto">
                            <p>E-mail:</p>
                        </div>
                        <div className="col">
                            <h2>{userEmail}</h2>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="row d-flex align-items-center mb-3">
                        <div className="col-auto">
                            <label htmlFor="name" className={styles.title}>
                                Nome:
                            </label>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="full-width"
                                onChange={(event) =>
                                    onChangeUserName(event.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className="row d-flex align-items-center mb-3">
                        <div className="col-auto">
                            <label htmlFor="email" className={styles.title}>
                                E-mail:
                            </label>
                        </div>
                        <div className="col">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="full-width"
                                onChange={(event) =>
                                    onChangeUserEmail(event.target.value)
                                }
                            />
                        </div>
                    </div>
                </>
            )}

            <div className="row d-flex align-items-center mb-3">
                <div className="col-auto">
                    <p>Avaliação:</p>
                </div>
                <div className="col">
                    <h2>{title}</h2>
                </div>
            </div>
        </>
    );
}

export default AvaliationHeader;
