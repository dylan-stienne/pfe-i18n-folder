import React, {useState} from 'react';
import TerminalComponent from "../../../components/TerminalComponent";
import BigTerminalComponent from "../../../components/BigTerminalComponent";

const Features = () => {

	const [stateTranslation, setStateTranslation] = useState(["pending", "lock", "lock", "lock", "lock", "lock", "lock", "lock"]);
	const [currentSectionIndex, setCurrentSectionIndex] = useState(1);

	const changeState = (state) => {
		const newState = [...stateTranslation];
		newState[state] = "success";
		newState[state + 1] = "pending";

		setStateTranslation(newState);
		setCurrentSectionIndex(state + 1);

		const nextSectionIndex = currentSectionIndex + 1;

		if (nextSectionIndex < 9) {
			const nextSection = document.getElementById(`section-${nextSectionIndex - 1}`);
			nextSection.scrollIntoView({behavior: "smooth"});
			setCurrentSectionIndex(nextSectionIndex);
		} else if (nextSectionIndex === 9) {
			setCurrentSectionIndex(nextSectionIndex);
		}
	};

	return (
		<section className={"section-features"}>
			<h2>Features</h2>
			<div className={"section-features-container"}>
				<div className={"section-features-container-left"}>
					<BigTerminalComponent content={"test"} state={currentSectionIndex} />
				</div>

				<div className={"section-features-container-right"}>
					<div className={"section-features-container-right-item"} id={"section-1"}>
						<p>Create a new translation file</p>
						<TerminalComponent title={"Terminal"} state={stateTranslation[0]} content={"npm run i18n create fr"} onClick={() => changeState(0) } successMessage={"fr.json file created !"} />
					</div>

					<div className={"section-features-container-right-item"} id={"section-2"}>
						<p>Add translation item</p>
						<TerminalComponent title={"Terminal"} state={stateTranslation[1]} content={"npm run i18n add WELCOME_TITLE Hello"} onClick={() => changeState(1)} successMessage={"WELCOME_TITLE item added to en.json"} />
					</div>

					<div className={"section-features-container-right-item"} id={"section-3"}>
						<p>Edit translation item</p>
						<TerminalComponent title={"Terminal"} state={stateTranslation[2]} content={"npm run i18n set WELCOME_TITLE “Welcome {name} !”"} onClick={() => changeState(2)} successMessage={"WELCOME_TITLE value updated"} />
					</div>

					<div className={"section-features-container-right-item"} id={"section-4"}>
						<p>Get translation item</p>
						<TerminalComponent title={"Terminal"} state={stateTranslation[3]} content={"npm run i18n get WELCOME_TITLE"} onClick={() => changeState(3)} successMessage={"WELCOME_TITLE => Welcome {name} !"} />
					</div>

					<div className={"section-features-container-right-item"} id={"section-5"}>
						<p>Del translation item</p>
						<TerminalComponent title={"Terminal"} state={stateTranslation[4]} content={"npm run i18n del WELCOME_TITLE"} onClick={() => changeState(4)} successMessage={"WELCOME_TITLE item deleted"} />
					</div>

					<div className={"section-features-container-right-item"} id={"section-6"}>
						<p>Synchronize translations keys</p>
						<TerminalComponent title={"Terminal"} state={stateTranslation[5]} content={"npm run i18n synchronize"} onClick={() => changeState(5)} successMessage={"fr.json keys synchronized"} />
					</div>

					<div className={"section-features-container-right-item"} id={"section-7"}>
						<p>Translate file</p>
						<TerminalComponent title={"Terminal"} state={stateTranslation[6]} content={"npm run i18n translate fr"} onClick={() => changeState(6)} successMessage={"fr.json values translated"} />
					</div>

					<div className={"section-features-container-right-item"} id={"section-8"}>
						<p>Delete translation file</p>
						<TerminalComponent title={"Terminal"} state={stateTranslation[7]} content={"npm run i18n delete fr"} onClick={() => changeState(7)} successMessage={"fr.json file deleted"} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
