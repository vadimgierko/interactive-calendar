export default function getMonthName(monthNumber, year) {
	return new Date(year, monthNumber, 1).toLocaleString("en-us", {
		month: "long",
	});
}
