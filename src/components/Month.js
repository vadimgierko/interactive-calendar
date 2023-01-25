import getMonthName from "../lib/getMonthName";
import Week from "./Week";

export default function Month({ month, monthNumber, year }) {

	return (
		<div className="month mb-3">
			<h5 className="text-center">{getMonthName(monthNumber, year)}</h5>
			<div className="d-flex text-center">
				{["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
					<span key={day} style={{ width: "100%" }}>
						{day}
					</span>
				))}
			</div>
			{month.map((week, i) => (
				<Week
					key={"month-" + monthNumber + "-week-" + i}
					week={week}
					weekNumber={i}
					monthNumber={monthNumber}
					year={year}
				/>
			))}
		</div>
	);
}
