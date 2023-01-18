import { Row, Col } from "react-bootstrap";
import Month from "./Month";

export default function Calendar({ year }) {
	const rowNum = 4; // set the desired number of rows in calendar (1, 2, 3, 4, 6, 12)

	return (
		<div className="calendar">
			{Array(rowNum)
				.fill({})
				.map((row, r) => (
					<Row key={"row-" + r} className="mb-3">
						{Array(12)
							.fill({})
							.slice(r * (12 / rowNum), 12 / rowNum + r * (12 / rowNum))
							.map((month, i) => (
								<Col key={"month-" + (r * 12) / rowNum + i}>
									<Month monthNumber={(r * 12) / rowNum + i} year={year} />
								</Col>
							))}
					</Row>
				))}
		</div>
	);
}
