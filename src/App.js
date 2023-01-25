import { useEffect, useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import Container from "react-bootstrap/Container";
import { useCalendar, useCalendarDispatch } from "./context/CalendarContext";
import generateCalendar from "./lib/generateCalendar";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function App() {
	const year = 2023;
	const calendar = useCalendar();
	const dispatch = useCalendarDispatch();

	const [selectedDays, setSelectedDays] = useState([])

	useEffect(() => {
		if (!calendar || (calendar && !calendar.length)) {
			const initCalendar = generateCalendar(year);
			dispatch({
				type: "calendar-initiated",
				initCalendar: initCalendar
			});
		}
	}, [calendar, dispatch]);

	// populate a selected days arr on every calendar change:
	useEffect(() => {
		const updatedSelectedDays = calendar.reduce((selected, month) => {
			return selected.concat(
				month.reduce((weekSelected, week) => {
					return weekSelected.concat(
						week.filter((day) => day.isSelected === true)
					);
				}, [])
			);
		}, []);
		setSelectedDays(updatedSelectedDays);
	}, [calendar]);

	useEffect(
		() => console.log("selected days were updated:", selectedDays),
		[selectedDays]
	);

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
