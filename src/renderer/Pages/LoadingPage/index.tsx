import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../../Components/Loading";
import DisciplineLogo from "../../Components/DisciplineLogo";

// import "./page.css";
import styles from "./page.module.css";

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      return navigate("/avaliacoes");
    }, 1500);
  }, []);

  return (
    <div className={styles.loading_page}>
      <DisciplineLogo type="complete" />
      <Loading />
    </div>
  );
}

export default LoadingPage;
