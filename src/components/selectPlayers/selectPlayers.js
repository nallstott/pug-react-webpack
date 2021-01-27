import React from "react";

function SelectPlayers(props) {
	const updateNumPlayers = (e) => {
		const playerSelectionDiv = document.querySelector(".player-selection");
		const selectionDiv = playerSelectionDiv.querySelectorAll(".option");
		selectionDiv.forEach((player) => {
			player.classList.remove("active");
		});
		switch (e.target.id) {
			case "one-player":
				props.numPlayers(1);
				break;
			case "two-player":
				props.numPlayers(2);
				break;
			case "three-player":
				props.numPlayers(3);
				break;
			case "four-player":
				props.numPlayers(4);
				break;
			default:
				break;
		}
		e.target.classList.add("active");
	};

	return (
		<div className="selection-div">
			<div className="option" id="one-player" onClick={updateNumPlayers}>
				1
			</div>
			<div className="option" id="two-player" onClick={updateNumPlayers}>
				2
			</div>
			<div className="option" id="three-player" onClick={updateNumPlayers}>
				3
			</div>
			<div className="option" id="four-player" onClick={updateNumPlayers}>
				4
			</div>
		</div>
	);
}

export default SelectPlayers;
