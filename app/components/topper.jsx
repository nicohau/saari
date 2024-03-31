export default function Topper() {
	return (
		<>
			<svg
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: 0,
					height: 0,
					overflow: "hidden",
				}}>
				<clipPath
					id='topper'
					clipPathUnits='objectBoundingBox'>
					<path d='M1,1 L0,1 C0,0,0.196,0.481,0.275,0.481 C0.354,0.481,0.421,0.228,0.5,0.231 C0.579,0.228,0.646,0.481,0.725,0.481 C0.804,0.481,1,0,1,1'></path>
				</clipPath>
			</svg>
			<svg
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: 0,
					height: 0,
					overflow: "hidden",
				}}>
				<clipPath
					id='logo'
					clipPathUnits='objectBoundingBox'>
					<path d='M0.037,0.5 C0.013,0.42,0,0.337,0,0.254 C0,-0.059,0.196,0.064,0.275,0.064 C0.354,0.064,0.421,-0.001,0.5,0 C0.579,-0.001,0.646,0.064,0.725,0.064 C0.804,0.064,1,-0.059,1,0.254 C1,0.337,0.987,0.42,0.963,0.5 C0.883,0.772,0.684,1,0.5,1 C0.316,1,0.117,0.772,0.037,0.5'></path>
				</clipPath>
			</svg>
		</>
	);
}
