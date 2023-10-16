import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DcpButton } from "@codecompanybrasil/discipline-core";

import Image from "@/Components/Image";

// Styles and Images
import PageTemplate from "@/Layouts/PageTemplate";
import styles from "./page.module.css";

function AvaliationDetailsPage() {
  const navigate = useNavigate();
  const { hash } = useParams();
  const [avaliationData, setAvaliationData] = useState<any>();

  const fetchingAPI = () => {
    fetch(`http://api.discipline.app.br/avaliations/${hash}`)
      .then(async (response) => {
        if (response.ok) {
          const resData = await response.json();
          setAvaliationData(resData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => fetchingAPI(), []);

  return (
    <PageTemplate>
      <PageTemplate.Header title={avaliationData?.title} />
      <PageTemplate.Panel>
        {avaliationData ? (
          <div className="row">
            <div className="col-12 col-sm-8 col-md-9 description_area">
              <h2 className={styles.description_title}>Descrição</h2>
              <p>{avaliationData.description}</p>
            </div>
            <div className="col-12 col-sm-4 col-md-3 detail_area">
              <Image src={avaliationData.icon} className="d-none d-sm-block" alt={`Logo do ${avaliationData?.title}`} />

              {avaliationData.questions_quantity && (
                <div className="query_details">
                  <strong>Quantidade questões:</strong>
                  <span>{avaliationData.questions_quantity}</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </PageTemplate.Panel>
      <PageTemplate.Footer>
        <div className="mt-5">
          <DcpButton text="Voltar" color="accent" onClick={() => navigate(-1)} />
        </div>
      </PageTemplate.Footer>
    </PageTemplate>
  );
}

export default AvaliationDetailsPage;
