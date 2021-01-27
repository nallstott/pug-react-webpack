import React from "react";

function SelectDecks(props) {
	const updateNumDecks = (e) => {
		const selectionDiv = document.querySelectorAll(".decks");
		selectionDiv.forEach((deck) => {
			deck.classList.remove("active");
		});
		switch (e.target.id) {
			case "half":
				props.numDecks(0.5);
				break;
			case "one":
				props.numDecks(1);
				break;
			case "one-and-half":
				props.numDecks(1.5);
				break;
			case "two":
				props.numDecks(2);
				break;
			default:
				break;
		}
		e.target.classList.add("active");
	};

	return (
		<div className="selection-div">
			<div className="option decks" id="half" onClick={updateNumDecks}>
				0.5
			</div>
			<div className="option decks" id="one" onClick={updateNumDecks}>
				1
			</div>
			<div className="option decks" id="one-and-half" onClick={updateNumDecks}>
				1.5
			</div>
			<div className="option decks" id="two" onClick={updateNumDecks}>
				2
			</div>
		</div>
	);
}

export default SelectDecks;
