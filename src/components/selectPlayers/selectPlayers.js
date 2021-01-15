import React from "react";

class SelectPlayers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.updateNumPlayers = this.updateNumPlayers.bind(this);
	}

	updateNumPlayers(e) {
		const playerSelectionDiv = document.querySelector(".player-selection");
		const selectionDiv = playerSelectionDiv.querySelectorAll(".option");
		selectionDiv.forEach((player) => {
			player.classList.remove("active");
		});
		switch (e.target.id) {
			case "one-player":
				this.props.numPlayers(1);
				break;
			case "two-player":
				this.props.numPlayers(2);
				break;
			case "three-player":
				this.props.numPlayers(3);
				break;
			case "four-player":
				this.props.numPlayers(4);
				break;
			default:
				break;
		}
		e.target.classList.add("active");
	}

	render() {
		return (
			<div className="selection-div">
				<div className="option" id="one-player" onClick={this.updateNumPlayers}>
					1
				</div>
				<div className="option" id="two-player" onClick={this.updateNumPlayers}>
					2
				</div>
				<div className="option" id="three-player" onClick={this.updateNumPlayers}>
					3
				</div>
				<div className="option" id="four-player" onClick={this.updateNumPlayers}>
					4
				</div>
			</div>
		);
	}
}

export default SelectPlayers;
