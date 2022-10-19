import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";

const App = () => {
	const [view, setView] = useState("list");

	const changeView = () => {
		setView(view === "list" ? "map" : "list");
	};

	return (
		<div className="main-page">
			<div className="header-fixed">
				<Header />
				<Menu />
			</div>
			<div className="content-page">
				<Home onChange={changeView} view={view} />
			</div>
			{view === "list" && <Footer />}
		</div>
	);
};

export default App;
