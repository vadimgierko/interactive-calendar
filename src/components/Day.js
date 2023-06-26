export default function Day({ dayNumber, className, onClick }) {
	return (
		<span
			className={className}
			style={{
				width: "100%",
			}}
			onClick={onClick}
		>
			{dayNumber && dayNumber}
		</span>
	);
}
