import React from 'react';
import TopContent from "./Partials/TopContent";
import Installation from "./Partials/Installation";
import Features from "./Partials/Features";

const Home = () => {
	return (
		<div className={"home"}>
			<TopContent/>
			<Installation />
			<Features />
		</div>
	);
};

export default Home;
