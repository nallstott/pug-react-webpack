import "./scss/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

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
