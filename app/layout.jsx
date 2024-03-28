import "@/app/assets/styles/globals.css";
import "@/app/assets/styles/normalize.css";

import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
	subsets: ["latin"],
	variants: ["400", "600", "700", "900"],
});

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Topper from "@/app/components/topper";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const version = `v${publicRuntimeConfig?.version}`;

export default function RootLayout({ children }) {
	return (
		<html
			data-app-version={version}
			lang='fi'>
			<head>
				<title>S.A.A.R.I. 2024</title>
				<meta
					name='description'
					content='S.A.A.R.I. on Vaasan Sinisten sekä Ahjopartio yhteinen kesäleiri vuonna 2024.'
				/>
				<meta
					name='robots'
					content='noindex,nofollow'
				/>
				<meta
					name='googlebot'
					content='noindex,nofollow'
				/>
				<meta charSet='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
				/>
			</head>
			<body className={gabarito.className}>
				<Header />
				{children}
				<Topper />
				<Footer />
			</body>
		</html>
	);
}
