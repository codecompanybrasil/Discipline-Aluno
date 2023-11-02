import React, { useState } from "react";
import { DcpButton, DcpIcon } from "@codecompanybrasil/discipline-core";
// import { DisciplineFileData, DcpQAnswer } from '@/_types/Questions/Questions';

import AvaliationHeader from "../Header";
import Question from "../Question";

import styles from "./component.module.css";

type AvaliacaoPageProps = {
    handleResult: (result: any) => void;
    correctionMode: boolean;
    disciplineFileData: any;
    userAnswers: any[];
};

function AvaliationForm({
    handleResult,
    correctionMode = false,
    disciplineFileData,
    userAnswers,
}: AvaliacaoPageProps) {
    return (
        <>
            {disciplineFileData?.sections[0].items.map(
                (item: any, index: number) => {
                    let markedAlternative = undefined;

                    if (userAnswers.length > 0 && item.type === "question") {
                        const userAnswer = userAnswers.find(
                            (answer) => answer.q_hash === item.hash,
                        );
                        if (userAnswer) markedAlternative = userAnswer.answer;
                    }

                    return (
                        <Question
                            key={index}
                            question={item}
                            indexQuestion={index}
                            correctionMode={correctionMode}
                            markedAlternative={markedAlternative}
                            handleResult={handleResult}
                        />
                    );
                },
            )}
        </>
    );
}

export default AvaliationForm;
