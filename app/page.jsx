import { Suspense } from "react";

import style from "@/app/assets/styles/main.module.css";
import ContentBlock from "@/app/components/contentBlock";

export default function Home() {
	return (
		<main className={style.main}>
			<Suspense>
				<ContentBlock page={"main"} />
			</Suspense>
		</main>
	);
}
