import { useCalendarDispatch } from "../context/CalendarContext";
import getMonthName from "../lib/getMonthName";
import Day from "./Day";

export default function Week({ week, weekNumber, monthNumber, year }) {
	const dispatch = useCalendarDispatch();

	function generateDayKey(i) {
		const dayObj = week[i];

		return Object.keys(dayObj).length
			? dayObj.year.toString() +
			"-" +
			(dayObj.monthIndex + 1).toString() +
			"-" +
			dayObj.dayNumber.toString()
			: year.toString() +
			"-" +
			(monthNumber + 1).toString() +
			"-" +
			weekNumber.toString() +
			"-" +
			i.toString();
	}

	function handleClick(i) {
		const day = week[i];
		if (day.dayNumber) {
			console.log(
				"You've clicked",
				day.dayName,
				getMonthName(day.monthIndex, day.year),
				day.dayNumber,
				day
			);
			if (!day.isSelected) {
				dispatch({
					type: "day-selected",
					day: day
				})
			} else {
				dispatch({
					type: "day-unselected",
					day: day
				})
			}
		} else {
			console.log("There is no day here...");
		}
	}

	return (
		<div className="week d-flex text-center">
			{["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((dayName, i) => (
				<Day
					key={generateDayKey(i)}
					className={
						week[i].dayNumber
							? week[i].isSelected
								? "day selected"
								: "day"
							: ""
					}
					dayNumber={week[i].dayNumber}
					onClick={() => handleClick(i)}
				/>
			))}
		</div>
	);
}
