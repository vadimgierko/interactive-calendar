import { useEffect, useState, useRef, useLayoutEffect } from "react";
import getMonthName from "../lib/getMonthName";
import Week from "./Week";

export default function Month({ month, monthNumber, year }) {
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

	useEffect(
		() => console.log("month recieved in month", monthNumber, month),
		[month, monthNumber]
	);

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
			{month.map((week, i) => (
				<Week
					key={"month-" + monthNumber + "-week-" + i}
					week={week}
					weekNumber={i}
					divWidth={monthDivWidth}
				/>
			))}
		</div>
	);
}
