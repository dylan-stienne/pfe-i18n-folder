import React from 'react';
import {toast} from "react-toastify";

const TerminalComponent = ({content, state, title, onClick, successMessage}) => {

	let stateElement = null;
	switch (state) {
		case "null":
			break;
		case "pending":
			stateElement = (
				<div onClick={onClick} className={"section-terminal-state pending"}>
					<img alt={"img pending"} src={"/images/pictos/play.svg"} />
					<p>Run</p>
				</div>
			)
			break;
		case "lock":
			stateElement = (
				<div className={"section-terminal-state lock"}>
					<img alt={"img lock"} src={"/images/pictos/lock.svg"} />
					<p>Run</p>
				</div>
			)
			break;
		case "success":
			stateElement = (
				<div className={"section-terminal-state success"}>
					<img alt={"img success"} src={"/images/pictos/check.svg"} />
					<p>{successMessage}</p>
				</div>
			)
			break;
		default:
			break;
	}

	const handleCopyClick = () => {
		const tempTextArea = document.createElement('textarea');
		tempTextArea.value = content;
		document.body.appendChild(tempTextArea);
		tempTextArea.select();
		document.execCommand('copy');
		document.body.removeChild(tempTextArea);

		toast.success('Texte copié dans le presse-papiers !');
	}

	return (
		<section className={"section-terminal"}>
			<div className={"section-terminal-component"}>
			<div className={"section-terminal-component-top"}>
				<div className={"section-terminal-component-top-left"}>
					<img alt={"img terminal"} src={"/images/pictos/terminal.svg"} />
					<p>{title}</p>
				</div>

				<img alt={"img copy"} className={"copy-paste"} src={"/images/pictos/copy-paste.svg"} onClick={handleCopyClick} />
			</div>

			<div className={"section-terminal-component-bot"}>
				<p>
					{content}
				</p>
			</div>
			</div>

			{
				stateElement
			}
		</section>
	);
};

export default TerminalComponent;
