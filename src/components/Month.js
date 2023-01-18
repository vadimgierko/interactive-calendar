import { useEffect, useState, useRef, useLayoutEffect } from "react";
import generateWeeksForMonth from "../lib/generateWeeksForMonth";
import getMonthName from "../lib/getMonthName";
import Week from "./Week";

export default function Month({ monthNumber, year }) {
	const [weeks, setWeeks] = useState([]);

	//====== GET MONTH DIV WIDTH TO DIVIDE IT TO 7 DAYS ====
	const ref = useRef(null);
	const [monthDivWidth, setMonthDivWidth] = useState(0);

	useLayoutEffect(() => {
		setMonthDivWidth(ref.current.offsetWidth);
	}, []);

	useEffect(() => {
		function handleWindowResize() {
			setMonthDivWidth(ref.current.offsetWidth);
		}

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	// useEffect(
	// 	() => console.log("month div width:", monthDivWidth),
	// 	[monthDivWidth]
	// );
	//=====================================================//

	useEffect(() => {
		const weeks = generateWeeksForMonth(monthNumber, year);
		//console.log("weeks for", monthNumber, weeks);
		setWeeks(weeks);
	}, [monthNumber, year]);

	return (
		<div className="month" ref={ref}>
			<h5 className="text-center">{getMonthName(monthNumber, year)}</h5>
			<div className="d-flex">
				{["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
					<span key={day} style={{ width: monthDivWidth / 7 }}>
						{day}
					</span>
				))}
			</div>
			{weeks.map((week, i) => (
				<Week
					key={"month-" + monthNumber + "-week-" + i}
					week={week}
					weekNumber={i}
					isFirst={i === 0}
					isLast={i === weeks.length - 1}
					divWidth={monthDivWidth}
				/>
			))}
		</div>
	);
}
