import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import { halfDeck, oneDeck, oneAndHalfDeck, twoDeck } from "../Deck/Deck";
// import EndGame from "../endGame/endGame";

// function Game(props) {
// 	const [gameDeck, setGameDeck] = useState(null);
// 	const [playerOneCount, setPlayerOneCount] = useState(0);
// 	const [playerTwoCount, setPlayerTwoCount] = useState(0);
// 	const [playerThreeCount, setPlayerThreeCount] = useState(0);
// 	const [playerFourCount, setPlayerFourCount] = useState(0);
// 	const [activePlayer, setActivePlayer] = useState(0);
// 	const [results, setResults] = useState([]);
// 	const [winner, setWinner] = useState(0);
// 	const [gameLaunched, setGameLaunched] = useState(false);

// 	useEffect(() => {
// 		if (props.gameReady && gameLaunched === false) {
// 			setGameLaunched(true);
// 			nextTurn();
// 			if (props.players > 1) {
// 				setActivePlayer(2);
// 			}
// 		}
// 	}, [props.gameReady, gameLaunched]);

// 	const generateGameDeck = () => {
// 		if (gameDeck === null) {
// 			switch (props.decks) {
// 				case 0.5:
// 					setGameDeck([...halfDeck]);
// 					break;
// 				case 1:
// 					setGameDeck([...oneDeck]);
// 					break;
// 				case 1.5:
// 					setGameDeck([...oneAndHalfDeck]);
// 					break;
// 				case 2:
// 					setGameDeck([...twoDeck]);
// 					break;
// 			}
// 		} else if (gameDeck.length == 0) {
// 			document.querySelector(".draw-card").style.display = "none";
// 			document.querySelector(".reset-game").style.display = "inline-block";
// 		}
// 	};

// 	const determineWinner = () => {
// 		const highestScore = Math.max(playerOneCount, playerTwoCount, playerThreeCount, playerFourCount);
// 		setResults([playerOneCount, playerTwoCount, playerThreeCount, playerFourCount]);
// 		return highestScore;
// 	};

// 	const soloCard = () => {
// 		const currentCardDiv = document.querySelector(".current-card");
// 		const currentCardDivCards = currentCardDiv.querySelector(".cards");
// 		const currentCardDivCount = currentCardDiv.querySelector(".currentTurnCount");
// 		let card01 = gameDeck[0];
// 		setGameDeck((prev) => prev.splice(0, 1));
// 		let currentPlayer = activePlayer;
// 		let cardToAdd1;
// 		switch (currentPlayer) {
// 			case 1:
// 				const playerOneDiv = document.querySelector(".player.one");
// 				playerOneDiv.classList.add("active");
// 				cardToAdd1 = document.createElement("img");
// 				cardToAdd1.src = card01.src;
// 				playerOneDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
// 				setPlayerOneCount((prev) => prev + card01.value);
// 				break;
// 			case 2:
// 				const playerTwoDiv = document.querySelector(".player.two");
// 				playerTwoDiv.classList.add("active");
// 				cardToAdd1 = document.createElement("img");
// 				cardToAdd1.src = card01.src;
// 				playerTwoDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
// 				setPlayerTwoCount((prev) => prev + card01.value);
// 				break;
// 			case 3:
// 				const playerThreeDiv = document.querySelector(".player.three");
// 				playerThreeDiv.classList.add("active");
// 				cardToAdd1 = document.createElement("img");
// 				cardToAdd1.src = card01.src;
// 				playerThreeDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
// 				setPlayerThreeCount((prev) => prev + card01.value);
// 				break;
// 			case 4:
// 				const playerFourDiv = document.querySelector(".player.four");
// 				playerFourDiv.classList.add("active");
// 				cardToAdd1 = document.createElement("img");
// 				cardToAdd1.src = card01.src;
// 				playerFourDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
// 				setPlayerFourCount((prev) => prev + card01.value);
// 				break;
// 			default:
// 				break;
// 		}
// 		//Update current card
// 		currentCardDivCards.innerHTML = `<img src=${card01.src} />`;
// 		currentCardDivCount.innerHTML = `<h3>${card01.value}</h3>`;
// 	};

