"use client";
import style from "@/app/assets/styles/main.module.css";
import "@/app/assets/styles/table.css";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// import mainContent from "@/app/assets/content/main-content.json";

const CtaItems = ({ ctas }) => (
	<>
		{ctas.length > 0 ? (
			<div className={style.ctas}>
				{ctas.map(
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
	</>
);

const HeroSection = ({ content }) => (
	<div className={content.heroType && content.heroType === "kaak" ? style.kaak : style.content}>
		<h1>{content.title}</h1>
		<h2>{content.subtitle}</h2>
		<p>{content.text}</p>
		{content.ctas ? <CtaItems ctas={content.ctas} /> : null}
	</div>
);

const TableBuilder = ({ table }) => (
	<>
		<table>
			<thead>
				<tr>
					{table.head.map(
						(head, index) => (
							<th key={index}>{head}</th>
						),
						0
					)}
				</tr>
			</thead>
			<tbody>
				{table.body.map(
					(row, index) => (
						<tr key={index}>
							{row.map(
								(cell, index) => (
									<td key={index}>{cell}</td>
								),
								0
							)}
						</tr>
					),
					0
				)}
			</tbody>
		</table>
		{/* Remarks section */}
		{table.foot ? (
			<ul className={style.remarks}>
				{table.foot.map(
					(row, index) => (
						<li key={index}>{row}</li>
					),
					0
				)}
			</ul>
		) : null}
	</>
);

const textBlock = (content) => (
	<>
		{content.textItems.map(
			(text, index) => (
				<p key={index}>{text}</p>
			),
			0
		)}
	</>
);

export default function Osallistujalle({ page }) {
	// Setting the state
	const [data, setData] = useState([]);
	const router = useRouter();

	// Getting data from api
	useEffect(() => {
		axios
			.get(`/api/content?page=${page}`)
			.then((response) => {
				// If response is not empty, set the data
				if (response.data.length > 0) {
					setData(response.data);
				} else {
					router.push(`/leiritietoa`);
				}
			})
			.catch((error) => {
				console.log(error);
				router.push(`/leiritietoa`);
			});
	}, [page, router]);

	return (
		<>
			{data.map(
				(content, index) => (
					<div
						key={index}
						className={content.type === "hero" ? style.hero : style.contentWrapper}>
						{content.type === "hero" ? (
							<HeroSection content={content} />
						) : (
							<>
								{content.textItems ? (
									<div className={style.textBlock}>
										{content.title ? <h2>{content.title}</h2> : null}
										{content.subtitle ? <h3>{content.subtitle}</h3> : null}
										{content.textItems ? textBlock(content) : null}
										{content.text ? <p>{content.text}</p> : null}
										{content.ctas ? <CtaItems ctas={content.ctas} /> : null}
										{content.table ? (
											<TableBuilder table={content.table} />
										) : null}
									</div>
								) : (
									<div className={style.textBlock}>
										{content.title ? <h2>{content.title}</h2> : null}
										{content.subtitle ? <h3>{content.subtitle}</h3> : null}
										{content.text ? <p>{content.text}</p> : null}
										{content.ctas ? <CtaItems ctas={content.ctas} /> : null}
										{content.table ? (
											<TableBuilder table={content.table} />
										) : null}
									</div>
								)}
							</>
						)}
					</div>
				),
				0
			)}
		</>
	);
}
