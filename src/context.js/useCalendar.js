import { createContext, useContext, useEffect, useState } from "react";

const CalendarContext = createContext();

export const useCalendar = () => useContext(CalendarContext);

export function CalendarProvider({ children }) {
	const [calendar, setCalendar] = useState([]);
	const [selectedDays, setSelectedDays] = useState([]);

	function selectDay(day) {
		console.log("select day", day);
		const updatedSelectedDays = [...selectedDays, day];
		setSelectedDays(updatedSelectedDays);
	}

	function unselectDay(day) {
		console.log("unselect day...", day);
		let updatedSelectedDays = [];
		selectedDays.forEach((d) => {
			if (
				d.dayName !== day.dayName &&
				d.dayNumber !== day.dayNumber &&
				d.monthIndex !== day.monthIndex
			) {
				updatedSelectedDays.push(d);
			}
		});
		setSelectedDays(updatedSelectedDays);
	}

	useEffect(() => console.log("calendar:", calendar), [calendar]);
	useEffect(() => console.log("selectedDays:", selectedDays), [selectedDays]);

	const value = {
		calendar,
		setCalendar,
	};

	return (
		<CalendarContext.Provider value={value}>
			{children}
		</CalendarContext.Provider>
	);
}
