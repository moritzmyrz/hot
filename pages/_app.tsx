import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import "../style/fonts.css";
const colors = require("tailwindcss/colors");

const theme = createMuiTheme({
	palette: {
		primary: {
			main: colors.orange[500],
		},
		secondary: {
			main: colors.yellow[400],
		},
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<div className="flex flex-col min-h-screen">
					<Header />
					<div className="flex-1">
						<Component {...pageProps} />
					</div>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default MyApp;
