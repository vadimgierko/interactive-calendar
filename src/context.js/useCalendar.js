import { createContext, useContext, useEffect, useState } from "react";

const CalendarContext = createContext();

export const useCalendar = () => useContext(CalendarContext);

export function CalendarProvider({ children }) {
	const [calendar, setCalendar] = useState([]);
	const [selectedDays, setSelectedDays] = useState([]);

	function selectDay(day) {
		console.log("select day", day);
		// change day isSelected prop to true:
		const updatedCalendar = calendar.map((month, monthIndex) => {
			if (monthIndex !== day.monthIndex) return month;
			return month.map((week, weekIndex) => {
				if (weekIndex !== day.weekIndex) return week;
				return week.map((dayObject, dayIndex) => {
					if (dayIndex !== day.dayIndex) return dayObject;
					return { ...dayObject, isSelected: true };
				});
			});
		});
		setCalendar(updatedCalendar);
	}

	function unselectDay(day) {
		console.log("unselect day...", day);
		// change day isSelected prop to false:
		const updatedCalendar = calendar.map((month, monthIndex) => {
			if (monthIndex !== day.monthIndex) return month;
			return month.map((week, weekIndex) => {
				if (weekIndex !== day.weekIndex) return week;
				return week.map((dayObject, dayIndex) => {
					if (dayIndex !== day.dayIndex) return dayObject;
					return { ...dayObject, isSelected: false };
				});
			});
		});
		setCalendar(updatedCalendar);
	}

	useEffect(() => console.log("calendar:", calendar), [calendar]);

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

	useEffect(() => console.log("selectedDays:", selectedDays), [selectedDays]);

	const value = {
		calendar,
		setCalendar,
		selectDay,
		unselectDay,
	};

	return (
		<CalendarContext.Provider value={value}>
			{children}
		</CalendarContext.Provider>
	);
}
