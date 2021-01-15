import React from "react";

class Player extends React.Component {
	constructor(props) {
		super(props);
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
