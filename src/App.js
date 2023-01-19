import { useEffect } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import Container from "react-bootstrap/Container";
import { useCalendar } from "./context.js/useCalendar";
import generateCalendar from "./lib/generateCalendar";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function App() {
	const year = 2023;
	const { calendar, setCalendar } = useCalendar();

	useEffect(() => {
		if (!calendar.length) {
			const newCalendar = generateCalendar(year);
			setCalendar(newCalendar);
		}
	}, [calendar, setCalendar]);

	return (
		<Container className="text-center">
			<Header year={year} />
			<main>
				<Calendar year={year} calendar={calendar} />
			</main>
			<hr />
			<Footer />
		</Container>
	);
}
