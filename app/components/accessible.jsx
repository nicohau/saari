"use client";
import accessibleStyle from "@/app/assets/styles/accessible.module.css";
import style from "@/app/assets/styles/header.module.css";
import { IconAccessibleFilled } from "@tabler/icons-react";

const accessibleToggle = () => {
	const toggleAccessibility = () => {
		// Set the accessibility preference in local storage
		const accessibility = document.body.classList.contains("accessible")
			? "accessible"
			: "standard";

		localStorage.setItem("accessibility", accessibility);

		// Adding accessible css module to body and header
		document.body.classList.toggle(accessibleStyle.accessible);
		document.querySelector("header").classList.toggle(style.accessible);
	};

	return (
		<li
			className={style.accessibletoggle}
			onClick={toggleAccessibility}>
			<IconAccessibleFilled />
		</li>
	);
};

export default accessibleToggle;
