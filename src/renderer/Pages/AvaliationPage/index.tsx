import { useState, useEffect, useRef } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import { DcpButton, DcpIcon } from "@codecompanybrasil/discipline-core";

import AvaliationHeader from "./Header";
import AvaliationForm from "./Form";
import ResultPanel from "./Result";

import PageTemplate from "@/Layouts/PageTemplate";
import dayjs from "dayjs";

function AvaliationPage() {
    const navigate = useNavigate();
    const { hash } = useParams();
    let data = useLoaderData();

    const [page, setPage] = useState<string>("avaliacao");
    const [correctionMode, setCorrectionMode] = useState<boolean>(false);
    const [avaliationData, setDisciplineData] = useState<any>();
    const [resultsQuestions, setResultsQuestions] = useState<any[]>([]);
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");

    let numQuestoesNaoRespondidas = useRef<number>(0);
    let numQuestoesCertas = useRef<number>(0);

    useEffect(() => {
        setDisciplineData(data);
    }, [data]);

    useEffect(() => {
        const questions = avaliationData?.sections[0]?.items;

        if (typeof window !== "undefined" && questions) {
            let numCertas = 0;

            const questionsCount = questions?.length;
            if (questionsCount && questionsCount > 0) {
                numQuestoesNaoRespondidas.current =
                    questionsCount - resultsQuestions.length;
            }

            resultsQuestions.forEach((userAnswer) => {
                const correctQuestion = questions?.find(
                    (question: any) =>
                        question.hash === userAnswer.q_hash &&
                        question.correct_answer === userAnswer.answer,
                );
                if (correctQuestion) numCertas++;
            });

            numQuestoesCertas.current = numCertas;
        }
    }, [resultsQuestions]);

    const handleSetPage = (page: string) => {
        if (page === "correcao") {
            setPage("avaliacao");
            setCorrectionMode(true);
        } else {
            setPage(page);
            setCorrectionMode(false);
        }
    };

    const handleResult = (result: any) => {
        setResultsQuestions((previousState) => {
            let newState = [...previousState];

            let answerIndex = newState.findIndex(
                (answer) => answer.q_hash === result.q_hash,
            );

            if (answerIndex !== -1) {
                const questionAnswered = newState[answerIndex];

                if (questionAnswered.answer === result.answer) {
                    newState.splice(answerIndex, 1);
                } else {
                    questionAnswered.answer = result.answer;
                }
            } else {
                newState.push(result);
            }

            return newState;
        });
    };

    const submitAvaliation = () => {
        if (!userName || !userEmail) {
            alert("O Preenchimento dos campos nome e e-mail é obrigatório");
            return;
        }

        fetch(`https://api.discipline.app.br/user-avaliation`, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                user_name: userName,
                user_email: userEmail,
                avaliation_hash: hash,
                avaliation_date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                number_of_questions: avaliationData?.sections[0]?.items?.length,
                correct_answers: numQuestoesCertas.current,
                not_answered_questions: numQuestoesNaoRespondidas.current,
            }),
        }).catch((err) => console.log(err));

        handleSetPage("resultado");
    };

    return (
        <PageTemplate>
            <PageTemplate.Header title="Avaliação" />
            <PageTemplate.Panel>
                {page !== "resultado" && (
                    <AvaliationHeader
                        title={avaliationData?.title}
                        correctionMode={correctionMode}
                        userName={userName}
                        userEmail={userEmail}
                        onChangeUserName={(value) => setUserName(value)}
                        onChangeUserEmail={(value) => setUserEmail(value)}
                    />
                )}

                {avaliationData && (
                    <>
                        <div
                            style={{
                                display:
                                    page === "resultado" ? "none" : "block",
                            }}
                        >
                            <AvaliationForm
                                handleResult={handleResult}
                                correctionMode={correctionMode}
                                disciplineFileData={avaliationData}
                                userAnswers={resultsQuestions}
                            />
                        </div>

                        <div
                            style={{
                                display:
                                    page !== "resultado" ? "none" : "block",
                            }}
                        >
                            <ResultPanel
                                numberCorrect={numQuestoesCertas.current}
                                numberQuestions={
                                    avaliationData?.sections[0]?.items?.length
                                }
                                numberNonResponse={
                                    numQuestoesNaoRespondidas.current
                                }
                                setPage={handleSetPage}
                                resultQuestion={resultsQuestions}
                            />
                        </div>
                    </>
                )}
            </PageTemplate.Panel>
            <PageTemplate.Footer>
                {page === "avaliacao" && !correctionMode && (
                    <div className="row my-3">
                        <div className="col-12 col-sm-6 col-md-4 offset-md-2 col-lg-3 offset-lg-3 d-flex justify-content-center">
                            <DcpButton
                                className="border-lg full-width"
                                color="accent"
                                text="Voltar"
                                slotstart={<DcpIcon.Back />}
                                onClick={() => navigate(-1)}
                            />
                        </div>

                        <div className="col-12 mt-2 mt-sm-0 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                            <DcpButton
                                className="border-lg full-width"
                                color="success"
                                text="Finalizar Avaliação"
                                onClick={submitAvaliation}
                            />
                        </div>
                    </div>
                )}

                {page === "avaliacao" && correctionMode && (
                    <div className="row my-3">
                        <div className="col-12 col-sm-6 col-md-4 offset-md-2 col-lg-3 offset-lg-3 d-flex justify-content-center">
                            <DcpButton
                                className="border-lg full-width"
                                color="danger"
                                text="Menu principal"
                                slotstart={<DcpIcon.Back />}
                                onClick={() => navigate("/avaliacoes")}
                            />
                        </div>

                        <div className="col-12 mt-2 mt-sm-0 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                            <DcpButton
                                className="border-lg full-width"
                                color="accent"
                                text="Refazer avaliação"
                                onClick={() => navigate(0)}
                            />
                        </div>
                    </div>
                )}
            </PageTemplate.Footer>
        </PageTemplate>
    );
}

export default AvaliationPage;
