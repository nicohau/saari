import style from "@/app/assets/styles/footer.module.css";
import Image from "next/image";

export default function Footer() {
	const thisYear = new Date().getFullYear();
	return (
		<footer className={style.footer}>
			<div className={style.footerWrapper}>
				<div className={style.wordmark}>S.A.A.R.I.</div>
				<div className={style.copyrightWrapper}>
					<p>tacodesign.eu</p>
					<div>
						<svg>
							<clipPath
								id='copyright'
								clipPathUnits='objectBoundingBox'>
								<path d='M0.222,0 L0.778,0 L0.778,0.111 L0.222,0.111 L0.222,0 M1,0.222 L1,0.778 L0.889,0.778 L0.889,0.222 L1,0.222 M0.778,1 L0.222,1 L0.222,0.889 L0.778,0.889 L0.778,1 M0,0.778 L0,0.222 L0.111,0.222 L0.111,0.778 L0,0.778 M0.222,0.111 L0.222,0.222 L0.111,0.222 L0.111,0.111 L0.222,0.111 M0.889,0.111 L0.889,0.222 L0.778,0.222 L0.778,0.111 L0.889,0.111 M0.889,0.778 L0.889,0.889 L0.778,0.889 L0.778,0.778 L0.889,0.778 M0.222,0.889 L0.111,0.889 L0.111,0.778 L0.222,0.778 L0.222,0.889 M0.667,0.222 L0.667,0.333 L0.333,0.333 L0.333,0.222 L0.667,0.222 M0.778,0.333 L0.778,0.444 L0.667,0.444 L0.667,0.333 L0.778,0.333 M0.778,0.556 L0.778,0.667 L0.667,0.667 L0.667,0.556 L0.778,0.556 M0.667,0.778 L0.333,0.778 L0.333,0.667 L0.667,0.667 L0.667,0.778 M0.222,0.333 L0.333,0.333 L0.333,0.667 L0.222,0.667 L0.222,0.333'></path>
							</clipPath>
						</svg>
						<div className={style.svg}></div>
						<span>{thisYear}</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
