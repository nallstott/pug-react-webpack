import React, { useEffect, useState } from "react";

function PreviousCards(props) {
	// useEffect(() => {
	// 	props.playerCards.map((card) => {
	// 		playerFourDiv.classList.add("active");
	// 		cardToAdd = document.createElement("img");
	// 		cardToAdd.src = card.src;
	// 		const prevCardDiv = document.querySelector("previous-cards " + props.playerClass);
	// 		prevCardDiv.appendChild(cardToAdd);
	// 	});
	// }, [props.playerCards]);

	return (
		<div className={"previous-cards " + props.playerClass}>
			{props.playerCards.map((card) => {
				playerFourDiv.classList.add("active");
				cardToAdd = document.createElement("img");
				cardToAdd.src = card.src;
				// const prevCardDiv = document.querySelector("previous-cards " + props.playerClass);
				// prevCardDiv.appendChild(cardToAdd);
			})}
		</div>
	);
}
