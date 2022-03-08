
'use strict';

function tick() {
    var element = React.createElement(
        "h2",
        null,
        "Current Time: ",
        new Date().toLocaleTimeString()
    );
    ReactDOM.render(element, document.getElementById("tick"));
}

var element = React.createElement("div", { id: "tick" });

ReactDOM.render(element, document.getElementById("root"));

setInterval(tick, 1000);