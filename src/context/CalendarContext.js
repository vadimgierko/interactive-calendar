import { createContext, useReducer, useContext } from "react";

export const CalendarContext = createContext(null);
export const CalendarDispatchContext = createContext(null);

const initCalendar = [];

export function CalendarProvider({ children }) {
	const [calendar, dispatch] = useReducer(calendarReducer, initCalendar);

	return (
		<CalendarContext.Provider value={calendar}>
			<CalendarDispatchContext.Provider value={dispatch}>
				{children}
			</CalendarDispatchContext.Provider>
		</CalendarContext.Provider>
	);
}

function calendarReducer(calendar, action) {
	switch (action.type) {
		case "calendar-initiated": {
			return action.initCalendar;
		}
		case "day-selected": {
			const day = action.day;
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
			return updatedCalendar;
		}
		case "day-unselected": {
			const day = action.day;
			console.log("unselect day", day);
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
			return updatedCalendar;
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}

export function useCalendar() {
	return useContext(CalendarContext);
}

export function useCalendarDispatch() {
	return useContext(CalendarDispatchContext);
}
