export default function Day({ dayNumber, className, onClick }) {
	return (
		<span
			className={className}
			style={{
				width: "100%",
				cursor: "pointer",
			}}
			onClick={onClick}
		>
			{dayNumber && dayNumber}
		</span>
	);
}
