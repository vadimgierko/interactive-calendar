import { Row, Col } from "react-bootstrap";
import Month from "./Month";

export default function Calendar({ year, calendar }) {
	const rowNum = 4; // set the desired number of rows in calendar (1, 2, 3, 4, 6, 12)

	if (!calendar || !calendar.length) return null;

	return (
		<div className="calendar">
			{Array(rowNum)
				.fill({})
				.map((row, r) => (
					<Row key={"row-" + r} className="mb-3">
						{calendar
							.slice(r * (12 / rowNum), 12 / rowNum + r * (12 / rowNum))
							.map((month, i) => (
								<Col key={"month-" + (r * 12) / rowNum + i}>
									<Month
										monthNumber={(r * 12) / rowNum + i}
										year={year}
										month={month}
									/>
								</Col>
							))}
					</Row>
				))}
		</div>
	);
}
