export default function generateWeeksForMonth(monthIndex, year) {
	var weeks = [[]];
	var firstDay = new Date(year, monthIndex, 1);
	var lastDay = new Date(year, monthIndex + 1, 0);
	var currentDay = firstDay;
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
	let updatedWeeks = [];
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
	return updatedWeeks;
}
