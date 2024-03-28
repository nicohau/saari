import style from "@/app/assets/styles/header.module.css";
import Link from "next/link";
import React from "react";

import navitems from "@/app/assets/content/navitems.json";
import MobileMenu from "@/app/components/headerMobileMenu";

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
				{navitems.map(
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
			<MobileMenu />
		</header>
	);
};

export default Header;
