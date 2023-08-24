import "./assets/css/bootstrap-reboot.min.css"
import "./assets/css/bootstrap-grid.min.css"
import "./App.css";
import AccentButton from "./Components/Buttons/AccentButton";
import PrimaryButton from "./Components/Buttons/PrimaryButton";
import { Puzzle, Taskboard } from "./Components/DIcons/Icon";

function App() {
	return (
		<>
			<AccentButton text="Aperta em mim" hasIcon icon={Puzzle} />
			<PrimaryButton text="Aperta em mim" hasIcon icon={Taskboard} />
			<AccentButton text="Aperta em mim" />
			<PrimaryButton text="Aperta em mim" />
		</>
	);
}

export default App;
