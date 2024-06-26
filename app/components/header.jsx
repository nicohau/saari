"use client";
import style from "@/app/assets/styles/header.module.css";
import Link from "next/link";
import { useEffect } from "react";

import MobileMenu from "@/app/components/headerMobileMenu";

import data from "@/app/data/header.json";

const Header = () => {
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
