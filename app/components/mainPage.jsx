"use client";
import style from "@/app/assets/styles/main.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

// import mainContent from "@/app/assets/content/main-content.json";

export default function MainPage() {
	// Setting the state
	const [data, setData] = useState([]);

	// Getting data from api
	useEffect(() => {
		axios
			.get("/api/main")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			{data.map(
				(content, index) => (
					<div
						key={index}
						className={content.type === "hero" ? style.hero : style.contentWrapper}>
						{content.type === "hero" ? (
							<div
								className={
									content.heroType && content.heroType === "kaak"
										? style.kaak
										: style.content
								}>
								<h1>{content.title}</h1>
								<h2>{content.subtitle}</h2>
								<p>{content.text}</p>
								{content.ctas.length > 0 ? (
									<div className={style.ctas}>
										{content.ctas.map(
											(cta, index) => (
												<Link
													key={index}
													href={cta.uri}
													className={style.cta}>
													{cta.title}
												</Link>
											),
											0
										)}
									</div>
								) : null}
							</div>
						) : (
							<div className={style.content}>
								<h2>{content.title}</h2>
								<p>{content.text}</p>
								{content.ctas.length > 0 ? (
									<div className={style.ctas}>
										{content.ctas.map(
											(cta, index) => (
												<Link
													key={index}
													href={cta.uri}
													className={style.cta}>
													{cta.title}
												</Link>
											),
											0
										)}
									</div>
								) : null}
							</div>
						)}
					</div>
				),
				0
			)}
		</>
	);
}
