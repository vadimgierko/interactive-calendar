import { useCalendar } from "../context.js/useCalendar";
import getMonthName from "../lib/getMonthName";
import Day from "./Day";

export default function Week({
	week,
	weekNumber,
	monthNumber,
	year,
	divWidth,
}) {
	const { selectDay, unselectDay } = useCalendar();

	return (
		<div className="week d-flex">
			{["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((dayName, i) => (
				<Day
					key={
						Object.keys(week[i]).length
							? week[i].year.toString() +
							  "-" +
							  (week[i].monthIndex + 1).toString() +
							  "-" +
							  week[i].dayNumber.toString()
							: year.toString() +
							  "-" +
							  (monthNumber + 1).toString() +
							  "-" +
							  weekNumber.toString() +
							  "-" +
							  i.toString()
					}
					className={week[i].isSelected ? "day selected" : "day"}
					dayNumber={week[i].dayNumber}
					divWidth={divWidth}
					onClick={() => {
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
								selectDay(day);
							} else {
								unselectDay(day);
							}
						} else {
							console.log("There is no day here...");
						}
					}}
				/>
			))}
		</div>
	);
}
