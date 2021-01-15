import React from "react";

class SelectDecks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.updateNumDecks = this.updateNumDecks.bind(this);
	}

	updateNumDecks(e) {
		const selectionDiv = document.querySelectorAll(".decks");
		selectionDiv.forEach((deck) => {
			deck.classList.remove("active");
		});
		switch (e.target.id) {
			case "half":
				this.props.numDecks(0.5);
				break;
			case "one":
				this.props.numDecks(1);
				break;
			case "one-and-half":
				this.props.numDecks(1.5);
				break;
			case "two":
				this.props.numDecks(2);
				break;
			default:
				break;
		}
		e.target.classList.add("active");
	}

	render() {
		return (
			<div className="selection-div">
				<div className="option decks" id="half" onClick={this.updateNumDecks}>
					0.5
				</div>
				<div className="option decks" id="one" onClick={this.updateNumDecks}>
					1
				</div>
				<div className="option decks" id="one-and-half" onClick={this.updateNumDecks}>
					1.5
				</div>
				<div className="option decks" id="two" onClick={this.updateNumDecks}>
					2
				</div>
			</div>
		);
	}
}

export default SelectDecks;
