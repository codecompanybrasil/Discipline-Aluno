import styles from "./component.module.css"

type AvaliationHeaderProps = {
    correctionMode?: boolean,
    title: string
}

function AvaliationHeader({ correctionMode = false, title }: AvaliationHeaderProps) {
    return (
        <>
            {!correctionMode && (
                <div className="row d-flex align-items-center">
                    <div className="col-auto">
                        <label htmlFor="username" className={styles.title}>
                            Nome:
                        </label>
                    </div>
                    <div className="col">
                        <input type="text" name="username" id="username" className="full-width" />
                    </div>
                </div>
            )}

            <div className="row d-flex align-items-center my-3">
                <div className="col-auto">
                    <p>Avaliação:</p>
                </div>
                <div className="col">
                    <h2>{title}</h2>
                </div>
            </div>
        </>
    )
}

export default AvaliationHeader;