import style from "@/app/assets/styles/main.module.css";
import Image from "next/image";

export const metadata = {
	title: "Mainoksia - S.A.A.R.I. 2024",
	description: "Leirin mainoksia S.A.A.R.I. 2024",
};

export default function Home() {
	return (
		<main className={style.main}>
			<div className={style.hero}>
				<div className={style.content}>
					<h2>Mainoksia</h2>
					<div className={style.ctas}></div>
				</div>
			</div>
			<div className={style.contentWrapper}>
				<Image
					src={"/images/ANKKAPULCO.png"}
					alt='ANKKAPULCO'
					width={595}
					height={842}
					quality={75}
				/>
				<Image
					src={"/images/MILJARDOORIKLUBI.png"}
					alt='MILJARDOORIKLUBI'
					width={595}
					height={842}
					quality={75}
				/>
			</div>
		</main>
	);
}
