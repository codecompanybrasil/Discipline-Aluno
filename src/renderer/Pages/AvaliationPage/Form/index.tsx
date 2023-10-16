
import React, { useState } from 'react'
import { DcpButton, DcpIcon } from '@codecompanybrasil/discipline-core';
// import { DisciplineFileData, DcpQAnswer } from '@/_types/Questions/Questions';

import AvaliationHeader from '../Header'
import Question from '../Question'

import styles from './component.module.css'

type AvaliacaoPageProps = {
    handleBack: () => void,
    handleResult: (result: any) => void,
    handleSetPage: (page: string) => void,
    correctionMode: boolean
    disciplineFileData: any
    userAnswers: any[]
}

function AvaliationForm({
    handleBack,
    handleResult,
    handleSetPage,
    correctionMode = false,
    disciplineFileData,
    userAnswers
}: AvaliacaoPageProps) {

    return (
        <>
            {
                disciplineFileData?.sections[0].items.map((item: any, index: number) => {
                    let markedAlternative = undefined

                    if (userAnswers.length > 0 && item.type === "question") {
                        const userAnswer = userAnswers.find(answer => answer.q_hash === item.hash);
                        if (userAnswer) markedAlternative = userAnswer.answer
                    }

                    return (
                        <Question
                            key={index}
                            question={item}
                            indexQuestion={index}
                            correctionMode={correctionMode}
                            markedAlternative={markedAlternative}
                            handleResult={handleResult} />
                    )
                })
            }
            <div className="row my-3">
                <div className="col-12 col-sm-6 col-md-4 offset-md-2 d-flex justify-content-center">
                    <DcpButton
                        className='border-lg'
                        color='accent'
                        text="Voltar"
                        slotstart={<DcpIcon.Back />}
                        onClick={() => handleBack()}
                    />
                </div>

                <div className="col-12 mt-2 mt-sm-0 col-sm-6 col-md-4 d-flex justify-content-center">
                    <DcpButton
                        className='border-lg'
                        color='success'
                        text="Finalizar Avaliação"
                        onClick={() => handleSetPage("resultado")}
                    />
                </div>
            </div>
        </>
    )
}

export default AvaliationForm