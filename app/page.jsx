import { Suspense } from "react";

import style from "@/app/assets/styles/main.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<main className={style.main}>
			<div className={style.hero}>
				<div className={style.kaak}>
					<h1>KÄÄK!</h1>
					<h2>Nyt mennään, tervetuloa leirille!</h2>
					<div className={style.ctas}>
						<a
							className={style.cta}
							href='https://www.instagram.com/s.a.a.r.i.24'
							target='_blank'
							rel='noopener noreferrer'>
							Seuraa leirin tapahtumia
						</a>
						<Link
							className={style.cta}
							href='/ohjelma'>
							Leirin ohjelma
						</Link>
					</div>
				</div>
			</div>
			<div className={style.hero}>
				<div className={style.content}>
					<h2>Kolmen lippukunnan yhteinen kesäleiri</h2>
					<p>
						Vaasan Sinisten, Ahjopartion sekä Laihian Eräpoikien ja -tyttöjen yhteinen
						kesäleiri Ähtärin Selkäsaaressa
					</p>
				</div>
			</div>
		</main>
	);
}
