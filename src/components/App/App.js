import React, { useState, useEffect } from "react";
import SelectPlayers from "../selectPlayers/selectPlayers";
import SelectDecks from "../selectDecks/selectDecks";
import Game from "../Game/Game";

function App() {
	const [gameReady, setGameReady] = useState(false);
	const [numPlayers, setNumPlayers] = useState(0);
	const [numDecks, setNumDecks] = useState(0);

	useEffect(() => {
		const startGame = document.querySelector(".start-game");
		if (numPlayers > 0 && numDecks > 0) {
			startGame.classList.add("game-ready");
		}
	}, [numPlayers, numDecks]);

	const updateNumPlayers = (players) => {
		setNumPlayers(players);
	};

	const updateNumDecks = (decks) => {
		setNumDecks(decks);
	};

	const startGame = () => {
		if (numPlayers !== 0 && numDecks !== 0) {
			setGameReady(true);
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
	};

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
							<SelectPlayers numPlayers={updateNumPlayers} />
						</div>
						<div className="deck-selection">
							<h2>Select Number of Decks</h2>
							<SelectDecks numDecks={updateNumDecks} />
						</div>
					</div>
					<div className="start-game" onClick={startGame}>
						<h2>Create Game</h2>
					</div>
				</div>
				<Game players={numPlayers} decks={numDecks} gameReady={gameReady} />
			</div>
		</div>
	);
}

export default App;