// 	const nextTurn = () => {
// 		generateGameDeck();
// 		const currentCardDiv = document.querySelector(".current-card");
// 		const currentCardDivCards = currentCardDiv.querySelector(".cards");
// 		const currentCardDivCount = currentCardDiv.querySelector(".currentTurnCount");
// 		if (gameDeck != null) {
// 			if (gameDeck.length == 1) {
// 				soloCard();
// 				return;
// 			}
// 			if (gameDeck.length == 0) {
// 				const winningScore = determineWinner();
// 				let winner;
// 				switch (winningScore) {
// 					case this.state.playerOneCount:
// 						winner = "Player 1";
// 						setWinner(1);
// 						break;
// 					case this.state.playerTwoCount:
// 						winner = "Player 2";
// 						setWinner(2);
// 						break;
// 					case this.state.playerThreeCount:
// 						winner = "Player 3";
// 						setWinner(3);
// 						break;
// 					case this.state.playerFourCount:
// 						winner = "Player 4";
// 						setWinner(4);
// 						break;
// 					default:
// 						winner = "mistake";
// 						break;
// 				}
// 				currentCardDiv.innerHTML = `<div class="result"><h3>The winner is<br>${winner}<br><br>Pushups: ${winningScore}</h3></div>`;
// 				return;
// 			}
// 		}
// 		//generate current cards and points
// 		let randomCard01Index = Math.floor(Math.random() * gameDeck.length);
// 		let randomCard02Index = Math.floor(Math.random() * gameDeck.length);
// 		while (randomCard01Index == randomCard02Index) {
// 			randomCard02Index = Math.floor(Math.random() * gameDeck.length);
// 		}
// 		let card01 = gameDeck[randomCard01Index];
// 		let card02 = gameDeck[randomCard02Index];
// 		setGameDeck((prev) => prev.splice(randomCard01Index, 1));
// 		setGameDeck((prev) => {
// 			let difference;
// 			randomCard01Index < randomCard02Index ? (difference = 1) : (difference = 2);
// 			prev.splice(randomCard02Index - difference, 1);
// 		});

// 		//Advance active player
// 		const players = document.querySelectorAll(".player");
// 		players.forEach((player) => player.classList.remove("active"));
// 		setActivePlayer((prev) => prev + 1);
// 		let currentPlayer = activePlayer;
// 		if (currentPlayer >= props.players) {
// 			setActivePlayer(1);
// 		}

// 		//Increment player scores
// 		let cardToAdd1, cardToAdd2;
// 		switch (currentPlayer) {
// 			case 1:
// 				const playerOneDiv = document.querySelector(".player.one");
// 				playerOneDiv.classList.add("active");
// 				cardToAdd1 = document.createElement("img");
// 				cardToAdd1.src = card01.src;
// 				cardToAdd2 = document.createElement("img");
// 				cardToAdd2.src = card02.src;
// 				playerOneDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
// 				playerOneDiv.querySelector(".previous-cards").appendChild(cardToAdd2);
// 				setPlayerOneCount((prev) => prev + card01.value + card02.value);
// 				break;
// 			case 2:
// 				const playerTwoDiv = document.querySelector(".player.two");
// 				playerTwoDiv.classList.add("active");
// 				cardToAdd1 = document.createElement("img");
// 				cardToAdd1.src = card01.src;
// 				cardToAdd2 = document.createElement("img");
// 				cardToAdd2.src = card02.src;
// 				playerTwoDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
// 				playerTwoDiv.querySelector(".previous-cards").appendChild(cardToAdd2);
// 				setPlayerTwoCount((prev) => prev + card01.value + card02.value);
// 				break;
// 			case 3:
// 				const playerThreeDiv = document.querySelector(".player.three");
// 				playerThreeDiv.classList.add("active");
// 				cardToAdd1 = document.createElement("img");
// 				cardToAdd1.src = card01.src;
// 				cardToAdd2 = document.createElement("img");
// 				cardToAdd2.src = card02.src;
// 				playerThreeDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
// 				playerThreeDiv.querySelector(".previous-cards").appendChild(cardToAdd2);
// 				setPlayerThreeCount((prev) => prev + card01.value + card02.value);
// 				break;
// 			case 4:
// 				const playerFourDiv = document.querySelector(".player.four");
// 				playerFourDiv.classList.add("active");
// 				cardToAdd1 = document.createElement("img");
// 				cardToAdd1.src = card01.src;
// 				cardToAdd2 = document.createElement("img");
// 				cardToAdd2.src = card02.src;
// 				playerFourDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
// 				playerFourDiv.querySelector(".previous-cards").appendChild(cardToAdd2);
// 				setPlayerFourCount((prev) => prev + card01.value + card02.value);
// 				break;
// 			default:
// 				break;
// 		}

