export default function Day({ dayNumber, className, divWidth, onClick }) {
	return (
		<span
			className={className}
			style={{
				width: divWidth / 7,
				cursor: "pointer",
			}}
			onClick={onClick}
		>
			{dayNumber && dayNumber}
		</span>
	);
}
