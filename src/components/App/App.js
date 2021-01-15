import React from "react";
import SelectPlayers from "../selectPlayers/selectPlayers";
import SelectDecks from "../selectDecks/selectDecks";
import Game from "../Game/Game";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameReady: false,
			numPlayers: 0,
			numDecks: 0,
		};

		this.updateNumDecks = this.updateNumDecks.bind(this);
		this.updateNumPlayers = this.updateNumPlayers.bind(this);
		this.startGame = this.startGame.bind(this);
	}

	updateNumPlayers(players) {
		this.setState({ numPlayers: players });
		this.gameReady();
	}

	updateNumDecks(decks) {
		this.setState({ numDecks: decks });
		this.gameReady();
	}

	gameReady() {
		setTimeout(() => {
			const startGame = document.querySelector(".start-game");
			if (this.state.numPlayers && this.state.numDecks) {
				startGame.classList.add("game-ready");
			}
		}, 1000);
	}

	startGame() {
		if (this.state.numPlayers > 0 && this.state.numDecks > 0) {
			this.setState({ gameReady: true });
			const selections = document.querySelector(".selections");
			const startGame = document.querySelector(".start-game");
			selections.style.opacity = "0";
			startGame.style.opacity = "0";
			selections.style.pointerEvents = "none";
			startGame.style.pointerEvents = "none";
			setTimeout(() => (selections.style.display = "none"), 1000);
			setTimeout(() => (startGame.style.display = "none"), 1000);
			const game = document.querySelector(".game");
			setTimeout(() => game.classList.add("game-active"), 1000);
		} else {
			alert("Please select players and decks");
		}
	}

	render() {
		return (
			<div className="body-container">
				<div className="app-container">
					<div className="app-header">
						<h1>PUG</h1>
						<h4>The Pushup Game</h4>
					</div>
					<div className="app-body">
						<div className="selections">
							<div className="player-selection">
								<h2>Select Number of Players</h2>
								<SelectPlayers numPlayers={this.updateNumPlayers} />
							</div>
							<div className="deck-selection">
								<h2>Select Number of Decks</h2>
								<SelectDecks numDecks={this.updateNumDecks} />
							</div>
						</div>
						<div className="start-game" onClick={this.startGame}>
							<h2>Create Game</h2>
						</div>
					</div>
					<Game players={this.state.numPlayers} decks={this.state.numDecks} gameReady={this.state.gameReady} />
				</div>
			</div>
		);
	}
}

export default App;
