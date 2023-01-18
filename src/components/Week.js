import getMonthName from "../lib/getMonthName";

export default function Week({ week, weekNumber, isLast, divWidth }) {
	// console.log(
	// 	"week data for",
	// 	weekNumber,
	// 	"week in the",
	// 	getMonthName(week[0].monthIndex, week[0].year),
	// 	week
	// );
	const isFirst = weekNumber === 0;
	const isFull = week.length === 7;

	function NotFullWeek({ week, divWidth }) {
		const getClassName = (i) =>
			isFirst
				? i >= 7 - week.length
					? "day"
					: ""
				: i < week.length
				? "day"
				: "";

		const getDayNumber = (i, week) =>
			isFirst
				? i >= 7 - week.length
					? week[i - (7 - week.length)].dayNumber
					: null
				: i < week.length
				? week[i].dayNumber
				: null;

		return (
			<div className="week d-flex">
				{["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((dayName, i) => (
					<span
						// className={
						// 	isFirst
						// 		? i >= 7 - week.length
						// 			? "day"
						// 			: ""
						// 		: i < week.length
						// 		? "day"
						// 		: ""
						// }
						className={getClassName(i)}
						style={{ width: divWidth / 7, cursor: "pointer" }}
						onClick={() => {
							if (isFirst) {
								if (i >= 7 - week.length) {
									const day = week[i - (7 - week.length)];
									console.log(
										"You've clicked",
										day.dayName,
										getMonthName(day.monthIndex, day.year),
										day.dayNumber
									);
									console.log("This is not full first week of the month.");
								} else {
									console.log("There is no day here...");
								}
							} else {
								if (i < week.length) {
									const day = week[i];
									console.log(
										"You've clicked",
										day.dayName,
										getMonthName(day.monthIndex, day.year),
										day.dayNumber
									);
									console.log("This is not full last week of the month.");
								} else {
									console.log("There is no day here...");
								}
							}
						}}
					>
						{getDayNumber(i, week)}
					</span>
				))}
			</div>
		);
	}

	if (!isFull) return <NotFullWeek week={week} divWidth={divWidth} />;

	return (
		<div className="week d-flex">
			{["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((dayName, i) => (
				<span
					className="day"
					style={{ width: divWidth / 7, cursor: "pointer" }}
					onClick={() => {
						const day = week[i];
						console.log(
							"You've clicked",
							day.dayName,
							getMonthName(day.monthIndex, day.year),
							day.dayNumber
						);
					}}
				>
					{week[i].dayNumber}
				</span>
			))}
		</div>
	);
}
