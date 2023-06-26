import { Form } from "react-bootstrap";

export default function Header({ year, setYear }) {
	return (
		<header className="mt-3 mb-5">
			<h1>Interactive Calendar {year}</h1>
			<Form.Control
				style={{ width: 80, margin: "auto" }}
				type="number"
				value={year}
				onChange={(e) => setYear(Number(e.target.value))}
			/>
			<hr />
			<p>
				This is an interactive calendar written in React that generates a full
				screen calendar for a given year and enables users to pick days by
				clicking day numbers & store them in the app state, so you can use this
				data according to your needs. Every day object contains: dayIndex
				(number: 0 = Monday), dayNumber, isSelected (boolean), monthIndex,
				weekIndex (for the particular month), year. This app is a reusable &
				customizable component, that can be integrated with other React apps.{" "}
				<a
					href="https://github.com/vadimgierko/interactive-calendar"
					target="_blank"
					rel="noreferrer"
				>
					See app's code repository
				</a>
				.
			</p>
		</header>
	);
}
