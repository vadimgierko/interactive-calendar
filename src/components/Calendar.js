import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Month from "./Month";

export default function Calendar({ year, calendar }) {
	if (!calendar || !calendar.length) return null;

	return (
		<div className="calendar">
			<Row>
				{calendar.map((month, m) => (
					<Col key={"month-" + m} xs={12} sm={6} lg={3} md={4}>
						<Month monthNumber={m} year={year} month={month} />
					</Col>
				))}
			</Row>
		</div>
	);
}
