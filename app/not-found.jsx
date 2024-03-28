"use client";
import Link from "next/link";

import style from "@/app/assets/styles/notfound.module.css";

export default function NotFound() {
	// User clicks on the "Palaa kotiin" button
	// The browser navigates to the home page

	// The user clicks on the "Edellinen" button
	// The browser navigates to the previous page

	const handleClick = () => {
		window.history.back();
	};

	return (
		<main className={style.mainWrapper}>
			<div className={style.card}>
				<h1>KÄÄK!</h1>
				<p>
					Etsimääsi sivua ei löytynyt. <br />
					Tarkista osoite ja yritä uudelleen.
				</p>
				<div className={style.buttonWrapper}>
					<div
						onClick={handleClick}
						className={style.button + " " + style.highlight}>
						Edellinen
					</div>
					<Link
						href='/'
						className={style.button}>
						Palaa kotiin
					</Link>
				</div>
			</div>
		</main>
	);
}
