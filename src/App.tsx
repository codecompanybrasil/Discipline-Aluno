import "./assets/css/bootstrap-reboot.min.css"
import "./assets/css/bootstrap-grid.min.css"
import "./App.css";
import Avaliacoes from "./Pages/Avaliacoes/main";
import Menu from "./Components/Menu/Menu";

interface MenuOptionsInterface {
	text: string
	onClick?: () => void
}

function App() {

	let menu: MenuOptionsInterface[] = [
		{
			text: "Botão teste",
			onClick: () => {}
		}, 
		{
			text: "Eai"
		}
 	]

	return (
		<>
			<Avaliacoes />
			<Menu options={menu} />
		</>
	);
}

export default App;
