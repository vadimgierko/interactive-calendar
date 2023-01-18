import generateWeeksForMonth from "./generateWeeksForMonth";

export default function generateCalendar(year) {
	let calendar = [];
	for (let i = 0; i < 12; i++) {
		const month = generateWeeksForMonth(i, year);
		calendar.push(month);
	}
	return calendar;
}
