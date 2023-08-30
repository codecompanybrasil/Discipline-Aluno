import "./assets/css/bootstrap-reboot.min.css"
import "./assets/css/bootstrap-grid.min.css"
import "./App.css";
import Avaliacoes from "./Pages/Avaliacoes/main";
import Menu from "./Components/Menu/Menu";

function App() {
	let menu = [
		{
			text: "Botão teste",
			onClick: () => {}
		}, 
		{
			text: "Eai"
		},
		{}
 	]

	return (
		<>
			<Avaliacoes />
			<Menu options={menu} />
		</>
	);
}

export default App;
