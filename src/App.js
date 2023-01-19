import { useEffect } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import Container from "react-bootstrap/Container";
import { useCalendar } from "./context.js/useCalendar";
import generateCalendar from "./lib/generateCalendar";

function App() {
	const year = 2023;
	const { calendar, setCalendar } = useCalendar();

	useEffect(() => {
		if (!calendar.length) {
			const newCalendar = generateCalendar(year);
			setCalendar(newCalendar);
		}
	}, [calendar, setCalendar]);

	return (
		<Container>
			<header className="text-center mt-3 mb-5">
				<h1>Interactive Calendar {year}</h1>
			</header>
			<main>
				<Calendar year={year} calendar={calendar} />
			</main>
		</Container>
	);
}

export default App;
