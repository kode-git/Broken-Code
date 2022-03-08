
'use strict';

function tick(){
    const element = (
        <h2>Current Time: {new Date().toLocaleTimeString()}</h2>
    );
    ReactDOM.render(element, document.getElementById("tick"))
}

const element = (
    <div id="tick"></div>
);

ReactDOM.render(
    element,
    document.getElementById("root")
)

setInterval(tick, 1000)