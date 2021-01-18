import React from "react";

class Player extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		const playerCardDiv = document.querySelectorAll(".previous-cards");
		playerCardDiv.forEach((div) => {
			function scrollToBottom() {
				div.scrollTop = div.scrollHeight;
			}
			// Create an observer and pass it a callback.
			var observer = new MutationObserver(scrollToBottom);
			// Tell it to look for new children that will change the height.
			var config = { childList: true };
			observer.observe(div, config);
		});
	}

	render() {
		return (
			<div className={"player " + this.props.playerClass}>
				<h3>
					Player {this.props.player} - {this.props.currentCount}
				</h3>
				<div className="previous-cards"></div>
			</div>
		);
	}
}

export default Player;
