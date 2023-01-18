import { createContext, useContext, useEffect, useState } from "react";

const CalendarContext = createContext();

export const useCalendar = () => useContext(CalendarContext);

export function CalendarProvider({ children }) {
	const [calendar, setCalendar] = useState([]);
	const [selectedDays, setSelectedDays] = useState([]);

	function selectDay(day) {
		console.log("select day", day);
		// change day isSelected prop to true:
		const updatedCalendar = calendar.map((month, m) => {
			if (m === day.monthIndex) {
				return month.map((week, w) => {
					if (w === day.weekIndex) {
						return week.map((DAY, d) => {
							if (d === day.dayIndex) {
								// this is the day wee need to update:
								return {
									...DAY,
									isSelected: true,
								};
							} else {
								return DAY;
							}
						});
					} else {
						return week;
					}
				});
			} else {
				return month;
			}
		});
		setCalendar(updatedCalendar);
	}

	function unselectDay(day) {
		console.log("unselect day...", day);
		// change day isSelected prop to false:
		const updatedCalendar = calendar.map((month, m) => {
			if (m === day.monthIndex) {
				return month.map((week, w) => {
					if (w === day.weekIndex) {
						return week.map((DAY, d) => {
							if (d === day.dayIndex) {
								// this is the day wee need to update:
								return {
									...DAY,
									isSelected: false,
								};
							} else {
								return DAY;
							}
						});
					} else {
						return week;
					}
				});
			} else {
				return month;
			}
		});
		setCalendar(updatedCalendar);
	}

	useEffect(() => console.log("calendar:", calendar), [calendar]);
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
