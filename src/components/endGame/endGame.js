import React from "react";

class EndGame extends React.Component {
	constructor(props) {
		super(props);
		this.populateWinners = this.populateWinners.bind(this);
	}

	populateWinners() {
		const results = this.props.results;
		const endGameDiv = document.querySelector(".end-game");
		for (let i = 0; i < this.props.players; i++) {
			const player = document.createElement("div");
			player.innerHTML = `<h2>Player ${i}<br></h2>`;
			endGameDiv.appendChild(player);
		}
	}

	render() {
		return <div className="end-game"></div>;
	}
}

export default EndGame;