// 		//Update current card
// 		currentCardDivCards.innerHTML = `<img src=${card01.src} /><img src=${card02.src} />`;
// 		currentCardDivCount.innerHTML = `<h3>Push-ups: ${card01.value + card02.value}</h3>`;
// 	};

// 	const refreshPage = () => {
// 		document.location.reload();
// 	};

// 	return (
// 		<div className="game">
// 			<div className="current-card">
// 				<div className="cards"></div>
// 				<div className="currentTurnCount"></div>
// 			</div>
// 			<div className="progress-game">
// 				<img src="src/images/card-images/Draw Btn.jpg" onLoad={nextTurn} onClick={nextTurn} className="draw-card" />
// 				<img src="src/images/card-images/new_game.jpg" onClick={refreshPage} className="reset-game" />
// 			</div>
// 			<Player playerClass="one" player="1" currentCount={playerOneCount} />
// 			<Player playerClass="two" player="2" currentCount={playerTwoCount} />
// 			<Player playerClass="three" player="3" currentCount={playerThreeCount} />
// 			<Player playerClass="four" player="4" currentCount={playerFourCount} />
// 		</div>
// 	);
// }

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerOneCount: 0,
			playerTwoCount: 0,
			playerThreeCount: 0,
			playerFourCount: 0,
			activePlayer: 0,
			gameDeck: null,
			results: {},
			playerOneCards: [],
			playerTwoCards: [],
			playerThreeCards: [],
			playerFourCards: [],
		};
		this.nextTurn = this.nextTurn.bind(this);
		this.generateGameDeck = this.generateGameDeck.bind(this);
		this.determineWinner = this.determineWinner.bind(this);
		this.soloCard = this.soloCard.bind(this);
	}

	generateGameDeck() {
		if (this.state.gameDeck == null) {
			switch (this.props.decks) {
				case 0.5:
					this.setState({ gameDeck: [...halfDeck] }, function () {
						console.log("game deck is half deck");
					});
					break;
				case 1:
					this.setState({ gameDeck: [...oneDeck] }, function () {
						console.log("game deck is one deck");
					});
					break;
				case 1.5:
					this.setState({ gameDeck: [...oneAndHalfDeck] }, function () {
						console.log("game deck is one and a half");
					});
					break;
				case 2:
					this.setState({ gameDeck: [...twoDeck] }, function () {
						console.log("game deck is two decks");
					});
					break;
				default:
					console.log("there is an issue with this.props.deck in this switch statement");
					break;
			}
		} else if (this.state.gameDeck.length == 0) {
			document.querySelector(".draw-card").style.display = "none";
			document.querySelector(".reset-game").style.display = "inline-block";
			// console.log("game over");
		}
	}

	determineWinner() {
		const highestScore = Math.max(this.state.playerOneCount, this.state.playerTwoCount, this.state.playerThreeCount, this.state.playerFourCount);
		const results = [this.state.playerOneCount, this.state.playerTwoCount, this.state.playerThreeCount, this.state.playerFourCount];
		// const endGameDiv = document.querySelector(".end-game");
		// for (let i = 0; i < this.props.players; i++) {
		// 	const playerDiv = document.createElement("div");
		// 	playerDiv.classList = "player-end-game-div";
		// 	const winner = document.createElement("h5");
		// 	winner.innerHTML = "Winner";
		// 	const player = document.createElement("div");
		// 	player.innerHTML = `<h4>Player ${i + 1}<br>${results[i]}</h4>`;
		// 	endGameDiv.appendChild(playerDiv);
		// 	playerDiv.appendChild(winner);
		// 	playerDiv.appendChild(player);
		// }]
		// endGameDiv.style.display = "flex";
		// endGameDiv.style.opacity = 1;
		return highestScore;
	}

	soloCard() {
		const currentCardDiv = document.querySelector(".current-card");
		const currentCardDivCards = currentCardDiv.querySelector(".cards");
		const currentCardDivCount = currentCardDiv.querySelector(".currentTurnCount");
		let card01 = this.state.gameDeck[0];
		this.setState((prevState) => {
			prevState.gameDeck.splice(0, 1);
		});
		let currentPlayer = this.state.activePlayer;
		let cardToAdd1;
		switch (currentPlayer) {
			case 1:
				const playerOneDiv = document.querySelector(".player.one");
				playerOneDiv.classList.add("active");
				cardToAdd1 = document.createElement("img");
				cardToAdd1.src = card01.src;
				playerOneDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
				this.setState({ playerOneCount: this.state.playerOneCount + card01.value });
				break;
			case 2:
				const playerTwoDiv = document.querySelector(".player.two");
				playerTwoDiv.classList.add("active");
				cardToAdd1 = document.createElement("img");
				cardToAdd1.src = card01.src;
				playerTwoDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
				this.setState({ playerTwoCount: this.state.playerTwoCount + card01.value });
				break;
			case 3:
				const playerThreeDiv = document.querySelector(".player.three");
				playerThreeDiv.classList.add("active");
				cardToAdd1 = document.createElement("img");
				cardToAdd1.src = card01.src;
				playerThreeDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
				this.setState({ playerThreeCount: this.state.playerThreeCount + card01.value });
				break;
			case 4:
				const playerFourDiv = document.querySelector(".player.four");
				playerFourDiv.classList.add("active");
				cardToAdd1 = document.createElement("img");
				cardToAdd1.src = card01.src;
				playerFourDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
				this.setState({ playerFourCount: this.state.playerFourCount + card01.value });
				break;
			default:
				break;
		}

		//Update current card
		currentCardDivCards.innerHTML = `<img src=${card01.src} />`;
		currentCardDivCount.innerHTML = `<h3>${card01.value}</h3>`;
	}

	nextTurn() {
		this.generateGameDeck();
		const currentCardDiv = document.querySelector(".current-card");
		const currentCardDivCards = currentCardDiv.querySelector(".cards");
		const currentCardDivCount = currentCardDiv.querySelector(".currentTurnCount");
		if (this.state.gameDeck != null) {
			if (this.state.gameDeck.length == 1) {
				this.soloCard();
				return;
			}
			if (this.state.gameDeck.length == 0) {
				const winningScore = this.determineWinner();
				let winner;
				// const endGameDivH5 = document.querySelectorAll(".end-game h5");
				switch (winningScore) {
					case this.state.playerOneCount:
						winner = "Player 1";
						this.setState({ winner: 1 });
						break;
					case this.state.playerTwoCount:
						winner = "Player 2";
						this.setState({ winner: 2 });
						break;
					case this.state.playerThreeCount:
						winner = "Player 3";

						this.setState({ winner: 3 });
						break;
					case this.state.playerFourCount:
						winner = "Player 4";
						this.setState({ winner: 4 });
						break;
					default:
						winner = "mistake";
						break;
				}
				currentCardDiv.innerHTML = `<div class="result"><h3>The winner is<br>${winner}<br><br>Pushups: ${winningScore}</h3></div>`;
				return;
			}
		}
		//generate current cards and points
		let randomCard01Index = Math.floor(Math.random() * this.state.gameDeck.length);
		let randomCard02Index = Math.floor(Math.random() * this.state.gameDeck.length);
		while (randomCard01Index == randomCard02Index) {
			randomCard02Index = Math.floor(Math.random() * this.state.gameDeck.length);
		}
		let card01 = this.state.gameDeck[randomCard01Index];
		let card02 = this.state.gameDeck[randomCard02Index];
		this.setState((prevState) => {
			prevState.gameDeck.splice(randomCard01Index, 1);
		});
		this.setState((prevState) => {
			let difference;
			if (randomCard01Index < randomCard02Index) {
				difference = 1;
			} else {
				difference = 0;
			}
			prevState.gameDeck.splice(randomCard02Index - difference, 1);
		});
		// console.log(this.state.gameDeck.length);

		//Advance active player
		const players = document.querySelectorAll(".player");
		players.forEach((player) => player.classList.remove("active"));
		this.setState({ activePlayer: this.state.activePlayer + 1 });
		let currentPlayer = this.state.activePlayer;
		if (currentPlayer >= this.props.players) {
			this.setState({ activePlayer: 1 });
		}

		//Increment player scores
		let cardToAdd1, cardToAdd2;
		switch (currentPlayer) {
			case 1:
				const playerOneDiv = document.querySelector(".player.one");
				playerOneDiv.classList.add("active");
				cardToAdd1 = document.createElement("img");
				cardToAdd1.src = card01.src;
				cardToAdd2 = document.createElement("img");
				cardToAdd2.src = card02.src;
				playerOneDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
				playerOneDiv.querySelector(".previous-cards").appendChild(cardToAdd2);
				this.setState({ playerOneCount: this.state.playerOneCount + card01.value + card02.value });
				break;
			case 2:
				const playerTwoDiv = document.querySelector(".player.two");
				playerTwoDiv.classList.add("active");
				cardToAdd1 = document.createElement("img");
				cardToAdd1.src = card01.src;
				cardToAdd2 = document.createElement("img");
				cardToAdd2.src = card02.src;
				playerTwoDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
				playerTwoDiv.querySelector(".previous-cards").appendChild(cardToAdd2);
				this.setState({ playerTwoCount: this.state.playerTwoCount + card01.value + card02.value });
				break;
			case 3:
				const playerThreeDiv = document.querySelector(".player.three");
				playerThreeDiv.classList.add("active");
				cardToAdd1 = document.createElement("img");
				cardToAdd1.src = card01.src;
				cardToAdd2 = document.createElement("img");
				cardToAdd2.src = card02.src;
				playerThreeDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
				playerThreeDiv.querySelector(".previous-cards").appendChild(cardToAdd2);
				this.setState({ playerThreeCount: this.state.playerThreeCount + card01.value + card02.value });
				break;
			case 4:
				const playerFourDiv = document.querySelector(".player.four");
				playerFourDiv.classList.add("active");
				cardToAdd1 = document.createElement("img");
				cardToAdd1.src = card01.src;
				cardToAdd2 = document.createElement("img");
				cardToAdd2.src = card02.src;
				playerFourDiv.querySelector(".previous-cards").appendChild(cardToAdd1);
				playerFourDiv.querySelector(".previous-cards").appendChild(cardToAdd2);
				this.setState({ playerFourCount: this.state.playerFourCount + card01.value + card02.value });
				break;
			default:
				// continue;
				break;
		}

		//Update current card
		currentCardDivCards.innerHTML = `<img src=${card01.src} /><img src=${card02.src} />`;
		currentCardDivCount.innerHTML = `<h3>Push-ups: ${card01.value + card02.value}</h3>`;
	}

	refreshPage() {
		document.location.reload();
	}

	componentDidUpdate() {
		setTimeout(() => {
			if (this.props.gameReady && !this.state.gameLaunched) {
				this.setState({ gameLaunched: true });
				this.nextTurn();
				if (this.props.players > 1) {
					this.setState({ activePlayer: 2 });
				}
			}
		}, 500);
	}

	render() {
		return (
			<div className="game">
				<div className="current-card">
					<div className="cards"></div>
					<div className="currentTurnCount"></div>
				</div>
				<div className="progress-game">
					<img src="src/images/card-images/Draw Btn.jpg" onLoad={this.nextTurn} onClick={this.nextTurn} className="draw-card" />
					<img src="src/images/card-images/new_game.jpg" onClick={this.refreshPage} className="reset-game" />
				</div>
				<Player playerClass="one" player="1" currentCount={this.state.playerOneCount} playerCards={this.state.playerOneCards} />
				<Player playerClass="two" player="2" currentCount={this.state.playerTwoCount} playerCards={this.state.playerTwoCards} />
				<Player playerClass="three" player="3" currentCount={this.state.playerThreeCount} playerCards={this.state.playerThreeCards} />
				<Player playerClass="four" player="4" currentCount={this.state.playerFourCount} playerCards={this.state.playerFourCards} />
				{/* <div className="end-game"></div> */}
				{/* <EndGame players={this.state.players} results={this.state.results} /> */}
			</div>
		);
	}
}

export default Game;
