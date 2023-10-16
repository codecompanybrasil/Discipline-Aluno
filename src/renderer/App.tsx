import { HashRouter as Router, Routes, Route } from "react-router-dom";

import LoadingPage from "./Pages/LoadingPage";
import AvaliationListPage from "./Pages/AvaliationListPage";
import AvaliationDetailsPage from "./Pages/AvaliationDetailsPage";
import AvaliationPage from "./Pages/AvaliationPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/avaliacoes" element={<AvaliationListPage />} />
        <Route path="/avaliacoes/:hash/detalhes" element={<AvaliationDetailsPage />} />
        <Route path="/avaliacoes/:hash" element={<AvaliationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
