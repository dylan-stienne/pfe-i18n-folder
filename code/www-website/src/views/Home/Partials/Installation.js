import React from 'react';
import TerminalComponent from "../../../components/TerminalComponent";

const Installation = () => {
	return (
		<section className={"section-installation"} id={"installation"}>
			<h2>Installation</h2>
			<TerminalComponent title={"Terminal"} content={"npm install i18n-folder"} />
		</section>
	);
};

export default Installation;
