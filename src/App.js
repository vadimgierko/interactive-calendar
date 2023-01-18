import "./App.css";
import Calendar from "./components/Calendar";
import { Container } from "react-bootstrap";

function App() {
	const year = 2023;
	return (
		<Container>
			<header className="text-center">
				<h1>Interactive Calendar {year}</h1>
			</header>
			<main>
				<Calendar year={year} />
			</main>
		</Container>
	);
}

export default App;
