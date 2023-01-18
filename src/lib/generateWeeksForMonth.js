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
		});
		if (currentDay.getDay() === 0) {
			weeks.push([]);
		}
		currentDay.setDate(currentDay.getDate() + 1);
	}
	if (weeks[weeks.length - 1].length === 0) {
		weeks.pop();
	}
	return weeks;
}
