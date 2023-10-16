import { useEffect, useState } from "react";
import DOMPurify from 'dompurify'

// import {
//     DcpQuestionAndQuestionGroup,
//     DcpQImage,
//     DcpQText,
//     DcpQStatement,
//     DcpQAnswer
// } from "@/_types/Questions/Questions";

import styles from './component.module.css'

export interface listAlternativeInterface {
    markedAlternative: string
}

interface QuestionOptionDataProps {
    hash: string,
    option_text?: string,
    image?: any
}

interface QuestionOptionProps {
    index: number,
    data: QuestionOptionDataProps,
    correct_answer: string,
    correctionMode?: boolean,
    markedAlternative?: string,
    onSelect?: (hash: string) => void
}

function QuestionOption({
    index = 0,
    data,
    correct_answer,
    correctionMode = false,
    markedAlternative,
    onSelect }: QuestionOptionProps) {
    const optionLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const [selected, setSelected] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)

    const toggleSelect = () => {
        if (onSelect) onSelect(data.hash)
    }

    useEffect(() => {
        if (correctionMode) {
            if (markedAlternative) {
                setCorrect(data.hash === correct_answer)
                setWrong(data.hash === markedAlternative && data.hash !== correct_answer)
            } else {
                setCorrect(false)
                setWrong(false)
            }
        } else {
            if (markedAlternative) {
                setSelected(markedAlternative === data.hash)
            }
        }
    }, [markedAlternative, correctionMode])

    return (
        <div className="row mb-2">
            <div className="col-auto">
                <button type="button"
                    className={[
                        styles.radio_alternative,
                        selected ? styles.selected : undefined,
                        correct ? styles.correct : undefined,
                        wrong ? styles.wrong : undefined
                    ].join(" ")}
                    onClick={() => toggleSelect()}
                    disabled={correctionMode}>
                    {optionLetters[index]}
                </button>
            </div>

            <div className="col">
                {data.image && (
                    <>
                        <img className={styles.image} src={data.image.image_source} alt={data.image.caption ?? ""} />
                        {data.image.caption && (
                            <p className={styles.caption} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.image.caption) }}></p>
                        )}
                    </>
                )}

                {data.option_text && (
                    <span className={styles.response} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.option_text) }}></span>
                )}
            </div>
        </div>
    )
}

export default QuestionOption;