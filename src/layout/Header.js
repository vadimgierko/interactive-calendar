export default function Header({ year }) {
	return (
		<header className="mt-3 mb-5">
			<h1>Interactive Calendar {year}</h1>
			<hr />
			<p>
				This is an interactive calendar written in React that generates a full
				screen calendar for a given year and enables users to pick days by
				clicking day numbers & store them in the app state. This app is a
				reusable & customizable component, that can be integrated with other
				React apps.{" "}
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
