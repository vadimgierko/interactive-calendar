export default function generateWeeksForMonth(monthIndex, year) {
	const weeks = [[]];
	const firstDay = new Date(year, monthIndex, 1);
	const lastDay = new Date(year, monthIndex + 1, 0);
	const currentDay = firstDay;

	while (currentDay <= lastDay) {
		weeks[weeks.length - 1].push({
			dayName: currentDay.toLocaleString("en-US", { weekday: "long" }),
			dayNumber: currentDay.getDate(),
			monthIndex: monthIndex,
			year: year,
			isSelected: false,
		});

		if (currentDay.getDay() === 0) {
			weeks.push([]);
		}

		currentDay.setDate(currentDay.getDate() + 1);
	}

	if (weeks[weeks.length - 1].length === 0) {
		weeks.pop();
	}

	// fill not full weeks with empty objects:
	const updatedWeeks = [];

	weeks.forEach((week, i) => {
		if (week.length < 7) {
			const indexesNumToComplete = 7 - week.length;
			let updatedWeek = [...week];

			if (i === 0) {
				// complete an array from the beggining
				for (let i = 0; i < indexesNumToComplete; i++) {
					updatedWeek.unshift({});
				}
			} else {
				// complete an array to the end:
				for (let i = 0; i < indexesNumToComplete; i++) {
					updatedWeek = [...updatedWeek, {}];
				}
			}
			updatedWeeks.push(updatedWeek);
		} else {
			updatedWeeks.push(week);
		}
	});
	// add weekIndex & dayIndex:
	for (let i = 0; i < updatedWeeks.length; i++) {
		for (let d = 0; d < 7; d++) {
			const dayObj = updatedWeeks[i][d];
			updatedWeeks[i][d] = Object.keys(dayObj).length
				? { ...updatedWeeks[i][d], weekIndex: i, dayIndex: d }
				: {};
		}
	}
	return updatedWeeks;
}
