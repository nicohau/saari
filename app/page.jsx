import { Suspense } from "react";

import style from "@/app/assets/styles/main.module.css";
import MainPage from "@/app/components/mainPage";

export default function Home() {
	return (
		<main className={style.main}>
			<Suspense>
				<MainPage />
			</Suspense>
		</main>
	);
}
