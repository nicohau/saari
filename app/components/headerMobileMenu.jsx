import style from "@/app/assets/styles/header.module.css";
import Link from "next/link";
import React from "react";

// Getting parameters
export default function HeaderMobileMenu({ navItems }) {
	// Mobile menu click
	const handleClick = () => {
		document.getElementById("nav-toggle").checked = false;
	};

	return (
		<>
			<div className={style.mobileToggle}>
				<input
					type='checkbox'
					id='nav-toggle'
				/>
				<label htmlFor='nav-toggle'>
					<p>Valikko</p>
					<div className={style.menuIcon}>
						<span></span>
						<span></span>
					</div>
				</label>
				<ul className={style.navigationMobile}>
					{navItems.map(
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
									<Link
										href={item.uri}
										onClick={handleClick}>
										{item.title}
									</Link>
								)}
							</li>
						),
						0
					)}
				</ul>
			</div>
		</>
	);
}
