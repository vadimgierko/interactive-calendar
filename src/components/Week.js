import getMonthName from "../lib/getMonthName";
import Day from "./Day";

export default function Week({ week, weekNumber, divWidth }) {
	return (
		<div className="week d-flex">
			{["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((dayName, i) => (
				<Day
					className="day"
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
						} else {
							console.log("There is no day here...");
						}
						// if (!isDaySelected(day)) {
						// 	selectDay(day);
						// } else {
						// 	unselectDay(day);
						// }
					}}
				/>
			))}
		</div>
	);
}
