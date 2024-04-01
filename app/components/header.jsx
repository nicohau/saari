"use client";
import style from "@/app/assets/styles/header.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import MobileMenu from "@/app/components/headerMobileMenu";

const Header = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("/api/navitems")
			.then((response) => {
				// Setting the data in priority order 0 ->

				const sortedData = response.data.sort((a, b) => a.priority - b.priority);

				setData(sortedData);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<header className={style.headerWrapper}>
			<Link
				href='/'
				className={style.logoWrapper}>
				<div className={style.logo}>S.A.A.R.I.</div>
				<div className={style.year}>2024</div>
			</Link>
			<ul className={style.navigation}>
				{data.map(
					(item, index) => (
						<li
							key={index}
							className={item.isButton ? style.navButton : style.navItem}>
							{item.external ? (
								<a
									href={item.uri}
									target='_blank'
									rel='noopener noreferrer'>
									{item.title}
								</a>
							) : (
								<Link href={item.uri}>{item.title}</Link>
							)}
						</li>
					),
					0
				)}
			</ul>
			<MobileMenu navItems={data} />
		</header>
	);
};

export default Header;
