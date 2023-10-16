import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DcpButton } from "@codecompanybrasil/discipline-core";

import AvaliationHeader from "./Header";
import AvaliationForm from "./Form";
import ResultPanel from "./Result";

import PageTemplate from "@/Layouts/PageTemplate";

function AvaliationPage() {
  const navigate = useNavigate();
  const { hash } = useParams();

  const [page, setPage] = useState<string>("avaliacao");
  const [correctionMode, setCorrectionMode] = useState<boolean>(false);
  const [avaliationData, setDisciplineData] = useState<any>();
  const [resultsQuestions, setResultsQuestions] = useState<any[]>([]);

  const numQuestoesNaoRespondidas = useRef<number>(0);
  const numQuestoesCertas = useRef<number>(0);

  const fetchingAPI = () => {
    fetch(`http://api.discipline.app.br/avaliations/${hash}/export`)
      .then(async (response) => {
        if (response.ok) {
          const resData = await response.json();
          setDisciplineData(resData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => fetchingAPI(), []);

  useEffect(() => {
    const questions = avaliationData?.sections[0]?.items;

    if (typeof window !== "undefined" && questions) {
      let numCertas = 0;

      const questionsCount = questions?.length;
      if (questionsCount && questionsCount > 0) {
        numQuestoesNaoRespondidas.current = questionsCount - resultsQuestions.length;
      }

      resultsQuestions.forEach((userAnswer) => {
        const correctQuestion = questions?.find(
          (question: any) => question.hash === userAnswer.q_hash && question.correct_answer === userAnswer.answer
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
      const newState = [...previousState];

      const answerIndex = newState.findIndex((answer) => answer.q_hash === result.q_hash);

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

  return (
    <PageTemplate>
      <PageTemplate.Header title="Avaliação" />
      <PageTemplate.Panel>
        {page !== "resultado" && (
          <AvaliationHeader title={avaliationData?.title} correctionMode={page !== "avaliacao"} />
        )}

        {avaliationData && (
          <>
            <div style={{ display: page === "resultado" ? "none" : "block" }}>
              <AvaliationForm
                handleBack={() => navigate(-1)}
                handleResult={handleResult}
                handleSetPage={handleSetPage}
                correctionMode={correctionMode}
                disciplineFileData={avaliationData}
                userAnswers={resultsQuestions}
              />
            </div>

            <div style={{ display: page !== "resultado" ? "none" : "block" }}>
              <ResultPanel
                numberCorrect={numQuestoesCertas.current}
                numberQuestions={avaliationData?.sections[0]?.items?.length}
                numberNonResponse={numQuestoesNaoRespondidas.current}
                setPage={handleSetPage}
                resultQuestion={resultsQuestions}
              />
            </div>
          </>
        )}
      </PageTemplate.Panel>
    </PageTemplate>
  );
}

export default AvaliationPage;
