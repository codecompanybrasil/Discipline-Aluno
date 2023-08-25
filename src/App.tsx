import "./assets/css/bootstrap-reboot.min.css"
import "./assets/css/bootstrap-grid.min.css"
import "./App.css";
import Paginacao from "./Pages/Avaliacoes/Components/Paginacao";

function App() {
	return (
		<>
			<Paginacao actualPage={1} totalPages={6} />	
		</>
	);
}

export default App;
