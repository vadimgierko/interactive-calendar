export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<p>
				&copy; {currentYear === 2023 ? "2023" : "2023-" + currentYear}{" "}
				<a href="https://vadimgierko.com" target="_blank" rel="noreferrer">
					Vadim Gierko
				</a>{" "}
				|{" "}
				<a
					href="https://github.com/vadimgierko/interactive-calendar"
					target="_blank"
					rel="noreferrer"
				>
					[see the code]
				</a>
			</p>
		</footer>
	);
}
